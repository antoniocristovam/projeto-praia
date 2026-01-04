// Dados de teste para o calendário (quando não há iCal real)

export const getMockBookedDates = () => {
  const today = new Date()
  const dates = []

  // Adicionar algumas reservas de exemplo
  // Reserva 1: daqui a 5 dias por 3 dias
  const booking1Start = new Date(today)
  booking1Start.setDate(today.getDate() + 5)
  const booking1End = new Date(booking1Start)
  booking1End.setDate(booking1Start.getDate() + 3)
  
  dates.push({
    start: booking1Start,
    end: booking1End
  })

  // Reserva 2: daqui a 15 dias por 7 dias
  const booking2Start = new Date(today)
  booking2Start.setDate(today.getDate() + 15)
  const booking2End = new Date(booking2Start)
  booking2End.setDate(booking2Start.getDate() + 7)
  
  dates.push({
    start: booking2Start,
    end: booking2End
  })

  // Reserva 3: mês que vem por 4 dias
  const booking3Start = new Date(today)
  booking3Start.setMonth(today.getMonth() + 1)
  booking3Start.setDate(10)
  const booking3End = new Date(booking3Start)
  booking3End.setDate(booking3Start.getDate() + 4)
  
  dates.push({
    start: booking3Start,
    end: booking3End
  })

  return dates
}

// iCal de exemplo para teste (formato válido)
export const mockICalData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Prive Beach//Test Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Prive Beach Test
X-WR-TIMEZONE:America/Sao_Paulo

BEGIN:VEVENT
DTSTART:${getICalDate(5)}
DTEND:${getICalDate(8)}
SUMMARY:Reservado (Teste)
DESCRIPTION:Período reservado - teste
STATUS:CONFIRMED
END:VEVENT

BEGIN:VEVENT
DTSTART:${getICalDate(15)}
DTEND:${getICalDate(22)}
SUMMARY:Reservado (Teste)
DESCRIPTION:Período reservado - teste
STATUS:CONFIRMED
END:VEVENT

BEGIN:VEVENT
DTSTART:${getICalDate(35, 1)}
DTEND:${getICalDate(39, 1)}
SUMMARY:Reservado (Teste)
DESCRIPTION:Período reservado - teste
STATUS:CONFIRMED
END:VEVENT

END:VCALENDAR`

function getICalDate(daysFromNow: number, monthsOffset: number = 0): string {
  const date = new Date()
  date.setDate(date.getDate() + daysFromNow)
  date.setMonth(date.getMonth() + monthsOffset)
  
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  
  return `${year}${month}${day}`
}

