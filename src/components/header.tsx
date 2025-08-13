'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Github, BookOpen } from 'lucide-react'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-lg">UI Docs</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === '/' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Components
              </Link>
              <Link 
                href="/guidelines" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === '/guidelines' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Guidelines
              </Link>
              <Link 
                href="/tokens" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === '/tokens' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Design Tokens
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}