import TasbihBox from "./TasbihBox";
import List from "../../../../../../data/dashboard/TasbihList.json";
function TasbihList() {
  return (
    <div className="grid  gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {List.map((item, index) => {
        return (
          <div key={index}>
            <TasbihBox text={item.text} />
          </div>
        );
      })}
    </div>
  );
}

export default TasbihList;
