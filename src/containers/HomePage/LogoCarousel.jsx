import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LogoCarousel({textArray}) {
  SwiperCore.use([Pagination, Autoplay, A11y]);

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
      }}
      pagination={{ clickable: true }}
      spaceBetween={30}
      loop="true"
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      className="h-auto"
    >
      {textArray.map((textSingle, index) => (
        <SwiperSlide className="py-20 rounded-default overflow-hidden flex flex-col items-center justify-center text-center bg-gray-200" key={index}>
          <p className="ui-heading mb-0">{textSingle}</p>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}
