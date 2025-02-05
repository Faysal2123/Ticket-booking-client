import React from 'react';
import slide1 from '../../assets/images/andamanAndNicoBarIslands.jpeg'
import slide2 from '../../assets/images/Maui.jpeg'
import slide3 from '../../assets/images/RiodeJaneiro.jpeg'
import slide4 from '../../assets/images/santorini.jpeg'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='w-full md:h-[65vh] h-[30vh]'>
            <Swiper
            modules={[Autoplay,EffectFade,Pagination]}
            pagination={{clickable:true}}
            autoplay={{delay:2000,disableOnInteraction:false}}
            effect="fade"
            loop={true}
            speed={1200}
            fadeEffect={{ crossFade: true }}
            className=" h-full w-full">
                <SwiperSlide className='relative'>
                <div className='absolute inset-0 bg-black/30 z-10'></div>
                    <img src={slide1} className="h-full w-full object-cover transition-all duration-700 ease-in-out brightness-75 bg-black/30 z-10" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-center text-center z-20 px-2">
                        <h1 className="md:text-6xl text-3xl font-extrabold text-white">Andaman & Nicobar Islands</h1>
                        <p className="md:text-lg  text-sm pt-3 md:w-[1000px] text-white  font-semibold mx-auto"> A hidden paradise of crystal-clear waters, pristine beaches, and mesmerizing marine life. The Andaman & Nicobar Islands offer a perfect getaway for those seeking peace, adventure, and natural beauty in its purest form.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                <div className='absolute inset-0 bg-black/30 z-10'></div>
                    <img src={slide2} className="h-full w-full object-cover transition-all duration-700 ease-in-out brightness-75 bg-black/30 z-10" alt="" />
                    <div className="absolute inset-0  flex flex-col justify-center text-center z-20 px-2">
                        <h1 className="md:text-6xl text-3xl font-extrabold text-white">Maui, Hawaii</h1>
                        <p className="md:text-lg text-sm pt-3 md:w-[1000px] text-white  font-semibold mx-auto"> An island of breathtaking beauty, Maui is home to golden beaches, lush rainforests, and stunning volcanic landscapes. Experience the magic of Hawaiian culture, mesmerizing sunsets, and the tranquil sound of ocean waves.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                <div className='absolute inset-0 bg-black/30 z-10'></div>
                    <img src={slide3} className="h-full w-full object-cover transition-all duration-700 ease-in-out brightness-75 bg-black/30 z-10" alt="" />
                    <div className="absolute inset-0  flex flex-col justify-center text-center z-20 px-2">
                        <h1 className="md:text-6xl text-3xl font-extrabold text-white">Rio de Janeiro, Brazil</h1>
                        <p className="md:text-lg text-sm pt-3 md:w-[1000px] text-white  font-semibold mx-auto">The vibrant heart of Brazil, Rio de Janeiro is a city of music, dance, and breathtaking landscapes. Explore the iconic Christ the Redeemer statue, Sugarloaf Mountain, and the world-famous Copacabana Beach.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className='absolute inset-0 bg-black/30 z-10'></div>
                    <img src={slide4}  className="h-full w-full object-cover transition-all duration-700 ease-in-out bg-black/30 z-10"alt="" />
                    <div className="absolute inset-0  flex flex-col justify-center text-center z-20 px-2">
                        <h1 className="md:text-6xl text-3xl font-extrabold text-white">Santorini, Greece</h1>
                        <p className="md:text-lg text-sm pt-3 md:w-[1000px] text-white  font-semibold mx-auto"> A dreamlike destination with iconic white-washed buildings, deep blue waters, and mesmerizing sunsets. Santorini offers an enchanting atmosphere, rich history, and world-class dining with breathtaking views of the Aegean Sea.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;