"use client";
import React from 'react';
import NewCollectionsCard from "@/components/NewCollectionsCard";
import { new_products } from '@/utils/newCollections';

const NewCollections = () => {
    return (
        <section>
            <div className='container mx-auto min-h-[550px] '>
                <div className='text-center my-9'>
                    <p className='text-orange-400'>Top Selling New Product for you</p>
                    <h1 className='text-5xl font-bold'>New Collections</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 place-items-center  ">
                    {new_products.map((product: any, index: number) => {
                        return <NewCollectionsCard key={index} data={product} />
                    })}
                </div>
                <div className=' text-center mb-9 sm:mb-0 '>
                <button className=' bg-gradient-to-r from-amber-500 to-amber-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>View all Products</button>
                </div>
            </div>
        </section>
    );
}

export default NewCollections;
