export default function InfoBox({ title, value }) {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-mono font-semibold text-[30px]  bg-gray-400 rounded-t-[10px] w-full text-center truncate">
        {value}
      </h4>
      <p className="font-mono font-medium text-[16px]  bg-gray-500 px-3 py-2 w-full rouned-b-[10px] text-center">
        {title}
      </p>
    </div>
  );
}
