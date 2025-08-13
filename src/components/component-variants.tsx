import { ComponentMeta } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ComponentVariantsProps {
  component: ComponentMeta
}

export function ComponentVariants({ component }: ComponentVariantsProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Variants & States</h2>
        <p className="text-muted-foreground">
          Different visual and behavioral variations of the {component.name} component.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Variants */}
        {component.variants.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {component.variants.map((variant, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="font-medium">{variant.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {variant.type}
                      </Badge>
                      {variant.default && (
                        <Badge variant="secondary" className="text-xs">
                          default: {variant.default.toString()}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {variant.description}
                    </p>
                    
                    {variant.values && (
                      <div className="flex flex-wrap gap-2">
                        {variant.values.map((value) => (
                          <Badge key={value} variant="outline" className="text-xs">
                            {value}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* States */}
        {component.states.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>States</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {component.states.map((state, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">{state.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {state.description}
                    </p>
                    
                    <div className="grid gap-2 text-sm">
                      <div>
                        <span className="font-medium text-muted-foreground">Trigger: </span>
                        <span>{state.trigger}</span>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Visual Change: </span>
                        <span>{state.visualChange}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Interactive preview would go here */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="component-preview">
              <div className="text-center text-muted-foreground">
                Interactive component preview would be rendered here
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}