import Button from "../../common/Button";

function QuranListening() {
  return (
    <div className=" text-center mt-20 ">
      <h1 className="text-[30px] lg:text-[56px] font-bold text-dark mb-20">
        استمع للقرأن كاملا
      </h1>
      <div className="bg-primary py-36 relative px-4">
        <div className="container mx-auto w-full 2xl:flex justify-center gap-10  relative z-30">
          <div className="flex gap-7 justify-center">
            <img src="../../../../public/images/home/img3.png" className="max-h-[400px] 2xl:translate-y-[1rem]" alt="" />
            <img src="../../../../public/images/home/img2.png" className="max-h-[400px] 2xl:translate-y-[7rem]" alt="" />
            <img src="../../../../public/images/home/img1.png" className="max-h-[400px] 2x:-translate-y-[3rem]" alt="" />
     
          </div>
          <div className="text-yellow mt-7 text-[27px] md:text-[70px] ">
            <span className="block">20+</span> قارئ للقرأن{" "}
            <span className="block">الكريم</span>
            <Button text="استمع الان" color="#FFD900"  className="mt-4 w-full sm:w-auto"/>
          </div>
        </div>

        <img
          src="../../../../public/images/home/pattern.png"
          className="absolute w-[18%] left-0 -top-[0%] md:-top-[7%] z-10"
          alt=""
        />
        <img
          src="../../../../public/images/home/pattern.png"
          className="hidden md:block absolute w-[18%] right-0  top-[20%] z-10 rotate-180"
          alt=""
        />
      </div>
    </div>
  );
}

export default QuranListening;
