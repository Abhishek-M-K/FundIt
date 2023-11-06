import { useEffect, useState } from "react";
import StartupNav from "../components/StartupNav";
import { Link } from "react-router-dom";
import axios from "axios";
import StartupCard from "../components/StartupCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("/user-projects").then(({ data }) => {
      setProjects(data);
    });
  }, []);
  return (
    <div>
      <StartupNav />

      <div className=" mt-6 flex  items-center justify-center">
        <Link
          className="bg-emerald-700 text-white w-12 h-12  rounded-full flex gap-2 items-center justify-center "
          to={"/startup/myideas/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 relative inline-flex items-center justify-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Link>
      </div>

      <div className="mt-4">
        {projects.length > 0 &&
          projects.map((project) => (
            <Link
              to={"/startup/myideas/" + project._id}
              className="flex bg-slate-300 bg-opacity-20 gap-4 p-4 rounded-2xl cursor-pointer mb-2"
            >
              <div className="flex w-32 h-32 grow shrink-0">
                <StartupCard project={project} />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl font-semibold text-left">
                  {project.title}
                </h2>

                <p className="text-sm mt-2 text-left">
                  <span className="font-semibold">Description : </span>
                  {project.description}
                </p>

                <p className="text-sm mt-4 text-left">
                  <span className="font-bold text-[#f32013]">Note : </span>
                  {project.note}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

{
  /* <div className="flex grid-cols-2 mb-1 gap-6">
                  <h3>Amount: {project.amount}</h3>
                  <h3>Amount: {project.amount}</h3>
                </div> */
}
