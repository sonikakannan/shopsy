'use client';

import React, { useState } from 'react';
import logo from '../utils/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import CartCount from './CartCount';


const Navbar =  () => {
    
    const { data: session } = useSession();

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className=''>
            {/* Top Navbar */}
            {!isOpen ? (
                <div className='w-screen  bg-orange-300 flex justify-around items-center py-4 px-5 h-20'>
                    <div className='flex gap-2'>
                        <Image src={logo} alt="website logo" className='w-9 h-9' />
                        <h1 className='font-semibold text-2xl'>Shopsy</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex bg-white rounded-full'>
                            <input type="text" name='search' placeholder='search' className='bg-transparent outline-none px-3 rounded-full text-lg w-40' />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 m-3 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        {!session && (
                            <button className='hidden md:block mx-9 font-base text-xl border border-black rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={() => signIn()}>Login</button>
                        )}
                        {session && (
                            <>
                                <button className='hidden md:block mx-9 font-base text-xl border border-black rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={() => signOut()}>Logout</button>
                            </>
                        )}
                        <CartCount />
                        { session && <Image src={session?.user?.image as string} alt='user image' width={35} height={35} className='rounded-full object-cover mx-2 hidden sm:block' />}
                    </div>
                    <div onClick={handleClick} className='m-3 sm:hidden block'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </div>
                </div>
            ) : (
                <div onClick={handleClick} className='z-10 fixed sm:hidden block w-[50%] right-0 top-0 ease-in duration-100'>
                    <div className=' bg-orange-300 h-screen'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 ml-40 pt-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <ul className='my-5 mx-24 font-medium text-xl'>
                            <li className='py-1 hover:text-orange-500'><Link href="/">Home</Link></li>
                            <li className='py-1 hover:text-orange-500' ><Link href="/mens">Mens</Link></li>
                            <li className='py-1 hover:text-orange-500' ><Link href="/womens">Womens</Link></li>
                            <li className='py-1 hover:text-orange-500' ><Link href="/kids">Kids</Link></li>
                        </ul>
                        <hr className='h-[1.5px] w-20 mx-20 mb-2 bg-gray-600' />
                        {/* <button className='my-5 ml-24 font-medium text-xl py-1 hover:text-orange-500' onClick={() => signIn()}>Login</button> */}
                        {!session && (
                            <button className=' mx-9 font-medium text-xl  rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={() => signIn()}>Login</button>
                        )}
                        {session && (
                            <>
                                <button className=' mx-9 font-medium text-xl  rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={() => signOut()}>Logout</button>
                            </>
                        )}
                    </div>
                </div>
            )}


            {/* Bottom Navbar */}
            <div className='hidden sm:block bg-white shadow-md shadow-gray-500'>
                <ul className='flex justify-around py-2 font-medium text-xl'>
                    <li className='hover:text-orange-500' ><Link href="/">Home</Link></li>
                    <li className='hover:text-orange-500' ><Link href="/mens">Mens</Link></li>
                    <li className='hover:text-orange-500'><Link href="/womens">Womens</Link></li>
                    <li className='hover:text-orange-500' ><Link href="/kids">Kids</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
