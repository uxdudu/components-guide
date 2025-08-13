import { ComponentMeta } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ComponentBehaviorProps {
  component: ComponentMeta
}

export function ComponentBehavior({ component }: ComponentBehaviorProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Behavior & Interaction</h2>
        <p className="text-muted-foreground">
          How users interact with the {component.name} component and its expected behaviors.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Keyboard Interaction */}
        <Card>
          <CardHeader>
            <CardTitle>Keyboard Interaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="keyboard-map">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Key</th>
                    <th className="text-left p-3 font-medium">Action</th>
                    <th className="text-left p-3 font-medium">Context</th>
                  </tr>
                </thead>
                <tbody>
                  {component.behavior.keyboard.map((mapping, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">
                        <kbd>{mapping.key}</kbd>
                      </td>
                      <td className="p-3">{mapping.action}</td>
                      <td className="p-3 text-muted-foreground">
                        {mapping.context || 'Always'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Focus Management */}
        <Card>
          <CardHeader>
            <CardTitle>Focus Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {component.behavior.focus}
            </p>
          </CardContent>
        </Card>

        {/* Async Behavior */}
        {component.behavior.async && (
          <Card>
            <CardHeader>
              <CardTitle>Async Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {component.behavior.async}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Loading States */}
        {component.behavior.loading && (
          <Card>
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {component.behavior.loading}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}