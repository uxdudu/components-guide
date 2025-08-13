'use client'

import { ComponentMeta } from '@/lib/types'
import { ComponentOverview } from './component-overview'
import { ComponentAnatomy } from './component-anatomy'
import { ComponentVariants } from './component-variants'
import { ComponentAPI } from './component-api'
import { ComponentBehavior } from './component-behavior'
import { ComponentAccessibility } from './component-accessibility'
import { ComponentExamples } from './component-examples'
import { ComponentGuidelines } from './component-guidelines'
import { CoverageChecker } from './coverage-checker'
import { StickyNav } from './sticky-nav'

interface ComponentLayoutProps {
  component: ComponentMeta
}

export function ComponentLayout({ component }: ComponentLayoutProps) {
  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants & States' },
    { id: 'api', title: 'Props & API' },
    { id: 'behavior', title: 'Behavior' },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'examples', title: 'Examples' },
    { id: 'guidelines', title: 'Guidelines' },
    { id: 'coverage', title: 'Coverage Checker' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-12">
              <section id="overview">
                <ComponentOverview component={component} />
              </section>

              <section id="anatomy">
                <ComponentAnatomy component={component} />
              </section>

              <section id="variants">
                <ComponentVariants component={component} />
              </section>

              <section id="api">
                <ComponentAPI component={component} />
              </section>

              <section id="behavior">
                <ComponentBehavior component={component} />
              </section>

              <section id="accessibility">
                <ComponentAccessibility component={component} />
              </section>

              <section id="examples">
                <ComponentExamples component={component} />
              </section>

              <section id="guidelines">
                <ComponentGuidelines component={component} />
              </section>

              <section id="coverage">
                <CoverageChecker component={component} />
              </section>
            </div>
          </div>

          {/* Sticky navigation */}
          <div className="hidden lg:block w-64">
            <StickyNav sections={sections} />
          </div>
        </div>
      </div>
    </div>
  )
}