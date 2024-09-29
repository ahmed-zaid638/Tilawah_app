interface TasbihBoxProps {
  text: string;
}
function TasbihBox({ text }: TasbihBoxProps) {
  return (
    <div className="border h-[220px] rounded-md p-4 px-8 shadow-md w-full  relative flex justify-center items-center text-center ">
      <p className="text-lg">{text}</p>
      <div
        className="w-12 h-12 bg-primary rounded-full text-white flex justify-center items-center
       absolute -bottom-4 left-1/2  -translate-x-[50%]
      "
      >
        0/1
      </div>
    </div>
  );
}

export default TasbihBox;
