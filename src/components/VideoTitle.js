import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute pt-[15%] px-12 text-white bg-gradient-to-l from-slate-800 w-screen aspect-video">
      <h1 className="font-bold text-5xl ">{title}</h1>
      <p className="py-8 m-2 w-1/4">{overview}</p>
      <div>
        <button className=" bg-white text-black px-10 py-3 m-2 text-lg bg-opacity-80 rounded-xl">
          Play
        </button>
        <button className=" bg-white text-black px-10 py-3 m-2 text-lg  bg-opacity-80 rounded-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
