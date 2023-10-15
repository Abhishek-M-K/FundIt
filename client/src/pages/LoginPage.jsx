import { useContext, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //state for redirect
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post(
        "/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(data);
      //we can use response & response.data as well
      alert("Login Successful !");
      setRedirect(true);
    } catch (e) {
      alert("Login Failed !");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    // <div className="mt-4 flex justify-center">
    //   <div className="w-96">
    //     <h2 className="mb-4 text-lg font-medium text-gray-900">Login</h2>
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-50">
        <h1 className="text-4xl text-center mb-4">Login</h1>

        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            className="mt-1 flex w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="name@flowbite.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="mt-1 flex w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="*************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
          <div className="text-center py-2 text-gray-600">
            Don't have an account ?{" "}
            <Link className=" text-black" to={"/register"}>
              Register !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
