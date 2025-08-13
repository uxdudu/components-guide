import { ComponentMeta } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ComponentOverviewProps {
  component: ComponentMeta
}

export function ComponentOverview({ component }: ComponentOverviewProps) {
  const statusColors = {
    stable: 'bg-green-100 text-green-800 border-green-200',
    draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    deprecated: 'bg-red-100 text-red-800 border-red-200',
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">{component.name}</h1>
          <Badge className={statusColors[component.status]}>
            {component.status}
          </Badge>
          <Badge variant="outline">
            {component.complexity}
          </Badge>
        </div>
        
        <p className="text-xl text-muted-foreground mb-6">
          {component.description}
        </p>

        {component.aliases && component.aliases.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Also called:
            </h3>
            <div className="flex flex-wrap gap-2">
              {component.aliases.map((alias) => (
                <Badge key={alias} variant="secondary">
                  {alias}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {component.overview.purpose}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Platform Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {component.platform.map((platform) => (
                <Badge key={platform} variant="outline">
                  {platform}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-green-600">When to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {component.overview.whenToUse.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-red-600">When Not to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {component.overview.whenNotToUse.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}