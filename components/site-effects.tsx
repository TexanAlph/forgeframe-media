"use client"

import { useEffect } from "react"

export function SiteEffects() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const cleanups: Array<() => void> = []

    // --- scroll progress bar (all devices) ---
    const bar = document.getElementById("ff-progress")
    const onScroll = () => {
      const h = document.documentElement
      if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, h.scrollTop / (h.scrollHeight - h.clientHeight || 1)))})`
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    cleanups.push(() => window.removeEventListener("scroll", onScroll))

    // --- trailing glow cursor (desktop) ---
    const cursor = document.getElementById("ff-cursor")
    if (fine && cursor) {
      let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy, raf = 0
      const onC = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
      window.addEventListener("mousemove", onC, { passive: true })
      const loop = () => { cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18; cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; raf = requestAnimationFrame(loop) }
      loop()
      cleanups.push(() => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onC) })
    }

    // --- cursor spotlight (desktop) ---
    const spot = document.getElementById("ff-spot")
    if (fine && spot) {
      const onMove = (e: MouseEvent) => { spot.style.setProperty("--mx", e.clientX + "px"); spot.style.setProperty("--my", e.clientY + "px") }
      window.addEventListener("mousemove", onMove, { passive: true })
      cleanups.push(() => window.removeEventListener("mousemove", onMove))
    }

    // --- WebGL flowing gradient hero (mouse AND touch reactive) ---
    const glCanvas = document.getElementById("ff-gl") as HTMLCanvasElement | null
    if (glCanvas) {
      try {
        const gl = glCanvas.getContext("webgl", { antialias: false, alpha: true }) as WebGLRenderingContext | null
        if (!gl) throw new Error("no webgl")
        const vs = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}"
        const fs =
          "precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;" +
          "void main(){vec2 uv=gl_FragCoord.xy/r;vec2 q=uv*3.0+(m/r-0.5)*1.4;float tt=t*0.15;" +
          "float f=sin(q.x*1.5+tt)*0.5+sin(q.y*1.7-tt*1.2)*0.5+sin((q.x+q.y)*1.1+tt*0.7)*0.5;f=f*0.5+0.5;" +
          "vec3 dark=vec3(0.07,0.07,0.09),orange=vec3(1.0,0.48,0.18),red=vec3(0.85,0.18,0.12);" +
          "vec3 c=mix(dark,orange,smoothstep(0.5,0.96,f));c=mix(c,red,smoothstep(0.72,1.0,f)*0.45);" +
          "c*=1.0-distance(uv,vec2(0.5))*0.55;gl_FragColor=vec4(c,1.0);}"
        const mk = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error("shader"); return s }
        const prog = gl.createProgram()!
        gl.attachShader(prog, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(prog)
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error("link")
        gl.useProgram(prog)
        const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
        const loc = gl.getAttribLocation(prog, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
        const uR = gl.getUniformLocation(prog, "r"), uT = gl.getUniformLocation(prog, "t"), uM = gl.getUniformLocation(prog, "m")
        const dpr = Math.min(1.5, window.devicePixelRatio || 1)
        const mouse = { x: 0, y: 0 }
        const resize = () => { glCanvas.width = glCanvas.clientWidth * dpr; glCanvas.height = glCanvas.clientHeight * dpr; gl.viewport(0, 0, glCanvas.width, glCanvas.height) }
        resize(); window.addEventListener("resize", resize)
        const setFrom = (cxp: number, cyp: number) => { const rc = glCanvas.getBoundingClientRect(); mouse.x = (cxp - rc.left) * dpr; mouse.y = (rc.height - (cyp - rc.top)) * dpr }
        const gm = (e: MouseEvent) => setFrom(e.clientX, e.clientY)
        const gt = (e: TouchEvent) => { const t = e.touches[0]; if (t) setFrom(t.clientX, t.clientY) }
        window.addEventListener("mousemove", gm, { passive: true })
        window.addEventListener("touchmove", gt, { passive: true })
        const start = performance.now(); let raf = 0
        const loop = () => { gl.uniform2f(uR, glCanvas.width, glCanvas.height); gl.uniform1f(uT, (performance.now() - start) / 1000); gl.uniform2f(uM, mouse.x, mouse.y); gl.drawArrays(gl.TRIANGLES, 0, 3); raf = requestAnimationFrame(loop) }
        loop()
        glCanvas.style.opacity = "1"
        cleanups.push(() => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", gm); window.removeEventListener("touchmove", gt) })
      } catch { glCanvas.style.display = "none" }
    }

    // --- particle constellation (mouse AND touch reactive) ---
    const canvas = document.getElementById("ff-particles") as HTMLCanvasElement | null
    const pctx = canvas?.getContext("2d") || null
    if (canvas && pctx) {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      let w = 0, h = 0
      let parts: Array<{ x: number; y: number; vx: number; vy: number }> = []
      const mouse = { x: -9999, y: -9999 }
      const resize = () => {
        w = canvas.clientWidth; h = canvas.clientHeight; canvas.width = w * dpr; canvas.height = h * dpr; pctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        const count = Math.max(22, Math.min(80, Math.floor((w * h) / 14000)))
        parts = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.45, vy: (Math.random() - 0.5) * 0.45 }))
      }
      resize(); window.addEventListener("resize", resize)
      const setM = (cxp: number, cyp: number) => { const r = canvas.getBoundingClientRect(); mouse.x = cxp - r.left; mouse.y = cyp - r.top }
      const onMouse = (e: MouseEvent) => setM(e.clientX, e.clientY)
      const onTouch = (e: TouchEvent) => { const t = e.touches[0]; if (t) setM(t.clientX, t.clientY) }
      const onOut = () => { mouse.x = -9999; mouse.y = -9999 }
      window.addEventListener("mousemove", onMouse, { passive: true })
      window.addEventListener("touchmove", onTouch, { passive: true })
      window.addEventListener("mouseout", onOut)
      let raf = 0
      const draw = () => {
        pctx.clearRect(0, 0, w, h)
        for (const p of parts) {
          p.x += p.vx; p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy)
          if (d < 130) { p.x += (dx / d) * 1.6; p.y += (dy / d) * 1.6 }
          pctx.beginPath(); pctx.arc(p.x, p.y, 1.7, 0, 7); pctx.fillStyle = "rgba(255,150,90,.7)"; pctx.fill()
        }
        for (let i = 0; i < parts.length; i++) {
          for (let j = i + 1; j < parts.length; j++) {
            const a = parts[i], bb = parts[j], dx = a.x - bb.x, dy = a.y - bb.y, d = Math.hypot(dx, dy)
            if (d < 130) { pctx.beginPath(); pctx.moveTo(a.x, a.y); pctx.lineTo(bb.x, bb.y); pctx.strokeStyle = `rgba(255,140,80,${0.16 * (1 - d / 130)})`; pctx.lineWidth = 1; pctx.stroke() }
          }
          const mdx = parts[i].x - mouse.x, mdy = parts[i].y - mouse.y, md = Math.hypot(mdx, mdy)
          if (md < 170) { pctx.beginPath(); pctx.moveTo(parts[i].x, parts[i].y); pctx.lineTo(mouse.x, mouse.y); pctx.strokeStyle = `rgba(255,190,130,${0.3 * (1 - md / 170)})`; pctx.lineWidth = 1; pctx.stroke() }
        }
        raf = requestAnimationFrame(draw)
      }
      draw()
      cleanups.push(() => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMouse); window.removeEventListener("touchmove", onTouch); window.removeEventListener("mouseout", onOut) })
    }

    // --- headline words dodge the cursor (desktop) ---
    if (fine) {
      const words = Array.from(document.querySelectorAll<HTMLElement>("[data-word]"))
      words.forEach((w) => { w.style.transition = "transform .3s cubic-bezier(.2,.7,.3,1)" })
      const onW = (e: MouseEvent) => {
        for (const w of words) {
          const r = w.getBoundingClientRect()
          const dx = r.left + r.width / 2 - e.clientX, dy = r.top + r.height / 2 - e.clientY, d = Math.hypot(dx, dy)
          if (d < 190) { const f = (1 - d / 190) * 24; w.style.transform = `translate(${(dx / d) * f}px,${(dy / d) * f}px)` } else w.style.transform = ""
        }
      }
      window.addEventListener("mousemove", onW, { passive: true })
      cleanups.push(() => window.removeEventListener("mousemove", onW))
    }

    // --- magnetic buttons (desktop) ---
    if (fine) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const onM = (e: MouseEvent) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.3}px,${(e.clientY - (r.top + r.height / 2)) * 0.45}px)` }
        const onL = () => { el.style.transition = "transform .35s cubic-bezier(.2,.7,.3,1)"; el.style.transform = "" }
        const onE = () => { el.style.transition = "transform .08s" }
        el.addEventListener("mouseenter", onE); el.addEventListener("mousemove", onM); el.addEventListener("mouseleave", onL)
        cleanups.push(() => { el.removeEventListener("mouseenter", onE); el.removeEventListener("mousemove", onM); el.removeEventListener("mouseleave", onL) })
      })
    }

    // --- 3D tilt + holographic glare (desktop) ---
    if (fine) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        const onTilt = (e: MouseEvent) => {
          const r = el.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5
          el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-6px)`
          el.style.setProperty("--gx", (px + 0.5) * 100 + "%"); el.style.setProperty("--gy", (py + 0.5) * 100 + "%")
        }
        const onLeave = () => { el.style.transition = "transform .45s cubic-bezier(.2,.7,.3,1)"; el.style.transform = "" }
        const onEnter = () => { el.style.transition = "transform .08s" }
        el.addEventListener("mouseenter", onEnter); el.addEventListener("mousemove", onTilt); el.addEventListener("mouseleave", onLeave)
        cleanups.push(() => { el.removeEventListener("mouseenter", onEnter); el.removeEventListener("mousemove", onTilt); el.removeEventListener("mouseleave", onLeave) })
      })
    }

    // ========= MOBILE-FOCUSED =========
    if (!fine) {
      // tap → ripple burst
      const onTap = (e: TouchEvent) => {
        const t = e.touches[0]; if (!t) return
        const d = document.createElement("div"); d.className = "ff-ripple"; d.style.left = t.clientX + "px"; d.style.top = t.clientY + "px"
        document.body.appendChild(d); d.addEventListener("animationend", () => d.remove())
      }
      window.addEventListener("touchstart", onTap, { passive: true })
      cleanups.push(() => window.removeEventListener("touchstart", onTap))

      // cards auto-sweep a holographic glare as they scroll into view
      const sw = new IntersectionObserver((ents) => {
        ents.forEach((en) => { if (en.isIntersecting) { (en.target as HTMLElement).classList.add("ff-swept"); sw.unobserve(en.target) } })
      }, { threshold: 0.45 })
      document.querySelectorAll("[data-tilt]").forEach((el) => sw.observe(el))
      cleanups.push(() => sw.disconnect())
    }

    // --- count-up stats (all devices) ---
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"))
    if (counters.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          const el = en.target as HTMLElement; io.unobserve(el)
          const target = parseFloat(el.dataset.count || "0"), suffix = el.dataset.suffix || "", dur = 1400, start = performance.now()
          const step = (now: number) => { const t = Math.min(1, (now - start) / dur); el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))).toLocaleString() + suffix; if (t < 1) requestAnimationFrame(step) }
          requestAnimationFrame(step)
        })
      }, { threshold: 0.4 })
      counters.forEach((c) => io.observe(c))
      cleanups.push(() => io.disconnect())
    }

    return () => cleanups.forEach((c) => c())
  }, [])

  return (
    <>
      <div id="ff-cursor" className="ff-cursor" aria-hidden="true" />
      <div id="ff-spot" className="ff-spotlight" aria-hidden="true" />
      <div className="ff-progress-wrap" aria-hidden="true"><div id="ff-progress" className="ff-progress" /></div>
      <div className="ff-grain" aria-hidden="true" />
    </>
  )
}
