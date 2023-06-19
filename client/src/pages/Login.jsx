import React from "react";
import Tabs from "../component/TabSignIn";
function Login() {
  return (
    <div>
      <div className="py-40 ">
        <div
          action=""
          className=" container  rounded-lg shadow-xl border-2 sm:p-4 m-auto"
        >
          <div>
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
