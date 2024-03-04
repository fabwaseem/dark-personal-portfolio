"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Type from "swiper";
import "swiper/css";
import { Button } from "./Button";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { TestimonialsData } from "@/lib/data";


const Testimonials = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        onInit={(swiper: Type) => {
          const navigationOptions = swiper.params
            .navigation as NavigationOptions;
          navigationOptions.prevEl = prevRef.current!;
          navigationOptions.nextEl = nextRef.current!;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {TestimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-lg text-center">{testimonial.description}</p>
              <h4 className="text-xl font-semibold">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-5 mt-10">
        <Button
          // onClick={scrollToTop}
          variant="secondary"
          size="icon"
          className={`flex flex-col gap-0.5 group relative -rotate-90`}
          ref={prevRef}
        >
          <div className="w-3 h-3 border-b-[3px] border-l-[3px]  border-accent rotate-[135deg] absolute top-5 group-hover:top-2 opacity-0 group-hover:opacity-100 transition-all z-10"></div>
          <div className="w-[3px] h-5  bg-foreground rounded-full group-hover:translate-y-1 transition-transform"></div>
          <div className="w-[3px] h-[3px] bg-accent rounded-full group-hover:opacity-0 transition-opacity "></div>
        </Button>
        <Button
          // onClick={scrollToTop}
          variant="secondary"
          size="icon"
          className={`flex flex-col gap-0.5 group relative rotate-90`}
          ref={nextRef}
        >
          <div className="w-3 h-3 border-b-[3px] border-l-[3px]  border-accent rotate-[135deg] absolute top-5 group-hover:top-2 opacity-0 group-hover:opacity-100 transition-all z-10"></div>
          <div className="w-[3px] h-5  bg-foreground rounded-full group-hover:translate-y-1 transition-transform"></div>
          <div className="w-[3px] h-[3px] bg-accent rounded-full group-hover:opacity-0 transition-opacity "></div>
        </Button>
      </div>
    </>
  );
};
export default Testimonials;
