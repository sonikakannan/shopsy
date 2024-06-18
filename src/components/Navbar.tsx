'use client'
import React, { useState, useEffect, MouseEvent } from 'react';
import logo from '../utils/logo_big.png';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import CartCount from './CartCount';
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const toggleSettings = (e: MouseEvent) => {
        e.stopPropagation();
        setIsSettingsOpen(!isSettingsOpen);
    };

    const handleSettingClick = (selectedTheme: string) => {
        setTheme(selectedTheme);
        setIsSettingsOpen(false);
    };

    return (
        <nav className=''>
            {/* Top Navbar */}
            {!isOpen ? (
                <div className='w-screen bg-orange-400 flex justify-around items-center py-4 px-5 h-20'>
                    <div className='flex gap-2'>
                        <Image src={logo} alt="website logo" className='w-11 h-11' />
                        <h1 className='font-semibold text-2xl'>Shopsy</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        {!session ? (
                            <button className='hidden md:block mx-9 font-base text-xl border border-black rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={() => signIn()}>Login</button>
                        ) : (
                            <>
                                <button className='hidden md:block mx-9 font-base text-xl border border-black rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={() => signOut()}>Logout</button>
                            </>
                        )}
                        <CartCount />
                        <ThemeToggle/>
                        {session && <Image src={session?.user?.image as string} alt='user image' width={35} height={35} className='rounded-full object-cover sm:mx-2 ml-6 ' />}
                    </div>
                    <div onClick={handleClick} className='m-3 sm:hidden block'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </div>
                </div>
            ) : (
                <div onClick={handleClick} className='z-10 fixed sm:hidden block w-[50%] right-0 top-0 ease-in duration-100'>
                    <div className='bg-orange-300 h-screen'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 ml-40 pt-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <ul className='my-5 mx-24 font-medium text-xl'>
                            <li className='py-1 hover:text-orange-500'><Link href="/">Home</Link></li>
                            <li className='py-1 hover:text-orange-500'><Link href="/mens">Mens</Link></li>
                            <li className='py-1 hover:text-orange-500'><Link href="/womens">Womens</Link></li>
                            <li className='py-1 hover:text-orange-500'><Link href="/kids">Kids</Link></li>
                        </ul>
                        <hr className='h-[1.5px] w-20 mx-20 mb-2 bg-gray-600' />
                        {!session ? (
                            <button className='mx-9 font-medium text-xl rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={() => signIn()}>Login</button>
                        ) : (
                            <>
                                <button className='mx-9 font-medium text-xl rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={() => signOut()}>Logout</button>
                            </>
                        )}
                        <div className='relative '>
                            <button className=' flex  items-center mx-9 font-medium text-xl rounded-full px-9 py-2 hover:text-orange-500 hover:border-orange-500 hover:scale-105' onClick={toggleSettings}>
                                Settings <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-4 h-4 mt-2 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </button>
                            {isSettingsOpen && (
                                <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg' onClick={(e) => e.stopPropagation()}>
                                    <ul>
                                        <li className='px-4 py-2 hover:bg-gray-400 dark:bg-slate-800 dark:hover:bg-white dark:hover:text-black cursor-pointer' onClick={() => handleSettingClick('light')}>Light</li>
                                        <li className='px-4 py-2 hover:bg-gray-400 dark:bg-slate-800 dark:hover:bg-white dark:hover:text-black cursor-pointer' onClick={() => handleSettingClick('dark')}>Dark</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Navbar */}
            <div className='hidden sm:block bg-white dark:bg-slate-800 shadow-md shadow-gray-500'>
                <ul className='flex justify-around py-2 font-medium text-xl'>
                    <li className='hover:text-orange-500'><Link href="/">Home</Link></li>
                    <li className='hover:text-orange-500'><Link href="/mens">Mens</Link></li>
                    <li className='hover:text-orange-500'><Link href="/womens">Womens</Link></li>
                    <li className='hover:text-orange-500'><Link href="/kids">Kids</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
