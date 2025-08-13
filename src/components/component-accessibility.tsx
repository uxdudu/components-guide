import { ComponentMeta } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ComponentAccessibilityProps {
  component: ComponentMeta
}

export function ComponentAccessibility({ component }: ComponentAccessibilityProps) {
  const wcagLevelColors = {
    A: 'bg-green-100 text-green-800 border-green-200',
    AA: 'bg-blue-100 text-blue-800 border-blue-200',
    AAA: 'bg-purple-100 text-purple-800 border-purple-200',
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Accessibility</h2>
        <p className="text-muted-foreground">
          Accessibility guidelines and requirements for the {component.name} component.
        </p>
      </div>

      <div className="grid gap-6">
        {/* ARIA and Semantic HTML */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Semantic HTML</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-muted-foreground">Role: </span>
                  <code className="code-inline">{component.accessibility.role}</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {component.accessibility.aria.map((attr) => (
                  <Badge key={attr} variant="outline" className="font-mono text-xs">
                    {attr}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyboard Navigation */}
        <Card>
          <CardHeader>
            <CardTitle>Keyboard Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="keyboard-map">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Key</th>
                    <th className="text-left p-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {component.accessibility.keyboardMap.map((mapping, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">
                        <kbd>{mapping.key}</kbd>
                      </td>
                      <td className="p-3">{mapping.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Labeling */}
        <Card>
          <CardHeader>
            <CardTitle>Labeling Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {component.accessibility.labeling}
            </p>
          </CardContent>
        </Card>

        {/* Common Pitfalls */}
        <Card>
          <CardHeader>
            <CardTitle>Common Accessibility Pitfalls</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {component.accessibility.errorPatterns.map((pattern, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span className="text-sm">{pattern}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* WCAG Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>WCAG Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {component.accessibility.guidelines.map((guideline, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{guideline.rule}</h4>
                    <Badge className={wcagLevelColors[guideline.wcagLevel]}>
                      WCAG {guideline.wcagLevel}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {guideline.wcagCriterion}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {guideline.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Focus Order */}
        <Card>
          <CardHeader>
            <CardTitle>Focus Order</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {component.accessibility.focusOrder}
            </p>
          </CardContent>
        </Card>

        {/* Contrast Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>Contrast Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {component.accessibility.contrast}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}