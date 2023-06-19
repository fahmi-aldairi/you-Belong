/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const ProfilePage = () => {
  const [data, setData] = useState();
  const [formData, setFormData] = useState();
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `http://localhost:5000/getDonor`,
        config
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(".>>sad>>");
  return (
    <>
      <div className="p-16 bg-white mt-20">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase">
            صفحتي الشخصية
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase"></span>
        </h1>
        <div>
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-right text-sm font-light">
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        الاسم{" "}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {" "}
                        {data && data.fullName}
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        البريد الالكتروني
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {" "}
                        {data && data.email}
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        رقم الهاتف
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {" "}
                        {data && data.phone ? data.phone : "لم تدخل رقم هاتفك"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center">
                  {" "}
                  <Link to="/EditProfile">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 mt-8  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-20">
                      تعديل المعلومات الشخصية
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
