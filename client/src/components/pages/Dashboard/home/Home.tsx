import DailyReadingHours from "./DailyReadingHours";
import LastReading from "./LastReading";
import Progress from "./Progress";
import UserGreeting from "./UserGreeting";
import PrayingTimes from "./PrayingTimes";
import Calendar from "./Calendar";

function Home() {
  return (
    <div className="h-[300vh]">
      <UserGreeting />
      <div className="flex justify-between gap-4 mt-5">
        <LastReading />
        <Progress />
        <DailyReadingHours />
      </div>
      <div className="flex w-full gap-5 mt-10 ">
        <PrayingTimes />
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
