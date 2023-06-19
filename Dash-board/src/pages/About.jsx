import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const About = () => {
  return (
    <>
      <div className="settings" dir="rtl">
        <Sidebar />
        <div className="settings__wrapper">
          <h2 className="settings__title">من نحن</h2>
          <div className="details__form">
            <p className="profile__desc">قم بتحديث معلومات من نحن</p>
            <form>
              <div className="form__group">
                <div>
                  <label>العنوان </label>
                  <input type="text" placeholder="العنوان الرئيسي" />
                </div>

                <div>
                  <label>التفاصيل</label>
                  <input type="text" placeholder="المعلومات " />
                </div>
              </div>

              <div className="form__group">
                <div className="profile__img-btns">
                  <button className="update__btn">تحديث</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
