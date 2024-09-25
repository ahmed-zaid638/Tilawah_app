import "./styles.css";
function LastReading() {
  return (
    <div className="border px-6 py-1   w-full  lg:w-[200px] rounded-xl overflow-hidden h-[300px] lg:h-[340px]">
      <div className="text-[#1C2821] text-[30px]">قرئ مؤخرا</div>
      <div className="overflow-y-scroll h-[74%] w-[88%] scroll-bar">
        {[...Array(40)].map((_, index) => {
          return (
            <div className="" key={index}>
              البقرة 2:1
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LastReading;
