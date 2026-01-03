# 🎨 Guia de Customização - Prive Beach

## 📱 Alterar Número de WhatsApp

### Localização 1: Botão Flutuante
**Arquivo:** `src/components/WhatsAppButton.tsx`

```typescript
const whatsappNumber = '5585999999999' // Formato: código país + DDD + número
```

### Localização 2: Seção de Acomodações
**Arquivo:** `src/components/Accommodations.tsx`

Linha ~160:
```typescript
href="https://wa.me/5585999999999?text=..."
```

### Localização 3: CTA Final
**Arquivo:** `src/components/FinalCTA.tsx`

Linha ~116 e ~126:
```typescript
href="https://wa.me/5585999999999?text=..."
```

## 📧 Alterar Informações de Contato

**Arquivo:** `src/components/Footer.tsx`

```typescript
const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '(85) 99999-9999',
    href: 'tel:+5585999999999',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@privebeach.com.br',
    href: 'mailto:contato@privebeach.com.br',
  },
  // ...
]
```

## 🖼️ Substituir Imagens

### Imagens Atuais (Unsplash - Placeholder)

1. **Hero Section** (`src/components/Hero.tsx`)
   - Linha 11: Imagem de fundo da praia

2. **About Section** - Não tem imagem principal

3. **Accommodations** (`src/components/Accommodations.tsx`)
   - Linha 38: Imagem do apartamento

4. **Experience** (`src/components/Experience.tsx`)
   - Linha 12-33: 4 imagens de experiências

5. **Location** (`src/components/Location.tsx`)
   - Linha 71: Imagem do mapa/localização

6. **Final CTA** (`src/components/FinalCTA.tsx`)
   - Linha 14: Imagem de fundo da praia

### Como Substituir

**Opção 1: Imagens Locais**
```typescript
// Coloque as imagens em public/images/
// Depois referencie assim:
src="/images/hero-beach.jpg"
```

**Opção 2: URL Externa (CDN)**
```typescript
src="https://seu-cdn.com/imagens/hero.jpg"
```

**Recomendações:**
- Formato: WebP (melhor performance)
- Tamanho: 1920x1080 para backgrounds
- Peso: < 500KB por imagem
- Comprimir com [TinyPNG](https://tinypng.com)

## 🎨 Alterar Cores

**Arquivo:** `tailwind.config.js`

### Paleta Oceano (Azul)
```javascript
ocean: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  // ... até 900
  900: '#0c4a6e',
}
```

### Paleta Areia (Bege)
```javascript
sand: {
  50: '#fdfcfb',
  100: '#faf8f5',
  // ... até 900
  900: '#635a4d',
}
```

### Exemplos de Uso
```typescript
// Texto azul oceano
className="text-ocean-600"

// Fundo areia claro
className="bg-sand-100"

// Gradiente personalizado
className="bg-gradient-to-r from-ocean-500 to-ocean-700"
```

## ✏️ Alterar Textos

### Hero Section
**Arquivo:** `src/components/Hero.tsx`

- **Badge**: Linha 29
- **Headline**: Linhas 37-43
- **Subtitle**: Linhas 48-53
- **Botões**: Linhas 61-72

### Sobre
**Arquivo:** `src/components/About.tsx`

- **Subtítulo**: Linha 41
- **Título**: Linhas 42-45
- **Descrição**: Linhas 48-58

### Footer
**Arquivo:** `src/components/Footer.tsx`

- **Descrição**: Linhas 41-44

## 🏠 Adicionar Mais Acomodações

Atualmente há 1 modelo de apartamento. Para adicionar as outras 5 unidades:

### Opção 1: Acomodações com Diferenças

**Criar arquivo:** `src/data/accommodations.ts`

```typescript
export const accommodations = [
  {
    id: 'apt-terreo',
    title: 'Apartamento Térreo',
    floor: 'Térreo',
    features: ['Acesso direto à piscina', 'Varanda ampla'],
    images: ['/images/apt-terreo-1.jpg', '/images/apt-terreo-2.jpg'],
  },
  {
    id: 'apt-primeiro',
    title: 'Apartamento 1º Andar',
    floor: '1º Andar',
    features: ['Vista panorâmica', 'Sacada com churrasqueira'],
    images: ['/images/apt-primeiro-1.jpg'],
  },
  // ... mais 4 apartamentos
]
```

**Modificar:** `src/components/Accommodations.tsx`

```typescript
import { accommodations } from '../data/accommodations'

// Mapear apartamentos
{accommodations.map((apt) => (
  <div key={apt.id}>
    <h3>{apt.title}</h3>
    {/* ... resto do card */}
  </div>
))}
```

### Opção 2: Sistema de Reserva

Para sistema mais avançado com disponibilidade:

1. Integrar com API de reservas
2. Criar formulário de data check-in/check-out
3. Mostrar disponibilidade em tempo real

## 🌐 Alterar Idioma

Para criar versão em inglês/espanhol:

1. Instalar i18n: `npm install react-i18next i18next`
2. Criar arquivos de tradução em `src/locales/`
3. Envolver textos com `t('chave.texto')`

## 📍 Atualizar Mapa

**Arquivo:** `src/components/Location.tsx`

### Opção 1: Google Maps Embed

```typescript
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

### Opção 2: Mapbox

```bash
npm install mapbox-gl
```

### Obter Coordenadas

1. Abrir [Google Maps](https://maps.google.com)
2. Clicar no local
3. Copiar coordenadas (latitude, longitude)

## 🎯 Adicionar Google Analytics

**Arquivo:** `index.html`

Adicionar antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔔 Adicionar Meta Pixel (Facebook)

**Arquivo:** `index.html`

```html
<!-- Meta Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🎬 Adicionar Vídeo no Hero

**Substituir imagem por vídeo:**

```typescript
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-beach.mp4" type="video/mp4" />
</video>
```

## 📱 Redes Sociais

**Arquivo:** `src/components/Footer.tsx`

```typescript
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/privebeach', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/privebeach', label: 'Facebook' },
]
```

## 🎨 Fontes Personalizadas

**Arquivo:** `index.html`

Trocar no Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

**Arquivo:** `tailwind.config.js`
```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}
```

## 💰 Adicionar Preços

**Arquivo:** `src/components/Accommodations.tsx`

Adicionar no card do apartamento:

```typescript
<div className="text-center mt-6 pt-6 border-t">
  <p className="text-gray-600 text-sm">A partir de</p>
  <p className="text-3xl font-bold text-ocean-600">R$ 450</p>
  <p className="text-gray-500 text-sm">por noite</p>
</div>
```

---

## 🆘 Precisa de Ajuda?

- Documentação React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

**Dica:** Use o navegador DevTools (F12) para inspecionar elementos e ver suas classes!

