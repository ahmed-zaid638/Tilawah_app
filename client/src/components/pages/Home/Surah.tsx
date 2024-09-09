interface SurahProps {
  order: number;
  name: string;
  versesCount: number;
}

const Surah = ({ order, name, versesCount }: SurahProps) => {
  return (
    <div className="bg-white  shadow-md  rounded-md px-4 py-3  flex justify-between items-center ">
      <div className="flex   gap-2">
        <div className="w-8 h-8 rounded-md p-1  bg-[#E9F2ED] flex justify-center items-center">
          {order}
        </div>
        <div className="text-black text-[32px]">{name}</div>
      </div>
      <div className="text-[#99A19C] text-[20px]">{versesCount} ايات</div>
    </div>
  );
};

export default Surah;
