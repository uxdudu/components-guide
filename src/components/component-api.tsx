import { ComponentMeta } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ComponentAPIProps {
  component: ComponentMeta
}

export function ComponentAPI({ component }: ComponentAPIProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Props & API</h2>
        <p className="text-muted-foreground">
          Complete reference of all props and their usage for the {component.name} component.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Name</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Required</th>
                  <th className="text-left p-3 font-medium">Default</th>
                  <th className="text-left p-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {component.props.map((prop, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <code className="code-inline">{prop.name}</code>
                    </td>
                    <td className="p-3">
                      <code className="code-inline text-xs">{prop.type}</code>
                    </td>
                    <td className="p-3">
                      <Badge variant={prop.required ? 'destructive' : 'secondary'} className="text-xs">
                        {prop.required ? 'Required' : 'Optional'}
                      </Badge>
                    </td>
                    <td className="p-3">
                      {prop.default && (
                        <code className="code-inline text-xs">{prop.default}</code>
                      )}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {prop.description}
                      {prop.allowedValues && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {prop.allowedValues.map((value) => (
                            <Badge key={value} variant="outline" className="text-xs">
                              {value}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Content Rules */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Content Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Supported Content Types</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className={component.contentRules.iconOnly ? 'text-green-500' : 'text-red-500'}>
                    {component.contentRules.iconOnly ? '✓' : '✗'}
                  </span>
                  Icon only
                </li>
                <li className="flex items-center gap-2">
                  <span className={component.contentRules.iconWithLabel ? 'text-green-500' : 'text-red-500'}>
                    {component.contentRules.iconWithLabel ? '✓' : '✗'}
                  </span>
                  Icon with label
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Text Handling</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">Long labels: </span>
                  <span>{component.contentRules.longLabels}</span>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Truncation: </span>
                  <span>{component.contentRules.truncation}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}