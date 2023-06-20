/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import video from '../../images/video.mp4'
import video from "../images/video.mp4";
import video3 from "../images/video3.mp4";
import video5 from "../images/video5.mp4";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [storyData, setStoryData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/AllStories")
      .then((response) => {
        setStoryData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(storyData);
  return (
    <>
      <section className="relative h-screen mt-16 flex flex-col items-center justify-center text-center text-white ">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={video}
            type="video4/mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          />
          <div className="layer"></div>
        </div>
        <div
          className="video-content space-y-2 z-10 pb-5"
          style={{ height: "10vh" }}
        >
          <h1 className="font-bold text-5xl text-white mb-16 uppercase">
            المنصة الاولى لجمع التبرعات للرعاية الصحية
          </h1>
          <h3 className="font-bold text-2xl capitalize ">
            جمع التبرعات من اجل تمويل العلاج الطبي. يهمنا دعمكم{" "}
          </h3>
          <div class="rounded-md">
            <Link smooth={true} to="">
              <button class="bg-gray-600 hover:bg-gray-700 text-white mt-8 px-16  font-bold py-4 border-2 rounded-lg">
                ساعد بجمع التبرعات الآن
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white capitalize text-right">
              تبرع الان .. دعمك يهمنا{" "}
            </h2>
            <br />

            <p className="mb-4 text-right text-2xl font-bold">
              هدفنا الرئيسي هو جمع التمويل لتحسين خدمات الرعاية الصحية، وتعزيز
              البنية التحتية الطبية، وتعزيز المبادرات الصحية العامة في الأردن.
              من خلال توحيد الأفراد الرحيمين مثلك، يمكننا أن نحقق تغييرًا
              إيجابيًا ونضمن مستقبلًا أكثر صحة للجميع.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <video
              className="w-full rounded-lg"
              src={video3}
              type="video/mp4"
              autoPlay={true}
              muted={true}
              loop={true}
            />

            <video
              className="w-full rounded-lg"
              src={video5}
              type="video/mp4"
              autoPlay={true}
              muted={true}
              loop={true}
            />
          </div>
        </div>
      </section>

      <section style={{ marginTop: "10px" }} id="donation">
        <br />
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black  text-center capitalize">
          كيف نستطيع المساعدة
        </h2>
        <div className="flex flex-wrap my-10 mx-20">
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative rounded-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://cdnimg.royanews.tv/imageserv/Size728Q100/news/20191111/hdcNZdlfa6qwg50yiA31mgN3UXQL6NWQPINghXL1.png"
                alt="vegetables"
              />
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                    التبرعات المالية
                  </h2>
                  <Link to="campings">
                    {" "}
                    <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                      تصفح المزيد
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://images.pexels.com/photos/6994946/pexels-photo-6994946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="vegetables"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                    المواد التموينية
                  </h2>
                  <Link to="campings">
                    <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                      تصفح المزيد{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://images.pexels.com/photos/3873159/pexels-photo-3873159.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="vegetables"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                    المعدات الطبية{" "}
                  </h2>
                  <Link to="campings">
                    {" "}
                    <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                      تصفح المزيد{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center"></div>
      <section>
        <br />
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          قصص نجاح
        </h2>
        <br />
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <ul className="mt-4 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {storyData.map((data) => (
                <li key={data._id}>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        class="rounded-t-lg w-full h-80"
                        src={data.image}
                        alt="image"
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {" "}
                          {data.title}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
