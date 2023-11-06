import {
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-full">
      <div className="max-w-full  py-10 px-6 grid grid-cols-3 gap-10  justify-between">
        <div className="flex gap-2">
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
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          <p>Copyright 2023. All rights reserved.</p>
        </div>

        <div className="flex gap-2">
          <p>Built with </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p>by Abhishek</p>
        </div>

        <div className="flex gap-2 grid-cols-4  items-baseline">
          <FaGithub size={30} />
          <FaLinkedin size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
    </div>
  );
}
