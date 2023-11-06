import { useNavigate } from "react-router-dom";
import { loader } from "../assets";
import FundCard from "./FundCard";
// import {v4 as uuidv4} from "uuid";
export default function DisplayCampaign({ title, isLoading, campaigns }) {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };
  return (
    <div>
      <h2 className="font-mono font-bold ">
        {title} ({campaigns.length})
      </h2>

      <div className="flex flex-wrap mt-5 gap-6">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-mono font-semibold">
            There are no Campaigns created yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
}
