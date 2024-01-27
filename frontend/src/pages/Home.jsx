import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-img.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import LawyerList from "../components/Lawyers/LawyerList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ======= hero section ======= */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ====== hero content ========== */}
            <div>
              <div className=" lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[36px] md:leading-[46px]">
                  We can provide a client with legal advice their situatioin.
                </h1>

                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti excepturi aspernatur quaerat exercitationem aliquam
                  in nulla voluptate earum rem, consectetur provident nam sequi
                  nisi ea sit animi officia dicta vel.
                </p>

                <button className="btn">Request an Appointment </button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-purpleColor block mt-[-14px]"></span>
                  <p className="text__para">Lawyer</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-irisBlueColor block mt-[-14px]"></span>
                  <p className="text__para">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* =========== hero img ============ */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>

              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== container ====== */}
      <section>
        <div className="container ">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best lawyer services
            </h2>

            <p className="text__para text-center">
              World-class care for everyone. Our lawyer are more expert and best
              consultation for client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-headingColor font-[700] text-center">
                  Find a Lawyer
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus similique vitae officia vero.
                </p>

                <Link
                  to="/lawyers"
                  className="w-[28px] h-[28px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-4" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus similique vitae officia vero.
                </p>

                <Link
                  to="/lawyers"
                  className="w-[28px] h-[28px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-4" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-headingColor font-[700] text-center">
                  Book Appoinment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus similique vitae officia vero.
                </p>

                <Link
                  to="/lawyers"
                  className="w-[28px] h-[28px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== about section ====== */}
      <About />

      {/* ======== service section ====== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our lawyer services</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis
              exercitationem.
            </p>
          </div>

          <ServicesList />
        </div>
      </section>

      {/* ======= lawyers section ======= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great lawyers</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis
              exercitationem.
            </p>
          </div>

          <LawyerList />
        </div>
      </section>

      {/* ====== FAQ section ======= */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by our beloved clients</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Testimonial section ======= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our clients says</h2>
            <p className="txt__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis
              exercitationem.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
