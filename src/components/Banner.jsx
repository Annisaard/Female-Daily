import React from "react";

const FrameTop = () => {
  return (
    <>
      <div className="px-[12rem] flex justify-center">
        <div className="h-[3rem] w-[55rem] border-2 border-[#B1B1B1] bg-[#D8D8D8] flex justify-center items-center mt-3">
          <p className="font-bold text-gray-500 text-lg">Top Frame 970x50</p>
        </div>
      </div>
    </>
  );
};
const Billboard = () => {
  return (
    <>
      <div className="px-[10rem] flex justify-center">
        <div className="h-[14rem] w-[55rem] border-2 border-[#B1B1B1] bg-[#D8D8D8] flex justify-center items-center mt-5">
          <p className="font-bold text-gray-500 text-xl">Billboard 970X250</p>
        </div>
      </div>
    </>
  );
};
const FrameBox = () => {
  return (
    <>
      <div className="flex justify-start">
        <div className="h-[17rem] w-[19rem] bg-gray-200 flex justify-center items-center ">
          <p className="font-bold text-gray-500 text-lg">Bilboard 970x50</p>
        </div>
      </div>
    </>
  );
};
export { FrameTop, Billboard, FrameBox };
