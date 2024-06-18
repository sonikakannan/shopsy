"use client";
import React from 'react';
import TopProductsCard from '@/components/TopProductsCard';
import { TopProductsCardData } from '@/utils/TopProductsCard';
import Link from 'next/link';

const TopProducts = () => {
    return (
        <section>
            <div className="container mx-auto mb-9 sm:mb-5 items-center justify-center">
                <div className="text-center my-9 mb-20">
                    <p className="text-orange-400 text-lg sm:text-xl">
                        Top Rated Products for You
                    </p>
                    <h1 className="text-5xl font-bold mb-1">
                        Best Products
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores modi Sit asperiores modi
                    </p>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-6 place-items-center">
                    {TopProductsCardData.map((TopProduct: any, index: number) => (
                        <TopProductsCard key={index} TopProductsCardData={TopProduct} />
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link href="/mens">
                        <button className="inline-block bg-gradient-to-r from-amber-500 to-amber-700 hover:scale-105 duration-200 text-white py-3 px-6 sm:py-2 sm:px-4 rounded-full text-lg sm:text-base">
                            View All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TopProducts;
