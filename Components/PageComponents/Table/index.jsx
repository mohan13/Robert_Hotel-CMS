import { MdDelete, MdModeEditOutline } from "react-icons/md";
import React from "react";
import Image from "next/image";
const Index = ({ Id, SubTitle, Name, Description, image }) => {
  const Delete = () => {
    alert("Delete");
  };
  const Edit = () => {
    alert("Edit");
  };
  return (
    <div>
      <div className="flex bg-gray-500 text-Headline ">
        <div className="w-8 p-1 border">{Id}</div>
        <div className="grid w-full grid-cols-7">
          <div className="p-1 col-span-2 border ">{Name}</div>{" "}
          <div className="p-1  col-span-2 border ">{SubTitle}</div>
          <div className="p-1 border">{Description}</div>{" "}
          <div className="border">
            <div className=" w-4 h-10  mx-auto ">
              <img  className="h-full w-full" src={image} alt="" />
            </div>
          </div>
          <div className="p-1 flex items-center justify-center gap-4 border border-r-2">
            <div 
              onClick={Edit}
              className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
              // className="cursor-pointe p-1 border transition duration-300 ease-in-out border-red-600 bg-white text-red-600  hover:text-white  hover:bg-red-600 "
            >
              <MdModeEditOutline />
            </div>
            <div
              onClick={Delete}
              className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
