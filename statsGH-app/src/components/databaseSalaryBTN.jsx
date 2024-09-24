import SalarySearchBTN from "./salarySearchBTN";
import StatsDatabaseBTN from "./statisticalDatabaseBTN";

const BTN1 = () => {
  return (
    <div className="lg:ml-[85px] mt-5 md:ml-[68px] ml-[29px] flex gap-3">
      <StatsDatabaseBTN />
      <SalarySearchBTN />
    </div>
  );
};

export default BTN1;
