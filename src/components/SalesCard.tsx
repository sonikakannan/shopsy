import React from 'react';
import Image from 'next/image';
import women2 from '@/utils/images/women2.jpg';

const SalesCard = () => {
    return (
        <section className=' min-h-[550px] flex justify-center items-center '>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    <div className='w-full'>
                        <Image src={women2} alt='womens with shopping bag' className='max-w-[400px] h-[350px] w-full mx-auto shadow-lg shadow-black object-cover rounded-md' />
                    </div>
                    <div className='flex flex-col justify-center gap-2 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold mb-2'>Winter Sale Up To 50% Off</h1>
                        <p className='text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quaerat voluptates nam laboriosam esse ipsam facilis .</p>
                        <div className='flex gap-2 text-lg font-semibold mb-4 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 bg-violet-100 dark:bg-violet-100 rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                            Quality Products</div>
                        <div className='flex gap-2 text-lg font-semibold mb-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 bg-orange-100 dark:bg-orange-400 rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>

                            Fast Delivery
                        </div>
                        <div className='flex gap-2 text-lg font-semibold mb-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 bg-green-100 dark:bg-green-400 rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                            Easy Payment method
                        </div>
                        <div className='flex gap-2 text-lg font-semibold mb-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 bg-yellow-100 dark:bg-yellow-400 rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>

                            Get Offers
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalesCard;
