import { SearchIcon } from "lucide-react";

type SearchProps = {
  className?: string;
  width?: string;
};

const Search: React.FC<SearchProps> = ({ className = "" , width ="400px" }) => {
  return (
    <div className={`relative ${className} w-[${width}px] `}>
      <input
        type="text"
        className={`w-full border border-[#76807A] text-[#76807A] placeholder:text-[#76807A] pr-10 rounded-md text-[22px] h-[57px] focus:outline-none focus:border-[#009048] focus:ring-0`}
        placeholder="بحث"
      />
      <SearchIcon className="absolute top-1/2 right-[12px] transform -translate-y-1/2" />
    </div>
  );
};

export default Search;
