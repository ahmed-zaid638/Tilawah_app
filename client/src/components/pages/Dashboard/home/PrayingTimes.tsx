const prayers = [
  {
    name: "الفجر",
    time: "05:00",
    iqama: "05:30",
    image: "/icons/dashboard/home/sunrise.png",
  },
  {
    name: "الظهر",
    time: "12:30",
    iqama: "01:00",
    image: "/icons/dashboard/home/sunny.png", 
  },
  {
    name: "العصر",
    time: "04:15",
    iqama: "04:45",
    image: "/icons/dashboard/home/sun.png",
  },
  {
    name: "المغرب",
    time: "07:10",
    iqama: "07:30",
    image: "/icons/dashboard/home/sunset.png",
  },
  {
    name: "العشاء",
    time: "08:30",
    iqama: "09:00",
    image: "/icons/dashboard/home/moon.png",
  },
];

function PrayingTimes() {
  return (
    <div className="border rounded-xl px-3 lg:px-6 flex justify-between md:gap-5 items-end w-full lg:w-[100%] min-w-[400px] ">
      {prayers.map((prayer, index) => (
        <div key={index} className="flex items-center py-4 justify-end">
          <div className="flex items-center flex-col text-right mr-4">
            <img
              src={prayer.image}
              alt={prayer.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <span className="font-bold text-lg text-primary">
              {prayer.name}
            </span>
            <span className="text-sm text-gray-500">{prayer.time}</span>
            <span className="text-sm text-gray-500">
              الاقامة <span className="mr-[2px]">{prayer.iqama}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PrayingTimes;
