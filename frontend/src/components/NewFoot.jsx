import {
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NewFoot() {
  return (
    <footer className="bg-white rounded-lg shadow m-4  py-14 px-6">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm font-medium sm:text-center ">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Copyright
          </a>
          . All Rights Reserved.
        </span>

        <span className="flex gap-2 text-sm font-medium items-center justify-between">
          <p>Built with </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p>for web3</p>
        </span>

        <div className="flex gap-2 grid-cols-4  items-baseline">
          <Link to="https://github.com/Abhishek-M-K/" target="_blank">
            <FaGithub size={30} />
          </Link>

          <Link to="https://linkedin.com/in/abhishekkhandare" target="_blank">
            <FaLinkedin size={30} />
          </Link>

          <Link to="https://twitter.com/khandare98ak" target="_blank">
            <FaTwitterSquare size={30} />
          </Link>

          <Link
            to="https://instagram.com/iamabhishekkhandare?igshid=MzMyNGUyNmU2YQ=="
            target="_blank"
          >
            <FaInstagram size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
{
  /* <ul class="flex gap-2 grid-cols-4 items-baseline mt-3 ">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              <FaTwitterSquare size={30} />
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              <FaInstagram size={30} />
            </a>
          </li>
        </ul> */
}
