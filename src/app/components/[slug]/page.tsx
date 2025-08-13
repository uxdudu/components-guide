import { notFound } from 'next/navigation'
import { ComponentLayout } from '@/components/component-layout'
import { getComponentBySlug, getAllComponents } from '@/lib/components'

interface ComponentPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const components = getAllComponents()
  return components.map((component) => ({
    slug: component.slug,
  }))
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const component = getComponentBySlug(params.slug)

  if (!component) {
    notFound()
  }

  return <ComponentLayout component={component} />
}