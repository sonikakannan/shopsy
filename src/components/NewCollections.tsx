"use client";
import React from 'react';
import NewCollectionsCard from "@/components/NewCollectionsCard";
import { new_products } from '@/utils/newCollections';
import Link from 'next/link';

const NewCollections = () => {
    return (
        <section aria-labelledby="new-collections-heading">
            <div className='container mx-auto min-h-[550px]'>
                <div className='text-center my-9'>
                    <p className='text-orange-400' id="new-collections-subheading">Top Selling New Product for you</p>
                    <h1 className='text-5xl font-bold' id="new-collections-heading">New Collections</h1>
                    <p className='text-gray-500'>Discover the latest trends and styles in our new collection.</p>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 place-items-center">
                    {new_products.map((new_product: any, index: number) => {
                        return <NewCollectionsCard key={index} data={new_product} />
                    })}
                </div>
                <div className='text-center mb-9 sm:mb-0'>
                    <Link href="/womens">
                        <button className='inline-block bg-gradient-to-r from-amber-500 to-amber-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                            View all Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NewCollections;
