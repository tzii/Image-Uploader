import React from "react";

export default function EndView() {
  return (
    <div className="end flex items-center flex-col bg-white shadow-md rounded-xl p-10 font-pop">
      <i className="fas fa-check text-3xl p-5 rounded-full bg-green-600 h-4 w-4 text-center flex justify-center items-center text-white"></i>
      <h2 className="font-medium text-gray-600 text-2xl mt-5">Uploaded Successfully!</h2>
      <img
        className="select-none mt-5 w-96 max-h-96 min-h-52 rounded-xl"
        src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/p600x600/125191622_4000854746641781_3257068968426749217_o.jpg?_nc_cat=111&ccb=2&_nc_sid=b9115d&_nc_ohc=2EPb6EuURn4AX8wTUGy&_nc_ht=scontent.fvca1-1.fna&tp=6&oh=370ce4674d10bfd475967bc4a962362d&oe=5FE32547"
        alt=""
      />
      <div className="h-12 w-full mt-6 bg-gray-50 rounded-lg relative flex items-center border-2 border-gray-300">
        <p className="w-72 pl-2 text-xs text-gray-600 truncate select-none">
          https://images.yourdomain.com/photo-1496950866446-325...
        </p>
        <button className="h-10 p-2 font-noto text-sm text-white bg-blue-500 rounded-lg focus:ring-2 hover:bg-blue-700 absolute right-0.5">
          Copy Link
        </button>
      </div>
    </div>
  );
}
