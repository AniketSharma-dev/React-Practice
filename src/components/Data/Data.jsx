import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    console.log("get Data");
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
    setData(response.data);
  };
  // fetching data on load
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-full mt-5  flex gap-5 flex-col justify-center items-center">
        <button
          onClick={getData}
          className=" w-[200px] h-[50px] text-gray-200 bg-emerald-500 active:scale-[0.98] hover:bg-emerald-600 hover:text-black font-bold px-5 py-1 rounded"
        >
          Get Data{" "}
        </button>
        <div className="w-full grid items-center lg:grid-cols-4 gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  px-4 md:px-7 xl:px-20  py-10  rounded-2xl ">
          {data.map((e, idx) => {
            //   console.log(e);
            return (
              <div
                key={idx}
                className=" w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg object-cover w-full h-[250px]"
                    src={e.download_url}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {e.author}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Data;
