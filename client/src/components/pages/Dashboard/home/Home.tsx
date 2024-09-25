import CustomBarChart from "./DailyReadingHours";
import LastReading from "./LastReading";
import Progress from "./Progress";
import UserGreeting from "./UserGreeting";
import PrayingTimes from "./PrayingTimes";
import Calendar from "./Calendar";

function Home() {
  return (
    <div className="pb-10  ">
      <UserGreeting />
      <div className="lg:flex justify-between gap-4 xl:gap-10 mt-5 ">
        <div className="block sm:flex gap-5">
          <LastReading />
          <Progress />
        </div>
        <CustomBarChart />
      </div>
      <div className="lg:flex w-full gap-5 mt-10 ">
        <PrayingTimes />
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
