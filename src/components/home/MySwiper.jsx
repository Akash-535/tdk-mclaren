import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { MY_SWIPER_LIST } from '../../utils/helper';
const MySwiper = () => {
    return (
        <Swiper
            spaceBetween={0}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]} className="mySwiper !pb-12">
            {MY_SWIPER_LIST.map((obj, i) => (
                <SwiperSlide key={i}>
                    <img className='max-h-[665px] w-full max-w-[1440px] mx-auto object-cover' src={obj} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MySwiper