import { Globe, Settings } from "lucide-react";
import Search from "../../../common/Search";

function Header() {
  return (
    <div className="mr-32 shadow-s h-24  flex items-center  ">
      <div className="w-full  flex justify-between items-center">
        <h1 className="text-black font-bold text-[48px]">الرئيسية</h1>

        <div className="bg-red-50 ">
          <Search className="w-full lg:w-[600px] " />
        </div>
        <div className="flex items-center justify-between gap-7">
          <Globe />
          <Settings />
          <div className="flex items-center gap-2">
            <div className="w-10">
              <img src="./profile.png" alt="" />
            </div>
            <div className="">
              <div className="text-black font-semibold">ندى محمد </div>
              <div className="-translate-y-1 text-[#ACB4AF]">ندى محمد012</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

