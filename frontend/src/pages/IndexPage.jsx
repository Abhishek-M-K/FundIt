import { block } from "../assets";
import { Link } from "react-router-dom";
import NewFoot from "../components/NewFoot";
export default function IndexPage() {
  return (
    <div className="bg-color:#F5F5F5">
      <div>
        <div className="w-full px-4 py-16">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="justify-centre flex flex-col justify-center">
              <p className="text-green-400 font-bold md:text-4xl sm:text-3xl">
                FundIt
              </p>
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Fund & Get Funded!
              </h1>
              <p>
                Bridging investors and ambitious projects, facilitating
                financial support for growth and innovation.
              </p>
            </div>
            <div>
              <img className="mx-auto my-4 " src={block} alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-black">
          <div className="max-w-[800]px mt--96px w-full h-screen mx-auto text-center flex flex-col  justify-center">
            <p className="font-bold p-2">JOIN THE FUNDING MOVEMENT!</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Grow with us
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                Fast, Flexible funding & guidance for Students
              </p>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-600">
              Unleash the Future with Blockchain-Powered Crowdfunding
            </p>
            <Link to={"/login"}>
              <button className="bg-green-500 text-white w-[200]px rounded-md font-medium my-6 mx-auto px-6 py-3">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <NewFoot />
    </div>
  );
}
