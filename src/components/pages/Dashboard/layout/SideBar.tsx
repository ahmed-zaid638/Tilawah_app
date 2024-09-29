import { LogOut, User } from "lucide-react";
import { useState } from "react";
import HomeIcon from "../../../Icons/HomeIcon";
import QuranIcon from "../../../Icons/QuranIcon";
import WhishListIcon from "../../../Icons/WhishListIcon";
import PrayingHandsIcon from "../../../Icons/PrayingHandsIcon";
import LibraryIcon from "../../../Icons/LibraryIcon";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const [activeNav, setActiveNav] = useState("home");
  const navigate = useNavigate();
  const navItems = [
    {
      name: "home",
      icon: HomeIcon,
      label: "الرئيسية",
      link: "/dashboard",
    },
    {
      name: "quran",
      icon: QuranIcon,
      label: "قران",
      link: "/dashboard/quran",
    },
    {
      name: "library",
      icon: LibraryIcon,
      label: "المكتبة",
      link: "/dashboard/library",
    },
    {
      name: "whishlist",
      icon: WhishListIcon,
      label: "المحفوظات",
      link: "/dashboard/whishlist",
    },
    {
      name: "azkar",
      icon: PrayingHandsIcon,
      label: "الأذكار",
      link: "/dashboard/azkar",
    },
  ];

  return (
    <div className="fixed top-0 right-0 h-full w-20 md:w-32 flex flex-col items-center justify-between py-4 z-20 bg-primary rounded-tl-[23px] rounded-bl-[23px] ">
      <div className="text-white text-2xl font-bold mb-8">
        <img src="/logo-white.png" alt="Logo" className="w-10 md:w-12" />
      </div>

      <div className="flex flex-col space-y-6 -translate-y-16">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.name}
              onClick={() => {
                setActiveNav(item.name);
                navigate(item.link);
              }}
              className={`flex flex-col items-center cursor-pointer transition-all h-12 ${
                activeNav === item.name ? "text-yellow-500" : "text-white"
              }`}
            >
              <div className="mb-1 ">
                <IconComponent
                 classname="w-6 md:w-auto"
                  color={activeNav === item.name ? "#FFD900" : "white"}
                />
              </div>
              <span
                className={`text-md  ${
                  activeNav === item.name ? "text-[#FFD900]" : "text-white"
                }`}
              >
                {activeNav === item.name && item.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col space-y-4 mb-4">
        <div className="flex flex-col items-center text-white cursor-pointer">
          <User />
          <span className="text-xs">User</span>
        </div>
        <div className="flex flex-col items-center text-white cursor-pointer">
          <LogOut />
          <span className="text-xs">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
