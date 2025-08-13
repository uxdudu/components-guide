import { ComponentMeta } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

interface ComponentExamplesProps {
  component: ComponentMeta
}

export function ComponentExamples({ component }: ComponentExamplesProps) {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Code Examples</h2>
        <p className="text-muted-foreground">
          Implementation examples for the {component.name} component.
        </p>
      </div>

      <div className="space-y-6">
        {component.examples.map((example, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {example.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {example.language.toUpperCase()}
                  </Badge>
                  {example.framework && (
                    <Badge variant="secondary" className="text-xs">
                      {example.framework}
                    </Badge>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(example.code)}
                    className="h-8 w-8 p-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="code-block">
                <pre className="text-sm overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Design Tokens */}
        {component.designTokens.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Design Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Property</th>
                      <th className="text-left p-3 font-medium">Token</th>
                      <th className="text-left p-3 font-medium">Value</th>
                      <th className="text-left p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.designTokens.map((token, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-3">
                          <code className="code-inline">{token.property}</code>
                        </td>
                        <td className="p-3">
                          <code className="code-inline">{token.token}</code>
                        </td>
                        <td className="p-3">
                          <code className="code-inline">{token.value}</code>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          {token.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Internationalization */}
        {component.i18n && (
          <Card>
            <CardHeader>
              <CardTitle>Internationalization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">RTL Support</h4>
                  <p className="text-sm text-muted-foreground">
                    {component.i18n.rtl}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Long Text Handling</h4>
                  <p className="text-sm text-muted-foreground">
                    {component.i18n.longText}
                  </p>
                </div>
                
                {component.i18n.dateLocale && (
                  <div>
                    <h4 className="font-medium mb-2">Date/Locale Sensitivity</h4>
                    <p className="text-sm text-muted-foreground">
                      {component.i18n.dateLocale}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}