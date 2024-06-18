"use client";
import { useEffect, useState } from 'react';
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme as 'light' | 'dark');
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        } else {
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            className="leading-9 text-xl rounded-full m-1 focus:outline-none"
            title="Theme Switch"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <MdOutlineWbSunny className="w-7 h-7 text-white mx-9 hidden sm:block" />
            ) : (
                <MdDarkMode className="w-7 h-7 mx-9 hidden sm:block" />
            )}
        </button>
    );
};

export default ThemeToggle;
