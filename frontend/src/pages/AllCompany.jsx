import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StartupCard from "../components/StartupCard";

export default function AllCompany() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);
  return (
    <div className="mt-5">
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
  );
}
