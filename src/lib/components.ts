import { ComponentMeta } from './types'

// This would typically load from MDX files or a CMS
// For now, we'll use static data that matches the existing components

export const components: ComponentMeta[] = [
  {
    slug: 'button',
    name: 'Button',
    description: 'Triggers an action or event, such as submitting a form or opening a dialog.',
    category: 'actions',
    status: 'stable',
    complexity: 'basic',
    platform: ['Web', 'iOS', 'Android'],
    aliases: ['btn', 'action-button', 'cta'],
    
    overview: {
      purpose: 'Buttons allow users to take actions and make choices with a single tap or click.',
      whenToUse: [
        'To trigger an action or event',
        'To submit forms',
        'To navigate to another page',
        'To open dialogs or modals'
      ],
      whenNotToUse: [
        'For navigation between pages (use links instead)',
        'When the action is not immediately available',
        'For toggling states (use toggle or switch instead)'
      ]
    },
    
    anatomy: {
      parts: [
        { name: 'Container', description: 'The button wrapper element', required: true },
        { name: 'Label', description: 'The text content of the button', required: true },
        { name: 'Leading Icon', description: 'Optional icon before the label', required: false },
        { name: 'Trailing Icon', description: 'Optional icon after the label', required: false },
        { name: 'Loading Spinner', description: 'Shown during async operations', required: false }
      ]
    },
    
    variants: [
      {
        name: 'intent',
        type: 'enum',
        values: ['primary', 'secondary', 'tertiary', 'destructive'],
        default: 'primary',
        description: 'Defines the semantic meaning and visual hierarchy'
      },
      {
        name: 'size',
        type: 'enum',
        values: ['sm', 'md', 'lg'],
        default: 'md',
        description: 'Controls the button size and padding'
      },
      {
        name: 'appearance',
        type: 'enum',
        values: ['solid', 'outlined', 'ghost'],
        default: 'solid',
        description: 'Visual style variant'
      }
    ],
    
    states: [
      {
        name: 'Default',
        description: 'The button\'s normal state',
        trigger: 'Initial state',
        visualChange: 'Standard appearance'
      },
      {
        name: 'Hover',
        description: 'When user hovers over the button',
        trigger: 'Mouse hover or focus',
        visualChange: 'Slight elevation and color change'
      },
      {
        name: 'Active',
        description: 'When button is being pressed',
        trigger: 'Mouse down or key press',
        visualChange: 'Pressed appearance with inset shadow'
      },
      {
        name: 'Disabled',
        description: 'When button cannot be interacted with',
        trigger: 'isDisabled prop is true',
        visualChange: 'Reduced opacity and no pointer events'
      },
      {
        name: 'Loading',
        description: 'During async operations',
        trigger: 'isLoading prop is true',
        visualChange: 'Spinner replaces content, button is disabled'
      }
    ],
    
    props: [
      {
        name: 'intent',
        type: "'primary' | 'secondary' | 'tertiary' | 'destructive'",
        required: false,
        default: 'primary',
        description: 'Semantic meaning and visual hierarchy',
        allowedValues: ['primary', 'secondary', 'tertiary', 'destructive']
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        required: false,
        default: 'md',
        description: 'Button size',
        allowedValues: ['sm', 'md', 'lg']
      },
      {
        name: 'appearance',
        type: "'solid' | 'outlined' | 'ghost'",
        required: false,
        default: 'solid',
        description: 'Visual style variant',
        allowedValues: ['solid', 'outlined', 'ghost']
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the button is disabled'
      },
      {
        name: 'isLoading',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the button is in loading state'
      },
      {
        name: 'hasLeadingIcon',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show an icon before the label'
      },
      {
        name: 'hasTrailingIcon',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show an icon after the label'
      },
      {
        name: 'isFullWidth',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the button should take full width'
      }
    ],
    
    contentRules: {
      iconOnly: true,
      iconWithLabel: true,
      longLabels: 'Truncate with ellipsis after 2 lines',
      truncation: 'Use ellipsis for overflow text'
    },
    
    behavior: {
      keyboard: [
        { key: 'Enter', action: 'Activates the button' },
        { key: 'Space', action: 'Activates the button' },
        { key: 'Tab', action: 'Moves focus to the button' }
      ],
      focus: 'Button receives focus and shows focus indicator',
      async: 'Shows loading state during async operations',
      loading: 'Disables interaction and shows spinner'
    },
    
    accessibility: {
      role: 'button',
      aria: ['aria-label', 'aria-describedby', 'aria-disabled'],
      labeling: 'Must have accessible name via text content or aria-label',
      keyboardMap: [
        { key: 'Enter', action: 'Activates the button' },
        { key: 'Space', action: 'Activates the button' }
      ],
      errorPatterns: [
        'Missing accessible name',
        'Using div instead of button element',
        'Not indicating loading state to screen readers'
      ],
      focusOrder: 'Should be included in tab order unless disabled',
      contrast: 'Must meet WCAG AA contrast requirements (4.5:1)',
      guidelines: [
        {
          rule: 'Accessible Name',
          description: 'Button must have an accessible name',
          wcagLevel: 'A',
          wcagCriterion: '4.1.2'
        },
        {
          rule: 'Keyboard Accessible',
          description: 'Must be operable via keyboard',
          wcagLevel: 'A',
          wcagCriterion: '2.1.1'
        }
      ]
    },
    
    i18n: {
      rtl: 'Icon positions should flip in RTL languages',
      longText: 'Button should accommodate longer text in other languages'
    },
    
    designTokens: [
      { property: 'background-color', token: 'color.primary.500', value: '#3b82f6', description: 'Primary button background' },
      { property: 'color', token: 'color.white', value: '#ffffff', description: 'Primary button text color' },
      { property: 'border-radius', token: 'radius.md', value: '6px', description: 'Button border radius' },
      { property: 'padding', token: 'spacing.3', value: '12px', description: 'Button padding' }
    ],
    
    examples: [
      {
        title: 'Basic Button',
        description: 'A simple primary button',
        code: '<Button>Click me</Button>',
        language: 'tsx'
      },
      {
        title: 'Button with Icon',
        description: 'Button with leading icon',
        code: '<Button hasLeadingIcon>\n  <Icon name="plus" />\n  Add Item\n</Button>',
        language: 'tsx'
      }
    ],
    
    guidelines: [
      {
        type: 'do',
        title: 'Use clear, action-oriented labels',
        description: 'Button labels should clearly indicate what will happen when clicked'
      },
      {
        type: 'dont',
        title: 'Don\'t use vague labels like "Click here"',
        description: 'Avoid generic labels that don\'t describe the action'
      }
    ],
    
    relatedComponents: ['link', 'icon-button', 'toggle'],
    
    coverage: {
      content: [
        { id: 'text-only', name: 'Text-only button', priority: 'high' },
        { id: 'icon-only', name: 'Icon-only button', priority: 'medium' },
        { id: 'icon-text', name: 'Icon + text button', priority: 'high' },
        { id: 'long-text', name: 'Long text handling', priority: 'medium' }
      ],
      visual: [
        { id: 'primary', name: 'Primary variant', priority: 'high' },
        { id: 'secondary', name: 'Secondary variant', priority: 'high' },
        { id: 'tertiary', name: 'Tertiary variant', priority: 'medium' },
        { id: 'destructive', name: 'Destructive variant', priority: 'high' },
        { id: 'sizes', name: 'Multiple sizes (sm, md, lg)', priority: 'high' }
      ],
      behavior: [
        { id: 'click', name: 'Click/tap interaction', priority: 'high' },
        { id: 'keyboard', name: 'Keyboard activation (Enter/Space)', priority: 'high' },
        { id: 'focus', name: 'Focus management', priority: 'high' },
        { id: 'async', name: 'Async operation handling', priority: 'medium' }
      ],
      states: [
        { id: 'default', name: 'Default state', priority: 'high' },
        { id: 'hover', name: 'Hover state', priority: 'high' },
        { id: 'active', name: 'Active/pressed state', priority: 'medium' },
        { id: 'disabled', name: 'Disabled state', priority: 'high' },
        { id: 'loading', name: 'Loading state', priority: 'medium' }
      ],
      accessibility: [
        { id: 'semantic-html', name: 'Uses button element', priority: 'high' },
        { id: 'accessible-name', name: 'Has accessible name', priority: 'high' },
        { id: 'keyboard-support', name: 'Keyboard support', priority: 'high' },
        { id: 'focus-indicator', name: 'Visible focus indicator', priority: 'high' },
        { id: 'screen-reader', name: 'Screen reader announcements', priority: 'medium' }
      ]
    }
  },
  
  // Add more components here...
  {
    slug: 'input',
    name: 'Input',
    description: 'Allows users to enter and edit text data.',
    category: 'inputs',
    status: 'stable',
    complexity: 'basic',
    platform: ['Web', 'iOS', 'Android'],
    aliases: ['text-field', 'text-input', 'form-field'],
    
    overview: {
      purpose: 'Input fields allow users to enter text data in forms and interfaces.',
      whenToUse: [
        'To collect text data from users',
        'For form fields like name, email, password',
        'For search functionality',
        'For editable content'
      ],
      whenNotToUse: [
        'For selecting from predefined options (use select instead)',
        'For boolean choices (use checkbox or toggle)',
        'For large amounts of text (use textarea)'
      ]
    },
    
    anatomy: {
      parts: [
        { name: 'Container', description: 'The input wrapper element', required: true },
        { name: 'Label', description: 'Describes the input purpose', required: true },
        { name: 'Input Field', description: 'The actual input element', required: true },
        { name: 'Prefix Icon', description: 'Optional icon before the input', required: false },
        { name: 'Suffix Icon', description: 'Optional icon after the input', required: false },
        { name: 'Helper Text', description: 'Additional guidance or error messages', required: false }
      ]
    },
    
    variants: [
      {
        name: 'state',
        type: 'enum',
        values: ['default', 'error', 'success', 'warning'],
        default: 'default',
        description: 'Semantic state of the input'
      },
      {
        name: 'size',
        type: 'enum',
        values: ['sm', 'md', 'lg'],
        default: 'md',
        description: 'Input size and padding'
      },
      {
        name: 'appearance',
        type: 'enum',
        values: ['filled', 'outlined', 'ghost'],
        default: 'outlined',
        description: 'Visual style variant'
      }
    ],
    
    states: [
      {
        name: 'Default',
        description: 'The input\'s normal state',
        trigger: 'Initial state',
        visualChange: 'Standard border and background'
      },
      {
        name: 'Focus',
        description: 'When input has focus',
        trigger: 'Click or tab focus',
        visualChange: 'Highlighted border and focus ring'
      },
      {
        name: 'Error',
        description: 'When input has validation errors',
        trigger: 'Validation failure',
        visualChange: 'Red border and error message'
      },
      {
        name: 'Disabled',
        description: 'When input cannot be edited',
        trigger: 'isDisabled prop is true',
        visualChange: 'Reduced opacity and no interaction'
      }
    ],
    
    props: [
      {
        name: 'state',
        type: "'default' | 'error' | 'success' | 'warning'",
        required: false,
        default: 'default',
        description: 'Semantic state for validation feedback'
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        required: false,
        default: 'md',
        description: 'Input size'
      },
      {
        name: 'isRequired',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the input is required'
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the input is disabled'
      },
      {
        name: 'hasPrefixIcon',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show an icon before the input'
      },
      {
        name: 'hasSuffixIcon',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show an icon after the input'
      }
    ],
    
    contentRules: {
      iconOnly: false,
      iconWithLabel: true,
      longLabels: 'Keep labels concise, use helper text for additional context',
      truncation: 'Labels should not truncate, helper text can wrap'
    },
    
    behavior: {
      keyboard: [
        { key: 'Tab', action: 'Moves focus to/from the input' },
        { key: 'Enter', action: 'Submits form (if in form context)' },
        { key: 'Escape', action: 'Clears focus (optional)' }
      ],
      focus: 'Input receives focus and shows focus indicator',
      async: 'Can show loading state during validation'
    },
    
    accessibility: {
      role: 'textbox',
      aria: ['aria-label', 'aria-describedby', 'aria-invalid', 'aria-required'],
      labeling: 'Must have associated label element or aria-label',
      keyboardMap: [
        { key: 'Tab', action: 'Navigate to/from input' },
        { key: 'Enter', action: 'Submit form' }
      ],
      errorPatterns: [
        'Missing label association',
        'Not indicating required fields',
        'Poor error message association'
      ],
      focusOrder: 'Should be included in logical tab order',
      contrast: 'Text and borders must meet WCAG AA requirements',
      guidelines: [
        {
          rule: 'Labels or Instructions',
          description: 'Input must have associated label',
          wcagLevel: 'A',
          wcagCriterion: '3.3.2'
        }
      ]
    },
    
    designTokens: [
      { property: 'border-color', token: 'color.border', value: '#e5e7eb', description: 'Default border color' },
      { property: 'background-color', token: 'color.background', value: '#ffffff', description: 'Input background' },
      { property: 'border-radius', token: 'radius.md', value: '6px', description: 'Input border radius' }
    ],
    
    examples: [
      {
        title: 'Basic Input',
        description: 'A simple text input with label',
        code: '<Input label="Email" placeholder="Enter your email" />',
        language: 'tsx'
      }
    ],
    
    guidelines: [
      {
        type: 'do',
        title: 'Always provide clear labels',
        description: 'Every input should have a descriptive label'
      },
      {
        type: 'dont',
        title: 'Don\'t rely only on placeholder text',
        description: 'Placeholders disappear when typing and aren\'t accessible'
      }
    ],
    
    relatedComponents: ['textarea', 'select', 'checkbox'],
    
    coverage: {
      content: [
        { id: 'label', name: 'Input label', priority: 'high' },
        { id: 'placeholder', name: 'Placeholder text', priority: 'medium' },
        { id: 'helper-text', name: 'Helper text', priority: 'medium' },
        { id: 'error-message', name: 'Error messages', priority: 'high' }
      ],
      visual: [
        { id: 'outlined', name: 'Outlined variant', priority: 'high' },
        { id: 'filled', name: 'Filled variant', priority: 'medium' },
        { id: 'sizes', name: 'Multiple sizes', priority: 'high' },
        { id: 'icons', name: 'Prefix/suffix icons', priority: 'medium' }
      ],
      behavior: [
        { id: 'typing', name: 'Text input handling', priority: 'high' },
        { id: 'validation', name: 'Real-time validation', priority: 'medium' },
        { id: 'focus', name: 'Focus management', priority: 'high' }
      ],
      states: [
        { id: 'default', name: 'Default state', priority: 'high' },
        { id: 'focus', name: 'Focus state', priority: 'high' },
        { id: 'error', name: 'Error state', priority: 'high' },
        { id: 'disabled', name: 'Disabled state', priority: 'high' },
        { id: 'success', name: 'Success state', priority: 'medium' }
      ],
      accessibility: [
        { id: 'label-association', name: 'Label association', priority: 'high' },
        { id: 'required-indication', name: 'Required field indication', priority: 'high' },
        { id: 'error-association', name: 'Error message association', priority: 'high' },
        { id: 'keyboard-navigation', name: 'Keyboard navigation', priority: 'high' }
      ]
    }
  }
]

export function getAllComponents(): ComponentMeta[] {
  return components
}

export function getComponentBySlug(slug: string): ComponentMeta | undefined {
  return components.find(component => component.slug === slug)
}

export function getComponentsByCategory(category: string): ComponentMeta[] {
  if (category === 'all') return components
  return components.filter(component => component.category === category)
}