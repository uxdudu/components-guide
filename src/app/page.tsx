import { ComponentGrid } from '@/components/component-grid'
import { SearchBar } from '@/components/search-bar'
import { CategoryFilter } from '@/components/category-filter'
import { Header } from '@/components/header'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              UI Component Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive documentation and coverage tracking for UI components
            </p>
            
            <SearchBar />
          </div>

          <div className="mb-8">
            <CategoryFilter />
          </div>

          <ComponentGrid />
        </div>
      </main>
    </div>
  )
}