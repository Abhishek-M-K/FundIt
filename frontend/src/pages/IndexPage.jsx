import { block } from "../assets";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
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
                Fast, Flexible funding & guidance for{" "}
              </p>
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold md: pl-4 pr-2"
                strings={[" Fundraisers", "NGOs", "Students"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
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
      {/* <div>
        <div>
          <div className="w-full mt-16">
            <div class="grid grid-cols-3 gap-10">
              <div>
                <a
                  href="#"
                  class="flex flex-col items-center bg-white border border-red-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-pink-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      OneDios
                    </h4>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      The startup runs a mobile app, OneDios, which allows users
                      to search and register a service request within 60
                      seconds.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <div>
                  <a
                    href="#"
                    class="flex flex-col items-center bg-white border border-red-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-pink-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      class="object-cover w-full rounded-t-lg h-51 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        OneGreen
                      </h4>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        OneGreen has developed a three-step quality and
                        credibility measurement model, OneGreen Index, to
                        mitigate green-washing in the market.{" "}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <a
                    href="#"
                    class="flex flex-col items-center bg-white border border-red-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-pink-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      class="object-cover w-full rounded-t-lg h-76 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0bZGGZlNNJOA_fFfllHMbpmgQRGKCVdb-g&usqp=CAU"
                      alt=""
                    />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Centricity
                      </h4>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        With India’s wealth management market set to reach
                        $429.70 Bn in assets under management (AUM).
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <a
                    href="#"
                    class="flex flex-col items-center bg-white border border-red-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-pink-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      class="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-28 md:rounded-none md:rounded-l-lg"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Evolved Foods
                      </h4>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        To bridge the protein gap and make the most of this
                        opportunity, Roma Roy Choudhury and Pradeep Rao
                        established their plant-based protein startup, Evolved
                        Foods.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <a
                    href="#"
                    class="flex flex-col items-center bg-white border border-red-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-pink-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      class="object-cover w-full rounded-t-lg h-46 md:h-auto md:w-38 md:rounded-none md:rounded-l-lg"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h4 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        GrowAgro
                      </h4>
                      <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                        The startup has developed a mobile app that offers
                        farmers multiple healthcare services for their
                        livestock.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <a
                    href="#"
                    class="flex flex-col items-center bg-white border border-red-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-pink-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      class="object-cover w-full rounded-t-lg h-30 md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Now&Me
                      </h4>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        The startup provides a peer support community, enabling
                        users to connect with like-minded individuals and
                        express their feelings.{" "}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
