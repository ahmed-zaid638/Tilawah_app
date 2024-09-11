import ProgressPie from "./ProgressPie";

function Progress() {
  return (
    <div className="border rounded-xl w-36 p-4 flex flex-col justify-between">
      <div className="text-xl text-[#1C2821] text-left">تقدمك</div>
      <div className="">
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
