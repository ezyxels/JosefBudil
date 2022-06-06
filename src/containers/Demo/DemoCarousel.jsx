import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DemoCarousel({textArray}) {
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
      spaceBetween={30}
      loop="true"
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      className="h-auto"
    >
      {textArray.map(textSingle => (
        <SwiperSlide className="py-16 rounded-default overflow-hidden flex flex-col items-center justify-center text-center bg-gray-200">
          <p className="ui-heading mb-0">{textSingle}</p>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}
