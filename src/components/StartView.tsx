import React, { DragEvent, useRef } from "react";
import imgURL from "../images/image.svg";

type ViewProps = {
  setStatus: Function;
  setURL: Function;
};

export default function StartView({ setStatus, setURL }: ViewProps) {
  const url = "https://api.cloudinary.com/v1_1/tuanvu/image/upload";
  const fileInput = useRef<HTMLInputElement>(null);
  const dropZone = useRef<HTMLDivElement>(null);
  const clickHandler = () => {
    fileInput.current?.click();
  };

  const uploadHandler = (file: File) => {
    setStatus("loading");
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "u01sk6iy");
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(({ url }) => {
        setURL(url);
        setStatus("end");
      });
  };

  const changeHandler = () => {
    if (fileInput.current?.files?.length) {
      uploadHandler(fileInput.current?.files?.[0]);
    }
  };

  const dropHandler = (e: DragEvent) => {
    e.preventDefault();
    dropZone.current?.classList.remove("bg-opacity-100");
    uploadHandler(e.dataTransfer.files[0]);
  };

  const dragOverHandler = (e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const dragEnterHandler = (e: DragEvent) => {
    dropZone.current?.classList.add("bg-opacity-100");
  };
  const dragLeaveHandler = (e: DragEvent) => {
    dropZone.current?.classList.remove("bg-opacity-100");
  };
  return (
    <div className="start flex items-center flex-col bg-white shadow-md rounded-xl p-10 font-pop">
      <h2 className="font-medium text-gray-600 text-2xl">Upload your image</h2>
      <p className="text-sm text-gray-400 mt-4">File should be Jpeg, Png, ...</p>
      <div
        className="mt-4 py-10 w-96 flex flex-col items-center bg-blue-100 rounded-xl bg-opacity-20 hover:bg-opacity-50 border-2 border-dashed border-blue-500"
        ref={dropZone}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
      >
        <img className="select-none" src={imgURL} alt="" />
        <p className="text-base text-gray-400 mt-10 select-none">Drag & Drop your image here</p>
      </div>
      <p className="text-sm text-gray-400 mt-4">Or</p>
      <button
        className="font-noto text-sm text-white bg-blue-500 rounded-lg focus:ring-2 hover:bg-blue-700 p-2 mt-4"
        onClick={clickHandler}
      >
        Choose a file
      </button>
      <input
        className="hidden"
        type="file"
        ref={fileInput}
        name=""
        id="fileinput"
        accept="image/png,image/jpeg"
        onChange={changeHandler}
      />
    </div>
  );
}
