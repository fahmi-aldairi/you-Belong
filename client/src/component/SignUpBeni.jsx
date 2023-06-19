/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/youBelong.png";
const Signup = () => {
  const navigate = useNavigate();
  const [newUser, setNewUSer] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "beneficer",
  });
  const [error, seterror] = useState("");
  const [confirmPassword, setConfirmpass] = useState("");

  function validateEmail(newUser) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(newUser.email);
  }

  function validatePassword(newUser) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(newUser.password);
  }
  function validateConfirmPassword(confirmPassword, newUser) {
    if (confirmPassword != newUser.password) return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/createNewBeneficer",
        newUser
      );
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      // Handle the error here
      if (
        error.response &&
        error.response.data &&
        error.response.data.Emessage
      ) {
        seterror(error.response.data.Emessage);
      } else {
        seterror("An error occurred. Please try again.");
      }
    }
  }
  console.log(">>", error);
  function handleCallBackResponse(response) {
    console.log("Encoded JWT: " + response.credential);
  }

  // useEffect(() => {

  //   google.accounts.id.initialize({
  //     client_id:
  //       "7253351254-sqamgnt7l36cs9op6he04hoaena21vqd.apps.googleusercontent.com",
  //     callback: handleCallBackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="mx-auto max-w-lg text-center"></div>

      <div className="w-full  sm:max-w-md">
        <div className="max-w-sm w-full text-black border-2 border-gray-200 bg-white shadow  p-5 py-6 sm:p-6 sm:rounded-lg ">
          <form className="space-y-5 w-70" onSubmit={(e) => handleSubmit(e)}>
            <div className="text-center pb-8">
              <span className="font-bold text-4xl">
                انشاء<span className="text-[#5aa1c2] font-bolder"> حساب </span>{" "}
              </span>
            </div>
            <div
              id="signInDiv"
              className="w-full max-w-full flex justify-center"
            ></div>
            <div>
              <label
                htmlFor="name"
                className={`block mb-2 text-sm font-medium `}
              >
                الاسم الكامل{" "}
              </label>
              <input
                type="text"
                id="name"
                required
                className={` w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                placeholder="ادخل اسمك"
                name="fullName"
                value={newUser.fullName}
                onChange={(e) => {
                  setNewUSer({ ...newUser, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block mb-2 text-sm font-medium`}
              >
                البريد الالكتروني
              </label>
              <input
                placeholder="ادخل بريدك الالكتروني"
                type="email"
                id="email"
                required
                className={`w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                name="email"
                value={newUser.email}
                onChange={(e) => {
                  setNewUSer({ ...newUser, [e.target.name]: e.target.value });
                }}
              />
              {!validateEmail(newUser) && newUser.email !== "" && (
                <p className="text-red-600">
                  الرجاء ادخال البريد الالكترونيبشكل صحيح
                </p>
              )}
              <span className="text-red-600">{error}</span>
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block mb-2 text-sm font-medium`}
              >
                كلمة السر
              </label>
              <input
                placeholder="ادخل الرقم السري"
                id="password"
                type="password"
                required
                className={`w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                name="password"
                value={newUser.password}
                onChange={(e) => {
                  setNewUSer({ ...newUser, [e.target.name]: e.target.value });
                }}
              />
              {!validatePassword(newUser) && newUser.password !== "" && (
                <p className="text-red-600">
                  الرجاء ادخال الرقم االسري المكةن من 8 خانات , بدون احرف عربية
                  فقط احرف انجليزية وحرف كبير وارقام و رمز مميز
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block mb-2 text-sm font-medium`}
              >
                تأكيد كلمة السر{" "}
              </label>
              <input
                placeholder="تأكيد الرقم السري"
                id="confirmPassword"
                type="password"
                className={`w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmpass(e.target.value);
                }}
              />
              {validateConfirmPassword(confirmPassword, newUser) &&
                confirmPassword !== "" && (
                  <p className="text-red-600">
                    كلمة السرالتي ادخلتها لا تطابق كلمة السر المدخلة{" "}
                  </p>
                )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mb-2 text-white font-medium bg-[#4e94b5] hover:bg-white hover:text-black border hover:border-black rounded-lg duration-150"
            >
              انشاء حساب{" "}
            </button>
          </form>
          <div className="mt-5">
            <p className="text-center">
              لديك حساب بالفعل{" "}
              <span className="ml-1">
                <Link
                  to={"/login"}
                  className=" font-medium text-[#4e94b5] hover:text-black hover:underline transition"
                >
                  تسجيل الدخول{" "}
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 max-md:hidden">
        <img
          alt="Welcome"
          src={logo}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Signup;
