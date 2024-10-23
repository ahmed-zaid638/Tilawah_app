import React, { useState, useRef, useCallback, useEffect } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";

const primaryColor = "#009048";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("الرئيسية");
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "قرأن", href: "#quran" },
    { name: "المكتبة", href: "#libray" },
    { name: "عنا", href: "#about" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, handleClickOutside]);

  return (
    <header className="w-full top-0 left-0 right-0 transition-all duration-300 z-[1000]">
      <nav
        className="container mx-auto flex justify-between items-center p-4 md:border-b border-[#444B47]"
        style={{ direction: "rtl" }}
      >
        <div className="flex-shrink-0">
          <a
            href="/"
            className="text-2xl font-bold flex flex-col items-center"
            style={{ color: primaryColor }}
          >
            <img
              src="/logo-green.png"
              alt="Logo"
              className="w-[60%] md:w-[72px]"
            />
            <span className="text-[25px] md:text-[32px]">تلاوة</span>
          </a>
        </div>

        <div className="md:hidden flex-shrink-0">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            style={{ color: primaryColor }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-64  text-black z-[999] transform transition-transform duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 bg-gradient-to-l from-[#CEFFED] to-[#FFFFFF] px-5"
              : "-translate-x-full"
          } md:static md:flex md:items-center md:justify-center md:translate-x-0`}
        >
          <div className="md:hidden flex items-center p-4">
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={24} color="black" />
            </button>
          </div>
          <nav className="flex flex-col p-4 mt-16 gap-3 w-full md:flex-row md:mt-0 translate-x-0 md:translate-x-[10vw] xl:translate-x-0">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[#0F160F] text-[22px] px-0 md:px-3 whitespace-nowrap hover:text-[${primaryColor}] ${
                  activeLink === item.name ? `text-[${primaryColor}]` : ""
                }`}
                onClick={() => {
                  handleNavClick(item.name);
                  setActiveLink(item.name);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div
            className="flex px-6 mt-2 gap-2 items-center justify-start cursor-pointer md:hidden"
            style={{ direction: "rtl" }}
          >
            <span className="text-[20px]" style={{ color: primaryColor }}>
              رجوع
            </span>
            <ArrowLeft color={primaryColor} size={20} />
          </div>
          <a
            href="#home"
            className="absolute bottom-0 left-[30%] w-[140px] h-[140px] md:hidden"
            onClick={toggleMenu}
          >
            <img src="/logo-green.png" alt="Logo" className="object-contain" />
          </a>
        </div>
        <div className="flex-shrink-0 hidden md:block">
          <button
            className="text-white px-5 text-[20px] py-2 rounded-md"
            style={{ backgroundColor: primaryColor }}
          >
            <a href="/login"> تسجيل الدخول</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
