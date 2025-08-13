'use client'

import Link from 'next/link'
import { ComponentMeta } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Loader2 } from 'lucide-react'

interface SearchResultsProps {
  results: ComponentMeta[]
  isLoading: boolean
  query: string
  onClose: () => void
}

export function SearchResults({ results, isLoading, query, onClose }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-popover border rounded-lg shadow-lg p-4 z-50">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Searching...</span>
        </div>
      </div>
    )
  }

  if (!results.length) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-popover border rounded-lg shadow-lg p-4 z-50">
        <p className="text-muted-foreground text-center">
          No results found for "{query}"
        </p>
      </div>
    )
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-popover border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
      <div className="p-2">
        {results.map((component) => (
          <Link
            key={component.slug}
            href={`/components/${component.slug}`}
            onClick={onClose}
            className="search-result block"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{component.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {component.description}
                </p>
                {component.aliases && component.aliases.length > 0 && (
                  <div className="flex gap-1 mt-1">
                    {component.aliases.map((alias) => (
                      <Badge key={alias} variant="secondary" className="text-xs">
                        {alias}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <Badge variant="outline" className="text-xs">
                {component.category}
              </Badge>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}