import { tagType, eth } from "../assets";
import { daysLeft } from "../utils";

export default function FundCard({
  owner,
  title,
  description,
  target,
  deadline,
  amountRaised,
  image,
  handleClick,
}) {
  const remainingDays = daysLeft(deadline);
  return (
    <div
      className="bg-[#f5f5f5] sm:w-56 w-full rounded-lg cursor-pointer p-2"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
        className="w-full h-[158px] object-cover rounded-lg"
      />

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-4">
          <img
            src={tagType}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />

          <p className="mt-[2px] ml-3 font-mono font-medium text-xs text-gray-500">
            Category
          </p>
        </div>

        <div className="block">
          <h3 className="font-mono font-semibold text-base text-left leading-6 truncate">
            {title}
          </h3>
          <p className="mt-2 font-mono font-normal text-gray-600 truncate text-left leading-4">
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-4 gap-1">
          <div className="flex flex-col">
            <h4 className="font-mono font-semibold text-left text-sm text-gray-600 leading-5">
              {amountRaised}
            </h4>
            <p className="mt-1 font-mono font-normal text-xs leading-4 sm:max-w-[120px] text-gray-600">
              Raised of {target}
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-mono font-semibold text-right text-sm text-gray-600 leading-5">
              {remainingDays}
            </h4>
            <p className="mt-1 font-mono font-normal text-xs leading-4 sm:max-w-[120px] text-gray-600">
              Days Left
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-3 bg-white">
          <div className="flex w-[30px] h-[30px] rounded-full justify-center items-center ">
            <img src={eth} alt="user" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="flex-1 font-mono font-normal text-gray-500 truncate">
            by <span className=" text-gray-700">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
