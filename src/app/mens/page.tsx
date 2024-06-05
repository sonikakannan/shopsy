'use client'
import React from 'react'
import banner_mens from '@/utils/banner_mens.png'
import product_13 from '@/utils/product_13.png'
import product_14 from '@/utils/product_14.png'
import product_15 from '@/utils/product_15.png'
import product_16 from '@/utils/product_16.png'
import product_17 from '@/utils/product_17.png'
import product_18 from '@/utils/product_18.png'
import product_19 from '@/utils/product_19.png'
import product_20 from '@/utils/product_20.png'
import product_21 from '@/utils/product_21.png'
import product_22 from '@/utils/product_22.png'
import product_23 from '@/utils/product_23.png'
import product_24 from '@/utils/product_24.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const mens_data=[
    {
        id: 13,
        image: product_13,
    },
    {
        id: 14,
        image: product_14,
    },
    {
        id: 15,
        image: product_15,
    },
    {
        id: 16,
        image: product_16,
    },
    {
        id: 17,
        image: product_17,
    },
    {
        id: 18,
        image: product_18,
    },
    {
        id: 19,
        image: product_19,
    },
    {
        id: 20,
        image: product_20,
    },
    {
        id: 21,
        image: product_21,
    },
    {
        id: 22,
        image: product_22,
    },
    {
        id: 23,
        image: product_23,
    },
    {
        id: 24,
        image: product_24,
    },
]

const Mens = () => {
    const router = useRouter();

    return (
        <section>
            {/* header section */}
            <div className=' mb-5'>
                <Image src={banner_mens} alt=''/>
            </div>
            {/* main sections */}
            <div className=' flex flex-wrap gap-5  justify-center items-center '>
                {mens_data.map((data) =>{
                    return <div key={data.id}>
                        <Image src={data.image} alt='mens wear' className=' w-[280px] border border-slate-200 mb-7 rounded-md relative shadow-xl hover:scale-105 ' onClick={() => router.push(`/product/${data.id}`)}/>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Mens
