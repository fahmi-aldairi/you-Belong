import React from "react";
import "../styles/sell-car.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const SellCar = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getAllDonors");
        setDonors(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);
  return (
    <div className="sell__car" dir="rtl">
      <Sidebar />
      <div className="alldonors_details">
        <div className="order_user_list" style={{ color: "white" }}>
          <div className="order_user_header">
            <h2>معلومات المستخدمين</h2>
          </div>
          <table>
            <thead>
              <tr>
                <td>الأسم</td>
                <td>الدور الوظيفي</td>
                <td>البريد الألكتروني</td>
              </tr>
            </thead>
            {/* *****************user info************** */}
            <tbody>
              {donors.map((getAllDonors) => (
                <tr>
                  <td>{getAllDonors.fullName}</td>
                  <td>{getAllDonors.role}</td>
                  <td>{getAllDonors.email}</td>
                  <td>{getAllDonors.totalPayments}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
