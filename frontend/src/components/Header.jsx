import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import CustomButton from "./CustomButton";
import { useStateContext } from "../context";

export default function Header() {
  const { user } = useContext(UserContext);
  const { connect, address } = useStateContext();
  const navigate = useNavigate();

  return (
    <header className="flex justify-between w-full border-b-[1px]">
      <Link to={"/"} className="flex items-center gap-1">
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
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>

        <span className="font-semibold text-xl">FundIt</span>
      </Link>

      <div className="flex gap-6 py-3 px-4 ">
        <div className="font-medium text-lg">
          <Link to={"/campaigns"}>Campaigns</Link>
        </div>

        <div className="font-medium text-lg">
          <Link to={"/guidelines"}>Guildlines</Link>
        </div>
        <div className="font-medium text-lg">
          <Link to={"/companies"}>Ideas</Link>
        </div>
      </div>

      <div>
        <CustomButton
          btnType="button"
          title={address ? "CREATE" : "CONNECT"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />

        <Link to={user ? "/startup" : "/login"}>
          <button className=" outline-none relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500  focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5  bg-white text-black  rounded-md group-hover:bg-opacity-0 hover:text-white">
              {user ? <div>{user.name}</div> : <div>LOGIN</div>}
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
}

{
  /* <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black  rounded-md group-hover:bg-opacity-0 hover:text-white">
              {user ? <div>{user.name}</div> : <div>LOGIN</div>}
            </span> */
}
