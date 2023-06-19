import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import Sidebar from "../components/Sidebar/Sidebar";

const carObj = {
  title: "عدد المتبرعين",
  totalNumber: 15,
  icon: "ri-user-line",
};

const tripObj = {
  title: "عدد المستخدمين",
  totalNumber: 27,
  icon: "ri-user-line",
};

const clientObj = {
  title: "عدد المرضى",
  totalNumber: 12,
  icon: "ri-user-line",
};

// const distanceObj = {
//   title: "Kilometers Daily",
//   totalNumber: 2167,
//   icon: "ri-timer-flash-line",
// };

const Dashboard = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getForms");
        setDonation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);
  return (
    <div className="dashboard" dir="rtl">
      <Sidebar />
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          {/* <SingleCard item={distanceObj} /> */}
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">أحصائيات المتبرعين</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">المبلغ الحالي</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>

      {/* ************ user details **************** */}
      <div className="user_details">
        <div className="order_user_list" style={{ color: "white" }}>
          <div className="order_user_header">
            <h2>معلومات المستخدمين</h2>
          </div>
          <table>
            <thead>
              <tr>
                <td>الأسم</td>
                <td>نوع المرض</td>
                <td>نوع المساعدة </td>
              </tr>
            </thead>
            {/* *****************user info************** */}
            <tbody>
              {donation.map((DonationForm) => {
                if (DonationForm.isDeleted === false) {
                  return (
                    <tr>
                      <td>{DonationForm.fullName}</td>
                      <td>{DonationForm.TitleOfConsept}</td>
                      <td>{DonationForm.typeOfneeds}</td>
                      <td>
                        <Link to={`/details/${DonationForm._id}`}>
                          <span className="more_details_btn">
                            المزيد من التفاصيل
                          </span>
                        </Link>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
