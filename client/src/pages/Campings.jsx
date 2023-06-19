/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

const ServiceAll = () => {
  let { formId } = useParams();

  const [formData, setFormData] = useState([]);
  const [beneficesPerPage] = useState(6);
  const [filterTypes, setFilterTypes] = useState("money");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getForms")
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastBenefice = currentPage * beneficesPerPage;
  const indexOfFirstBenefice = indexOfLastBenefice - beneficesPerPage;
  const currentBenefices = formData
    .filter((benefice) => benefice.typeOfneeds === filterTypes)
    .slice(indexOfFirstBenefice, indexOfLastBenefice);
  return (
    <>
      <div
        className="bg-cover  bg-center h-screen"
        style={{
          backgroundImage:
            'url("https://i0.wp.com/abunawaf.com/wp-content/uploads/2016/11/%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9-%D8%A7%D9%84%D8%A2%D8%AE%D8%B1%D9%8A%D9%86.jpg?ssl=1")',
          height: "400px",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {" "}
              ساعد محتاج و كُن عوناً لهم{" "}
            </h1>

            <nav className="text-white mb-8">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-amber-500">
                    الصفحة الرئيسية
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li> ساهم في إنقاذ حياة</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <center>
          <h5 className="mb-2 text-2xl font-bold tracking-tight mt-10 text-3xl  text-[#008080] dark:text-white">
            ساعد محتاج الآن{" "}
          </h5>
        </center>
        {/* شريط البحث */}

        {/* عوامل التصفية المنسدلة */}
        <div className="flex justify-center my-4 space-x-4">
          <div>
            <select
              value={filterTypes}
              onChange={(e) => setFilterTypes(e.target.value)}
              className="px-4 py-2 shadow border border-[008080]   px-96 text=[#008080] rounded-md focus:outline-none focus:ring focus:border-[#008080]"
            >
              <option value="money">مساعدات نقدية </option>
              <option value="tools"> لوازم طبية</option>
              <option value="food">مواد تمونية </option>
            </select>
          </div>
        </div>
        {/* عرض الفوائد */}
        <div className="flex flex-wrap gap-10 justify-center my-16 pagenation">
          {currentBenefices.map((benefice) => {
            if (benefice.isApproved) {
              return (
                <div key={benefice._id}>
                  <div key={benefice._id}>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                      <Link href="#" className="h-40">
                        {benefice.Images &&
                          benefice.Images.slice(0, 1).map((image, index) => (
                            <img
                              key={index}
                              src={`http://localhost:5000/${image}`}
                              alt={`Image ${index}`}
                            />
                          ))}
                      </Link>
                      <div className="p-5">
                        <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">
                            {benefice.fullName}
                          </h5>
                        </a>
                        <div className="w-full bg-gray-200 mt-4 rounded-full dark:bg-gray-700">
                          <div
                            className="bg-blue-600 text-xs font-medium text-blue-100 mb-4 text-center p-0.5 leading-none rounded-full"
                            style={{ width: "50px" }}
                          >
                            {parseInt(
                              (benefice.sumOfPaid /
                                benefice.totalPriceByAdmin) *
                                100
                            )}
                            %
                          </div>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {benefice.TitleOfConsept}
                        </p>
                        <p>المبلغ المطلوب: {benefice.totalPriceByAdmin}</p>
                        <p>نوع المساعدة: {benefice.typeOfneeds}</p>

                        <div className="flex justify-center mt-4 bg-[#8dbbd0] p-1 gap-2">
                          <Link to={`/pay/${benefice._id}`}>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 ps-14 pe-14 rounded-l">
                              تبرع الآن
                            </button>
                          </Link>
                          <Link to={`/BenDetails/${benefice._id}`}>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 ps-14 pe-14 rounded-r">
                              رؤية المزيد
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
          {/* ))} */}
        </div>
        {/* الترقيم */}
        <div className="flex justify-center">
          <Pagination
            count={Math.ceil(
              formData.filter(
                (benefice) => benefice.typeOfneeds === filterTypes
              ).length / beneficesPerPage
            )}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
        <div className="flex w-full justify-center mt-5 bg-white"></div>
      </div>
    </>
  );
};

export default ServiceAll;
