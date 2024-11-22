import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
      <div className="md:w-1/2 w-full items-center">
        <h1 className="md:text-5xl text-3xl font-bold md:leading-tight">
          {t("hello")}
        </h1>
        <p className="py-4">{t("swiperDesc")}</p>
      </div>

      <div className="md:w-1/2 w-full mx-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper rounded-2xl"
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3706659/pexels-photo-3706659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80 "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/27198641/pexels-photo-27198641/free-photo-of-a-beach-with-boats-and-a-cliff-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/14315013/pexels-photo-14315013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/12095681/pexels-photo-12095681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/29333962/pexels-photo-29333962/free-photo-of-bustling-shibuya-street-at-daylight-in-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full lg:h-[420px] sm:h-96 h-80"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
