import { ComponentMeta } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ComponentGuidelinesProps {
  component: ComponentMeta
}

export function ComponentGuidelines({ component }: ComponentGuidelinesProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Do's & Don'ts</h2>
        <p className="text-muted-foreground">
          Best practices and common mistakes when using the {component.name} component.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Do's */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {component.guidelines
                .filter(guideline => guideline.type === 'do')
                .map((guideline, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-green-700 mb-1">
                      {guideline.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {guideline.description}
                    </p>
                    {guideline.example && (
                      <div className="mt-2 code-block bg-green-50">
                        <code className="text-xs">{guideline.example}</code>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Don'ts */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center gap-2">
              <span className="text-red-500">✗</span>
              Don't
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {component.guidelines
                .filter(guideline => guideline.type === 'dont')
                .map((guideline, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-red-700 mb-1">
                      {guideline.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {guideline.description}
                    </p>
                    {guideline.example && (
                      <div className="mt-2 code-block bg-red-50">
                        <code className="text-xs">{guideline.example}</code>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Components */}
      {component.relatedComponents.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Related Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {component.relatedComponents.map((relatedComponent) => (
                <a
                  key={relatedComponent}
                  href={`/components/${relatedComponent}`}
                  className="inline-flex items-center px-3 py-1 rounded-md bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
                >
                  {relatedComponent}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}