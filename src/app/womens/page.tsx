'use client'
import React from 'react'
import banner_women from '@/utils/banner_women.png'
import product_1 from '@/utils/product_1.png'
import product_2 from '@/utils/product_2.png'
import product_3 from '@/utils/product_3.png'
import product_4 from '@/utils/product_4.png'
import product_5 from '@/utils/product_5.png'
import product_6 from '@/utils/product_6.png'
import product_7 from '@/utils/product_7.png'
import product_8 from '@/utils/product_8.png'
import product_9 from '@/utils/product_9.png'
import product_10 from '@/utils/product_10.png'
import product_11 from '@/utils/product_11.png'
import product_12 from '@/utils/product_12.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const mens_data=[
    {
        id: 1,
        image: product_1,
    },
    {
        id: 2,
        image: product_2,
    },
    {
        id: 3,
        image: product_3,
    },
    {
        id: 4,
        image: product_4,
    },
    {
        id: 5,
        image: product_5,
    },
    {
        id: 6,
        image: product_6,
    },
    {
        id: 7,
        image: product_7,
    },
    {
        id: 8,
        image: product_8,
    },
    {
        id: 9,
        image: product_9,
    },
    {
        id: 10,
        image: product_10,
    },
    {
        id: 11,
        image: product_11,
    },
    {
        id: 12,
        image: product_12,
    },
]

const Womens = () => {
    const router = useRouter();

    return (
        <section>
            {/* header section */}
            <div className=' mb-5'>
                <Image src={banner_women} alt=''/>
            </div>
            {/* main sections */}
            <div className=' flex flex-wrap gap-5  justify-center items-center '>
                {mens_data.map((data) =>{
                    return <div key={data.id}>
                        <Image src={data.image} alt='mens wear' className='  w-[280px] border border-slate-200 mb-7 rounded-md relative shadow-xl hover:scale-105 ' onClick={() => router.push(`/product/${data.id}`)}/>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Womens
