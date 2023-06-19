import React from "react";
import img from "../assets/images/image.png";
import "../styles/details.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const Details = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [totalPriceByAdmin, setTotalPriceByAdmin] = useState([]);
  const params = useParams();
  const { formId } = useParams();
  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/getForms/${formId}`);
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);
  console.log(typeof totalPriceByAdmin);
  const handleAccept = (id) => {
    axios
      .put("http://localhost:5000/getForms/accept/" + id, totalPriceByAdmin)
      .then((response) => {})
      .catch((error) => console.log(error.message));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "تمت الموافقة بنجاح",
      showConfirmButton: false,
      timer: 1800,
    });
  };
  const handleDelete = async (id) => {
    axios
      .put("http://localhost:5000/getForms/delete/" + id)
      .then((response) => {})
      .catch((error) => console.log(error.message));
    Swal.fire({
      position: "center",
      icon: "failed",
      title: "تمت الحذف بنجاح",
      showConfirmButton: false,
      timer: 1800,
    });
    navigate("/dashboard");
  };
  function handleChange(e) {
    setTotalPriceByAdmin({
      ...totalPriceByAdmin,
      [e.target.name]: e.target.value,
    });
  }
  console.log(totalPriceByAdmin);
  return (
    <>
      <div className="containerr" dir="rtl">
        <Sidebar />
        <div className="box">
          <div className="images">
            {/* <div className="img-holder active">
              <img src={img} />
            </div>
            <div className="img-holder">
              <img src={img} />
            </div>
            <div className="img-holder">
              <img src={img} />
            </div>
            <div className="img-holder">
              <img src={img} />
            </div> */}
            {details.Images?.map((image, index) => (
              <img
                alt="image"
                src={`http://localhost:5000/${image}`}
                className="img-holder"
                style={{ height: "300px" }}
                key={index}
              />
            ))}
          </div>

          <div className="basic-info">
            <h1>بيانات الطلب</h1>
          </div>
          <div className="info">
            <p>الأسم: {details.fullName}</p>
            <p>رقم الهاتف: {details.phone}</p>
            <p>البريد الألكتروني: {details.email}</p>
            <p>
              العنوان:{" "}
              {`${details.city}/${details.streetName}/${details.buldingNumber}`}
            </p>
            <p className="p_story">قصتي: {details.DescriptionOfConsept}</p>
            <div>
              {" "}
              <div>ادخل المبلغ</div>{" "}
              <input
                type="text"
                name="totalPriceByAdmin"
                onChange={handleChange}
                id=""
                className=" border border-black "
              />
            </div>
            {details.medicalReport?.map((report, index) => (
              <div>
                <div>
                  <a
                    target="_blank"
                    href={`http://localhost:5000/${report}`}
                    download
                  >
                    Click here to download the Reports
                  </a>
                </div>
              </div>
            ))}

            <div className="approve_req">
              <button onClick={() => handleAccept(details._id)}>
                <i class="fa-solid fa-check yes"></i>
              </button>
              <button onClick={() => handleDelete(details._id)}>
                <i className="ri-delete-bin-6-fill delete__icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
