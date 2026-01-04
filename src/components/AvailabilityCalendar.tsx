import { useState } from "react";
import { Calendar, Loader2, AlertCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getMockBookedDates, mockICalData } from "../utils/mockCalendar";

interface AvailabilityCalendarProps {
  icalUrl?: string;
  airbnbUrl?: string;
  apartmentCode: string;
}

interface BookedDate {
  start: Date;
  end: Date;
}

const AvailabilityCalendar = ({
  icalUrl,
  airbnbUrl,
  apartmentCode,
}: AvailabilityCalendarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookedDates, setBookedDates] = useState<BookedDate[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [usingMockData, setUsingMockData] = useState(false);

  // Função para buscar disponibilidade do iCal
  const fetchAvailability = async () => {
    if (!icalUrl) {
      // Usar dados mock para teste
      setLoading(true);
      setTimeout(() => {
        setBookedDates(getMockBookedDates());
        setUsingMockData(true);
        setLoading(false);
      }, 1000);
      return;
    }

    setLoading(true);
    setError(null);
    setUsingMockData(false);

    try {
      // Usar proxy CORS para buscar o iCal
      const proxyUrl = "https://api.allorigins.win/raw?url=";
      const response = await fetch(proxyUrl + encodeURIComponent(icalUrl));

      if (!response.ok) {
        // Fallback para dados mock
        const dates = parseICalData(mockICalData);
        setBookedDates(dates);
        setUsingMockData(true);
        return;
      }

      const icalData = await response.text();
      const dates = parseICalData(icalData);
      setBookedDates(dates);
    } catch (err) {
      // Usar dados mock em caso de erro
      console.log("Usando dados de teste - erro ao buscar iCal:", err);
      const dates = parseICalData(mockICalData);
      setBookedDates(dates);
      setUsingMockData(true);
    } finally {
      setLoading(false);
    }
  };

  // Parser simples de iCal
  const parseICalData = (icalData: string): BookedDate[] => {
    const dates: BookedDate[] = [];
    const events = icalData.split("BEGIN:VEVENT");

    events.forEach((event) => {
      const dtStart = event.match(/DTSTART.*?:(\d{8})/)?.[1];
      const dtEnd = event.match(/DTEND.*?:(\d{8})/)?.[1];

      if (dtStart && dtEnd) {
        dates.push({
          start: parseICalDate(dtStart),
          end: parseICalDate(dtEnd),
        });
      }
    });

    return dates;
  };

  const parseICalDate = (dateStr: string): Date => {
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6)) - 1;
    const day = parseInt(dateStr.substring(6, 8));
    return new Date(year, month, day);
  };

  const isDateBooked = (date: Date): boolean => {
    return bookedDates.some((booked) => {
      return date >= booked.start && date <= booked.end;
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (icalUrl && bookedDates.length === 0) {
      fetchAvailability();
    }
  };

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Dias vazios antes do primeiro dia do mês
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="p-2" />);
    }

    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isBooked = isDateBooked(date);
      const isPast = date < today;
      const isToday = date.toDateString() === today.toDateString();

      days.push(
        <div
          key={day}
          className={`
            p-2 text-center rounded-lg text-sm
            ${isPast ? "text-gray-300" : ""}
            ${isToday ? "ring-2 ring-ocean-500" : ""}
            ${
              isBooked && !isPast ? "bg-red-100 text-red-700 font-semibold" : ""
            }
            ${
              !isBooked && !isPast
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : ""
            }
          `}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex-1 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2 border-ocean-600 text-ocean-600 hover:bg-ocean-50 flex items-center justify-center gap-2"
      >
        <Calendar size={18} />
        Ver Disponibilidade
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-display font-bold text-gray-900">
                    Disponibilidade {apartmentCode}
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                {usingMockData ? (
                  <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg">
                    <AlertCircle size={16} className="text-amber-600" />
                    <p className="text-xs text-amber-700">
                      Usando dados de teste - Configure o iCal real
                    </p>
                  </div>
                ) : icalUrl ? (
                  <p className="text-sm text-gray-600">
                    Sincronizado com Airbnb em tempo real
                  </p>
                ) : null}
              </div>

              {/* Content */}
              <div className="p-6">
                {!icalUrl ? (
                  // Sem iCal - mostrar aviso e link para Airbnb
                  <div className="text-center py-8 space-y-4">
                    <AlertCircle className="mx-auto text-amber-500" size={48} />
                    <p className="text-gray-600">
                      Para ver a disponibilidade em tempo real, acesse o Airbnb
                    </p>
                    {airbnbUrl && (
                      <a
                        href={airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF385C] to-[#E31C5F] text-white rounded-full font-semibold hover:scale-105 transition-all"
                      >
                        Ver no Airbnb
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                ) : loading ? (
                  // Loading
                  <div className="text-center py-12">
                    <Loader2
                      className="mx-auto animate-spin text-ocean-600"
                      size={48}
                    />
                    <p className="text-gray-600 mt-4">
                      Carregando disponibilidade...
                    </p>
                  </div>
                ) : error ? (
                  // Error
                  <div className="text-center py-8 space-y-4">
                    <AlertCircle className="mx-auto text-red-500" size={48} />
                    <p className="text-red-600">{error}</p>
                    {airbnbUrl && (
                      <a
                        href={airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF385C] to-[#E31C5F] text-white rounded-full font-semibold hover:scale-105 transition-all"
                      >
                        Ver no Airbnb
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                ) : (
                  // Calendar
                  <div className="space-y-4">
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={prevMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        ←
                      </button>
                      <h4 className="font-semibold text-gray-900">
                        {monthNames[currentMonth.getMonth()]}{" "}
                        {currentMonth.getFullYear()}
                      </h4>
                      <button
                        onClick={nextMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        →
                      </button>
                    </div>

                    {/* Weekday Headers */}
                    <div className="grid grid-cols-7 gap-1 text-xs font-semibold text-gray-600 text-center">
                      <div>Dom</div>
                      <div>Seg</div>
                      <div>Ter</div>
                      <div>Qua</div>
                      <div>Qui</div>
                      <div>Sex</div>
                      <div>Sáb</div>
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-1">
                      {renderCalendar()}
                    </div>

                    {/* Legend */}
                    <div className="flex gap-4 text-xs text-gray-600 justify-center pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-100 rounded" />
                        Disponível
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-100 rounded" />
                        Reservado
                      </div>
                    </div>

                    {airbnbUrl && (
                      <a
                        href={airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-sm text-ocean-600 hover:text-ocean-700 font-medium mt-4"
                      >
                        Ver detalhes no Airbnb →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AvailabilityCalendar;
