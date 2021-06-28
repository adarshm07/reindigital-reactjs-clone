import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

export default function WhatSay() {
  return (
    <div className="testimonial-container">
      <div className="container">
        <h3 className="sub-heading">OUR COMPANY</h3>
        <h2 className="heading-services">
          What do people praise about{" "}
          <span className="color-blue">REIN DIGITAL?</span>
        </h2>
        <br></br>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="testimonial-container"
        >
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  These guys have been our Technology & Digital Partner for well
                  over 3+ years. We have entrusted them with all things in
                  Digital and software side, and they have delivered year on
                  year. Great supportive team. Professional.
                </p>
                <p className="author">Maggie Ferdinand</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  We were looking for a Digital Agency that would give us great
                  results SEO and paid ads for our newly launched SAAS product.
                  We were looking for results. in a short space of time, REIN
                  Digital has surpassed all our expectations and shown us with
                  exceptionally high ROI. Well Done Team.
                </p>
                <p className="author">Pritesh Vora</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  Happy to recommend REIN anytime! I run an online store on
                  flip-flops through Shopify and Reeta has helped me really grow
                  the business using facebook and instagram ads + a bit of other
                  stuff as well like emails and social.. Highly recommended.
                </p>
                <p className="author">Ashley McCaie</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  It was great to spend time working with The REIN Team. Their
                  knowledge is second to none and I would highly recommend them
                  for all things Digital Marketing.
                </p>
                <p className="author">Sumanta Sengupta</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  I had engaged with REIN Digital to manage our Google ads and
                  SEO. As a small charity we are always looking for greater
                  reach and visibility. Because of REIN, we were able to compete
                  with larger competitors and even outrank them for certain
                  keywords.I had engaged with REIN Digital to manage our Google
                  ads and SEO. As a small charity we are always looking for
                  greater reach and visibility. Because of REIN, we were able to
                  compete with larger competitors and even outrank them for
                  certain keywords.
                </p>
                <p className="author">Joshua Martin</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  I’ve never met such a bunch of down to earth, diligent and
                  digital-obsessed individuals! It’s nice to see that honesty
                  and hard work still exists in this big bad world. I absolutely
                  recommend REIN Digital anytime for your marketing or tech
                  work.
                </p>
                <p className="author">Aston Ridley</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  I’ve known the REIN Digital folks for a very long time now,
                  I’ve received countless advice and strategic direction on
                  designing my website funnel and ad copies for my business,
                  kind, honest and energetic pretty much sums them up – highly
                  recommended!
                </p>
                <p className="author">Joshua Martin</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  I had engaged with REIN Digital to manage our Google ads and
                  SEO. As a small charity we are always looking for greater
                  reach and visibility. Because of REIN, we were able to compete
                  with larger competitors and even outrank them for certain
                  keywords.I had engaged with REIN Digital to manage our Google
                  ads and SEO. As a small charity we are always looking for
                  greater reach and visibility. Because of REIN, we were able to
                  compete with larger competitors and even outrank them for
                  certain keywords.
                </p>
                <p className="author">Annabel Holmes</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  We’ve received excellent communication and support from staff,
                  in particular from Nemo, and we recommend REIN Digital to all
                  those who need help with website development and Instagram
                  ads.
                </p>
                <p className="author">Keith Wilde</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-inner-wrapper">
              <div className="review-swiper">
                <p>
                  They have truly exceeded my expectation from the time I had my
                  very first conversation with them. Rita, thank you so much for
                  guiding me through a process which was very alien to me, thank
                  you for being amazingly honest with your advise and finding me
                  ways to save money and thank you for being ultra efficient.
                </p>
                <p className="author">Shariq Khan</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
