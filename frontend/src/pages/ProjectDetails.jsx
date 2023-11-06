import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectPhoto from "../components/ProjectPhoto";
import { UserContext } from "../UserContext";
import { eth } from "../assets";

export default function ProjectDetails() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get("/projects/" + id).then((response) => {
      setProject(response.data);
    });
  }, [id]);

  const handleMail = () => {
    const contactMail = project.email;
    window.location.href = `mailto:${contactMail}`;
  };

  const handleMeet = () => {
    alert("This feature is under contruction :(");
  };

  if (!project) return "";
  return (
    <div>
      <div className="mt-6 bg-gray-100 -mx-8 px-8 pt-8 rounded-lg border border-gray-500 ">
        <h1 className="font-serif font-bold text-2xl">{project.title}</h1>
        <div className="mt-5">
          <div className=" flex-[2] flex flex-col gap-10">
            <div>
              <h4 className="font-mono font-semibold text-[18px] uppercase text-left">
                User
              </h4>

              <div className="mt-3 flex flex-row items-center flex-wrap gap-4">
                <h4 className="font-mono text-[14px] break-all">
                  {project.email}
                </h4>
              </div>
            </div>

            <div>
              <h4 className="font-mono font-semibold text-[18px] uppercase text-left">
                Description
              </h4>

              <div className=" mt-3">
                <p className=" font-mono font-normal text-base leading-6  text-justify">
                  {project.description}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-mono font-semibold text-[18px] uppercase text-left">
                Note
              </h4>

              <div className=" font-mono mt-3 text-left flex flex-col gap-4 ">
                {project.note}
              </div>
            </div>

            <div>
              <h4 className="font-mono font-semibold text-[18px] uppercase text-left">
                Target
              </h4>

              <div className=" font-mono mt-3 text-left flex flex-col gap-4 ">
                {project.amount}
              </div>
            </div>

            <div>
              <h4 className="font-mono font-semibold text-[18px] uppercase text-left">
                Equity
              </h4>

              <div className="font-mono mt-3 text-left flex flex-col gap-4 ">
                {project.equity}
              </div>
            </div>

            <div className="font-mono grid grid-cols-2 gap-4 mb-4">
              <div>
                <button
                  onClick={handleMail}
                  className=" outline-none relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500  focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="font-mono relative px-5 py-2.5  bg-white text-black  rounded-md group-hover:bg-opacity-0 hover:text-white">
                    Contact via Email
                  </span>
                </button>
              </div>

              <div>
                <button
                  onClick={handleMeet}
                  className={
                    "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white  rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400  focus:ring-pink-200 dark:focus:ring-pink-800"
                  }
                >
                  <span className="font-mono relative px-5 py-2.5  bg-white text-black rounded-md group-hover:bg-opacity-0 hover:text-white">
                    Schedule a Meet
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
