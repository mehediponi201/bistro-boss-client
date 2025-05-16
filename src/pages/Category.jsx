import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import slide6 from '../assets/home/featured.jpg';
import SectionTitle from '../sharedPages/SectionTitle';

const Category = () => {
    return (
        <div className='mb-20'>
            <div>
                <SectionTitle
                    subheading={"From 11:00am to 10:00pm"}
                    heading={"ORDER ONLINE"}
                >
                </SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                initialSlide={2}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h4 className='text-3xl text-center -mt-16 uppercase text-white font-medium'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className='text-3xl text-center -mt-16 uppercase text-white font-medium'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className='text-3xl text-center -mt-16 uppercase text-white font-medium'>pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className='text-3xl text-center -mt-16 uppercase text-white font-medium'>desserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h4 className='text-3xl text-center -mt-16 uppercase text-white font-medium'>Dry Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" />
                    <h4 className='text-3xl text-center -mt-16 uppercase text-white font-medium'>Fuska</h4>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;