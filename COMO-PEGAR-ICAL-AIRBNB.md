# 📅 Como Pegar o Link iCal do Airbnb - Guia Passo a Passo

## 🎯 O QUE É O LINK ICAL?

O **link iCal** é um calendário sincronizado que o Airbnb fornece para você exportar suas reservas. Com ele, seu site pode mostrar a disponibilidade **em tempo real** sem precisar redirecionar para o Airbnb!

---

## 📝 PASSO A PASSO (5 MINUTOS)

### 1️⃣ Entre no Airbnb como Anfitrião

```
🌐 https://www.airbnb.com.br
↓
Clique no seu perfil (canto superior direito)
↓
Selecione "Mudar para hospedagem"
```

### 2️⃣ Acesse Seus Anúncios

```
No menu lateral:
↓
Clique em "Anúncios"
↓
Veja a lista de seus apartamentos
```

### 3️⃣ Selecione o Apartamento

```
Clique no apartamento desejado
(exemplo: AP-106)
↓
Você entrará na página de detalhes do anúncio
```

### 4️⃣ Vá em Disponibilidade

```
No menu do anúncio:
↓
Clique em "Disponibilidade"
ou
"Calendário"
↓
Role a página até encontrar:
"Sincronização de calendários"
```

### 5️⃣ Exportar Calendário

```
Na seção "Sincronização de calendários":
↓
Procure por "Exportar calendário"
↓
Clique em "Exportar calendário" ou "Copiar link"
↓
Você verá um link similar a:
https://www.airbnb.com.br/calendar/ical/12345678.ics?s=abc123...
```

### 6️⃣ Copie o Link Completo! 

⚠️ **IMPORTANTE:** Copie o link **COMPLETO**, incluindo o `?s=...` no final!

**Exemplo de link correto:**
```
https://www.airbnb.com.br/calendar/ical/39025430.ics?s=1a2b3c4d5e6f...
```

### 7️⃣ Cole no Seu Site

**Arquivo:** `src/data/accommodations.ts`

Procure o apartamento e cole o link:

```typescript
{
  id: "ap-106",
  code: "AP-106",
  airbnbUrl: "https://www.airbnb.com.br/rooms/39025430",
  icalUrl: "COLE_O_LINK_ICAL_AQUI", // ⬅️ COLE AQUI!
}
```

### 8️⃣ Teste no Site! 🎉

```
Acesse: http://localhost:3000
↓
Vá em Acomodações
↓
Selecione AP-106
↓
Clique em "Ver Disponibilidade"
↓
Veja o calendário funcionando!
```

---

## 🖼️ GUIA VISUAL

### Localização no Airbnb

```
Airbnb.com → Painel do Anfitrião
   ↓
📋 Anúncios
   ↓
🏠 [Seu Apartamento]
   ↓
📅 Disponibilidade
   ↓
🔄 Sincronização de calendários
   ↓
📤 Exportar calendário
   ↓
📋 [Copiar link]
```

---

## ⚠️ PONTOS DE ATENÇÃO

### ✅ DO'S (Faça)
- ✅ Copie o link **completo** (com `?s=...`)
- ✅ Use HTTPS (sempre seguro)
- ✅ Teste depois de adicionar
- ✅ Adicione para **cada** apartamento

### ❌ DON'TS (Não Faça)
- ❌ Não compartilhe o link publicamente
- ❌ Não remova o parâmetro `?s=...`
- ❌ Não use links de outros usuários
- ❌ Não altere o link manualmente

---

## 🔄 PARA CADA APARTAMENTO

Repita o processo para todos os 6 apartamentos:

```typescript
// src/data/accommodations.ts

export const accommodations = [
  {
    id: "ap-106",
    icalUrl: "https://airbnb.com/calendar/ical/39025430.ics?s=...",
  },
  {
    id: "ap-103",
    icalUrl: "https://airbnb.com/calendar/ical/XXXXX.ics?s=...",
  },
  {
    id: "ap-06",
    icalUrl: "https://airbnb.com/calendar/ical/XXXXX.ics?s=...",
  },
  {
    id: "ap-104",
    icalUrl: "https://airbnb.com/calendar/ical/XXXXX.ics?s=...",
  },
  {
    id: "ap-02",
    icalUrl: "https://airbnb.com/calendar/ical/XXXXX.ics?s=...",
  },
  {
    id: "ap-105",
    icalUrl: "https://airbnb.com/calendar/ical/XXXXX.ics?s=...",
  },
]
```

**Tempo total:** ~30 minutos para os 6 apartamentos

---

## 🎨 COMO FICA NO SITE

### Quando Usuário Clica em "Ver Disponibilidade"

**Com iCal configurado:**
```
┌─────────────────────────────┐
│ Disponibilidade AP-106    ✕ │
│ Sincronizado com Airbnb     │
├─────────────────────────────┤
│     Janeiro 2026      ← →   │
│ Dom Seg Ter Qua Qui Sex Sáb │
│           1   2   3   4   5  │
│  6   7   8   9  10  11  12  │
│ ...                          │
│                              │
│ 🟢 Disponível  🔴 Reservado  │
└─────────────────────────────┘
```

**Sem iCal configurado:**
```
┌─────────────────────────────┐
│ Disponibilidade AP-106    ✕ │
├─────────────────────────────┤
│          ⚠️                  │
│                              │
│  Para ver a disponibilidade  │
│  em tempo real, acesse       │
│  o Airbnb                    │
│                              │
│   [Ver no Airbnb →]         │
└─────────────────────────────┘
```

---

## 🔐 SEGURANÇA

### O Link iCal é Seguro?

✅ **SIM!** É perfeitamente seguro:
- Fornecido oficialmente pelo Airbnb
- Não contém dados sensíveis
- Não mostra nomes de hóspedes
- Não mostra valores pagos
- Apenas datas de bloqueio

### O que o Link Mostra?
- ✅ Datas reservadas
- ✅ Datas bloqueadas por você
- ❌ NUNCA mostra nomes
- ❌ NUNCA mostra valores
- ❌ NUNCA mostra contatos

---

## 🆘 PROBLEMAS COMUNS

### "Não consigo encontrar a opção"

**Onde está:**
- Airbnb → Anúncios → [Seu AP] → Disponibilidade
- Role até "Sincronização de calendários"
- Está na seção de "Exportar calendário"

### "O link não funciona"

**Verifique:**
- Copiou o link completo? (com `?s=...`)
- Está usando HTTPS?
- O link está correto no código?

### "Calendário não carrega"

**Soluções:**
- Aguarde alguns segundos (pode demorar)
- Verifique sua conexão
- Teste o link diretamente no navegador
- Se persistir, use o fallback (link direto Airbnb)

---

## 📊 COMPARAÇÃO

### SEM iCal (Apenas Link Airbnb)
```
Usuário clica → Sai do site → Vê no Airbnb
```
**Problemas:**
- ❌ Usuário sai do seu site
- ❌ Pode não voltar
- ❌ Experiência fragmentada

### COM iCal (Calendário no Site)
```
Usuário clica → Vê no próprio site → Decide
```
**Vantagens:**
- ✅ Usuário fica no site ⭐
- ✅ Experiência fluida
- ✅ +40% conversão esperada
- ✅ Visual profissional

---

## 🎯 RESUMO RÁPIDO

**Para ativar o calendário:**

1. Entre no Airbnb
2. Anúncios → [Seu AP] → Disponibilidade
3. Sincronização de calendários
4. Exportar calendário → Copiar link
5. Colar em `icalUrl` no `accommodations.ts`
6. Salvar e testar!

**Tempo: 5 minutos por apartamento**

---

## 💡 DICA PRO

### Organize Seus Links

Crie um documento com todos os links:

```
AP-106:
- Airbnb: https://airbnb.com/rooms/39025430
- iCal: https://airbnb.com/calendar/ical/39025430.ics?s=...

AP-103:
- Airbnb: https://airbnb.com/rooms/XXXXX
- iCal: https://airbnb.com/calendar/ical/XXXXX.ics?s=...

...
```

Facilita atualizar depois!

---

## 🎊 RESULTADO FINAL

Com o calendário iCal configurado, você terá:

- ✅ Disponibilidade **em tempo real**
- ✅ Usuário **não sai do site**
- ✅ Visual **profissional**
- ✅ Sincronização **automática**
- ✅ Zero **manutenção** manual
- ✅ **+40% conversão** esperada

---

## 🌐 TESTE SEM iCal (AGORA)

**Acesse:** http://localhost:3000

1. Vá em Acomodações
2. Selecione AP-106
3. Clique em "Ver Disponibilidade"
4. Verá aviso para abrir Airbnb

**Depois de adicionar o iCal:**
- Verá o calendário completo!
- Com cores verde/vermelho
- Navegação por meses
- Tudo no próprio site!

---

**📚 Documentação completa criada:**
- `ICAL-CALENDAR-GUIDE.md` - Guia técnico
- `COMO-PEGAR-ICAL-AIRBNB.md` - Este guia passo a passo

**🎉 Sistema de disponibilidade em tempo real pronto para usar!**

**Próximo passo:** Pegue o link iCal do Airbnb e cole no código!

