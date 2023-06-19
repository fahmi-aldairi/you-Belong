/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ProfilePage = () => {
  const [data, setData] = useState();
  const [formData, setFormData] = useState();
  useEffect(() => {
    getUserData();
    getFormData();
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
        `http://localhost:5000/getBeneficer`,
        config
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getFormData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `http://localhost:5000/getFormByBeniId`,
        config
      );
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="p-16 bg-white mt-20 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase">
            صفحتي الشخصية
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase"></span>
        </h1>
        <div class="flex flex-col">
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
                        {data && data.fullName}
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        البريد الالكتروني
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {data && data.email}
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        رقم الهاتف
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {data && data.phone ? data.phone : "لم تدخل رقم هاتفك"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center">
                  <Link to="/EditProfileben">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 mt-8  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-20">
                      تعديل المعلومات الشخصية
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase">
            {" "}
            الطلب الحالي:{" "}
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase"></span>
        </h1>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  bg-white">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 opacity-50">
            {/* {prevOrders?.map((order) => { */}
            {/* return( */}
            <div className="rounded overflow-hidden shadow-lg">
              <div className="relative">
                {formData &&
                  formData.Images?.slice(0, 1).map((image, index) => (
                    <img
                      key={index}
                      className="w-full"
                      src={`http://localhost:5000/${image}`}
                      alt="image"
                    />
                  ))}

                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm font-bold">
                  {/* {order.table_number} */}
                </div>
              </div>
              <div className="bg-white">
                <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto">
                  <li>
                    <div className="px-4 py-5 sm:px-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg leading-6 text-gray-900 font-bold">
                          نوع التبرع{" "}
                        </h3>
                        <p className="mt-1 max-w-2xl text-medium text-black">
                          {formData && formData.typeOfneeds}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                          المبلغ المطلوب
                        </p>
                        <span className="text-green-600">
                          {formData && formData.totalPriceByAdmin}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                          تم تجميع مبلغ{" "}
                        </p>
                        <span className="text-black">
                          {formData && formData.sumOfPaid}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                          حالة التبرع
                        </p>
                        <span className="text-black">
                          {formData &&
                          formData.sumOfPaid == formData.totalPriceByAdmin
                            ? "تم جمع المبلغ المطلوب"
                            : " قيد التجميع"}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* ) */}
            {/* })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
