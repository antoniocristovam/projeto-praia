# 👁️ Guia Visual - Prive Beach

## 🎨 Visão Geral do Design

### Paleta de Cores

```
AZUL OCEANO (Principal)
━━━━━━━━━━━━━━━━━━━━━━
#0ea5e9 ████████ Ocean 500
#0284c7 ████████ Ocean 600
#0369a1 ████████ Ocean 700

AREIA (Secundário)
━━━━━━━━━━━━━━━━━━━━━━
#fdfcfb ████████ Sand 50
#f5f1ea ████████ Sand 200
#c9baaa ████████ Sand 500

NEUTRAS
━━━━━━━━━━━━━━━━━━━━━━
#ffffff ████████ Branco
#1f2937 ████████ Cinza escuro
```

### Tipografia

```
HEADINGS (Montserrat)
━━━━━━━━━━━━━━━━━━━━━━
H1: 56-72px, Bold
H2: 36-48px, Bold
H3: 24-32px, Bold

BODY (Inter)
━━━━━━━━━━━━━━━━━━━━━━
Texto: 16-18px, Regular
Small: 14px, Medium
```

## 📱 Estrutura do Site

### 1. NAVBAR (Topo Fixo)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Prive Beach    Início  Sobre  Acomodações  ...   │
│                                    [Reservar Agora] │
│                                                     │
└─────────────────────────────────────────────────────┘

• Fundo transparente (scroll = vidro embaçado)
• Logo à esquerda
• Menu centralizado (desktop)
• Botão CTA à direita
• Mobile: Hambúrguer menu
```

### 2. HERO SECTION (Primeira Dobra)

```
╔═════════════════════════════════════════════════════╗
║                                                     ║
║            [A apenas 40 metros do mar]              ║
║                                                     ║
║       Sua experiência exclusiva                     ║
║            à beira-mar                              ║
║                                                     ║
║    Conforto premium, estrutura completa e o         ║
║         mar aos seus pés. Viva momentos             ║
║         inesquecíveis no Prive Beach.               ║
║                                                     ║
║   [Conhecer Acomodações]  [Saiba Mais]             ║
║                                                     ║
║                    ↓                                ║
║                                                     ║
╚═════════════════════════════════════════════════════╝

• Imagem de fundo: Praia paradisíaca
• Overlay: Gradiente azul escuro
• Texto: Branco com sombra
• 2 botões CTA
• Scroll indicator animado
```

### 3. ABOUT SECTION (Sobre)

```
┌────────────────────┬──────────────────────────────┐
│                    │  ┌────────┐  ┌────────┐     │
│  BEM-VINDO         │  │ Ícone  │  │ Ícone  │     │
│                    │  │  40m   │  │Estrut. │     │
│  Onde o conforto   │  └────────┘  └────────┘     │
│  encontra o        │                              │
│  paraíso           │  ┌────────┐  ┌────────┐     │
│                    │  │ Ícone  │  │ Ícone  │     │
│  [Texto descr...]  │  │Família │  │Premium │     │
│                    │  └────────┘  └────────┘     │
│  [Ver Acomodações] │                              │
│                    │                              │
└────────────────────┴──────────────────────────────┘

• Fundo: Gradiente areia
• Grid 2 colunas (desktop)
• 4 cards com ícones
• Animação ao entrar na viewport
```

### 4. ACCOMMODATIONS (Acomodações)

```
┌─────────────────────────────────────────────────────┐
│         NOSSAS ACOMODAÇÕES                          │
│                                                     │
│  Apartamentos completos para sua estadia perfeita   │
├─────────────────────────────────────────────────────┤
│         │                                           │
│  FOTO   │  APARTAMENTO PREMIUM                      │
│  DO     │                                           │
│  AP.    │  📏 54m²    🛏️ 2 quartos                 │
│         │  👥 8 pessoas   🏢 3 andares              │
│         │                                           │
│         │  📍 40 metros da praia...                 │
│         │                                           │
│         │  [Reservar Agora]                         │
├─────────────────────────────────────────────────────┤
│                                                     │
│  COMODIDADES - ÁREA COMUM  │  COMODIDADES INTERNAS │
│  ✓ 02 Quiosques            │  ✓ Quarto suíte       │
│  ✓ 04 Churrasqueiras       │  ✓ Sala com TV        │
│  ✓ Banheiro                │  ✓ Cozinha equipada   │
│  ...                       │  ...                   │
│                                                     │
└─────────────────────────────────────────────────────┘

• Card grande com imagem e detalhes
• Ícones para cada especificação
• 2 colunas de comodidades
• Badge "6 unidades disponíveis"
```

### 5. EXPERIENCE (Experiência & Lazer)

```
┌─────────────────────────────────────────────────────┐
│        EXPERIÊNCIA & LAZER                          │
│                                                     │
│  Mais que hospedagem, momentos inesquecíveis        │
├─────────┬─────────┬─────────┬─────────┐            │
│  FOTO   │  FOTO   │  FOTO   │  FOTO   │            │
│         │         │         │         │            │
│  🌊     │  🍖     │  👨‍👩‍👧‍👦 │  ☀️     │            │
│ Piscina │  Área   │ Espaços │ Conexão │            │
│         │ Gourmet │ Família │ Natureza│            │
└─────────┴─────────┴─────────┴─────────┘            │
│                                                     │
│  [Pronto para viver essa experiência?]              │
│           [Ver Disponibilidade]                     │
│                                                     │
└─────────────────────────────────────────────────────┘

• Grid 2x2 de experiências
• Cada card com imagem + ícone
• Hover com zoom na imagem
• CTA ao final da seção
```

### 6. LOCATION (Localização)

```
┌─────────────────────────────────────────────────────┐
│           LOCALIZAÇÃO PRIVILEGIADA                  │
│                                                     │
│      No coração da melhor região                    │
├──────────────────────┬──────────────────────────────┤
│                      │                              │
│    [MAPA/IMAGEM]     │  TUDO PERTO DE VOCÊ         │
│                      │                              │
│   📍 Prive Beach     │  🧭 Praia: 40 metros        │
│                      │  ☕ Cafés: Caminhada        │
│   [Abrir no Maps]    │  🛍️ Comércio: Região        │
│                      │  🍽️ Gastronomia: Próximo    │
│                      │                              │
│  ⏰ 40m até a praia  │  📍 Endereço Completo       │
│                      │  Av. José Bezerra...        │
│                      │  [Fale conosco →]           │
│                      │                              │
└──────────────────────┴──────────────────────────────┘

• Grid 2 colunas
• Mapa/imagem à esquerda
• Informações à direita
• Badge de distância destacado
```

### 7. FINAL CTA (Chamada Final)

```
╔═════════════════════════════════════════════════════╗
║                                                     ║
║                    ✨                               ║
║                                                     ║
║         Suas férias dos sonhos                      ║
║              começam aqui                           ║
║                                                     ║
║    Não deixe para depois. O momento de criar        ║
║    memórias inesquecíveis à beira-mar é agora.     ║
║                                                     ║
║        40m    |    6    |    54m²                  ║
║     Da praia  | Acomod. | Por unidade              ║
║                                                     ║
║   [📅 Reservar Agora]  [❤️ Fale Conosco]           ║
║                                                     ║
║  ✨ Atendimento personalizado • Reserva segura     ║
║                                                     ║
╚═════════════════════════════════════════════════════╝

• Fundo: Imagem praia + overlay azul
• Texto centralizado branco
• Stats em destaque
• 2 botões CTA grandes
• Badge de confiança ao final
```

### 8. FOOTER (Rodapé)

```
┌─────────────────────────────────────────────────────┐
│  Prive Beach        LINKS RÁPIDOS    ENTRE EM       │
│  🏖️                                   CONTATO        │
│                     • Início                        │
│  Sua experiência    • Sobre          📞 (00) 0000  │
│  exclusiva à        • Acomodações    📧 email@...   │
│  beira-mar          • Experiência    📍 Endereço    │
│                     • Localização                   │
│  📱 💬                                               │
├─────────────────────────────────────────────────────┤
│  © 2026 Prive Beach     Privacidade | Termos       │
└─────────────────────────────────────────────────────┘

• Fundo escuro (cinza 900)
• Grid 3-4 colunas
• Links organizados
• Ícones sociais
• Copyright ao final
```

### 9. WHATSAPP BUTTON (Flutuante)

```
                                            ┌───────┐
                                            │  💬   │
                                            │       │
                                            └───────┘
                                        "Fale conosco!"

• Botão verde fixo (bottom-right)
• Ícone WhatsApp animado
• Tooltip ao hover
• Pulse animation
• Z-index alto (sempre visível)
```

## 🎬 Animações e Interações

### Scroll Animations
```
Entrada: Fade + Slide Up
Timing: 0.6-0.8s
Delay: Escalonado (0.1s entre elementos)
```

### Hover Effects
```
Cards: Lift + Shadow
      transform: translateY(-8px)
      shadow: xl → 2xl

Botões: Scale + Shadow
        transform: scale(1.05)
        shadow: lg → 2xl

Imagens: Zoom
         transform: scale(1.1)
         duration: 0.5s
```

### Mobile Gestures
```
Menu: Slide from right
Scroll: Smooth
Tap: Active state visual feedback
```

## 📐 Breakpoints

```
Mobile:    < 768px   (1 coluna)
Tablet:    768-1024px (2 colunas)
Desktop:   > 1024px   (3-4 colunas)
```

## 🎯 Hierarquia Visual

```
NÍVEL 1 (Mais Importante)
├─ Headline Hero
├─ Botões CTA principais
└─ Número WhatsApp

NÍVEL 2 (Importante)
├─ Títulos de seção
├─ Imagens principais
└─ Especificações apartamento

NÍVEL 3 (Suporte)
├─ Descrições
├─ Ícones
└─ Links secundários

NÍVEL 4 (Informação)
├─ Footer
├─ Small text
└─ Meta informações
```

## 💡 Elementos de Conversão

```
1. HERO
   └─ 2 CTAs acima da dobra

2. ABOUT
   └─ CTA "Ver Acomodações"

3. ACCOMMODATIONS
   └─ CTA "Reservar Agora"

4. EXPERIENCE
   └─ CTA "Ver Disponibilidade"

5. FINAL CTA
   └─ 2 CTAs grandes + destaque

6. WHATSAPP FLUTUANTE
   └─ Sempre visível
```

## 🎨 Estilo de Componentes

### Cards
```
• Border-radius: 16-24px (arredondado)
• Shadow: Suave com hover aumentado
• Padding: 24-32px
• Background: Branco ou gradiente sutil
```

### Botões
```
• Primary: Gradiente azul + branco
• Secondary: Outline branco/azul
• Border-radius: Full (pílula)
• Padding: 16-24px horizontal
• Font-weight: 600 (semibold)
```

### Inputs (quando adicionar)
```
• Border-radius: 12px
• Border: 2px solid gray-200
• Focus: Ocean-500
• Padding: 12-16px
```

## 📱 Mobile Specific

```
NAVBAR
└─ Hambúrguer menu
└─ Full screen overlay

HERO
└─ Texto menor
└─ Botões empilhados

GRIDS
└─ 1 coluna
└─ Scroll horizontal (opcional)

FOOTER
└─ Seções empilhadas
└─ Links centralizados
```

---

## ✨ Resumo do Design

**Estilo:** Moderno, limpo, premium  
**Mood:** Relaxante, convidativo, exclusivo  
**Cores:** Oceano + Areia + Branco  
**Tipografia:** Montserrat (display) + Inter (body)  
**Animações:** Suaves e sofisticadas  
**Layout:** Espaçoso, respirável, organizado  

**Objetivo:** Fazer o visitante querer estar lá AGORA! 🏖️

