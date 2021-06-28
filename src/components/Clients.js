import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

export default function Clients() {
  const clientLogoURL = [
    "https://reindigital.io/wp-content/uploads/2020/05/hdfc-bank.png",
    "https://reindigital.io/wp-content/uploads/2020/05/holidayiq.png",
    "https://reindigital.io/wp-content/uploads/2020/05/oyorooms.png",
    "https://reindigital.io/wp-content/uploads/2020/05/Policybazaar.png",
    "https://reindigital.io/wp-content/uploads/2020/05/shopclues.png",
    "https://reindigital.io/wp-content/uploads/2020/05/standard-chartered.png",
    "https://reindigital.io/wp-content/uploads/2021/02/Uber.jpg",
    "https://reindigital.io/wp-content/uploads/2021/02/US.hockey.jpg",
    "https://reindigital.io/wp-content/uploads/2021/02/Getfareye.jpg",
    "https://reindigital.io/wp-content/uploads/2021/02/Glorify.jpg",
    "https://reindigital.io/wp-content/uploads/2021/02/BellaRuby.jpg",
    "https://reindigital.io/wp-content/uploads/2021/02/amazon.jpg",
    "https://reindigital.io/wp-content/uploads/2020/05/American-Express.png",
    "https://reindigital.io/wp-content/uploads/2020/05/American-Express.png",
    "https://reindigital.io/wp-content/uploads/2020/05/flipkart.png",
  ];
  return (
    <div className="swiper-client">
      <div className="container">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {clientLogoURL.map((url, index) => {
            return (
              <SwiperSlide key={index}>
                <img className="client-logo" src={url} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
