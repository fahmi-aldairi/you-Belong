import React from "react";
import { useState } from "react";
function BenifactorForm() {
  const [style, setshow] = useState("hide");
  function showpay() {
    setshow("showmoney");
    console.log("HHH");
  }
  function hidepay() {
    setshow("hide");
  }
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
          <form action="">
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
                name="name"
                placeholder="Name"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
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
                name="number"
                placeholder="number"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                رقم الهاتف الثاني
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                placeholder="number"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                المدينة{" "}
              </label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="اسم المدينة"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
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
                {" "}
                اسم الشارع{" "}
              </label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="اسم الشارع"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
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
                type="number"
                id="number"
                name="number"
                placeholder="رقم البنايه"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
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
                type="فثءف"
                id="number"
                name="number"
                placeholder="اجعل العنوان مؤثر وقصير كاسمك واسم المرض الذي تعاني منه"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none border-2"
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
                name="number"
                placeholder="اخبرنا قصتك مع المرض والسبب الذي يدعو الناس الى التبرع لك بشكل موجز  "
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none h-40 border-2  overflow-visible 	"
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
                name="file"
                placeholder="file"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
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
                name="file"
                placeholder="file"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                multiple
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
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={showpay}
                />
                <label
                  for="bordered-radio-1"
                  class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  مساعدة مالية{" "}
                </label>
              </div>

              <div className={style}>
                <label for="number">
                  {" "}
                  المبلغ اليذي تحتاجه بالدينار الادرني{" "}
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="المبلغ"
                />
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded mb-4 dark:border-gray-700">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={hidepay}
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
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={hidepay}
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
              <button class="py-3 px-8 bg-green-400 text-white font-bold">
                تقديم الطلب
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BenifactorForm;
