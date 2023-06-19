import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import payment from "../images/payment.jpg";
import Swal from "sweetalert2";
import axios from "axios";
import jwtDecode from "jwt-decode";

function Payment() {
  let params = useParams();
  let { formId } = useParams();
  const token = localStorage.getItem("token");
  let tokendonorId = "";

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      tokendonorId = decodedToken._id;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  } else {
    console.error("No token found in localStorage");
  }
  console.log(tokendonorId);

  const [cardnumber, setCardNumber] = useState("");
  const [datecard, setDateCard] = useState("");
  const [cvc, setCvc] = useState("");
  const [cash, setCash] = useState("");

  const handlePayment = () => {
    // submitPayment();

    // const cardNumber = document.getElementById("card-no").value;
    // const cardRegex = /^(4\d{15}|5\d{15})$/;
    // const today = new Date();
    // const currentMonth = today.getMonth() + 1;
    // const currentYear = today.getFullYear();
    // const [expirationMonth, expirationYear] = datecard.split("/");

    // if (!cardnumber || !datecard || !cvc) {
    //   showAlert("من فضلك أدخل كل معلومات بطاقتك");
    //   return;
    // }
    // if (!cardRegex.test(cardNumber)) {
    //   showAlert("رقم البطاقة غير صحيح");
    //   return;
    // }

    // if (
    //   Number(expirationYear) < currentYear ||
    //   (Number(expirationYear) === currentYear &&
    //     Number(expirationMonth) < currentMonth)
    // ) {
    //   showAlert("البطاقة منتهية");
    //   return;
    // }

    // const cvcRegex = /^\d{3}$/;

    // if (!cvcRegex.test(cvc)) {
    //   showAlert("غير صحيح CVC");
    //   return;
    // }
    submitPayment();
  };

  const submitPayment = () => {
    axios
      .post("http://localhost:5000/formByDonor", {
        formId: formId,
        donorPaid: parseInt(cash),
        donorId: tokendonorId || "anonymous",
      })
      .then(() => {
        showSuccessAlert("لقد تمت عملية الدفع بنجاح");
      })
      .catch(() => {
        showAlert("فشل في عملية الدفع ، من فضلك أعد المحاولة");
      });
    if (localStorage.getItem("token")) {
      axios
        .post("http://localhost:5000/donorPaid", {
          donorId: tokendonorId,
          donorPaid: parseInt(cash),
        })
        .then(() => {
          console.log("Done");
        })
        .catch(() => {
          console.log("faild");
        });
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: "أشكرك على عملية تبرعك من خلال منصتنا، أتمنى لك يوماً جميلاً",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.href = "http://localhost:3000/";
    });
  };

  const showAlert = (message) => {
    Swal.fire({
      title: "Error",
      text: message,
      icon: "error",
      confirmButtonText: "OK",
    });
  };
  console.log(cash);

  const handleCash = (event) => {
    const cashRegex = /^\d+$/;
    const enterdCash = event.target.value;
    if (enterdCash === "") {
      console.log("its empty");
    } else if (!cashRegex.test(enterdCash)) {
      console.log("Not Valid");
    } else {
      setCash(enterdCash);
    }
  };
  console.log(cash);
  return (
    <div
      className="min-h-screen bg-gray-100 text-gray-900 flex justify-center"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-teal-200 text-center hidden lg:flex">
          <img src={payment} alt="شعار الدفع" className="sm:rounded-lg" />
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 sm:w-10/12">
          <div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-semibold text-gray-900">
                صفحة الدفع
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="mt-10 bg-gray-50 px-4 py-8 lg:mt-0">
                  <p className="text-xl font-medium mb-2">تفاصيل الدفع</p>
                  <p className="text-gray-400">
                    أكمل عملية التبرع عن طريق تقديم تفاصيل الدفع الخاصة بك.
                  </p>
                  <div className="justify-center">
                    <label
                      htmlFor="card-holder"
                      className="mt-4 mb-2 block text-sm font-medium"
                    >
                      حامل البطاقة
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="card-holder"
                        name="card-holder"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="اسمك الكامل هنا"
                        required
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789a3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <label
                      htmlFor="card-no"
                      className="mt-4 mb-2 block text-sm font-medium"
                    >
                      تفاصيل البطاقة
                    </label>
                    <div className="flex">
                      <div className="relative w-7/12 flex-shrink-0">
                        <input
                          type="text"
                          id="card-no"
                          name="card-no"
                          className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                          value={cardnumber}
                          min={1}
                          max={16}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg
                            className="h-4 w-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        name="credit-expiry"
                        className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="MM/YY"
                        value={datecard}
                        onChange={(e) => setDateCard(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        name="credit-cvc"
                        className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                      />
                    </div>
                    <div className="mt-3">
                      <div className="relative w-7/12 flex-shrink-0">
                        <input
                          type="text"
                          id="card-no"
                          name="cash"
                          className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your starting goal"
                          onChange={handleCash}
                          required
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <span class="bg-gray-200 py-1 px-2 rounded-lg text-sm">
                            دينار
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      الإجمالي
                    </p>
                    <p className="font-semibold text-gray-900">{cash}</p>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <Link to="/" className="text-sm text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1 inline-block text-sm"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      العودة إلى الصفحة الرئيسية
                    </Link>
                    <button
                      className="inline-block text-sm px-4 py-3 leading-none border rounded-lg mt-4 lg:mt-0 text-white bg-[#5aa1c2] hover:bg-[#4e94b5]"
                      style={{ color: "white" }}
                      onClick={handlePayment}
                      type="submit"
                    >
                      الدفع الآن
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
