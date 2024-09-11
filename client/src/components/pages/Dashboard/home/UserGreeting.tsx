import Button from "../../../common/Button";

function UserGreeting() {
  return (
    <div className="flex justify-between p-4 border rounded-md">
      <div className="">
        <div className="text-black text-[30px] font-bold">اهلا, ندى👏</div>
        <div className="text-[28px] text-[#1C2821] max-w-2xl py-4">
          هل تريد أن تقرأ 10 دقائق يومياً، أو تكمل جزءاً في شهر، أو تختم القرآن
          كاملاً في سنة؟ من السهل إنشاء هدف مخصص وتتبع تقدمك
        </div>
        <Button text="انشاء هدف" />
      </div>
      <div className="w-[20%] flex justify-center">
        <img src="/images/dashboard/hero.png" alt="" className="" />
      </div>
    </div>
  );
}

export default UserGreeting;
