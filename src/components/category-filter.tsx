'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ComponentCategory } from '@/lib/types'

const categories: { value: ComponentCategory | 'all'; label: string; count: number }[] = [
  { value: 'all', label: 'All', count: 24 },
  { value: 'inputs', label: 'Inputs', count: 6 },
  { value: 'actions', label: 'Actions', count: 4 },
  { value: 'feedback', label: 'Feedback', count: 5 },
  { value: 'navigation', label: 'Navigation', count: 4 },
  { value: 'data-display', label: 'Data Display', count: 3 },
  { value: 'overlays', label: 'Overlays', count: 2 },
]

interface CategoryFilterProps {
  selectedCategory?: ComponentCategory | 'all'
  onCategoryChange?: (category: ComponentCategory | 'all') => void
}

export function CategoryFilter({ 
  selectedCategory = 'all', 
  onCategoryChange 
}: CategoryFilterProps) {
  const [selected, setSelected] = useState<ComponentCategory | 'all'>(selectedCategory)

  const handleCategoryChange = (category: ComponentCategory | 'all') => {
    setSelected(category)
    onCategoryChange?.(category)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selected === category.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleCategoryChange(category.value)}
          className="flex items-center gap-2"
        >
          {category.label}
          <Badge 
            variant="secondary" 
            className="text-xs px-1.5 py-0.5 min-w-[20px] justify-center"
          >
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  )
}