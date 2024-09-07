import { useState } from "react";
import Search from "../../common/Search";
import Surah from "./Surah";
import Button from "../../common/Button";

function QuranReading() {
  const [tab, setTab] = useState("سورة");
  const tabs = ["سورة", "جزء"];
  {
    return (
      <div className="px-4 text-center mt-20">
        <div className="container mx-auto">
          <h1 className="text-[30px] lg:text-[56px] font-bold text-dark mb-20">
            اقراء القرأن كاملا
          </h1>
          <div className="md:flex  justify-between w-full  rounded-md">
            <div className="border border-[#76807A] rounded-md h-[57px] w-full md:w-[300px] flex mb-4 md:mb-0">
              {tabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  className={`w-[50%] py-1 px-4 m-2 rounded-lg ${
                    tab === item
                      ? "bg-[#009048] text-white"
                      : "bg-white text-[#76807A]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Search className="w-full md:w-[400px]" />
          </div>

          <div className="mt-10">
            {tab === "سورة" && (
              <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {[...Array(40)].map(() => {
                  return (
                    <div className="w">
                      <Surah name="الفاتحة" versesCount={7} order={1} />
                    </div>
                  );
                })}
              </div>
            )}
            {tab === "جزء" && (
              <>
                {" "}
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 ">
                  {[...Array(12)].map(() => {
                    return (
                      <div className="bg-[#EEEEEE] p-4">
                        <div className="text-right mb-3 text-[20px]">
                          الجزء الاول
                        </div>
                        <div className="flex flex-col gap-4">
                          <Surah name="الفاتحة" versesCount={7} order={1} />
                          <Surah name="الفاتحة" versesCount={7} order={1} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button className="mt-3 text-[24px]" text="اقرأ المزيد" />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default QuranReading;
