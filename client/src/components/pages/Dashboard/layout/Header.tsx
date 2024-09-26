import { Globe, Settings } from "lucide-react";
import Search from "../../../common/Search";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation(); 
  console.log(pathname);

  const routeTitles: { [key: string]: string } = {
    "/dashboard": "الرئيسية",
    "/dashboard/quran": "القرآن",
    "/dashboard/settings": "الإعدادات",
    "/dashboard/library": "المكتبة",
    "/dashboard/library/tests": "الاختبارات",
    "/dashboard/library/islamic-stories": "قصص اسلامية",
    "/dashboard/library/prophet": "محمد ﷺ",
    "/dashboard/library/tasbih": "تسبيح",
    "/dashboard/library/fatwa": "فتاوى",
    "/dashboard/library/hadith": "الاحاديث",
    "/dashboard/library/religious-questions": "اسئلة دينية",
    "/dashboard/library/prayers": "ادعية",
    "/dashboard/library/podcast": "بودكاست",
    "/dashboard/library/quraa": "القراء",
    "/dashboard/library/lectures": "خطب و محاضرات",
    "/dashboard/whishlist": "المحفوظات",
    "/dashboard/azkar": "الازكار",
  };
  
  const title = routeTitles[pathname] || "الرئيسية";

  return (
    <div className="mr-20 md:mr-32 shadow-s h-24 flex items-center">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-black font-bold text-[24px] md:text-[30px] xl:text-[48px]">{title}</h1>
        <div className="bg-red-50">
          <Search className="w-full lg:w-[400px] h-14" />
        </div>
        <div className="hidden lg:flex items-center justify-between gap-7 ">
          <Globe />
          <Settings />
          <div className="flex items-center gap-2">
            <div className="w-10">
              <img src="/profile.png" alt="Profile" />
            </div>
            <div>
              <div className="text-black font-semibold">ندى محمد</div>
              <div className="-translate-y-1 text-[#ACB4AF]">ندى محمد012</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
