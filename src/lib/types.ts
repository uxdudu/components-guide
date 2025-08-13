export type ComponentCategory = 
  | 'inputs' 
  | 'actions' 
  | 'feedback' 
  | 'navigation' 
  | 'data-display' 
  | 'overlays'

export type ComponentStatus = 'stable' | 'draft' | 'deprecated'
export type ComponentComplexity = 'basic' | 'advanced'
export type Platform = 'Web' | 'iOS' | 'Android'

export interface PropDefinition {
  name: string
  type: string
  required: boolean
  default?: string
  description: string
  allowedValues?: string[]
}

export interface VariantDefinition {
  name: string
  type: 'enum' | 'boolean'
  values?: string[]
  default?: string | boolean
  description: string
}

export interface StateDefinition {
  name: string
  description: string
  trigger: string
  visualChange: string
}

export interface KeyboardMapping {
  key: string
  action: string
  context?: string
}

export interface AccessibilityGuideline {
  rule: string
  description: string
  wcagLevel: 'A' | 'AA' | 'AAA'
  wcagCriterion: string
}

export interface DesignToken {
  property: string
  token: string
  value: string
  description: string
}

export interface CodeExample {
  title: string
  description: string
  code: string
  language: 'html' | 'tsx' | 'jsx'
  framework?: 'react' | 'vue' | 'angular'
}

export interface GuidelineExample {
  type: 'do' | 'dont'
  title: string
  description: string
  example?: string
}

export interface CoverageItem {
  id: string
  name: string
  description?: string
  priority?: 'high' | 'medium' | 'low'
}

export interface CoverageDefinition {
  content: CoverageItem[]
  visual: CoverageItem[]
  behavior: CoverageItem[]
  states: CoverageItem[]
  accessibility: CoverageItem[]
}

export interface CoverageData {
  [category: string]: {
    [itemId: string]: boolean
  }
}

export interface ComponentMeta {
  slug: string
  name: string
  description: string
  category: ComponentCategory
  status: ComponentStatus
  complexity: ComponentComplexity
  platform: Platform[]
  aliases?: string[]
  
  // Content sections
  overview: {
    purpose: string
    whenToUse: string[]
    whenNotToUse: string[]
  }
  
  anatomy: {
    parts: Array<{
      name: string
      description: string
      required: boolean
    }>
  }
  
  variants: VariantDefinition[]
  states: StateDefinition[]
  props: PropDefinition[]
  
  contentRules: {
    iconOnly: boolean
    iconWithLabel: boolean
    longLabels: string
    truncation: string
  }
  
  behavior: {
    keyboard: KeyboardMapping[]
    focus: string
    async?: string
    loading?: string
  }
  
  accessibility: {
    role: string
    aria: string[]
    labeling: string
    keyboardMap: KeyboardMapping[]
    errorPatterns: string[]
    focusOrder: string
    contrast: string
    guidelines: AccessibilityGuideline[]
  }
  
  i18n?: {
    rtl: string
    longText: string
    dateLocale?: string
  }
  
  designTokens: DesignToken[]
  examples: CodeExample[]
  guidelines: GuidelineExample[]
  relatedComponents: string[]
  
  coverage?: CoverageDefinition
}