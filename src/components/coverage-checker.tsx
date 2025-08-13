'use client'

import { useState, useEffect } from 'react'
import { ComponentMeta, CoverageData } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Download, Upload, Copy, RotateCcw } from 'lucide-react'
import { useCoverage } from '@/lib/coverage'

interface CoverageCheckerProps {
  component: ComponentMeta
}

export function CoverageChecker({ component }: CoverageCheckerProps) {
  const { coverage, updateCoverage, exportCoverage, importCoverage, resetCoverage } = useCoverage(component.slug)
  const [completionScore, setCompletionScore] = useState(0)

  const categories = [
    { key: 'content', label: 'Content', items: component.coverage?.content || [] },
    { key: 'visual', label: 'Visual', items: component.coverage?.visual || [] },
    { key: 'behavior', label: 'Behavior', items: component.coverage?.behavior || [] },
    { key: 'states', label: 'States', items: component.coverage?.states || [] },
    { key: 'accessibility', label: 'Accessibility', items: component.coverage?.accessibility || [] },
  ]

  useEffect(() => {
    const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0)
    const checkedItems = categories.reduce((sum, cat) => {
      return sum + cat.items.filter(item => coverage[cat.key]?.[item.id]).length
    }, 0)
    
    setCompletionScore(totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0)
  }, [coverage, categories])

  const handleItemToggle = (category: string, itemId: string, checked: boolean) => {
    updateCoverage(category, itemId, checked)
  }

  const handleExport = () => {
    const data = exportCoverage()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${component.slug}-coverage.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string)
          importCoverage(data)
        } catch (error) {
          console.error('Failed to import coverage data:', error)
        }
      }
      reader.readAsText(file)
    }
  }

  const copySchema = () => {
    const schema = {
      component: component.name,
      slug: component.slug,
      coverage: coverage,
      completionScore: completionScore,
      timestamp: new Date().toISOString(),
    }
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2))
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Coverage Checker</h2>
        <p className="text-muted-foreground mb-6">
          Track which props, variants, and states your implementation supports. 
          Get a completeness score and identify missing features.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Score and actions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-3">
                  Implementation Coverage
                  <Badge variant={completionScore >= 80 ? 'default' : completionScore >= 60 ? 'secondary' : 'destructive'}>
                    {completionScore}%
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Track your component implementation progress
                </CardDescription>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <label>
                    <Upload className="h-4 w-4 mr-2" />
                    Import
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImport}
                      className="hidden"
                    />
                  </label>
                </Button>
                <Button variant="outline" size="sm" onClick={copySchema}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Schema
                </Button>
                <Button variant="outline" size="sm" onClick={resetCoverage}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={completionScore} className="h-2" />
          </CardContent>
        </Card>

        {/* Coverage categories */}
        <div className="grid gap-4">
          {categories.map((category) => {
            const checkedCount = category.items.filter(item => coverage[category.key]?.[item.id]).length
            const totalCount = category.items.length
            const categoryScore = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0

            return (
              <Card key={category.key}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{category.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {checkedCount}/{totalCount}
                      </span>
                      <Badge variant="outline">
                        {categoryScore}%
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div key={item.id} className="coverage-item">
                        <Checkbox
                          id={`${category.key}-${item.id}`}
                          checked={coverage[category.key]?.[item.id] || false}
                          onCheckedChange={(checked) => 
                            handleItemToggle(category.key, item.id, checked as boolean)
                          }
                        />
                        <div className="flex-1">
                          <label 
                            htmlFor={`${category.key}-${item.id}`}
                            className="text-sm font-medium cursor-pointer"
                          >
                            {item.name}
                          </label>
                          {item.description && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {item.priority && (
                          <Badge 
                            variant={item.priority === 'high' ? 'destructive' : 
                                   item.priority === 'medium' ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {item.priority}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Suggestions */}
        {completionScore < 100 && (
          <Card>
            <CardHeader>
              <CardTitle>Suggested Improvements</CardTitle>
              <CardDescription>
                Consider implementing these missing features to improve your component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => {
                  const missingItems = category.items.filter(item => !coverage[category.key]?.[item.id])
                  const highPriorityMissing = missingItems.filter(item => item.priority === 'high')
                  
                  return highPriorityMissing.map((item) => (
                    <div key={`${category.key}-${item.id}`} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                      <Badge variant="destructive" className="text-xs">High Priority</Badge>
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">({category.label})</span>
                    </div>
                  ))
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}