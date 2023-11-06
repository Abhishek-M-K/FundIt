export default function FormField({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="text-left font-epilogue font-medium text-[14px] leading-5 text-gray-400">
          {labelName}
        </span>
      )}

      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={10}
          className="text-white text-sm font-epilogue placeholder:text-gray-500 
              py-[15px] sm:px-[25px] px-[15px] 
              outline-none bg-transparent 
              border border-gray-400 sm:min-w-[300px]"
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          placeholder={placeholder}
          step="0.1"
          className="text-white text-sm font-epilogue placeholder:text-gray-500 
              py-[15px] sm:px-[25px] px-[15px] 
              outline-none bg-transparent 
              border border-gray-400"
        />
      )}
    </label>
  );
}
