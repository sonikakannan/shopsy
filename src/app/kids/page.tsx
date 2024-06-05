'use client'
import React from 'react'
import banner_kids from '@/utils/banner_kids.png'
import product_25 from '@/utils/product_25.png'
import product_26 from '@/utils/product_26.png'
import product_27 from '@/utils/product_27.png'
import product_28 from '@/utils/product_28.png'
import product_29 from '@/utils/product_29.png'
import product_30 from '@/utils/product_30.png'
import product_31 from '@/utils/product_31.png'
import product_32 from '@/utils/product_32.png'
import product_33 from '@/utils/product_33.png'
import product_34 from '@/utils/product_34.png'
import product_35 from '@/utils/product_35.png'
import product_36 from '@/utils/product_36.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const mens_data=[
    {
        id: 25,
        image: product_25,
    },
    {
        id: 26,
        image: product_26,
    },
    {
        id: 27,
        image: product_27,
    },
    {
        id: 28,
        image: product_28,
    },
    {
        id: 29,
        image: product_29,
    },
    {
        id: 30,
        image: product_30,
    },
    {
        id: 31,
        image: product_31,
    },
    {
        id: 32,
        image: product_32,
    },
    {
        id: 33,
        image: product_33,
    },
    {
        id: 34,
        image: product_34,
    },
    {
        id: 35,
        image: product_35,
    },
    {
        id: 36,
        image: product_36,
    },
]

const Mens = () => {
    const router = useRouter();

    return (
        <section>
            {/* header section */}
            <div className=' mb-5'>
                <Image src={banner_kids} alt=''/>
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
