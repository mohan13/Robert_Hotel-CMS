import React, { useState } from "react";
import Link from "next/link";
import Dashboard from "./index";
const Table = ({ TableData }) => {
  const [query, setQuery] = useState("");
  const Searching = (e) => {
    setQuery(e.target.value);
  };
  // const filterdByName = (array) => {
  //   return array.filter((el) => el.headline.toUpperCase().includes(query));
  // };
  // const filtered = filterdByName(TData);
  const Remove = () => {
    alert("deleted");
  };
  const Edit = () => {
    alert("Let's Edit");
  };
  const Add = () => {
    alert("Adding");
  };

  return (
    <div className="px-10">
      <div className="w-full h-fit mt-10 mb-4 flex justify-end items-center">
        <div className="flex gap-4">
          <input
            onChange={Searching}
            type="text"
            placeholder="Search"
            className="bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-2 transition-colors duration-200 ease-in-out"
          />
          <Link
            href="/Form"
            // onClick={Add}
            class="mr-auto cursor-pointer text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"
          >
            Add +
          </Link>
        </div>
      </div>
      <div className="flex text-md bg-gray-600 text-Headline text-center">
        <div className="w-8 p-2 border border-r-1">Id</div>
        <div className="grid grid-cols-7 w-full bg-grey-600">
          <div className="p-2 col-span-2 border ">Name</div>{" "}
          <div className="p-2 col-span-2  border">Sub title</div>
          <div className="p-2  border">Description</div>{" "}
          <div className="p-2  border">Images</div>
          <div className=" p-2  border">Actions</div>
        </div>
      </div>
      <div>
        {TableData?.slice(0, 10).map((val, i) => {
          return (
            <div key={i}>
              <Dashboard
                Id={val.id}
                Name={val.title}
                // SubTitle={val.comment}
                Description={val.description}
                image={val.image}
                Button={val.btn}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
