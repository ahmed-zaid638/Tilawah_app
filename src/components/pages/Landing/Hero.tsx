import React from "react";
import Header from "./Header";
import Button from "../../common/Button";
import fastLinks from "../../../../data/landing/fastLinks.json";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full mb-20"
      style={{
        background: "linear-gradient(180deg, #CEFFED 0%, #FFFFFF 60%)",
        opacity: 0.7,
      }}
    >
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center h-[80vh] px-4 ">
          <h1 className="text-[40px] lg:text-[56px] font-bold text-black">
            اجعل القرأن جزء اساسيا فى يومك{" "}
          </h1>
          <p className="text-[20px] lg:text-[36px] md:text-2xl text-[#000000] mt-7 max-w-xl mx-auto">
            رتل هو موقع لقراءة القرآن يوفر لك مجموعة من المميزات منها القراءة
            والاستماع لأفضل القراء حول العالم.{" "}
          </p>
          <div className="sm:flex justify-center gap-4 mt-7 w-full m">
            <Button
              text="ابدا بالقراءة"
              className="w-full mb-4 sm:mb-0 sm:w-fit"
            />
            <Button
              text="استماع للقرأن"
              bg="transparent"
              color="#FFD900"
              className="w-full sm:w-fit"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-6 w-full 3xl:w-[90%] mx-auto">
          {fastLinks.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] flex flex-col  items-center justify-between py-7 border rounded-lg shadow-md"
            >
              <img src={item.imageUrl} alt="" />
              <div className="text-lg font-semibold mb-2 w-[60%] text-center py-3">
                {item.text}
              </div>
              <a
                href={item.link.href}
                className="text-[24px] font-400 underline"
              >
                {item.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
