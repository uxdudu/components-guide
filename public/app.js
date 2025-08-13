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
      hasTrailingIcon: {
        type: "boolean",
        label: "Has Trailing Icon",
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
      "hasTrailingIcon para ações secundárias",
      "isLoading para feedback de estado",
    ],
    badPractices: [
      'Não use color="blue" ou variant="blue"',
      "Evite disabled={true} - prefira isDisabled",
      "Não misture semântica com estética",
      "Evite nomes genéricos como type ou style",
      "Não use loading={true} - prefira isLoading",
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

      const leadingIcon = props.hasLeadingIcon ? '<span class="btn__icon btn__icon--leading">🔥</span>' : ""
      const trailingIcon = props.hasTrailingIcon ? '<span class="btn__icon btn__icon--trailing">→</span>' : ""
      const spinner = props.isLoading ? '<span class="btn__spinner"></span>' : ""
      const text = props.isLoading ? "Carregando..." : "Button"

      return `<button class="${classes}" ${props.isDisabled ? "disabled" : ""}>
        ${spinner}${leadingIcon}${text}${trailingIcon}
      </button>`
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
      hasLabel: {
        type: "boolean",
        label: "Has Label",
        default: true,
      },
      hasHelperText: {
        type: "boolean",
        label: "Has Helper Text",
        default: false,
      },
    },
    goodPractices: [
      "Use state para feedback semântico",
      "isRequired é mais claro que required",
      "hasPrefixIcon descreve o comportamento",
      "Separe estado de aparência visual",
      "hasLabel para acessibilidade",
      "hasHelperText para orientação",
    ],
    badPractices: [
      'Não use color="red" para erro',
      'Evite error={true} - prefira state="error"',
      "Não misture validação com estilo",
      "Evite props como hasError, hasSuccess",
      "Não use placeholder como label",
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
      const getStateIcon = () => {
        switch (props.state) {
          case "success": return "✓"
          case "error": return "✗"
          case "warning": return "⚠"
          default: return ""
        }
      }

      const getHelperText = () => {
        switch (props.state) {
          case "success": return "Looks good!"
          case "error": return "This field is required"
          case "warning": return "Please check this field"
          default: return "Enter your information"
        }
      }

      const prefixIcon = props.hasPrefixIcon ? '<span class="input-field__icon input-field__icon--prefix">🔍</span>' : ""
      const suffixIcon = props.hasSuffixIcon ? `<span class="input-field__icon input-field__icon--suffix">${getStateIcon() || "✓"}</span>` : ""
      const label = props.hasLabel ? `<label class="input-field__label">Label ${props.isRequired ? '<span class="input-field__required">*</span>' : ''}</label>` : ""
      const helperText = props.hasHelperText ? `<div class="input-field__helper input-field__helper--${props.state}">${getHelperText()}</div>` : ""

      return `<div class="input-wrapper">
        ${label}
        <div class="${classes}">
          ${prefixIcon}
          <input class="input-field__input" placeholder="Digite algo..." ${props.isDisabled ? "disabled" : ""} ${props.isRequired ? "required" : ""} />
          ${suffixIcon}
        </div>
        ${helperText}
      </div>`
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
      size: {
        type: "select",
        label: "Size",
        options: ["xs", "sm", "md", "lg"],
        default: "md",
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
      hasDot: {
        type: "boolean",
        label: "Has Dot",
        default: false,
      },
    },
    goodPractices: [
      "Use tone quando há significado semântico",
      "Use color apenas para decoração",
      "isPill é mais claro que rounded",
      "isDismissible descreve comportamento",
      "hasDot para indicadores visuais",
      "size para hierarquia visual",
    ],
    badPractices: [
      'Não use color="green" para sucesso',
      'Evite variant="success-green"',
      "Não misture cor com significado",
      "Evite props como canClose, closable",
      'Não use type="small-green-pill"',
      "Evite combinar muitas propriedades em uma",
    ],
    render: (props) => {
      const actualColor = props.color !== "none" ? props.color : props.tone
      const classes = [
        "badge",
        `badge--${actualColor}`,
        `badge--${props.appearance}`,
        props.isPill ? "badge--pill" : "",
        props.hasDot ? "badge--has-dot" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const getIcon = () => {
        if (!props.hasIcon) return ""
        switch (props.tone) {
          case "success": return "✓ "
          case "warning": return "⚠ "
          case "error": return "✗ "
          case "info": return "ℹ "
          default: return "★ "
        }
      }

      const dot = props.hasDot ? '<span class="badge__dot"></span>' : ""
      const icon = getIcon()
      const dismiss = props.isDismissible ? '<span class="badge__dismiss">×</span>' : ""
      const text = `${dot}${icon}${props.tone.charAt(0).toUpperCase() + props.tone.slice(1)}${dismiss}`

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
      const indicator = props.isOn ? '<span class="toggle__indicator">✓</span>' : ""

      return `
                <div class="${classes}">
                    <div class="toggle__track">
                        <div class="toggle__thumb">${indicator}</div>
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
      hasImage: {
        type: "boolean",
        label: "Has Image",
        default: false,
      },
      variant: {
        type: "select",
        label: "Variant",
        options: ["default", "feature", "product"],
        default: "default",
      },
    },
    goodPractices: [
      "elevation comunica hierarquia visual",
      "isInteractive indica comportamento",
      "hasHeader/hasActions descrevem slots",
      "Semântica clara para diferentes contextos",
      "variant define o propósito do card",
      "hasImage para cards com mídia",
    ],
    badPractices: [
      'Não use shadow="large" ou border="true"',
      "Evite clickable={true}",
      "Não misture estilo com comportamento",
      "Evite props genéricos como type",
      "Não use imageUrl - prefira hasImage",
    ],
    render: (props) => {
      const classes = [
        "card",
        `card--${props.elevation}`,
        `card--${props.variant}`,
        props.isInteractive ? "card--interactive" : "",
        props.isOutlined ? "card--outlined" : "",
        props.hasImage ? "card--has-image" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const image = props.hasImage ? '<div class="card__image"><div class="card__image-placeholder">📷</div></div>' : ""
      const header = props.hasHeader ? '<div class="card__header"><h3 class="card__title">Card Title</h3><p class="card__subtitle">Subtitle text</p></div>' : ""
      const actions = props.hasActions
        ? '<div class="card__actions"><button class="btn btn--sm btn--ghost">Cancel</button><button class="btn btn--sm btn--primary">Confirm</button></div>'
        : ""

      return `
                <div class="${classes}">
                    ${image}
                    ${header}
                    <div class="card__content">
                        <p class="card__description">Card content goes here. This is a sample card component with more detailed information.</p>
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
      size: {
        type: "select",
        label: "Size",
        options: ["sm", "md", "lg"],
        default: "md",
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
      hasIcon: {
        type: "boolean",
        label: "Has Icon",
        default: false,
      },
    },
    goodPractices: [
      "role define o comportamento do chip",
      "Separe comportamento de aparência",
      "isSelected para estado de seleção",
      "color apenas quando não há semântica",
      "hasIcon para chips com ícones",
      "size para hierarquia visual",
    ],
    badPractices: [
      'Não use type="filter-blue"',
      'Evite variant="selected-green"',
      "Não misture role com cor",
      "Evite props como active, checked",
      "Não use iconName - prefira hasIcon",
    ],
    render: (props) => {
      const actualColor = props.color !== "none" ? props.color : "blue"
      const classes = [
        "chip",
        `chip--${props.role}`,
        `chip--${props.appearance}`,
        `chip--${actualColor}`,
        `chip--${props.size}`,
        props.isSelected ? "chip--selected" : "",
        props.isDisabled ? "chip--disabled" : "",
        props.hasIcon ? "chip--has-icon" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const getIcon = () => {
        if (!props.hasIcon) return ""
        switch (props.role) {
          case "filter": return "🔍"
          case "selection": return "✓"
          case "token": return "🏷"
          case "status": return "●"
          default: return "★"
        }
      }

      const icon = props.hasIcon ? `<span class="chip__icon">${getIcon()}</span>` : ""
      const dismiss = props.isDismissible ? '<span class="chip__dismiss">×</span>' : ""
      const text = props.role.charAt(0).toUpperCase() + props.role.slice(1)

      return `<span class="${classes}">${icon}${text}${dismiss}</span>`
    },
  },

  accordion: {
    props: {
      isExpanded: {
        type: "boolean",
        label: "Is Expanded",
        default: true,
      },
      variant: {
        type: "select",
        label: "Variant",
        options: ["default", "bordered", "filled"],
        default: "default",
      },
      size: {
        type: "select",
        label: "Size",
        options: ["sm", "md", "lg"],
        default: "md",
      },
      hasIcon: {
        type: "boolean",
        label: "Has Icon",
        default: true,
      },
      isDisabled: {
        type: "boolean",
        label: "Is Disabled",
        default: false,
      },
      allowMultiple: {
        type: "boolean",
        label: "Allow Multiple",
        default: false,
      },
      hasAnimation: {
        type: "boolean",
        label: "Has Animation",
        default: true,
      },
    },
    goodPractices: [
      "isExpanded é mais claro que open ou active",
      "variant define o estilo visual",
      "hasIcon descreve a presença do indicador",
      "allowMultiple para comportamento de grupo",
      "hasAnimation para controle de transições",
      "size para hierarquia visual",
    ],
    badPractices: [
      'Não use open={true} ou active={true}',
      'Evite expanded="true" como string',
      "Não misture estado com aparência",
      "Evite props como collapsible, foldable",
      "Não use iconPosition - prefira hasIcon",
    ],
    render: (props) => {
      const classes = [
        "accordion",
        `accordion--${props.variant}`,
        `accordion--${props.size}`,
        props.isExpanded ? "accordion--expanded" : "accordion--collapsed",
        props.isDisabled ? "accordion--disabled" : "",
        props.hasAnimation ? "accordion--animated" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const icon = props.hasIcon ? 
        `<span class="accordion__icon ${props.isExpanded ? 'accordion__icon--expanded' : ''}">${props.isExpanded ? '▼' : '▶'}</span>` : ""
      
      const content = props.isExpanded ? `
        <div class="accordion__content">
          <div class="accordion__body">
            <p>Este é o conteúdo do accordion. Aqui você pode colocar qualquer tipo de informação, desde texto simples até componentes complexos.</p>
            <div class="accordion__actions">
              <button class="btn btn--sm btn--ghost">Cancelar</button>
              <button class="btn btn--sm btn--primary">Confirmar</button>
            </div>
          </div>
        </div>
      ` : ""

      return `
        <div class="${classes}">
          <div class="accordion__header">
            ${icon}
            <span class="accordion__title">Seção do Accordion</span>
            <span class="accordion__subtitle">Clique para ${props.isExpanded ? 'recolher' : 'expandir'}</span>
          </div>
          ${content}
        </div>
      `
    },
  },

  avatar: {
    props: {
      size: {
        type: "select",
        label: "Size",
        options: ["xs", "sm", "md", "lg", "xl", "2xl"],
        default: "md",
      },
      variant: {
        type: "select",
        label: "Variant",
        options: ["circular", "rounded", "square"],
        default: "circular",
      },
      hasImage: {
        type: "boolean",
        label: "Has Image",
        default: false,
      },
      hasStatus: {
        type: "boolean",
        label: "Has Status",
        default: false,
      },
      statusType: {
        type: "select",
        label: "Status Type",
        options: ["online", "offline", "away", "busy"],
        default: "online",
      },
      hasBorder: {
        type: "boolean",
        label: "Has Border",
        default: false,
      },
      isClickable: {
        type: "boolean",
        label: "Is Clickable",
        default: false,
      },
    },
    goodPractices: [
      "size para diferentes contextos de uso",
      "hasImage vs src para controle semântico",
      "hasStatus descreve funcionalidade",
      "statusType para diferentes estados",
      "isClickable indica interatividade",
      "variant define forma geométrica",
    ],
    badPractices: [
      'Não use src="" para controlar imagem',
      'Evite online={true} - prefira statusType',
      "Não misture tamanho com forma",
      "Evite props como clickable, bordered",
      "Não use color para status",
    ],
    render: (props) => {
      const classes = [
        "avatar",
        `avatar--${props.size}`,
        `avatar--${props.variant}`,
        props.hasBorder ? "avatar--bordered" : "",
        props.isClickable ? "avatar--clickable" : "",
        props.hasImage ? "avatar--has-image" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const statusClasses = [
        "avatar__status",
        `avatar__status--${props.statusType}`,
      ].join(" ")

      const content = props.hasImage ? 
        '<div class="avatar__image">👤</div>' : 
        '<span class="avatar__initials">JD</span>'

      const status = props.hasStatus ? 
        `<div class="${statusClasses}"></div>` : ""

      return `
        <div class="${classes}">
          ${content}
          ${status}
        </div>
      `
    },
  },

  dialog: {
    props: {
      isOpen: {
        type: "boolean",
        label: "Is Open",
        default: true,
      },
      size: {
        type: "select",
        label: "Size",
        options: ["xs", "sm", "md", "lg", "xl", "full"],
        default: "md",
      },
      variant: {
        type: "select",
        label: "Variant",
        options: ["default", "alert", "confirmation"],
        default: "default",
      },
      hasOverlay: {
        type: "boolean",
        label: "Has Overlay",
        default: true,
      },
      isDismissible: {
        type: "boolean",
        label: "Is Dismissible",
        default: true,
      },
      hasHeader: {
        type: "boolean",
        label: "Has Header",
        default: true,
      },
      hasFooter: {
        type: "boolean",
        label: "Has Footer",
        default: true,
      },
    },
    goodPractices: [
      "isOpen para controle de visibilidade",
      "isDismissible indica se pode fechar",
      "hasOverlay descreve backdrop",
      "variant define propósito semântico",
      "size para diferentes contextos",
      "hasHeader/hasFooter para slots",
    ],
    badPractices: [
      'Não use visible={true} ou show={true}',
      'Evite closable - prefira isDismissible',
      "Não misture tamanho com tipo",
      "Evite props como modal, popup",
      "Não use backdrop - prefira hasOverlay",
    ],
    render: (props) => {
      if (!props.isOpen) return '<div class="dialog-placeholder">Dialog está fechado</div>'

      const classes = [
        "dialog",
        `dialog--${props.size}`,
        `dialog--${props.variant}`,
        props.isDismissible ? "dialog--dismissible" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const overlay = props.hasOverlay ? '<div class="dialog__overlay"></div>' : ""
      
      const header = props.hasHeader ? `
        <div class="dialog__header">
          <h3 class="dialog__title">Título do Dialog</h3>
          ${props.isDismissible ? '<button class="dialog__close">×</button>' : ''}
        </div>
      ` : ""

      const footer = props.hasFooter ? `
        <div class="dialog__footer">
          <button class="btn btn--sm btn--ghost">Cancelar</button>
          <button class="btn btn--sm btn--primary">Confirmar</button>
        </div>
      ` : ""

      return `
        <div class="dialog-container">
          ${overlay}
          <div class="${classes}">
            ${header}
            <div class="dialog__content">
              <p>Este é o conteúdo do dialog. Aqui você pode colocar formulários, informações ou qualquer outro conteúdo relevante.</p>
            </div>
            ${footer}
          </div>
        </div>
      `
    },
  },

  menu: {
    props: {
      isOpen: {
        type: "boolean",
        label: "Is Open",
        default: true,
      },
      placement: {
        type: "select",
        label: "Placement",
        options: ["bottom-start", "bottom-end", "top-start", "top-end", "right", "left"],
        default: "bottom-start",
      },
      variant: {
        type: "select",
        label: "Variant",
        options: ["default", "context", "navigation"],
        default: "default",
      },
      hasIcons: {
        type: "boolean",
        label: "Has Icons",
        default: true,
      },
      hasDividers: {
        type: "boolean",
        label: "Has Dividers",
        default: true,
      },
      hasSearch: {
        type: "boolean",
        label: "Has Search",
        default: false,
      },
      isMultiLevel: {
        type: "boolean",
        label: "Is Multi Level",
        default: false,
      },
    },
    goodPractices: [
      "isOpen para controle de visibilidade",
      "placement para posicionamento semântico",
      "hasIcons descreve presença de ícones",
      "hasDividers para separadores visuais",
      "variant define contexto de uso",
      "isMultiLevel para menus aninhados",
    ],
    badPractices: [
      'Não use visible ou show para estado',
      'Evite position - prefira placement',
      "Não misture estilo com comportamento",
      "Evite props como dropdown, popup",
      "Não use iconPosition - prefira hasIcons",
    ],
    render: (props) => {
      if (!props.isOpen) return '<div class="menu-trigger">Menu ▼</div>'

      const classes = [
        "menu",
        `menu--${props.variant}`,
        `menu--${props.placement}`,
        props.hasIcons ? "menu--has-icons" : "",
        props.isMultiLevel ? "menu--multi-level" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const search = props.hasSearch ? `
        <div class="menu__search">
          <input class="menu__search-input" placeholder="Buscar..." />
        </div>
      ` : ""

      const divider = props.hasDividers ? '<div class="menu__divider"></div>' : ""

      const icon = (name) => props.hasIcons ? `<span class="menu__icon">${name}</span>` : ""

      return `
        <div class="${classes}">
          ${search}
          <div class="menu__item">
            ${icon('📝')}
            <span>Editar</span>
            <span class="menu__shortcut">⌘E</span>
          </div>
          <div class="menu__item">
            ${icon('📋')}
            <span>Copiar</span>
            <span class="menu__shortcut">⌘C</span>
          </div>
          ${divider}
          <div class="menu__item menu__item--danger">
            ${icon('🗑')}
            <span>Excluir</span>
            <span class="menu__shortcut">⌘⌫</span>
          </div>
        </div>
      `
    },
  },

  tabs: {
    props: {
      activeTab: {
        type: "select",
        label: "Active Tab",
        options: ["tab1", "tab2", "tab3"],
        default: "tab1",
      },
      variant: {
        type: "select",
        label: "Variant",
        options: ["line", "enclosed", "soft-rounded", "solid-rounded"],
        default: "line",
      },
      size: {
        type: "select",
        label: "Size",
        options: ["sm", "md", "lg"],
        default: "md",
      },
      isVertical: {
        type: "boolean",
        label: "Is Vertical",
        default: false,
      },
      hasIcons: {
        type: "boolean",
        label: "Has Icons",
        default: false,
      },
      isFitted: {
        type: "boolean",
        label: "Is Fitted",
        default: false,
      },
      isDisabled: {
        type: "boolean",
        label: "Is Disabled",
        default: false,
      },
    },
    goodPractices: [
      "activeTab para controle de estado",
      "variant define estilo visual",
      "isVertical para orientação",
      "hasIcons descreve presença de ícones",
      "isFitted para largura total",
      "size para hierarquia visual",
    ],
    badPractices: [
      'Não use selected ou current para aba ativa',
      'Evite orientation - prefira isVertical',
      "Não misture estilo com estado",
      "Evite props como fullWidth - use isFitted",
      "Não use iconPosition - prefira hasIcons",
    ],
    render: (props) => {
      const classes = [
        "tabs",
        `tabs--${props.variant}`,
        `tabs--${props.size}`,
        props.isVertical ? "tabs--vertical" : "tabs--horizontal",
        props.isFitted ? "tabs--fitted" : "",
        props.isDisabled ? "tabs--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const getIcon = (tab) => {
        if (!props.hasIcons) return ""
        const icons = { tab1: "🏠", tab2: "👤", tab3: "⚙️" }
        return `<span class="tabs__icon">${icons[tab]}</span>`
      }

      const tabs = ["tab1", "tab2", "tab3"].map(tab => {
        const isActive = tab === props.activeTab
        const tabClasses = [
          "tabs__tab",
          isActive ? "tabs__tab--active" : "",
        ].filter(Boolean).join(" ")

        const labels = { tab1: "Home", tab2: "Profile", tab3: "Settings" }
        
        return `
          <button class="${tabClasses}">
            ${getIcon(tab)}
            <span>${labels[tab]}</span>
          </button>
        `
      }).join("")

      const content = `
        <div class="tabs__content">
          <div class="tabs__panel">
            Conteúdo da aba ${props.activeTab === "tab1" ? "Home" : props.activeTab === "tab2" ? "Profile" : "Settings"}
          </div>
        </div>
      `

      return `
        <div class="${classes}">
          <div class="tabs__list">
            ${tabs}
          </div>
          ${content}
        </div>
      `
    },
  },

  tags: {
    props: {
      variant: {
        type: "select",
        label: "Variant",
        options: ["solid", "subtle", "outline"],
        default: "subtle",
      },
      color: {
        type: "select",
        label: "Color",
        options: ["gray", "blue", "green", "yellow", "red", "purple"],
        default: "blue",
      },
      size: {
        type: "select",
        label: "Size",
        options: ["sm", "md", "lg"],
        default: "md",
      },
      isDismissible: {
        type: "boolean",
        label: "Is Dismissible",
        default: false,
      },
      isInteractive: {
        type: "boolean",
        label: "Is Interactive",
        default: false,
      },
      hasIcon: {
        type: "boolean",
        label: "Has Icon",
        default: false,
      },
      isDisabled: {
        type: "boolean",
        label: "Is Disabled",
        default: false,
      },
    },
    goodPractices: [
      "variant define aparência visual",
      "color para categorização",
      "isDismissible indica remoção",
      "isInteractive para cliques",
      "hasIcon descreve presença de ícone",
      "size para hierarquia visual",
    ],
    badPractices: [
      'Não use closable - prefira isDismissible',
      'Evite clickable - prefira isInteractive',
      "Não misture cor com comportamento",
      "Evite props como removable, selectable",
      "Não use iconName - prefira hasIcon",
    ],
    render: (props) => {
      const classes = [
        "tag",
        `tag--${props.variant}`,
        `tag--${props.color}`,
        `tag--${props.size}`,
        props.isInteractive ? "tag--interactive" : "",
        props.isDisabled ? "tag--disabled" : "",
        props.hasIcon ? "tag--has-icon" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const icon = props.hasIcon ? '<span class="tag__icon">🏷</span>' : ""
      const dismiss = props.isDismissible ? '<button class="tag__dismiss">×</button>' : ""

      return `
        <span class="${classes}">
          ${icon}
          <span class="tag__label">Tag Label</span>
          ${dismiss}
        </span>
      `
    },
  },

  tooltip: {
    props: {
      isVisible: {
        type: "boolean",
        label: "Is Visible",
        default: true,
      },
      placement: {
        type: "select",
        label: "Placement",
        options: ["top", "bottom", "left", "right", "top-start", "top-end", "bottom-start", "bottom-end"],
        default: "top",
      },
      variant: {
        type: "select",
        label: "Variant",
        options: ["default", "light", "success", "warning", "error"],
        default: "default",
      },
      hasArrow: {
        type: "boolean",
        label: "Has Arrow",
        default: true,
      },
      size: {
        type: "select",
        label: "Size",
        options: ["sm", "md", "lg"],
        default: "md",
      },
      isInteractive: {
        type: "boolean",
        label: "Is Interactive",
        default: false,
      },
      hasCloseButton: {
        type: "boolean",
        label: "Has Close Button",
        default: false,
      },
    },
    goodPractices: [
      "isVisible para controle de estado",
      "placement para posicionamento",
      "hasArrow descreve indicador visual",
      "variant para contexto semântico",
      "isInteractive para tooltips clicáveis",
      "size para diferentes contextos",
    ],
    badPractices: [
      'Não use show ou visible como string',
      'Evite position - prefira placement',
      "Não misture estilo com comportamento",
      "Evite props como arrow, closable",
      "Não use color para variantes semânticas",
    ],
    render: (props) => {
      if (!props.isVisible) return '<div class="tooltip-trigger">Hover me</div>'

      const classes = [
        "tooltip",
        `tooltip--${props.variant}`,
        `tooltip--${props.placement}`,
        `tooltip--${props.size}`,
        props.hasArrow ? "tooltip--has-arrow" : "",
        props.isInteractive ? "tooltip--interactive" : "",
      ]
        .filter(Boolean)
        .join(" ")

      const arrow = props.hasArrow ? '<div class="tooltip__arrow"></div>' : ""
      const closeButton = props.hasCloseButton ? '<button class="tooltip__close">×</button>' : ""

      return `
        <div class="tooltip-container">
          <div class="tooltip-trigger">Hover target</div>
          <div class="${classes}">
            ${arrow}
            <div class="tooltip__content">
              Esta é uma tooltip informativa
              ${closeButton}
            </div>
          </div>
        </div>
      `
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