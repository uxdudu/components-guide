'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useSearch } from '@/lib/search'
import { SearchResults } from './search-results'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { results, search, isLoading } = useSearch()

  useEffect(() => {
    if (query.trim()) {
      search(query)
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [query, search])

  const handleClear = () => {
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search components, props, or aliases..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && (
        <SearchResults
          results={results}
          isLoading={isLoading}
          query={query}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}