'use client'

import { useState, useEffect } from 'react'
import { CoverageData } from './types'

export function useCoverage(componentSlug: string) {
  const [coverage, setCoverage] = useState<CoverageData>({})

  // Load coverage from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(`coverage-${componentSlug}`)
    if (stored) {
      try {
        setCoverage(JSON.parse(stored))
      } catch (error) {
        console.error('Failed to parse stored coverage data:', error)
      }
    }
  }, [componentSlug])

  // Save coverage to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(`coverage-${componentSlug}`, JSON.stringify(coverage))
  }, [coverage, componentSlug])

  const updateCoverage = (category: string, itemId: string, checked: boolean) => {
    setCoverage(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [itemId]: checked
      }
    }))
  }

  const exportCoverage = () => {
    return {
      component: componentSlug,
      coverage,
      timestamp: new Date().toISOString()
    }
  }

  const importCoverage = (data: any) => {
    if (data.coverage && typeof data.coverage === 'object') {
      setCoverage(data.coverage)
    }
  }

  const resetCoverage = () => {
    setCoverage({})
  }

  return {
    coverage,
    updateCoverage,
    exportCoverage,
    importCoverage,
    resetCoverage
  }
}