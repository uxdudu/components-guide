import { ComponentMeta } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ComponentAnatomyProps {
  component: ComponentMeta
}

export function ComponentAnatomy({ component }: ComponentAnatomyProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Anatomy</h2>
        <p className="text-muted-foreground">
          Understanding the structure and parts of the {component.name} component.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Visual diagram placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Component Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="anatomy-diagram">
              <div className="relative p-8 bg-muted/30 rounded-lg border-2 border-dashed">
                <div className="text-center text-muted-foreground">
                  Interactive anatomy diagram would go here
                </div>
                {/* This would be replaced with an actual interactive diagram */}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parts breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Component Parts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {component.anatomy.parts.map((part, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">{part.name}</h4>
                      <Badge variant={part.required ? 'default' : 'secondary'}>
                        {part.required ? 'Required' : 'Optional'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {part.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}