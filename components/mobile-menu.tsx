'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground hover:text-primary"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-background/98 backdrop-blur-lg border-t border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center space-y-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xl px-12 py-8 shimmer w-full max-w-sm shadow-[0_0_40px_rgba(255,122,47,0.5)]"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
