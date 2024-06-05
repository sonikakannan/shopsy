import React from "react";
import Img1 from "@/utils/shirt/shirt.png";
import Img2 from "@/utils/shirt/shirt2.png";
import Img3 from "@/utils/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
const TopProducts = () => {
    return (
        <div>
            <div className="container mx-auto mb-9 sm:mb-5">
                {/* Header section */}
                <div className="text-center my-9 mb-24">
                    <p data-aos="fade-up" className="text-orange-400">
                        Top Rated Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-5xl font-bold">
                        Best Products
                    </h1>
                    <p data-aos="fade-up" className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                        asperiores modi Sit asperiores modi
                    </p>
                </div>
                {/* Body section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {ProductsData.map((data) => (
                        <div
                            data-aos="zoom-in"
                            className=" my-7 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                            key={data.id}
                        >
                            {/* image section */}
                            <div className="h-[100px]">
                                <Image
                                    src={data.img}
                                    alt={data.title}
                                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                />
                            </div>
                            {/* details section */}
                            <div className="p-4 text-center">
                                {/* star rating */}
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                    {data.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
                <div className=' text-center mb-9 sm:mb-0 '>
                    <button className=' bg-gradient-to-r from-amber-500 to-amber-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>View all Products</button>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;