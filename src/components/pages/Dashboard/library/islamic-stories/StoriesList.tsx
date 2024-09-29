import LibrariesList from "../../../../../../data/dashboard/IslamicStoriesList.json";
import StoryBox from "./StoryBox";

function StoriesList() {
  return (
    <div className="grid gap-7  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
      {LibrariesList.map((item, index) => {
        return (
          <div key={index} className="w-full">
            <StoryBox name={item.name}  imgUrl={item.imgUrl} link={item.link}/>
          </div>
        );
      })}
    </div>
  );
}

export default StoriesList;
