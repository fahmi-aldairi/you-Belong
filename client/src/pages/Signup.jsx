import React from "react";
import Tabs from "../component/TabSignUp";
function Signup() {
  return (
    <div>
      <div className="py-40 ">
        <div
          action=""
          className=" container    rounded-lg  shadow-xl border-2 sm:p-4 m-auto"
        >
          <div className=" flex justify-center ">
            <h1 className="text-center text-lg font-bold text-[#5aa1c2]  sm:text-lg lg:w-1/2">
              اهلا وسهلا بك في منصة ينتمي <br></br> ان كنت تريد مساعدة انت تحتاج
              الى ان تنشأ حساب من خلال الضغط على ايقونة "اطلب مساعدة الان اما
              كنت تريد ان تساهم في مساعدة محتاج فبامكانك انشاء حساب من خلال
              الضغط على ايقونة "ساعد محتاج"{" "}
            </h1>
          </div>
          <div>
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
