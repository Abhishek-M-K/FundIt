import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [phone, setPhone] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        LinkedIn,
        password,
      });
      alert("Registration Successful ! Please Login ");
    } catch (e) {
      alert("Registration Failed ! Please try again later");
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-50">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="name"
            placeholder="full name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <input
            type="username"
            placeholder="LinkedIn Username"
            value={LinkedIn}
            onChange={(ev) => setLinkedIn(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="login">Register</button>
          <div className="text-center py-2 text-gray-600">
            Already a member ?{" "}
            <Link className=" text-black" to={"/login"}>
              Login !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
