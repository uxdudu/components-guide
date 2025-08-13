// Configuração dos componentes
const componentConfigs = {
  button: {
    props: {
      intent: {
        type: "select",
        label: "Intent",
        options: ["primary", "secondary", "tertiary", "destructive"],
        default: "primary",
      },
      size: {
        type: "select",
        label: "Size",
        options: ["sm", "md", "lg"],
        default: "md",
      },
      appearance: {
        type: "select",
        label: "Appearance",
        options: ["solid", "outlined", "ghost"],
        default: "solid",
      },
      isDisabled: {
        type: "boolean",
        label: "Is Disabled",
        default: false,
      },
      isLoading: {
        type: "boolean",
        label: "Is Loading",
        default: false,
      },
      hasLeadingIcon: {
        type: "boolean",
        label: "Has Leading Icon",
        default: false,
      },
      isFullWidth: {
        type: "boolean",
        label: "Is Full Width",
        default: false,
      },
    },
    goodPractices: [
      "Use intent para significado semântico",
      "Prefira isDisabled a disabled",
      "Use hasLeadingIcon para ícones",
      "isFullWidth para layout responsivo",
    ],
    badPractices: [
      'Não use color="blue" ou variant="blue"',
      "Evite disabled={true} - prefira isDisabled",
      "Não misture semântica com estética",
      "Evite nomes genéricos como type ou style",
    ],
    render: (props) => {
      const classes = [
        "btn",
        `btn--${props.intent}`,
        `btn--${props.size}`,
        `btn--${props.appearance}`,
        props.isFullWidth ? "btn--full-width" : "",
        props.isDisabled ? "btn--disabled" : "",
        props.isLoading ? "btn--loading" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const icon = props.hasLeadingIcon ? "🔥 " : ""
      const text = props.isLoading ? "Carregando..." : `${icon}Button`

      return `<button class="${classes}" ${props.isDisabled ? "disabled" : ""}>${text}</button>`
    },
  },

  input: {
    props: {
      state: {
        type: "select",
        label: "State",
        options: ["default", "error", "success", "warning"],
        default: "default",
      },
      size: {
        type: "select",
        label: "Size",
        options: ["sm", "md", "lg"],
        default: "md",
      },
      appearance: {
        type: "select",
        label: "Appearance",
        options: ["filled", "outlined", "ghost"],
        default: "outlined",
      },
      isRequired: {
        type: "boolean",
        label: "Is Required",
        default: false,
      },
      isDisabled: {
        type: "boolean",
        label: "Is Disabled",
        default: false,
      },
      hasPrefixIcon: {
        type: "boolean",
        label: "Has Prefix Icon",
        default: false,
      },
      hasSuffixIcon: {
        type: "boolean",
        label: "Has Suffix Icon",
        default: false,
      },
    },
    goodPractices: [
      "Use state para feedback semântico",
      "isRequired é mais claro que required",
      "hasPrefixIcon descreve o comportamento",
      "Separe estado de aparência visual",
    ],
    badPractices: [
      'Não use color="red" para erro',
      'Evite error={true} - prefira state="error"',
      "Não misture validação com estilo",
      "Evite props como hasError, hasSuccess",
    ],
    render: (props) => {
      const classes = [
        "input",
        `input--${props.state}`,
        `input--${props.size}`,
        `input--${props.appearance}`,
        props.isDisabled ? "input--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const prefix = props.hasPrefixIcon ? "🔍 " : ""
      const suffix = props.hasSuffixIcon ? " ✓" : ""
      const placeholder = `${prefix}Digite algo...${suffix}`

      return `<input class="${classes}" placeholder="${placeholder}" ${props.isDisabled ? "disabled" : ""} ${props.isRequired ? "required" : ""} />`
    },
  },

  badge: {
    props: {
      tone: {
        type: "select",
        label: "Tone (Semântico)",
        options: ["success", "warning", "info", "error", "neutral"],
        default: "success",
      },
      appearance: {
        type: "select",
        label: "Appearance",
        options: ["subtle", "bold", "outline"],
        default: "subtle",
      },
      color: {
        type: "select",
        label: "Color (Decorativo)",
        options: ["none", "purple", "orange", "teal"],
        default: "none",
      },
      isPill: {
        type: "boolean",
        label: "Is Pill",
        default: false,
      },
      hasIcon: {
        type: "boolean",
        label: "Has Icon",
        default: false,
      },
      isDismissible: {
        type: "boolean",
        label: "Is Dismissible",
        default: false,
      },
    },
    goodPractices: [
      "Use tone quando há significado semântico",
      "Use color apenas para decoração",
      "isPill é mais claro que rounded",
      "isDismissible descreve comportamento",
    ],
    badPractices: [
      'Não use color="green" para sucesso',
      'Evite variant="success-green"',
      "Não misture cor com significado",
      "Evite props como canClose, closable",
    ],
    render: (props) => {
      const actualColor = props.color !== "none" ? props.color : props.tone
      const classes = [
        "badge",
        `badge--${actualColor}`,
        `badge--${props.appearance}`,
        props.isPill ? "badge--pill" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const icon = props.hasIcon ? "✓ " : ""
      const dismiss = props.isDismissible ? " ×" : ""
      const text = `${icon}${props.tone}${dismiss}`

      return `<span class="${classes}">${text}</span>`
    },
  },

  toggle: {
    props: {
      isOn: {
        type: "boolean",
        label: "Is On",
        default: true,
      },
      isDisabled: {
        type: "boolean",
        label: "Is Disabled",
        default: false,
      },
      hasLabel: {
        type: "boolean",
        label: "Has Label",
        default: true,
      },
      size: {
        type: "select",
        label: "Size",
        options: ["sm", "md"],
        default: "md",
      },
    },
    goodPractices: [
      "isOn é mais claro que checked ou value",
      "Estados binários são ideais para boolean",
      "hasLabel descreve a presença do texto",
      "Nomes claros facilitam uso no Figma",
    ],
    badPractices: [
      "Não use checked={true}",
      'Evite value="on" ou state="active"',
      "Não use color para indicar estado",
      "Evite props como active, enabled",
    ],
    render: (props) => {
      const classes = [
        "toggle",
        `toggle--${props.size}`,
        props.isOn ? "toggle--on" : "toggle--off",
        props.isDisabled ? "toggle--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const label = props.hasLabel ? `<span class="toggle__label">${props.isOn ? "Ligado" : "Desligado"}</span>` : ""

      return `
                <div class="${classes}">
                    <div class="toggle__track">
                        <div class="toggle__thumb"></div>
                    </div>
                    ${label}
                </div>
            `
    },
  },

  card: {
    props: {
      elevation: {
        type: "select",
        label: "Elevation",
        options: ["base", "raised", "overlay"],
        default: "base",
      },
      isInteractive: {
        type: "boolean",
        label: "Is Interactive",
        default: false,
      },
      isOutlined: {
        type: "boolean",
        label: "Is Outlined",
        default: true,
      },
      hasHeader: {
        type: "boolean",
        label: "Has Header",
        default: true,
      },
      hasActions: {
        type: "boolean",
        label: "Has Actions",
        default: false,
      },
    },
    goodPractices: [
      "elevation comunica hierarquia visual",
      "isInteractive indica comportamento",
      "hasHeader/hasActions descrevem slots",
      "Semântica clara para diferentes contextos",
    ],
    badPractices: [
      'Não use shadow="large" ou border="true"',
      "Evite clickable={true}",
      "Não misture estilo com comportamento",
      "Evite props genéricos como type",
    ],
    render: (props) => {
      const classes = [
        "card",
        `card--${props.elevation}`,
        props.isInteractive ? "card--interactive" : "",
        props.isOutlined ? "card--outlined" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const header = props.hasHeader ? '<div class="card__header"><h3>Card Title</h3></div>' : ""
      const actions = props.hasActions
        ? '<div class="card__actions"><button class="btn btn--sm btn--primary">Action</button></div>'
        : ""

      return `
                <div class="${classes}">
                    ${header}
                    <div class="card__content">
                        <p>Card content goes here. This is a sample card component.</p>
                    </div>
                    ${actions}
                </div>
            `
    },
  },

  chip: {
    props: {
      role: {
        type: "select",
        label: "Role (Comportamento)",
        options: ["filter", "selection", "token", "status"],
        default: "filter",
      },
      appearance: {
        type: "select",
        label: "Appearance",
        options: ["filled", "outline", "soft"],
        default: "filled",
      },
      color: {
        type: "select",
        label: "Color (Decorativo)",
        options: ["none", "gray", "blue", "green"],
        default: "none",
      },
      isSelected: {
        type: "boolean",
        label: "Is Selected",
        default: false,
      },
      isDismissible: {
        type: "boolean",
        label: "Is Dismissible",
        default: false,
      },
      isDisabled: {
        type: "boolean",
        label: "Is Disabled",
        default: false,
      },
    },
    goodPractices: [
      "role define o comportamento do chip",
      "Separe comportamento de aparência",
      "isSelected para estado de seleção",
      "color apenas quando não há semântica",
    ],
    badPractices: [
      'Não use type="filter-blue"',
      'Evite variant="selected-green"',
      "Não misture role com cor",
      "Evite props como active, checked",
    ],
    render: (props) => {
      const actualColor = props.color !== "none" ? props.color : "blue"
      const classes = [
        "chip",
        `chip--${props.role}`,
        `chip--${props.appearance}`,
        `chip--${actualColor}`,
        props.isSelected ? "chip--selected" : "",
        props.isDisabled ? "chip--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const dismiss = props.isDismissible ? " ×" : ""
      const text = `${props.role}${dismiss}`

      return `<span class="${classes}">${text}</span>`
    },
  },
}

// Estado da aplicação
let currentTab = "dashboard"
const componentStates = {}

// Inicializar estados dos componentes
Object.keys(componentConfigs).forEach((component) => {
  componentStates[component] = {}
  Object.entries(componentConfigs[component].props).forEach(([prop, config]) => {
    componentStates[component][prop] = config.default
  })
})

// Funções de navegação
function switchTab(tabName) {
  // Remover classe ativa de todas as abas
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.remove("nav-tab--active")
  })

  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("tab-content--active")
  })

  // Ativar aba atual
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`)
  const activeContent = document.querySelector(`[data-content="${tabName}"]`)

  if (activeTab && activeContent) {
    activeTab.classList.add("nav-tab--active")
    activeContent.classList.add("tab-content--active")
    currentTab = tabName

    // Se não for dashboard, inicializar playground
    if (tabName !== "dashboard" && componentConfigs[tabName]) {
      initializePlayground(tabName)
    }
  }
}

// Inicializar playground de um componente
function initializePlayground(componentName) {
  const config = componentConfigs[componentName]
  if (!config) return

  // Gerar controles
  generateControls(componentName, config)

  // Gerar práticas
  generatePractices(componentName, config)

  // Renderizar componente inicial
  renderComponent(componentName)

  // Gerar código inicial
  generateCode(componentName)
}

// Gerar controles dinâmicos
function generateControls(componentName, config) {
  const controlsContainer = document.getElementById(`${componentName}-controls`)
  if (!controlsContainer) return

  controlsContainer.innerHTML = ""

  Object.entries(config.props).forEach(([propName, propConfig]) => {
    const controlGroup = document.createElement("div")
    controlGroup.className = "control-group"

    const label = document.createElement("label")
    label.className = "control-label"
    label.textContent = propConfig.label

    let control

    if (propConfig.type === "select") {
      control = document.createElement("select")
      control.className = "control-select"

      propConfig.options.forEach((option) => {
        const optionElement = document.createElement("option")
        optionElement.value = option
        optionElement.textContent = option
        optionElement.selected = option === propConfig.default
        control.appendChild(optionElement)
      })

      control.addEventListener("change", (e) => {
        componentStates[componentName][propName] = e.target.value
        renderComponent(componentName)
        generateCode(componentName)
      })
    } else if (propConfig.type === "boolean") {
      const checkboxContainer = document.createElement("label")
      checkboxContainer.className = "control-checkbox"

      control = document.createElement("input")
      control.type = "checkbox"
      control.checked = propConfig.default

      const checkboxLabel = document.createElement("span")
      checkboxLabel.textContent = propConfig.label

      checkboxContainer.appendChild(control)
      checkboxContainer.appendChild(checkboxLabel)

      control.addEventListener("change", (e) => {
        componentStates[componentName][propName] = e.target.checked
        renderComponent(componentName)
        generateCode(componentName)
      })

      controlGroup.appendChild(checkboxContainer)
      controlsContainer.appendChild(controlGroup)
      return
    }

    controlGroup.appendChild(label)
    controlGroup.appendChild(control)
    controlsContainer.appendChild(controlGroup)
  })
}

// Gerar seção de práticas
function generatePractices(componentName, config) {
  const goodList = document.getElementById(`${componentName}-good`)
  const badList = document.getElementById(`${componentName}-bad`)

  if (goodList) {
    goodList.innerHTML = ""
    config.goodPractices.forEach((practice) => {
      const li = document.createElement("li")
      li.textContent = practice
      goodList.appendChild(li)
    })
  }

  if (badList) {
    badList.innerHTML = ""
    config.badPractices.forEach((practice) => {
      const li = document.createElement("li")
      li.textContent = practice
      badList.appendChild(li)
    })
  }
}

// Renderizar componente
function renderComponent(componentName) {
  const config = componentConfigs[componentName]
  const previewContainer = document.getElementById(`${componentName}-preview`)

  if (!config || !previewContainer) return

  const props = componentStates[componentName]
  const html = config.render(props)

  previewContainer.innerHTML = html
}

// Gerar código TypeScript
function generateCode(componentName) {
  const codeContainer = document.getElementById(`${componentName}-code`)
  if (!codeContainer) return

  const props = componentStates[componentName]
  const propsString = Object.entries(props)
    .filter(([key, value]) => {
      const defaultValue = componentConfigs[componentName].props[key].default
      return value !== defaultValue
    })
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? key : `${key}={false}`
      }
      return `${key}="${value}"`
    })
    .join("\n  ")

  const componentNameCapitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1)

  const code = `interface ${componentNameCapitalized}Props {
${Object.entries(componentConfigs[componentName].props)
  .map(([key, config]) => {
    const type =
      config.type === "boolean" ? "boolean" : config.type === "select" ? `'${config.options.join("' | '")}'` : "string"
    return `  ${key}?: ${type};`
  })
  .join("\n")}
}

<${componentNameCapitalized}
${propsString ? "  " + propsString : ""}
>
  Content
</${componentNameCapitalized}>`

  codeContainer.textContent = code
}

// Função de reset
function resetComponent(componentName) {
  const config = componentConfigs[componentName]
  if (!config) return

  // Reset state
  Object.entries(config.props).forEach(([prop, propConfig]) => {
    componentStates[componentName][prop] = propConfig.default
  })

  // Reset controls
  const controlsContainer = document.getElementById(`${componentName}-controls`)
  if (controlsContainer) {
    controlsContainer.querySelectorAll("select").forEach((select) => {
      const propName = Object.keys(config.props).find(
        (prop) =>
          config.props[prop].type === "select" &&
          select.closest(".control-group").querySelector(".control-label").textContent === config.props[prop].label,
      )
      if (propName) {
        select.value = config.props[propName].default
      }
    })

    controlsContainer.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      const propName = Object.keys(config.props).find(
        (prop) =>
          config.props[prop].type === "boolean" &&
          checkbox.closest(".control-checkbox").textContent.trim() === config.props[prop].label,
      )
      if (propName) {
        checkbox.checked = config.props[propName].default
      }
    })
  }

  // Re-render
  renderComponent(componentName)
  generateCode(componentName)
}

// Função de copiar código
function copyCode(componentName) {
  const codeContainer = document.getElementById(`${componentName}-code`)
  if (!codeContainer) return

  navigator.clipboard.writeText(codeContainer.textContent).then(() => {
    const copyButton = document.getElementById(`${componentName}-copy`)
    const originalText = copyButton.textContent
    copyButton.textContent = "Copiado!"
    setTimeout(() => {
      copyButton.textContent = originalText
    }, 2000)
  })
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Navegação por abas
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.getAttribute("data-tab")
      switchTab(tabName)
    })
  })

  // Cards de componentes no dashboard
  document.querySelectorAll(".component-card").forEach((card) => {
    card.addEventListener("click", () => {
      const componentName = card.getAttribute("data-component")
      switchTab(componentName)
    })
  })

  // Botões de reset e copy
  Object.keys(componentConfigs).forEach((componentName) => {
    const resetButton = document.getElementById(`${componentName}-reset`)
    const copyButton = document.getElementById(`${componentName}-copy`)

    if (resetButton) {
      resetButton.addEventListener("click", () => resetComponent(componentName))
    }

    if (copyButton) {
      copyButton.addEventListener("click", () => copyCode(componentName))
    }
  })

  // Inicializar dashboard
  switchTab("dashboard")
})
