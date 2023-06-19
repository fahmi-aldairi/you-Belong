import React, { useState } from "react";
import "../styles/settings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";
import Swal from "sweetalert2";
const Settings = () => {
  const [adminData, setAdminData] = useState();
  function handleChange(e) {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put("http://localhost:5000/UpdateAdmin", adminData, config)
      .then(function (response) {
        console.log(response.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your details has been updated successfully",
        });
      });
  }
  return (
    <div className="settings" dir="rtl">
      <Sidebar />
      <div className="settings__wrapper">
        <h2 className="settings__title">الأعدادات</h2>

        <div className="details__form">
          <h2 className="profile__title">الملف الشخصي</h2>
          <p className="profile__desc">قم بتحديث صورتك وبياناتك الشخصية هنا</p>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <div>
                <label>الاسم الكامل</label>
                <input
                  type="text"
                  placeholder="حمزة ظواهرة"
                  name="fullName"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>البريد الالكتروني</label>
                <input
                  type="email"
                  placeholder="hamzehdawahreh@gmail.com "
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>رقم الهاتف</label>
                <input
                  type="number"
                  placeholder="*****7 962+"
                  name="phone"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>كلمة السر</label>
                <input
                  type="password"
                  placeholder="*******"
                  className=" bg-transparent"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form__group">
              <div className="profile__img-btns">
                <button type="submit" className="update__btn">
                  تعديل
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
