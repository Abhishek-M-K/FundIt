import { loader } from "../assets";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-10 bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-flex h-screen ">
      <img
        src={loader}
        alt="loader"
        className=" w-[100px] h-[100px] object-contain"
      />
      <p className=" mt-5 font-mono font-bold text-xl text-center text-white">
        Transaction is being processed <br />
        Please Wait . . . .
      </p>
    </div>
  );
}
