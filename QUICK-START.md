# ⚡ Quick Start - Prive Beach

## 🚀 Começando Agora

### 1. Servidor já está rodando! ✅
Abra o navegador em: **http://localhost:3000**

### 2. Fazer Alterações

```bash
# O servidor recarrega automaticamente
# Apenas edite os arquivos e veja as mudanças!
```

## ✏️ Primeiras Customizações

### 1️⃣ Número de WhatsApp (IMPORTANTE!)

**Arquivo:** `src/components/WhatsAppButton.tsx`
```typescript
// Linha 5
const whatsappNumber = '5585999999999' // TROQUE AQUI!
```

### 2️⃣ Informações de Contato

**Arquivo:** `src/components/Footer.tsx`
```typescript
// Linhas 12-27
const contactInfo = [
  {
    value: '(85) 99999-9999', // TROQUE!
  },
  {
    value: 'seuemail@email.com', // TROQUE!
  },
]
```

### 3️⃣ Redes Sociais

**Arquivo:** `src/components/Footer.tsx`
```typescript
// Linhas 30-33
const socialLinks = [
  { href: 'https://instagram.com/seu_perfil' }, // TROQUE!
  { href: 'https://facebook.com/seu_perfil' },  // TROQUE!
]
```

## 📸 Substituir Imagens

### Passo 1: Adicionar suas fotos
```
projeto-praia/
└── public/
    └── images/           ⬅️ Crie esta pasta
        ├── hero.jpg
        ├── apartamento.jpg
        ├── piscina.jpg
        └── ...
```

### Passo 2: Atualizar componentes

**Arquivo:** `src/components/Hero.tsx`
```typescript
// Linha 11 - ANTES:
backgroundImage: "url('https://images.unsplash.com/...')"

// DEPOIS:
backgroundImage: "url('/images/hero.jpg')"
```

Repita para outros componentes:
- `Hero.tsx` (linha 11)
- `Accommodations.tsx` (linha 38)
- `Experience.tsx` (linhas 12-33)
- `FinalCTA.tsx` (linha 14)

## 🎨 Mudar Cores (Opcional)

**Arquivo:** `tailwind.config.js`

```javascript
// Linhas 8-51
colors: {
  ocean: {
    500: '#SEU_AZUL', // Cor principal
  },
  sand: {
    100: '#SEU_BEGE',
  },
}
```

## 📦 Deploy Rápido (Vercel - Recomendado)

### Opção 1: Interface Web
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Import repository
4. Deploy! 🎉

### Opção 2: CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📋 Checklist Antes do Deploy

- [ ] Troquei número de WhatsApp (3 arquivos)
- [ ] Atualizei e-mail e telefone
- [ ] Substituí imagens placeholder
- [ ] Atualizei links de redes sociais
- [ ] Testei em celular (Chrome DevTools)
- [ ] Testei todos os botões
- [ ] Verifiquei se links do WhatsApp funcionam

## 🆘 Comandos Úteis

```bash
# Ver o site
npm run dev

# Criar build de produção
npm run build

# Testar build de produção
npm run preview

# Instalar dependências (se precisar)
npm install

# Parar o servidor
Ctrl + C (no terminal)
```

## 📱 Testar no Celular (Mesma Rede)

```bash
# No terminal, veja a URL "Network"
# Exemplo: http://192.168.1.100:3000
# Acesse esta URL no celular
```

## 🎯 Próximos 3 Passos

1. **Hoje:**
   - [ ] Trocar WhatsApp e contatos
   - [ ] Adicionar fotos reais
   - [ ] Testar tudo

2. **Amanhã:**
   - [ ] Fazer deploy (Vercel)
   - [ ] Configurar domínio
   - [ ] Compartilhar com amigos

3. **Esta Semana:**
   - [ ] Google Analytics
   - [ ] Google Business
   - [ ] Primeiros posts nas redes

## 📚 Guias Completos

- **CUSTOMIZATION.md** - Todas as opções de customização
- **DEPLOY.md** - Deploy detalhado (Vercel, Netlify, etc)
- **SEO-GUIDE.md** - Estratégia completa de SEO
- **README.md** - Documentação técnica completa

## 💡 Dicas Rápidas

### Imagens
- Use JPG para fotos
- Comprima antes (tinypng.com)
- Tamanho ideal: < 500KB

### WhatsApp
- Formato: 55 + DDD + número
- Exemplo: 5585999999999
- Sem espaços ou caracteres

### Teste Mobile
- Chrome DevTools (F12)
- Toggle device toolbar
- Testar iPhone e Android

## 🎉 Está Pronto!

O site está **100% funcional** e rodando!

Basta trocar:
1. ✏️ Contatos (5 minutos)
2. 📸 Imagens (30 minutos)
3. 🚀 Deploy (10 minutos)

**Total: ~45 minutos para o site estar no ar!**

---

## 🌐 Acesso Atual

**Local:** http://localhost:3000  
**Status:** 🟢 Rodando

Abra o navegador e veja o resultado! ✨

---

**Dúvidas?** Consulte os guias completos ou DevTools do navegador (F12)

