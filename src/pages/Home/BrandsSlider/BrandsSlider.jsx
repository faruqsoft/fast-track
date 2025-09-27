import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,FreeMode} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Import your logo images
import Brand1 from "../../../assets/brands/amazon.png";
import Brand2 from "../../../assets/brands/amazon_vector.png";
import Brand3 from "../../../assets/brands/casio.png";
import Brand4 from "../../../assets/brands/moonstar.png";
import Brand5 from "../../../assets/brands/randstad.png";
import Brand6 from "../../../assets/brands/start-people 1.png";
import Brand7 from "../../../assets/brands/start.png";




const bandLogos = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7];

const BandsSlider = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Our Bands
        </h2>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="5"               // slide width = content width
          spaceBetween={40}                  // logos এর মধ্যে gap
          loop={true}                         // infinite loop
          freeMode={true}                      // ধারাবাহিক move
          freeModeMomentum={true}             // কোনো momentum effect না
          autoplay={{
            delay: 0,                          // কোনো থামা নেই
            disableOnInteraction:true,

          }}
          speed={6000}                          // বেশি হলে ধীর, কম হলে দ্রুত
          allowTouchMove={true}                // user drag করবে না
          className="w-full"
        >
          {[...bandLogos, ...bandLogos].map((logo, idx) => (
            <SwiperSlide
              key={idx}
              className="flex items-center justify-center w-40"
            >
              <img
                src={logo}
                alt={`Band ${idx + 1}`}
                className="max-h-16 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BandsSlider;