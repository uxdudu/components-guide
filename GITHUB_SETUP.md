# 🚀 Configuração do Repositório no GitHub

## Passo a Passo para Criar o Repositório

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"New"** ou **"+"** no canto superior direito
3. Selecione **"New repository"**

### 2. Configurar o Repositório

**Nome do Repositório:** `build-components`

**Descrição:** `Guia interativo de boas práticas para design de componentes de UI`

**Visibilidade:** 
- ✅ **Public** (recomendado para projetos educacionais)
- ⚠️ **Private** (se preferir manter privado)

**Outras opções:**
- ❌ **Add a README file** (já temos um)
- ❌ **Add .gitignore** (já temos um)
- ❌ **Choose a license** (já temos um)

### 3. Conectar o Repositório Local

Após criar o repositório no GitHub, execute estes comandos no terminal:

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/build-components.git

# Verificar se foi adicionado corretamente
git remote -v

# Fazer push do código para o GitHub
git branch -M main
git push -u origin main
```

### 4. Verificar no GitHub

1. Acesse seu repositório: `https://github.com/SEU_USUARIO/build-components`
2. Verifique se todos os arquivos estão lá:
   - ✅ `index.html`
   - ✅ `app.js`
   - ✅ `style.css`
   - ✅ `README.md`
   - ✅ `LICENSE`
   - ✅ `.gitignore`

### 5. Configurações Adicionais (Opcional)

#### GitHub Pages
Para disponibilizar a aplicação online:

1. Vá em **Settings** > **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main
4. **Folder:** / (root)
5. Clique **Save**

A aplicação ficará disponível em: `https://SEU_USUARIO.github.io/build-components`

#### Topics/Tags
Adicione tags relevantes ao repositório:
- `design-system`
- `ui-components`
- `best-practices`
- `design-tokens`
- `figma`
- `typescript`
- `css-variables`

#### Descrição do Repositório
```
🎨 Guia interativo que ensina como construir componentes de UI seguindo as melhores práticas de design. Foca na diferença entre naming semântico e estético, com playgrounds interativos e geração automática de código TypeScript.
```

## 🎯 Próximos Passos

Após configurar o repositório:

1. **Compartilhe** o projeto com a comunidade
2. **Adicione issues** para melhorias futuras
3. **Configure GitHub Actions** para CI/CD (opcional)
4. **Adicione contributors** se trabalhar em equipe

## 🔧 Comandos Úteis

```bash
# Ver status do repositório
git status

# Ver histórico de commits
git log --oneline

# Ver branches
git branch -a

# Fazer push de mudanças
git add .
git commit -m "Descrição da mudança"
git push

# Fazer pull de mudanças
git pull origin main
```

---

**💡 Dica:** Se preferir usar SSH em vez de HTTPS, use:
```bash
git remote add origin git@github.com:SEU_USUARIO/build-components.git
```
