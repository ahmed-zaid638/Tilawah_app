import React from "react";
import { Mail, Phone } from "lucide-react"; // Import Lucide icons

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0 w-full md:w-1/3">
            <div className="text-[48px] font-bold text-primary">تلاوة</div>
            <div className="w-full sm:w-[80%] text-[30px]">
              تم انشاء موقع رتل لتيسير قراءة القرأن وفهمه على فهم النبي وأصحابه
            </div>
          </div>
          <div className="mb-4 md:mb-0 w-full md:w-1/3">
            <h3 className="text-[32px] font-bold mb-2 text-black">عن تلاوة</h3>
            <ul className="space-y-2">
              {["الرئيسية", "قرأن", "المكتبة", "الاذكار", "علامة مرجعية"].map(
                (item, index) => {
                  return (
                    <li key={index} className="text-black text-[23px]">
                      {item}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-[32px] font-bold mb-2 text-black">
              تواصل معنا
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-3 items-center text-black">
                <Phone className="mr-2 text-primary" size={20} /> +966 1234 5678
              </li>
              <li className="flex  gap-3 items-center text-black">
                <Mail className="mr-2 text-primary" size={20} />{" "}
                info@talaawa.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
