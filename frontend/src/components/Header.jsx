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
      <Link to={"/"} className="flex items-center gap-2">
        <svg
          id="logo-39"
          width="100%"
          height="100%"
          viewBox="0 0 50 40"
          className="w-8 h-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
            fill="#A5B4FC"
            class="ccompli2"
          ></path>{" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
            fill="#4F46E5"
            class="ccustom"
          ></path>{" "}
          <path
            d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
            fill="#A5B4FC"
            class="ccompli2"
            fill-opacity="0.3"
          ></path>{" "}
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
