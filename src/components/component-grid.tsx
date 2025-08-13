'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllComponents } from '@/lib/components'
import { ComponentMeta } from '@/lib/types'

const statusColors = {
  stable: 'bg-green-100 text-green-800 border-green-200',
  draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  deprecated: 'bg-red-100 text-red-800 border-red-200',
}

export function ComponentGrid() {
  const components = getAllComponents()

  const groupedComponents = components.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = []
    }
    acc[component.category].push(component)
    return acc
  }, {} as Record<string, ComponentMeta[]>)

  const categoryLabels = {
    inputs: 'Input Components',
    actions: 'Action Components',
    feedback: 'Feedback Components',
    navigation: 'Navigation Components',
    'data-display': 'Data Display Components',
    overlays: 'Overlay Components',
  }

  return (
    <div className="space-y-12">
      {Object.entries(groupedComponents).map(([category, categoryComponents]) => (
        <section key={category}>
          <h2 className="text-2xl font-bold mb-6">
            {categoryLabels[category as keyof typeof categoryLabels] || category}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryComponents.map((component) => (
              <Link key={component.slug} href={`/components/${component.slug}`}>
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{component.name}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className={statusColors[component.status]}
                      >
                        {component.status}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {component.aliases && component.aliases.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            Also called:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {component.aliases.map((alias) => (
                              <Badge key={alias} variant="secondary" className="text-xs">
                                {alias}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{component.complexity} complexity</span>
                        <span>{component.platform.join(', ')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}