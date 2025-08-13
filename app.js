// Application data
const componentsData = {
  "Button": {
    "description": "Dispara ações, envia formulários, confirma operações.",
    "figmaTips": [
      "Use auto-layout e padding",
      "Variants para intents e sizes",
      "Boolean para isDisabled"
    ],
    "props": {
      "intent": {
        "type": "enum",
        "options": ["primary", "secondary", "tertiary", "destructive"],
        "default": "primary",
        "category": "semantic"
      },
      "size": {
        "type": "enum", 
        "options": ["sm", "md", "lg"],
        "default": "md",
        "category": "other"
      },
      "appearance": {
        "type": "enum",
        "options": ["solid", "outlined", "ghost"],
        "default": "solid", 
        "category": "aesthetic"
      },
      "isDisabled": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "isLoading": {
        "type": "boolean", 
        "default": false,
        "category": "boolean"
      },
      "hasLeadingIcon": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "isFullWidth": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      }
    },
    "goodPractices": [
      "Use 'intent' para propósito semântico",
      "Booleans claros: isDisabled, isLoading", 
      "Um prop por preocupação"
    ],
    "antiPatterns": [
      "Misturar color + intent no mesmo prop",
      "variant='primary'|'red'|'success'",
      "Múltiplos props para mesmo aspecto"
    ]
  },
  "Input": {
    "description": "Captura texto livre do usuário.",
    "figmaTips": [
      "Auto-layout horizontal",
      "Variants para estados",
      "Boolean para isDisabled"
    ],
    "props": {
      "state": {
        "type": "enum",
        "options": ["default", "error", "success", "warning"],
        "default": "default",
        "category": "semantic"
      },
      "size": {
        "type": "enum",
        "options": ["sm", "md", "lg"], 
        "default": "md",
        "category": "other"
      },
      "appearance": {
        "type": "enum",
        "options": ["filled", "outlined", "ghost"],
        "default": "filled",
        "category": "aesthetic" 
      },
      "isRequired": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "isDisabled": {
        "type": "boolean",
        "default": false, 
        "category": "boolean"
      },
      "hasPrefixIcon": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "hasSuffixIcon": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      }
    },
    "goodPractices": [
      "state semântico para validação",
      "Booleans para slots: hasPrefixIcon",
      "isRequired para indicação clara"
    ],
    "antiPatterns": [
      "color='red' em vez de state='error'",
      "Props conflitantes para mesmo estado",
      "required='true'|'false' em string"
    ]
  },
  "Badge": {
    "description": "Exibe status, categorias ou informações contextuais.",
    "figmaTips": [
      "Variants para tone e appearance",
      "Boolean para isPill e hasIcon",
      "Color separado para decoração"
    ],
    "props": {
      "tone": {
        "type": "enum", 
        "options": ["success", "warning", "info", "error", "neutral"],
        "default": "neutral",
        "category": "semantic"
      },
      "appearance": {
        "type": "enum",
        "options": ["subtle", "bold", "outline"],
        "default": "subtle",
        "category": "aesthetic"
      },
      "color": {
        "type": "enum",
        "options": ["none", "purple", "orange", "teal"],
        "default": "none", 
        "category": "aesthetic"
      },
      "isPill": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "hasIcon": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "isDismissible": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      }
    },
    "goodPractices": [
      "tone para significado semântico",
      "color apenas para decoração", 
      "Separar semântica de estética"
    ],
    "antiPatterns": [
      "variant='success'|'purple' misturado",
      "color para indicar estado",
      "Props competindo pelo mesmo aspecto"
    ]
  },
  "Toggle": {
    "description": "Alterna entre dois estados (on/off).",
    "figmaTips": [
      "Use booleans para isOn",
      "Crie variant light/dark",
      "Construa knob como componente filho"
    ],
    "props": {
      "isOn": {
        "type": "boolean",
        "default": false,
        "category": "boolean" 
      },
      "isDisabled": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "hasLabel": {
        "type": "boolean", 
        "default": true,
        "category": "boolean"
      },
      "size": {
        "type": "enum",
        "options": ["sm", "md"],
        "default": "md",
        "category": "other"
      }
    },
    "goodPractices": [
      "isOn claro e binário",
      "hasLabel para mostrar/ocultar",
      "Nome Figma-friendly"
    ],
    "antiPatterns": [
      "checked=true/false confuso",
      "state='on'|'off' desnecessário",
      "value em vez de isOn"
    ]
  },
  "Card": {
    "description": "Agrupa conteúdo relacionado em um container visual.",
    "figmaTips": [
      "Auto-layout vertical para content",
      "Variants para elevation e states",
      "Boolean para slots (header, actions)"
    ],
    "props": {
      "elevation": {
        "type": "enum",
        "options": ["base", "raised", "overlay"],
        "default": "base", 
        "category": "semantic"
      },
      "isInteractive": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "isOutlined": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "hasHeader": {
        "type": "boolean", 
        "default": true,
        "category": "boolean"
      },
      "hasActions": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      }
    },
    "goodPractices": [
      "elevation semântica (raised/overlay)",
      "isInteractive para comportamento", 
      "Slots claros: hasHeader, hasActions"
    ],
    "antiPatterns": [
      "shadow='0px 4px 8px' hardcoded",
      "variant='clickable' não booleano",
      "level=1,2,3 sem significado"
    ]
  },
  "Chip": {
    "description": "Representa filtros, tags ou itens selecionáveis.",
    "figmaTips": [
      "Variants para role e appearance",
      "Boolean para isSelected e isDismissible",
      "Auto-layout com texto e ícones"
    ],
    "props": {
      "role": {
        "type": "enum",
        "options": ["filter", "selection", "token", "status"],
        "default": "filter",
        "category": "semantic"
      },
      "appearance": {
        "type": "enum", 
        "options": ["filled", "outline", "soft"],
        "default": "filled",
        "category": "aesthetic"
      },
      "color": {
        "type": "enum",
        "options": ["none", "gray", "blue", "green"],
        "default": "none",
        "category": "aesthetic"
      },
      "isSelected": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      },
      "isDismissible": {
        "type": "boolean", 
        "default": false,
        "category": "boolean"
      },
      "isDisabled": {
        "type": "boolean",
        "default": false,
        "category": "boolean"
      }
    },
    "goodPractices": [
      "role define comportamento semântico",
      "isSelected para filtros/seleção",
      "color apenas decorativo"
    ],
    "antiPatterns": [
      "variant='selected'|'blue' misturado", 
      "active em vez de isSelected",
      "type conflitando com role"
    ]
  }
};

// Component states
const componentStates = {};

// Initialize component states with defaults
Object.keys(componentsData).forEach(componentName => {
  componentStates[componentName] = {};
  Object.keys(componentsData[componentName].props).forEach(propName => {
    const prop = componentsData[componentName].props[propName];
    componentStates[componentName][propName] = prop.default;
  });
});

// Navigation functions
function switchToTab(tabName) {
  console.log(`Switching to tab: ${tabName}`);
  
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Update active tab
  navTabs.forEach(t => t.classList.remove('nav-tab--active'));
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeTab) {
    activeTab.classList.add('nav-tab--active');
  }
  
  // Show corresponding content
  tabContents.forEach(content => {
    content.classList.remove('tab-content--active');
    if (content.getAttribute('data-content') === tabName) {
      content.classList.add('tab-content--active');
    }
  });
}

// Tab navigation
function initTabNavigation() {
  console.log('Initializing tab navigation...');
  
  const navTabs = document.querySelectorAll('.nav-tab');
  console.log(`Found ${navTabs.length} nav tabs`);
  
  navTabs.forEach((tab, index) => {
    const tabName = tab.getAttribute('data-tab');
    console.log(`Setting up tab ${index}: ${tabName}`);
    
    // Remove any existing listeners
    const newTab = tab.cloneNode(true);
    tab.parentNode.replaceChild(newTab, tab);
    
    newTab.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(`Tab clicked: ${tabName}`);
      switchToTab(tabName);
    });
  });
  
  // Component card navigation
  const componentCards = document.querySelectorAll('.component-card');
  componentCards.forEach(card => {
    const componentName = card.getAttribute('data-component');
    
    // Add click handler to the entire card
    card.addEventListener('click', (e) => {
      // Prevent navigation if clicking on the explore button
      if (e.target.closest('.btn')) {
        e.preventDefault();
      } else {
        switchToTab(componentName);
      }
    });
    
    // Add click handler specifically to the explore button
    const exploreBtn = card.querySelector('.btn');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        switchToTab(componentName);
      });
    }
  });
}

// Generate controls for a component
function generateControls(componentName) {
  const controlsContainer = document.getElementById(`${componentName.toLowerCase()}-controls`);
  if (!controlsContainer) return;
  
  const component = componentsData[componentName];
  
  controlsContainer.innerHTML = '';
  
  Object.entries(component.props).forEach(([propName, prop]) => {
    const controlGroup = document.createElement('div');
    controlGroup.className = 'control-group';
    
    const label = document.createElement('div');
    label.className = 'control-label';
    label.innerHTML = `
      ${propName}
      <span class="control-category control-category--${prop.category}">${prop.category}</span>
    `;
    
    controlGroup.appendChild(label);
    
    if (prop.type === 'boolean') {
      const toggleControl = createToggleControl(componentName, propName, componentStates[componentName][propName]);
      controlGroup.appendChild(toggleControl);
    } else if (prop.type === 'enum') {
      const selectControl = createSelectControl(componentName, propName, prop.options, componentStates[componentName][propName]);
      controlGroup.appendChild(selectControl);
    }
    
    controlsContainer.appendChild(controlGroup);
  });
}

function createToggleControl(componentName, propName, currentValue) {
  const toggleWrapper = document.createElement('div');
  toggleWrapper.className = 'toggle-control';
  
  const track = document.createElement('div');
  track.className = `toggle-control__track ${currentValue ? 'toggle-control__track--active' : ''}`;
  
  const thumb = document.createElement('div');
  thumb.className = 'toggle-control__thumb';
  
  const label = document.createElement('span');
  label.className = 'toggle-control__label';
  label.textContent = currentValue ? 'true' : 'false';
  
  track.appendChild(thumb);
  toggleWrapper.appendChild(track);
  toggleWrapper.appendChild(label);
  
  toggleWrapper.addEventListener('click', () => {
    const newValue = !componentStates[componentName][propName];
    
    componentStates[componentName][propName] = newValue;
    
    track.classList.toggle('toggle-control__track--active', newValue);
    label.textContent = newValue ? 'true' : 'false';
    
    updateComponentPreview(componentName);
    updateGeneratedCode(componentName);
  });
  
  return toggleWrapper;
}

function createSelectControl(componentName, propName, options, currentValue) {
  const select = document.createElement('select');
  select.className = 'form-control';
  
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    optionElement.selected = option === currentValue;
    select.appendChild(optionElement);
  });
  
  select.addEventListener('change', () => {
    componentStates[componentName][propName] = select.value;
    updateComponentPreview(componentName);
    updateGeneratedCode(componentName);
  });
  
  return select;
}

// Update component preview
function updateComponentPreview(componentName) {
  const previewContainer = document.getElementById(`${componentName.toLowerCase()}-preview`);
  if (!previewContainer) return;
  
  const state = componentStates[componentName];
  
  let previewHTML = '';
  
  switch (componentName) {
    case 'Button':
      previewHTML = createButtonPreview(state);
      break;
    case 'Input':
      previewHTML = createInputPreview(state);
      break;
    case 'Badge':
      previewHTML = createBadgePreview(state);
      break;
    case 'Toggle':
      previewHTML = createTogglePreview(state);
      break;
    case 'Card':
      previewHTML = createCardPreview(state);
      break;
    case 'Chip':
      previewHTML = createChipPreview(state);
      break;
  }
  
  previewContainer.innerHTML = previewHTML;
}

function createButtonPreview(state) {
  const classes = [
    'dynamic-button',
    `dynamic-button--${state.intent}`,
    `dynamic-button--${state.appearance}`,
    `dynamic-button--${state.size}`,
    state.isDisabled ? 'disabled' : '',
    state.isLoading ? 'dynamic-button--loading' : ''
  ].filter(Boolean).join(' ');
  
  const style = state.isFullWidth ? 'width: 100%; max-width: 300px;' : '';
  const icon = state.hasLeadingIcon ? '🔥 ' : '';
  const text = state.isLoading ? 'Carregando...' : 'Botão Exemplo';
  
  return `
    <button class="${classes}" ${state.isDisabled ? 'disabled' : ''} style="${style}">
      ${icon}${text}
    </button>
  `;
}

function createInputPreview(state) {
  const classes = [
    'dynamic-input',
    `dynamic-input--${state.state}`,
    `dynamic-input--${state.appearance}`,
    `dynamic-input--${state.size}`
  ].join(' ');
  
  const placeholder = state.hasPrefixIcon || state.hasSuffixIcon ? 
    `${state.hasPrefixIcon ? '🔍 ' : ''}Digite algo aqui${state.hasSuffixIcon ? ' ✨' : ''}` :
    'Digite algo aqui...';
  
  return `
    <input 
      class="${classes}" 
      type="text" 
      placeholder="${placeholder}"
      ${state.isRequired ? 'required' : ''} 
      ${state.isDisabled ? 'disabled' : ''}
    />
  `;
}

function createBadgePreview(state) {
  const classes = [
    'dynamic-badge',
    `dynamic-badge--${state.tone}`,
    `dynamic-badge--${state.appearance}`,
    state.color !== 'none' ? `dynamic-badge--${state.color}` : '',
    state.isPill ? 'dynamic-badge--pill' : ''
  ].filter(Boolean).join(' ');
  
  const icon = state.hasIcon ? '⭐ ' : '';
  const text = `${icon}${state.tone.charAt(0).toUpperCase() + state.tone.slice(1)}`;
  const dismissButton = state.isDismissible ? ' <button style="background: none; border: none; margin-left: 4px;">×</button>' : '';
  
  return `<span class="${classes}">${text}${dismissButton}</span>`;
}

function createTogglePreview(state) {
  const classes = [
    'dynamic-toggle',
    `dynamic-toggle--${state.size}`
  ].join(' ');
  
  const trackClasses = [
    'dynamic-toggle__track',
    state.isOn ? 'dynamic-toggle__track--on' : ''
  ].filter(Boolean).join(' ');
  
  const label = state.hasLabel ? '<span>Toggle Label</span>' : '';
  
  return `
    <div class="${classes}">
      <div class="${trackClasses}" ${state.isDisabled ? 'disabled' : ''}>
        <div class="dynamic-toggle__thumb"></div>
      </div>
      ${label}
    </div>
  `;
}

function createCardPreview(state) {
  const classes = [
    'dynamic-card',
    `dynamic-card--${state.elevation}`,
    state.isOutlined ? 'dynamic-card--outlined' : '',
    state.isInteractive ? 'dynamic-card--interactive' : ''
  ].filter(Boolean).join(' ');
  
  const header = state.hasHeader ? '<div class="dynamic-card__header">Cabeçalho do Card</div>' : '';
  const actions = state.hasActions ? '<div class="dynamic-card__actions"><button class="btn btn--sm btn--primary">Ação</button></div>' : '';
  
  return `
    <div class="${classes}">
      ${header}
      <div class="dynamic-card__content">
        Este é o conteúdo do card. Demonstra como diferentes propriedades afetam a aparência do componente.
      </div>
      ${actions}
    </div>
  `;
}

function createChipPreview(state) {
  const classes = [
    'dynamic-chip',
    `dynamic-chip--${state.appearance}`,
    state.color !== 'none' ? `dynamic-chip--${state.color}` : '',
    state.isSelected ? 'dynamic-chip--selected' : ''
  ].filter(Boolean).join(' ');
  
  const text = `${state.role.charAt(0).toUpperCase() + state.role.slice(1)} Chip`;
  const dismissButton = state.isDismissible ? ' <button style="background: none; border: none; margin-left: 4px; color: inherit;">×</button>' : '';
  
  return `<span class="${classes}" ${state.isDisabled ? 'disabled' : ''}>${text}${dismissButton}</span>`;
}

// Generate TypeScript code
function updateGeneratedCode(componentName) {
  const codeContainer = document.getElementById(`${componentName.toLowerCase()}-code`);
  if (!codeContainer) return;
  
  const state = componentStates[componentName];
  const component = componentsData[componentName];
  
  const nonDefaultProps = [];
  
  Object.entries(state).forEach(([propName, value]) => {
    const defaultValue = component.props[propName].default;
    if (value !== defaultValue) {
      if (typeof value === 'boolean') {
        if (value) {
          nonDefaultProps.push(propName);
        } else {
          nonDefaultProps.push(`${propName}={false}`);
        }
      } else {
        nonDefaultProps.push(`${propName}="${value}"`);
      }
    }
  });
  
  let propsString = '';
  if (nonDefaultProps.length > 0) {
    propsString = '\n  ' + nonDefaultProps.join('\n  ') + '\n';
  }
  
  const interfaceName = `${componentName}Props`;
  
  // Generate interface
  let interfaceProps = '';
  Object.entries(component.props).forEach(([propName, prop]) => {
    const isOptional = prop.default !== undefined ? '?' : '';
    let propType = '';
    
    if (prop.type === 'boolean') {
      propType = 'boolean';
    } else if (prop.type === 'enum') {
      propType = `'${prop.options.join("' | '")}'`;
    }
    
    interfaceProps += `  ${propName}${isOptional}: ${propType};\n`;
  });
  
  const code = `import { ${componentName} } from './components/${componentName}';

interface ${interfaceName} {
${interfaceProps}}

// Uso do componente:
<${componentName}${propsString}>
  ${componentName === 'Button' ? 'Texto do Botão' : 
    componentName === 'Input' ? '' : 
    componentName === 'Badge' ? 'Badge Text' :
    componentName === 'Toggle' ? '' :
    componentName === 'Card' ? 'Conteúdo do Card' :
    componentName === 'Chip' ? 'Chip Text' : ''}
</${componentName}>`;
  
  codeContainer.textContent = code;
  
  // Add component info sections after updating code
  updateComponentInfoSections(componentName);
}

// New function to update component info sections
function updateComponentInfoSections(componentName) {
  const codeSection = document.querySelector(`[data-content="${componentName.toLowerCase()}"] .playground__code`);
  if (!codeSection) return;
  
  const component = componentsData[componentName];
  
  // Remove existing info sections if they exist
  const existingInfo = codeSection.querySelector('.component-info');
  if (existingInfo) {
    existingInfo.remove();
  }
  
  // Create new info section
  const infoSection = document.createElement('div');
  infoSection.className = 'component-info';
  
  // About component section
  const aboutSection = document.createElement('div');
  aboutSection.className = 'component-info__about';
  aboutSection.innerHTML = `
    <h4>Sobre o Componente</h4>
    <p>${component.description}</p>
  `;
  
  // Figma tips section
  const figmaSection = document.createElement('div');
  figmaSection.className = 'component-info__figma';
  figmaSection.innerHTML = `
    <h4>Como criar no Figma</h4>
    <ul>
      ${component.figmaTips.map(tip => `<li>${tip}</li>`).join('')}
    </ul>
  `;
  
  infoSection.appendChild(aboutSection);
  infoSection.appendChild(figmaSection);
  
  // Append to code section
  codeSection.appendChild(infoSection);
}

// Load practices
function loadPractices(componentName) {
  const component = componentsData[componentName];
  
  const goodList = document.getElementById(`${componentName.toLowerCase()}-good`);
  const badList = document.getElementById(`${componentName.toLowerCase()}-bad`);
  
  if (goodList && badList) {
    goodList.innerHTML = component.goodPractices.map(practice => `<li>${practice}</li>`).join('');
    badList.innerHTML = component.antiPatterns.map(pattern => `<li>${pattern}</li>`).join('');
  }
}

// Copy to clipboard
function initCopyFunctionality() {
  Object.keys(componentsData).forEach(componentName => {
    const copyButton = document.getElementById(`${componentName.toLowerCase()}-copy`);
    const codeContainer = document.getElementById(`${componentName.toLowerCase()}-code`);
    
    if (copyButton && codeContainer) {
      copyButton.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(codeContainer.textContent);
          const originalText = copyButton.textContent;
          copyButton.textContent = 'Copiado!';
          copyButton.classList.add('btn--secondary');
          copyButton.classList.remove('btn--primary');
          
          setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.classList.remove('btn--secondary');
            copyButton.classList.add('btn--primary');
          }, 2000);
        } catch (err) {
          console.error('Falha ao copiar: ', err);
        }
      });
    }
  });
}

// Reset functionality
function initResetFunctionality() {
  Object.keys(componentsData).forEach(componentName => {
    const resetButton = document.getElementById(`${componentName.toLowerCase()}-reset`);
    
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        // Reset state to defaults
        Object.keys(componentsData[componentName].props).forEach(propName => {
          const prop = componentsData[componentName].props[propName];
          componentStates[componentName][propName] = prop.default;
        });
        
        // Regenerate controls with default values
        generateControls(componentName);
        updateComponentPreview(componentName);
        updateGeneratedCode(componentName);
      });
    }
  });
}

// Initialize application
function initApp() {
  console.log('Initializing app...');
  
  // Initialize navigation first, then components
  setTimeout(() => {
    initTabNavigation();
    
    // Initialize all components
    Object.keys(componentsData).forEach(componentName => {
      generateControls(componentName);
      loadPractices(componentName);
      updateComponentPreview(componentName);
      updateGeneratedCode(componentName);
    });
    
    initCopyFunctionality();
    initResetFunctionality();
    
    console.log('App initialization completed');
  }, 100);
}

// Start app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}