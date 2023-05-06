import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/public/assets/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HoverText } from "./HoverText";
import { testimonials } from "@/constants/Data";

const Slider = () => {
  return (
    <div className="bg-slate-400 relative  flex h-[750px]  w-full items-center  justify-center md:h-[450px]">
      <Swiper
        className="h-[80%] w-[90%]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".my-swiper-button-prev",
          nextEl: ".my-swiper-button-next",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        loop
        loopadditionalslides={1}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <div className="flex   h-full w-full flex-col items-center justify-around  text-center">
              <Image
                src={testimonial.profile}
                height={1000}
                width={1000}
                alt="image"
                className="mt-5 h-[100px] w-[100px] overflow-hidden rounded-full object-cover sm:mt-0 sm:h-[150px] sm:w-[150px]"
              />
              <h3>{testimonial.name}</h3>
              <p className="w-[70%] sm:mb-10">{testimonial.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination absolute top-10"></div>
      <div className="my-swiper-button-prev absolute top-[45%] left-10 z-10 mt-2 hidden sm:block">
        <button className="focus:outline-none">
          <HoverText text="PREV" width="80px" />
        </button>
      </div>
      <div className="my-swiper-button-next absolute top-[45%] right-20 z-10 mt-2 hidden sm:block ">
        <button className="focus:outline-none">
          <HoverText text="NEXT" width="80px" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
