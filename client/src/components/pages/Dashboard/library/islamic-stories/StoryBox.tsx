interface StoryBoxProps {
  name: string;
  imgUrl: string;
  link: string;
}

function StoryBox({ name, imgUrl, link }: StoryBoxProps) {
  return (
    <div className={`rounded-lg w-full shadow-lg`}>
      <div className="flex justify-center items-center ">
        <img src={imgUrl} alt="" className="w-full h-full" />
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

export default StoryBox;
