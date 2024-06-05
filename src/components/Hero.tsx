"use client";
import React from 'react';
import Slider from "react-slick";
import { banner_img } from '@/utils/BannerDetails';
import Image from 'next/image';

const Hero = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        arrows: false,
    };

    return (
        <section>
            <div className='relative overflow-hidden min-h-[550px] sm:min-h-[450px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
                {/* background pattern */}
                <div className='h-[500px] w-[500px] bg-orange-300 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
                {/* hero section */}
                <div className='container pb-8 sm:pb-0 mx-auto'>
                    <Slider {...settings}>
                        {banner_img.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2 relative z-10'>
                                    {/* text center section */}
                                    <div className='flex flex-col justify-center items-center gap-6 px-2 order-2 sm:order-1'>
                                        <h1 className='text-5xl font-semibold sm:text-6xl'>{data.title}</h1>
                                        <p className='text-sm text-gray-700'>{data.description}</p>
                                        <div className='sm:items-start'>
                                            <button className='bg-gradient-to-r from-amber-500 to-amber-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                                        </div>
                                    </div>
                                    {/* image section */}
                                    <div className='order-1 sm:order-2'>
                                        <div>
                                            <Image src={data.image} alt={data.title} className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Hero;
