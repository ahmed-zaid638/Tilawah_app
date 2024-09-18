import { format, startOfWeek, endOfWeek, addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const arabicMonths = [
  "يناير",
  "فبراير",
  "مارس",
  "ابريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentDay = format(new Date(), "d");

  const currentMonthFormatted = `${
    arabicMonths[currentMonth.getMonth()]
  } ${format(currentMonth, "yyyy")}`;

  const weekStart = startOfWeek(currentMonth, { weekStartsOn: 0 });
  const weekEnd = endOfWeek(currentMonth, { weekStartsOn: 0 });

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const daysOfWeek = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  const renderDays = () => {
    const days = [];
    let day = weekStart;
    while (day <= weekEnd) {
      days.push({
        name: daysOfWeek[day.getDay()],
        number: format(day, "d"),
      });
      day = new Date(day.setDate(day.getDate() + 1));
    }

    return (
      <div className="grid grid-cols-7 text-center">
        {days.map((day, index) => (
          <div key={index} className="py-2 flex flex-col items-center gap-5 ">
            <div className="font-bold  ">{day.name}</div>
            {currentDay == day.number ? (
              <div className="w-8 h-8 bg-primary rounded-full text-lg text-white flex justify-center items-center">
                {day.number}
              </div>
            ) : (
              <div className="text-[#0F160F] text-lg">{day.number}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border rounded-xl w-[45%] py-5">
      <div className="w-full flex justify-between px-[5%]">
        <div className="text-black text-[25px] flex gap-2">
          <span>{currentMonthFormatted}</span>
        </div>
        <div className="flex justify-start">
          {" "}
          <button onClick={handleNextMonth}>
            <ChevronRight />
          </button>
          <button onClick={handlePrevMonth}>
            <ChevronLeft />
          </button>
        </div>
      </div>
      <div className="mt-5 px-[4%] md:px-0">{renderDays()}</div>
    </div>
  );
}

export default Calendar;
