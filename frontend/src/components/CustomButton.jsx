export default function CustomButton({ btnType, title, handleClick, styles }) {
  return (
    <button
      type={btnType}
      className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white  rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400  focus:ring-pink-200 dark:focus:ring-pink-800 ${styles}`}
      onClick={handleClick}
    >
      <span className="relative px-5 py-2.5 w-full  bg-white text-black rounded-md group-hover:bg-opacity-0 hover:text-white">
        {title}
      </span>
    </button>
  );
}
