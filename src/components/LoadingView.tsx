import React from "react";

export default function LoadingView() {
  return (
    <div className="loading bg-white shadow-md rounded-xl p-10 font-pop">
      <h2 className="font-medium text-gray-600 text-2xl">Uploading</h2>
      <div className="w-96 h-2 mt-5 bg-gray-100 rounded-full relative overflow-hidden">
        <div className="absolute w-28 h-2 bg-blue-500 rounded-full animate-loading"></div>
      </div>
    </div>
  );
}
