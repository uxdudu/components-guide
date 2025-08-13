'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface StickyNavProps {
  sections: { id: string; title: string }[]
}

export function StickyNav({ sections }: StickyNavProps) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="sticky-nav">
      <div className="bg-card border rounded-lg p-4">
        <h3 className="font-semibold text-sm mb-3">On this page</h3>
        <ul className="space-y-1">
          {sections.map(({ id, title }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={cn(
                  'block w-full text-left text-sm py-1.5 px-2 rounded transition-colors',
                  activeSection === id
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}