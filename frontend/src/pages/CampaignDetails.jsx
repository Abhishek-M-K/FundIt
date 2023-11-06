import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ethers } from "ethers";
import { useStateContext } from "../context";
//
import { calculateBarPercentage, daysLeft } from "../utils";
import { eth } from "../assets";
import InfoBox from "../components/InfoBox";
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";

export default function CampaignDetails() {
  const { state } = useLocation();
  const { donate, getDonations, contract, address } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    setRedirect(true);
    setIsLoading(false);
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      {isLoading && <Loader />}
      <div className="flex w-full md:flex-row flex-col mt-10 gap-7">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[400px] object-cover rounded-xl"
          />

          <div className="relative w-full h-[5px] bg-gray-800 mt-2 ">
            <div
              className="absolute h-full bg-orange-400"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountRaised
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-8">
          <InfoBox title="Days Left" value={remainingDays} />
          <InfoBox
            title={`Raised of ${state.target}`}
            value={state.amountRaised}
          />
          <InfoBox title="Total Funders" value={donators.length} />
        </div>
      </div>

      <div className=" mt-14 flex lg:flex-row flex-col gap-5">
        <div className=" flex-[2] flex flex-col gap-10">
          <div>
            <h4 className="font-mono font-semibold text-[18px] uppercase text-left">
              Creator
            </h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-4">
              <div className=" w-[52px] h-[52px] flex items-center justify-center cursor-pointer rounded-xl bg-gray-400">
                <img
                  src={eth}
                  alt="User"
                  className="w-[80%] h-[80%] object-contain rounded-xl"
                />
              </div>
              <div>
                <h4 className="font-mono font-semibold text-[14px] break-all">
                  {state.owner}
                </h4>
                <p className="mt-2 font-mono font-normal text-sm text-left">
                  More Campaigns
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-semibold text-[18px] uppercase text-left">
              Description
            </h4>

            <div className=" mt-5">
              <p className=" font-mono font-normal text-base leading-6  text-justify">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-semibold text-[18px] uppercase text-left">
              Donators
            </h4>

            <div className=" mt-5 flex flex-col gap-4 ">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    className="flex justify-between items-center gap-4"
                    key={`${item.donator}-${index}`}
                  >
                    <p className="font-epilogue font-normal text-[16px]  leading-[26px] break-ll">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="font-epilogue font-normal text-[16px]  leading-[26px] break-ll">
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className=" font-mono font-normal text-base leading-6  text-justify">
                  No donators yet. Be the first one !
                </p>
              )}
            </div>
          </div>
        </div>

        {/* funding */}
        <div className="flex-1">
          <h4 className=" mt-2 font-mono font-semibold text-lg uppercase text-left">
            Fund
          </h4>
          <div className=" mt-6 flex flex-col p-4 bg-gray-500 rounded-md  ">
            <p className="font-mono font-semibold text-xl leading-8 text-center text-gray-100 ">
              Fund the Campaign
            </p>
            <div className=" mt-[30px]">
              <input
                type="number"
                placeholder="GoETH 0.01"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border border-gray-900 text-lg leading-[30px] placeholder:text-gray-400 rounded-lg"
              />

              <div className="my-[20px] p-4 bg-gray-700 rounded-[10px]">
                <h4 className="font-mono font-semibold text-[14px] leading-[22px] text-white">
                  Back it because you believe in it.
                </h4>
                <p className="mt-[20px] font-mono font-normal leading-[22px] text-gray-200">
                  Support the project for no reward, just because it speaks to
                  you.
                </p>
              </div>
              <CustomButton
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
