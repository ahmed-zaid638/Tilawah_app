interface BoxProps {
  name: string;
  color: string;
  imgUrl: string;
}
function Box({ name, color, imgUrl }: BoxProps) {
  return (
    <div className={`rounded-lg bg-[${color}]  w-full shadow-md `}>
      <div className="flex justify-center items-center p-4 py-10">
        <img src={imgUrl} alt="" className="w-16 h-16" />
      </div>
      <div className="rounded-lg py-4 flex justify-center items-center bg-white w-full">
        {name}
      </div>
    </div>
  );
}

export default Box;
