# 🎨 Build Components - Guia de Boas Práticas

Uma aplicação interativa que ensina como construir componentes de UI seguindo as melhores práticas de design, com foco na diferença entre naming semântico e estético.

## ✨ Características

- **Dashboard Interativo** com princípios fundamentais de design de componentes
- **Playground de Componentes** para Button, Input, Badge, Toggle, Card e Chip
- **Controles Dinâmicos** que permitem testar diferentes propriedades em tempo real
- **Geração Automática de Código TypeScript** baseada nas configurações selecionadas
- **Dicas do Figma** para cada componente
- **Boas Práticas vs Anti-patterns** com exemplos práticos
- **Design System Completo** com tokens de cores, tipografia e espaçamento
- **Modo Escuro/Claro** com suporte automático ao sistema

## 🚀 Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/build-components.git
   cd build-components
   ```

2. **Abra o projeto:**
   - Abra o arquivo `index.html` em qualquer navegador moderno
   - Ou use um servidor local simples:
   ```bash
   python -m http.server 8000
   # ou
   npx serve .
   ```

3. **Explore os Componentes:**
   - Navegue pelo dashboard para entender os princípios
   - Clique em qualquer componente para acessar o playground
   - Use os controles para testar diferentes propriedades
   - Copie o código TypeScript gerado

## 🎯 Princípios Fundamentais

### 1. Uma Preocupação, Um Prop
- **Estado:** Use `state` OU `type` (nunca `color`)
- **Comportamento:** Separe semântica de estética

### 2. Boolean vs Enum
- **Boolean:** Para estados binários (`isX`, `hasY`)
- **Enum:** Para múltiplas opções (`intent`, `size`)

### 3. Nomes Claros
- `isDisabled`, `hasIcon`, `isOn`
- Nomes Figma-friendly e autoexplicativos

### 4. Semântica Primeiro
- Prefira significado quando há contexto
- Use estética apenas quando necessário

## 🧩 Componentes Disponíveis

### Button
- **Intent:** primary, secondary, tertiary, destructive
- **Size:** sm, md, lg
- **Appearance:** solid, outlined, ghost
- **Estados:** isDisabled, isLoading, hasLeadingIcon, isFullWidth

### Input
- **State:** default, error, success, warning
- **Size:** sm, md, lg
- **Appearance:** filled, outlined, ghost
- **Estados:** isRequired, isDisabled, hasPrefixIcon, hasSuffixIcon

### Badge
- **Tone:** success, warning, info, error, neutral
- **Appearance:** subtle, bold, outline
- **Color:** none, purple, orange, teal (apenas decorativo)
- **Estados:** isPill, hasIcon, isDismissible

### Toggle
- **Estados:** isOn, isDisabled, hasLabel
- **Size:** sm, md
- **Comportamento:** Binário e claro

### Card
- **Elevation:** base, raised, overlay
- **Estados:** isInteractive, isOutlined
- **Slots:** hasHeader, hasActions

### Chip
- **Role:** filter, selection, token, status
- **Appearance:** filled, outline, soft
- **Color:** none, gray, blue, green (apenas decorativo)
- **Estados:** isSelected, isDismissible, isDisabled

## 🎨 Design System

O projeto inclui um sistema de design completo com:

- **Tokens de Cores:** Primitive, semantic e RGB para opacidade
- **Tipografia:** Sistema de fontes com pesos e tamanhos
- **Espaçamento:** Escala consistente de espaços
- **Sombras:** Sistema de elevação
- **Animações:** Transições suaves e consistentes
- **Modo Escuro:** Suporte automático e manual

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações
- **JavaScript ES6+** - Lógica interativa
- **Design Tokens** - Sistema de design consistente
- **CSS Custom Properties** - Variáveis dinâmicas

## 📱 Responsividade

- Design mobile-first
- Grid responsivo para diferentes tamanhos de tela
- Navegação adaptativa
- Controles otimizados para touch

## 🔧 Desenvolvimento

### Estrutura do Projeto
```
build-components/
├── index.html          # Página principal
├── app.js             # Lógica da aplicação
├── style.css          # Estilos e design system
└── README.md          # Documentação
```

### Funcionalidades Principais
- Sistema de navegação por abas
- Geração dinâmica de controles
- Preview em tempo real dos componentes
- Geração automática de código TypeScript
- Sistema de estados persistentes
- Funcionalidade de copiar código

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- Inspirado nas melhores práticas de design de componentes
- Baseado em sistemas de design modernos
- Foco na experiência do desenvolvedor e designer

---

**Desenvolvido com ❤️ para a comunidade de design e desenvolvimento**
