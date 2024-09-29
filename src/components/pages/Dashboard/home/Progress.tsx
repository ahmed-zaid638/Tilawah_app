import ProgressPie from "./ProgressPie";

function Progress() {
  return (
    <div className="border rounded-xl mt-5 sm:mt-0  w-full  lg:w-[200px]  p-4 flex flex-col justify-between">
      <div className="text-xl text-[#1C2821] text-left">تقدمك</div>
      <div className="-translate-y-0 md:-translate-y-6">
        <div className="flex gap-1  items-center justify-end ">
          <span className="text-[#ACB4AF]">مكتمل</span>
          <span className="w-4 h-4 bg-primary inline-block "></span>
        </div>
        <div className="flex gap-1  items-center justify-end ">
          <span className="text-[#ACB4AF]">غير مكتمل </span>
          <span className="w-4 h-4 bg-[#FFED89] inline-block "></span>
        </div>
      </div>
      <ProgressPie/>
    </div>
  );
}

export default Progress;
