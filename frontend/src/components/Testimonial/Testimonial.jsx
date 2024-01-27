import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";

import testimonial from "../../assets/images/testimonial.png";

const Testimonial = () => {
  return (
    <div className="mt-[30px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[10px]">
              <img src={testimonial} alt="" className="rounded-md" />

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Habibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[14px] leading-6 mt-4 text-textColor font-[400]">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vero corporis ipsum."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[10px]">
              <img src={testimonial} alt="" className="rounded-md" />

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Helal Hossain
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[14px] leading-6 mt-4 text-textColor font-[400]">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vero corporis ipsum."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[10px]">
              <img src={testimonial} alt="" className="rounded-md" />

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Almahmud Alauddin
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[14px] leading-6 mt-4 text-textColor font-[400]">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vero corporis ipsum."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[10px]">
              <img src={testimonial} alt="" className="rounded-md" />

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Hasibul Islam
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[14px] leading-6 mt-4 text-textColor font-[400]">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vero corporis ipsum."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
