interface BoxProps {
  name: string;
  color: string;
  imgUrl: string;
  link: string;
}

function Box({ name, color, imgUrl, link }: BoxProps) {
  return (
    <div
      className={`rounded-lg  w-full shadow-md `}
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-center p-4 py-10">
        <img src={imgUrl} alt="" className="w-16 h-16" />
      </div>
      <a
        href={link}
        className="rounded-lg py-4 flex justify-center items-center text-[#1C2821] text-2xl bg-white w-full"
      >
        {name}
      </a>
    </div>
  );
}

export default Box;
