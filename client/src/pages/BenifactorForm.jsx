import axios from "axios";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

function BenifactorForm() {
  const [formData, setFormData] = useState({
    beneficerId: "",
    fullName: "",
    phone: "",
    email: "",
    city: "",
    streetName: "",
    buldingNumber: "",
    TitleOfConsept: "",
    DescriptionOfConsept: "",
    typeOfneeds: "",
  });
  const [images, setImages] = useState([]);
  const [reports, setReports] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImagesChange = (event) => {
    setImages([...event.target.files]);
  };
  const handleReportsChange = (event) => {
    setReports([...event.target.files]);
  };

  // const handleShowpay = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setshow("showmoney");
  //   console.log("showed");
  // };
  // const handleHidepay = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setshow("hide");
  //   console.log("hide");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(token);
    try {
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("beneficerId", formData.beneficerId);
      formDataWithFiles.append("fullName", formData.fullName);
      formDataWithFiles.append("phone", formData.phone);
      formDataWithFiles.append("email", formData.email);
      formDataWithFiles.append("city", formData.city);
      formDataWithFiles.append("streetName", formData.streetName);
      formDataWithFiles.append("buldingNumber", formData.buldingNumber);
      formDataWithFiles.append("TitleOfConsept", formData.TitleOfConsept);
      formDataWithFiles.append(
        "DescriptionOfConsept",
        formData.DescriptionOfConsept
      );
      formDataWithFiles.append("typeOfneeds", formData.typeOfneeds);

      images.forEach((file) => {
        formDataWithFiles.append("images", file);
      });
      reports.forEach((file) => {
        formDataWithFiles.append("reports", file);
      });

      const response = await axios.post(
        "http://localhost:5000/SubmitForm",
        formDataWithFiles,
        config
      );

      console.log("Data sent successfully");
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  const showSuccessAlert = () => {
    Swal.fire({
      title: "تمت تعبئة طلبك بنجاح, سوف نقوم  بعرض طلبك بأقرب وقت ممكن",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.href = "http://localhost:3000/";
    });
  };

  return (
    <div className=" mt-40">
      <h1 className="text-center pb-8 font-bold text-cyan-400 text-3xl ">
        نموذج طلب مساعدة{" "}
      </h1>
      <h1 className="text-center text-cyan-400 text-xl ">
        شكرا لك لثقتك بنا , والسماح لنا بتقديم المساعدة لاجلك , الرجاء ملئ الطلب
        وسنقوم بالتحقق من معلوماتك والرد عليك في اقرب وقت ممكن
      </h1>

      <div class="   py-20  px-10 min-h-screen ">
        <div class="bg-white shadow-lg border-2 p-10 md:w-3/4 lg:w-1/2 mx-auto">
          <form action="" onSubmit={handleSubmit}>
            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder=" الرجاء ملئ المعلومات الشخصية في الخانات التالية "
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
              text-gray-600 placeholder-gray-600
              "
                disabled
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="name"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                الاسم
              </label>
              <input
                type="text"
                id="name"
                name="fullName"
                placeholder="Name"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>

            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                رقم الهاتف
              </label>
              <input
                type="tel"
                id="number"
                name="phone"
                placeholder="number"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                البريد الالكتروني
              </label>
              <input
                type="tel"
                id="number"
                name="email"
                placeholder="number"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>

            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="الرجاء ادخال عنوان سكنك في الخانات التالية "
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
                      text-gray-600 placeholder-gray-600
                      "
                disabled
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                font-bold text-gray-600"
              >
                المدينة
              </label>
              <input
                type="text"
                id="number"
                name="city"
                placeholder="اسم المدينة"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                اسم الشارع{" "}
              </label>
              <input
                type="text"
                id="number"
                name="streetName"
                placeholder="اسم الشارع"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                رقم البناية{" "}
              </label>
              <input
                type="text"
                id="number"
                name="buldingNumber"
                placeholder="رقم البنايه"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="تفاصيل الحالة المرضية "
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
              text-gray-600 placeholder-gray-600
              "
                disabled
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                عنوان التبرع{" "}
              </label>
              <input
                type="text"
                id="number"
                name="TitleOfConsept"
                placeholder="اجعل العنوان مؤثر وقصير كاسمك واسم المرض الذي تعاني منه"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none border-2"
                onChange={handleChange}
              />
            </div>

            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                اخبرنا قصتك{" "}
              </label>
              <textarea
                id="number"
                name="DescriptionOfConsept"
                placeholder="اخبرنا قصتك مع المرض والسبب الذي يدعو الناس الى التبرع لك بشكل موجز  "
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none h-40 border-2  overflow-visible"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="صورة شخصية والتقارير الطبية   "
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
              text-gray-600 placeholder-gray-600
              "
                disabled
              />
            </div>

            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                صورة شخصية{" "}
              </label>
              <input
                type="file"
                id="file"
                placeholder="file"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                multiple
                onChange={handleImagesChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                التقارير الطبية
              </label>
              <input
                type="file"
                id="file"
                placeholder="file"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                multiple
                onChange={handleReportsChange}
              />
            </div>

            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="الرجاء اختيار توع المساعدة التي تحتاجها "
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
                      text-gray-600 placeholder-gray-600
                      "
                disabled
              />
            </div>

            <div class="">
              <div class="flex items-center pl-4 border border-gray-200 rounded mb-4 dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value="money"
                  checked={formData === "money"}
                  name="typeOfneeds"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label
                  for="bordered-radio-1"
                  class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  مساعدة مالية{" "}
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded mb-4 dark:border-gray-700">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  value="tools"
                  checked={formData === "tools"}
                  name="typeOfneeds"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label
                  for="bordered-radio-2"
                  class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  مستلزمات صحية
                </label>
              </div>
              <div class="flex items-center pl-4 border border-gray-200 rounded mb-4 dark:border-gray-700">
                <input
                  id="bordered-radio-3"
                  type="radio"
                  value="supplies"
                  checked={formData === "supplies"}
                  name="typeOfneeds"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label
                  for="bordered-radio-2"
                  class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  مواد تموينية
                </label>
              </div>
            </div>

            <div class="text-right">
              <button
                type="submit"
                class="py-3 px-8 bg-green-400 text-white font-bold"
                onClick={showSuccessAlert}
              >
                تأكيد
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BenifactorForm;
