/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import video from '../../images/video.mp4'
import video from "../images/video.mp4";
import video3 from "../images/video3.mp4";
import video5 from "../images/video5.mp4";
// import { HashLink } from 'react-router-hash-link';

const HomePage = () => {
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
          {/* <img
            src="https://hrarchz.com/wp-content/uploads/2019/12/Black-Dinning-Room-HRarchZ-4.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          /> */}
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
            {/* <HashLink smooth={true} to="#"> */}
            <button class="bg-gray-600 hover:bg-gray-700 text-white mt-8 px-16  font-bold py-4 border-2 rounded-lg">
              ساعد بجمع التبرعات الآن
            </button>
            {/* </HashLink> */}
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
            {/* <img
              className="w-full rounded-lg"
              src="https://i.pinimg.com/736x/18/f8/26/18f8262341b337e7d3f714e41cef7a09.jpg"
              alt="office content 1"
            /> */}
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
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                    تصفح المزيد
                  </button>
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
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                    تصفح المزيد{" "}
                  </button>
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
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                    تصفح المزيد{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        {/* <HashLink smooth={true} to="ServicePageAll#"> */}
        {/* <Button className="border border-solid border-gray-600 border-2 text-gray-600 hover:bg-gray-600 hover:text-[#ffffff]" variant="text">
تصفح الجميع
</Button> */}
        {/* </HashLink> */}
      </div>

      <section>
        <br />
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          قصص نجاح
        </h2>
        <br />

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-8 lg:mx-16">


          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-right">
                سارة الاحمد            </h4>
              <br />
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased text-right">

                انا سارة وقد كنت اعاني من سرطان نادر يحتاج إلى علاج مكلف ومتخصص في الخارج. كانت العائلة غير قادرة على تحمل تكاليف العلاج والسفر. فقررنا التواصل مع موقع ينتمي لانشاء حملة لجمع التبرعات، في غضون اسابيع قليلة تم تجاوز هدف التمويل بشكل واستطعت ان اذهب للعلاج وها انا ذا اتحذث لكم عن تجربتي. شكرا انت تنتمي
              </p>

              <br />
              <div className="5 flex items-center gap-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

          </div>
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-right">
                فاطمة عيسى           </h4>
              <br />
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased text-right">


                أنا فاطمة، وأعاني من مرض السكري. لم أتمكن من تحمل تكاليف العلاج والأدوية. اشتركت مع موقع انت تنتمي لاقامة حملة لجمع التبرعات وتلقيت دعمًا كبيرًا. بفضل انت تنتمي تمكنت من الحصول على العلاج اللازم وتحسين حالتي الصحية. أشكر كل من ساهم في حملتي وأدعو لمساعدة المرضى الآخرين في حاجة للرعاية الصحية.




              </p>

              <br />
              <div className="5 flex items-center gap-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

          </div>
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-right">
                احمد محمود           </h4>
              <br />
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased text-right">

                أنا أحمد، تمكنت من تجاوز مشكلة صحية خطيرة بفضل جمع التبرعات من موقع انت تنتمي. بفضل سخاء الناس، تم تمويل العملية الجراحية اللازمة وتحقيق الشفاء. أشكر كل من ساهم ودعمني، وأؤمن بقوة جمع التبرعات في تحقيق معجزات الشفاء شكرا انت تنتمي وكل القائمين عليه                </p>

              <br />
              <div className="5 flex items-center gap-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

          </div>

        </div>  */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <ul className="mt-4 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <li>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg w-full h-80"
                      src="https://i.pinimg.com/236x/02/e9/2e/02e92ecb5aea13452a89c8a20ae2928b.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {" "}
                        سارة ابراهيم
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      انا سارة وقد كنت اعاني من سرطان نادر يحتاج إلى علاج مكلف
                      ومتخصص في الخارج. كانت العائلة غير قادرة على تحمل تكاليف
                      العلاج والسفر. فقررنا التواصل مع موقع ينتمي لانشاء حملة
                      لجمع التبرعات، في غضون اسابيع قليلة تم تجاوز هدف التمويل
                      بشكل واستطعت ان اذهب للعلاج وها انا ذا اتحذث لكم عن
                      تجربتي. شكرا انت تنتمي{" "}
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg w-full h-80"
                      src="https://i.pinimg.com/236x/02/e9/2e/02e92ecb5aea13452a89c8a20ae2928b.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        فاطمة خليل{" "}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      أنا فاطمة، وأعاني من مرض السكري. لم أتمكن من تحمل تكاليف
                      العلاج والأدوية. اشتركت مع موقع انت تنتمي لاقامة حملة لجمع
                      التبرعات وتلقيت دعمًا كبيرًا. بفضل انت تنتمي تمكنت من
                      الحصول على العلاج اللازم وتحسين حالتي الصحية. أشكر كل من
                      ساهم في حملتي وأدعو لمساعدة المرضى الآخرين في حاجة للرعاية
                      الصحية.{" "}
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg w-full h-80"
                      src="https://i.pinimg.com/236x/02/e9/2e/02e92ecb5aea13452a89c8a20ae2928b.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        احمد ناجح
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      أنا أحمد، تمكنت من تجاوز مشكلة صحية خطيرة بفضل جمع
                      التبرعات من موقع انت تنتمي. بفضل سخاء الناس، تم تمويل
                      العملية الجراحية اللازمة وتحقيق الشفاء. أشكر كل من ساهم
                      ودعمني، وأؤمن بقوة جمع التبرعات في تحقيق معجزات الشفاء
                      شكرا انت تنتمي وكل القائمين عليه واحب شكر جميع لذين
                      ساعدوني في تحقيق طموحي{" "}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
