import React from "react";

const TickTack = ({ onClickTile, tickarr }) => {
  console.log("tickarr ==>", tickarr);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className=" text-white font-bold pt-10">Tic Tack Toe</h1>
      <div className=" flex flex-row pt-4">
        <div
          className="w-32 h-32 bg-black border-r-[4px] border-b-[4px] border-r-blue-400 border-b-blue-400 text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(0)}
        >
          {tickarr[0]}
        </div>
        <div
          className="w-32 h-32 bg-black border-r-[4px] border-r-blue-400 border-b-[4px] border-b-blue-400 text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(1)}
        >
          {tickarr[1]}
        </div>
        <div
          className="w-32 h-32 bg-black border-r-blue-400 border-b-[4px] border-b-blue-400 text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(2)}
        >
          {tickarr[2]}
        </div>
      </div>
      <div className=" flex flex-row ">
        <div
          className="w-32 h-32 bg-black border-r-[4px] border-r-blue-400 border-b-[4px] border-b-blue-400 text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(3)}
        >
          {tickarr[3]}
        </div>
        <div
          className="w-32 h-32 bg-black border-r-[4px] border-r-blue-400 border-b-[4px] border-b-blue-400 text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(4)}
        >
          {tickarr[4]}
        </div>
        <div
          className="w-32 h-32 bg-black border-b-[4px] border-b-blue-400 text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(5)}
        >
          {tickarr[5]}
        </div>
      </div>
      <div className=" flex flex-row">
        <div
          className="w-32 h-32 bg-black border-r-[4px] border-r-blue-400 text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(6)}
        >
          {tickarr[6]}
        </div>
        <div
          className="w-32 h-32 bg-black border-r-[4px] border-r-blue-400 text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(7)}
        >
          {tickarr[7]}
        </div>
        <div
          className="w-32 h-32 bg-black text-blue-400 text-6xl flex flex-row items-center justify-center"
          onClick={() => onClickTile(8)}
        >
          {tickarr[8]}
        </div>
      </div>
    </div>
  );
};

export default TickTack;
