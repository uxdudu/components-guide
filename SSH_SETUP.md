# 🔑 Configuração SSH para GitHub

## ❌ Problema Atual
A chave SSH não está configurada no GitHub, por isso não conseguimos fazer push.

## 🔑 Sua Chave SSH Pública
\`\`\`
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIB8KciQwTx0D4Kex7a+jHONHwo3Ee5QcWbWJuZnBI4IA <comment>
\`\`\`

## 📋 Passos para Configurar SSH no GitHub

### 1. Acessar Configurações SSH do GitHub
1. Vá para: https://github.com/settings/keys
2. Faça login se necessário

### 2. Adicionar Nova Chave SSH
1. Clique em **"New SSH key"**
2. **Title:** `MacBook Pro - Eduardo` (ou qualquer nome que identifique)
3. **Key type:** `Authentication Key`
4. **Key:** Cole a chave pública acima
5. Clique **"Add SSH key"**

### 3. Verificar Configuração
Após adicionar, teste no terminal:
\`\`\`bash
ssh -T git@github.com
\`\`\`

Você deve ver uma mensagem como:
\`\`\`
Hi uxdudu! You've successfully authenticated, but GitHub does not provide shell access.
\`\`\`

## 🚀 Após Configurar SSH

### Fazer Push do Código
\`\`\`bash
# Verificar se SSH está funcionando
ssh -T git@github.com

# Fazer push para o GitHub
git push -u origin main
\`\`\`

### Verificar no GitHub
- Acesse: https://github.com/uxdudu/link-tree-copy
- Todos os arquivos devem estar lá
- O workflow do GitHub Pages será executado automaticamente

## 🔧 Alternativa: Usar Token de Acesso Pessoal

Se preferir não usar SSH, você pode:

### 1. Criar Token de Acesso
1. Vá para: https://github.com/settings/tokens
2. **Generate new token (classic)**
3. **Note:** `build-components-access`
4. **Expiration:** 90 days (ou mais)
5. **Scopes:** `repo` (todos os repositórios)
6. Clique **"Generate token"**

### 2. Usar Token
\`\`\`bash
# Voltar para HTTPS
git remote set-url origin https://github.com/uxdudu/link-tree-copy.git

# Fazer push (usar token como senha)
git push -u origin main
# Username: uxdudu
# Password: [cole o token aqui]
\`\`\`

## 🎯 Recomendação

**Use SSH** - é mais seguro e prático a longo prazo!

---

**💡 Dica:** Após configurar SSH, você poderá fazer push/pull sem digitar senha.
