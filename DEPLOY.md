# 🚀 Guia de Deploy - Prive Beach

## Opções de Deploy

### 1. Vercel (Recomendado) ⭐

**Por que Vercel?**
- Deploy automático
- HTTPS gratuito
- CDN global
- Zero configuração
- Preview de branches

**Passos:**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

**Configuração automática:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 2. Netlify

**Passos:**

1. Criar conta no [Netlify](https://netlify.com)
2. Conectar repositório Git
3. Configurações de build:
   - Build command: `npm run build`
   - Publish directory: `dist`

**Arquivo de configuração (netlify.toml):**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Passos:**

```bash
# Instalar gh-pages
npm install -D gh-pages

# Adicionar ao package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

**Configurar base no vite.config.ts:**

```typescript
export default defineConfig({
  base: '/repo-name/',
  // ...
})
```

### 4. Cloudflare Pages

**Passos:**

1. Fazer login no [Cloudflare](https://pages.cloudflare.com)
2. Conectar repositório
3. Configurações:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output: `dist`

### 5. Hospedagem Tradicional (cPanel)

**Passos:**

```bash
# Build do projeto
npm run build

# Upload da pasta dist/ via FTP
# Configurar .htaccess para SPA
```

**Arquivo .htaccess:**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Variáveis de Ambiente

Criar arquivo `.env` na raiz do projeto:

```env
VITE_WHATSAPP_NUMBER=5500000000000
VITE_EMAIL=contato@privebeach.com
VITE_PHONE=+55 (00) 00000-0000
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

**Usar no código:**

```typescript
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER
```

## Checklist Pré-Deploy

- [ ] Substituir todas as imagens placeholder por imagens reais
- [ ] Atualizar número de WhatsApp real
- [ ] Configurar e-mail e telefone reais
- [ ] Adicionar Google Analytics
- [ ] Testar em diferentes dispositivos
- [ ] Verificar performance (Lighthouse)
- [ ] Configurar domínio personalizado
- [ ] Adicionar SSL (HTTPS)
- [ ] Criar favicon personalizado (já criado)
- [ ] Testar todos os links
- [ ] Configurar redirects (se necessário)

## Domínio Personalizado

### Vercel

```bash
vercel domains add privebeach.com
```

Depois, configurar DNS:
- Tipo: CNAME
- Nome: www
- Valor: cname.vercel-dns.com

### Netlify

1. Site settings > Domain management
2. Add custom domain
3. Configurar DNS conforme instruções

## Monitoramento

**Ferramentas recomendadas:**
- [Uptime Robot](https://uptimerobot.com) - Monitoramento de uptime
- [Google Analytics](https://analytics.google.com) - Tráfego
- [Hotjar](https://hotjar.com) - Comportamento do usuário
- [Sentry](https://sentry.io) - Monitoramento de erros

## Otimizações Pós-Deploy

### Compressão de Imagens

```bash
# Instalar ferramenta
npm install -g sharp-cli

# Comprimir imagens
sharp -i public/images/*.jpg -o public/images/ --webp
```

### CDN para Assets

- Usar Cloudinary para imagens
- Usar CDN para fonts (já usando Google Fonts)

### Cache

Configurar headers de cache (automático no Vercel/Netlify):

```
Cache-Control: public, max-age=31536000, immutable
```

## Suporte e Manutenção

**Tarefas periódicas:**
- Atualizar dependências (`npm update`)
- Verificar vulnerabilidades (`npm audit`)
- Backup do código
- Monitorar performance
- Atualizar conteúdo

## Custos Estimados

- **Vercel**: Gratuito (hobbyist) ou $20/mês (Pro)
- **Netlify**: Gratuito (starter) ou $19/mês (Pro)
- **Cloudflare Pages**: Gratuito (uso normal)
- **Hospedagem tradicional**: R$ 20-100/mês

---

**Recomendação final:** Use Vercel para deploy automático e performance otimizada! 🚀

