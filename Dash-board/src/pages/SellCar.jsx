import React from "react";
import "../styles/sell-car.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SellCar = () => {
  const [donors, setDonors] = useState([]);
  const [isDeletedd, setIsDeleted] = useState(false);

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
  }, [isDeletedd]);

  console.log(donors);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const isDeleted = true;
      await axios.put(
        `http://localhost:5000/deleteDonor/${id}`,
        { isDeleted },
        config
      );
      setIsDeleted(!isDeletedd);
    } catch {}
    Swal.fire({
      position: "center",
      icon: "failed",
      title: "تمت الحذف بنجاح",
      showConfirmButton: false,
      timer: 1800,
    });
  };

  console.log(isDeletedd);

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
                <>
                  {getAllDonors.isDeleted == false && (
                    <tr>
                      <td>{getAllDonors.fullName}</td>
                      <td>{getAllDonors.role}</td>
                      <td>{getAllDonors.email}</td>
                      <td>{getAllDonors.totalPayments}</td>
                      <td>
                        <button>
                          <i
                            className="ri-delete-bin-6-fill delete__icon"
                            onClick={() => handleDelete(getAllDonors._id)}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
