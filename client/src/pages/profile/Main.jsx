import React from "react";
import logo from "../../images/youBelong.png";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div>
      <main className="p-4 px-8  md:ml-64 h-auto py-20 mt-2 ">
        <div className="h-full">
          <div className="border-b-2 block md:flex">
            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
              <div className="flex justify-between text-center mr-32">
                <span className="text-xl font-semibold block ">
                  {" "}
                  المعلومات الشخصية
                </span>
              </div>

              <div className="w-full p-8 mx-2 flex justify-center">
                <img
                  id="showImage"
                  className="max-w-xs  items-center border"
                  src={logo}
                  alt=""
                />
              </div>
            </div>

            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
              <div className="rounded  shadow p-6">
                <div className="pb-6">
                  <label
                    for="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    الاسم
                  </label>
                  <div className="flex">
                    <input
                      id="username"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      value="اسم المريض"
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    for="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    البريد الالكتروني
                  </label>
                  <input
                    disabled
                    id="email"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="email"
                    value="example@example.com"
                  />
                  <span className="text-gray-600 pt-4 block opacity-70">
                    لا يمكنك تعديل بريدك الالكتروني
                  </span>
                </div>
                <div className="pb-4">
                  <label
                    for="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    الرقم السري{" "}
                  </label>
                  <input
                    id="email"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="password"
                    value="example@example.com"
                  />
                  <span className="text-gray-600 pt-4 block mb-8 opacity-70">
                    تعديل الرقم السري
                  </span>
                </div>
                <Link
                  to="#"
                  className=" text-md  font-bold text-white bg-gray-700 rounded-full px-16 py-2 hover:bg-gray-800"
                >
                  تعديل
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
