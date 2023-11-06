import { useContext, useEffect, useState } from "react";
import StartupNav from "../components/StartupNav";
import axios from "axios";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";
import DisplayCampaign from "../components/DisplayCampaign";
import { useStateContext } from "../context";

export default function StartupPage() {
  const [redirect, setRedirect] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { ready, user, setUser } = useContext(UserContext);
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <StartupNav />

      <div className="mt-4">
        <DisplayCampaign
          title="My Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>

      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto mt-5">
          {/* Logged in as {user.name} ({user.email}) <br /> */}
          <button
            onClick={logout}
            className="bg-green-900 rounded-full text-white max-w-lg mt-2 px-8 py-2"
          >
            Logout
          </button>
        </div>
      )}

      {subpage === "myideas" && <ProjectsPage />}
    </div>
  );
}

{
  /* <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center 
        items-center h-20 border shadow-md w-full"
        >
          <span className="text-lg font-bold text-green-900 ">{0}</span>
          <span>Projects</span>
        </div>

        <div
          className="flex flex-col justify-center 
        items-center h-20 border shadow-md w-full"
        >
          <span className="text-lg font-bold text-green-900 ">{0}</span>
          <span>Backings</span>
        </div>

        <div
          className="flex flex-col justify-center 
        items-center h-20 border shadow-md w-full"
        >
          <span className="text-lg font-bold text-green-900 ">0 ETH</span>
          <span>Donated</span>
        </div>
      </div> */
}
