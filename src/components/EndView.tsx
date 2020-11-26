import React from "react";

type EndViewProps = {
  url: string;
  setStatus: Function;
};

export default function EndView({ url, setStatus }: EndViewProps) {
  const clickHandler = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <div className="end flex items-center flex-col bg-white shadow-md rounded-xl p-10 font-pop">
      <i className="fas fa-check text-3xl p-5 rounded-full bg-green-600 h-4 w-4 text-center flex justify-center items-center text-white"></i>
      <h2 className="font-medium text-gray-600 text-2xl mt-4">Uploaded Successfully!</h2>
      <img className="select-none mt-4 w-96 max-h-80 min-h-52 rounded-xl object-contain" src={url} alt="" />
      <div className="h-12 w-full mt-5 bg-gray-50 rounded-lg relative flex items-center border-2 border-gray-300">
        <p className="w-72 pl-2 text-xs text-gray-600 truncate select-none">{url}</p>
        <button
          className="h-10 p-2 font-noto text-sm text-white bg-blue-500 rounded-lg focus:ring-2 hover:bg-blue-700 absolute right-0.5"
          onClick={clickHandler}
        >
          Copy Link
        </button>
      </div>
      <button
        className="font-noto text-sm text-white bg-blue-500 rounded-lg focus:ring-2 hover:bg-blue-700 p-2 mt-4"
        onClick={() => setStatus("start")}
      >
        Upload another file
      </button>
    </div>
  );
}
