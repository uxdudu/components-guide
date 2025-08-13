'use client'

import { useState, useCallback } from 'react'
import Fuse from 'fuse.js'
import { ComponentMeta } from './types'
import { getAllComponents } from './components'

const searchOptions = {
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'aliases', weight: 0.2 },
    { name: 'props.name', weight: 0.1 }
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true
}

export function useSearch() {
  const [results, setResults] = useState<ComponentMeta[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate async search (in real app, this might be an API call)
    await new Promise(resolve => setTimeout(resolve, 100))
    
    const components = getAllComponents()
    const fuse = new Fuse(components, searchOptions)
    const searchResults = fuse.search(query)
    
    setResults(searchResults.map(result => result.item))
    setIsLoading(false)
  }, [])

  return { results, search, isLoading }
}