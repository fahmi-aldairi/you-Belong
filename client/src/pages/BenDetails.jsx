/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../style/details.css";

function BenDetails() {
  const [data, setData] = useState([]);
  let params = useParams();
  let { formId } = useParams();
  console.log(">>>>", params);
  useEffect(() => {
    getDetailsData();
  }, []);

  const getDetailsData = async () => {
    // const id = sessionStorage.getItem("cardId");
    // console.log(id);
    try {
      const response = await axios.get(
        `http://localhost:5000/getForms/${formId}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  //   const {
  //     fullName,
  //     phone,
  //     city,
  //     totalPrice,
  //     DescriptionOfConsept,
  //     Images
  //   } = data;
  // console.log(data);

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-vector/donation-icon-design-illustration-hand-hold-red-heart-sign-symbol-charity-vector-illustration_752732-204.jpg',
          height: "400px",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              ساهم في إنقاذ حياة
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
                <li>تفاصيل التبرع</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div className="col-2">
                <div className="aspect-w-1 aspect-h-3">
                  {/* {console.log(data[0]?.Images)} */}
                  {data.Images?.slice(0, 1).map((image, index) => (
                    <img
                      alt="image"
                      src={`http://localhost:5000/${image}`}
                      className="w-full h-full rounded-xl object-fit shadow-lg max-w-full"
                      style={{ height: "300px" }}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                {data.Images.slice(1, 3).map((image, index) => (
                  <div className="aspect-w-1 aspect-h-3" key={index}>
                    <img
                      alt="image"
                      src={`http://localhost:5000/${image}`}
                      className="w-full h-full rounded-xl object-fit shadow-lg max-w-full"
                      style={{ height: "240px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <div className="">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="odd:bg-gray-50">
                      <td className="whitespace-wrap px-5 py-5 font-medium text-gray-900 bg-white shadow-lg">
                        الإسم
                      </td>
                      <td className="whitespace-wrap px-5 py-5 text-gray-700 bg-white shadow-lg">
                        {data.fullName}
                      </td>
                    </tr>
                    <tr className="odd:bg-gray-50">
                      <td className="whitespace-wrap px-5 py-5 font-medium text-gray-900 bg-white shadow-lg">
                        رقم الهاتف
                      </td>
                      <td className="whitespace-wrap px-5 py-5 text-gray-700 bg-white shadow-lg">
                        {data.phone}
                      </td>
                    </tr>
                    <tr className="odd:bg-gray-50">
                      <td className="whitespace-wrap px-5 py-5 font-medium text-gray-900 bg-white shadow-lg">
                        العنوان
                      </td>
                      <td className="whitespace-wrap px-5 py-5 text-gray-700 bg-white shadow-lg">
                        {data.city}
                      </td>
                    </tr>
                    <tr className="odd:bg-gray-50">
                      <td className="whitespace-wrap px-5 py-5 font-medium text-gray-900 bg-white shadow-lg">
                        المبلغ
                      </td>
                      <td className="whitespace-wrap px-5 py-5 text-gray-700 bg-white shadow-lg">
                        {data.totalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 shadow p-5 ">
                قصتي : {data.DescriptionOfConsept}
              </div>
              <Link to={`/pay/${formId}`}>
                {/* to={`/BenDetails/${benefice._id}`} */}
                <div className="buttonPayment flex justify-center mt-10">
                  تبرع
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BenDetails;
