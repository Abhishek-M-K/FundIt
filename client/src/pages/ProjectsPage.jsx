import StartupNav from "../components/StartupNav";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <div>
      <StartupNav />

      <div className="grid grid-cols-2 gap-1 mt-4">
        <div className=" mt-6">
          <Link
            className="bg-emerald-700 text-white py-2 px-4  rounded-full flex gap-2 "
            to={"/startup/myideas/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Publish Idea
          </Link>
        </div>

        <div className="text-center mt-6">
          <Link
            className="bg-emerald-700 text-white py-2 px-4  rounded-full flex gap-2"
            to={"/startup/myideas/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Create Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
