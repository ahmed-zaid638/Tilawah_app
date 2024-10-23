import Box from "./Box";
import LibrariesList from "../../../../../data/dashboard/librariesList.json";
// import LibrariesList from "@data/dashboard/librariesList.json";

function LibrayList() {
  return (
    <>
      <div className="grid gap-7  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {LibrariesList.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <Box name={item.name} color={item.color} imgUrl={item.imgUrl} link={item.link} />
            </div>
          );
        })}
      </div>

    </>
  );
}

export default LibrayList;
