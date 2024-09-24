import GridSectionA from "./gridSectionA";
import GridSectionB from "./gridSectionB";
import GridSectionC from "./gridSectionC";

const Grid = () => {
  return (
    <div className="grid grid-cols-3 mt-5 lg:ml-[85px]">
      <div className="sm:order-3 lg:order-1">
        <GridSectionA />
      </div>
      <div className="sm:order-1 lg:order-2 ">
        <GridSectionB />
      </div>

      <div className="sm:order-2 lg:order-3">
        <GridSectionC />
      </div>
    </div>
  );
};

export default Grid;
