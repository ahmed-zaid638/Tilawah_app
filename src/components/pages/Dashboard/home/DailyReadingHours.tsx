import { format } from "date-fns";

const CustomBarChart = () => {
  const data = [
    { day: { en: "Saturday", ar: "السبت" }, value: 40 },
    { day: { en: "Sunday", ar: "الأحد" }, value: 80 },
    { day: { en: "Monday", ar: "الاثنين" }, value: 50 },
    { day: { en: "Tuesday", ar: "الثلاثاء" }, value: 75 },
    { day: { en: "Wednesday", ar: "الأربعاء" }, value: 100 },
    { day: { en: "Thursday", ar: "الخميس" }, value: 45 },
    { day: { en: "Friday", ar: "الجمعة" }, value: 60 },
  ];

  const currentDay = format(new Date(), "EEEE");
  console.log(currentDay);

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="border flex flex-col justify-between rounded-lg p-4 w-full mt-5 lg:mt-0 min-w-[400px] lg:min-w-[200px]  ">
      <div className="mb-6 text-black">
        <div className="text-[30px]">قرئ مؤخر</div>
        <div className="text-[23px]">عدد الساعات</div>
      </div>
      <div className="relative h-52 w-full p-4">
        <div className="absolute inset-0 flex flex-col justify-between h-full w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full border-t border-dotted border-gray-400"
              style={{ height: "20%" }}
            ></div>
          ))}
        </div>

        <div className="relative bg-slate-00 flex justify-around items-end h-full ">
          {data.map((item) => (
            <div
              key={item.day.ar}
              className="h-full flex flex-col justify-end   translate-y-[6px] "
            >
              {/* Bar */}
              <div
                className={` ${
                  item.day.en == currentDay ? "bg-primary" : "bg-[#FFED89] "
                } w-4 sm:w-8 rounded-t-full transition-all duration-300`}
                style={{ height: `${(item.value / maxValue) * 100}%` }} // Scale bars
              ></div>

              {/* Day label */}
              <span className="mt-1 text-sm font-medium text-gray-700 ">
                {item.day.ar}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomBarChart;
