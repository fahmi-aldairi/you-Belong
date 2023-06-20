import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";
import Swal from "sweetalert2";

const About = () => {
  const [aboutData, setAboutData] = useState({
    about_title: "",
    about_us: "",
  });

  useEffect(() => {
    getAboutData();
  }, []);

  const getAboutData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/aboutus");
      const { about_title, about_us } = response.data;
      setAboutData({ about_title, about_us });
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5000/aboutus", aboutData);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

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
                  <input
                    type="text"
                    placeholder="العنوان الرئيسي"
                    value={aboutData.about_title}
                    onChange={(e) =>
                      setAboutData({
                        ...aboutData,
                        about_title: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>التفاصيل</label>
                  <textarea
                    type="text"
                    placeholder="المعلومات"
                    value={aboutData.about_us}
                    onChange={(e) =>
                      setAboutData({ ...aboutData, about_us: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form__group">
                <div className="profile__img-btns">
                  <button className="update__btn" onClick={handleUpdate}>
                    تحديث
                  </button>
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
