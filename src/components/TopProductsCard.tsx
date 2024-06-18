"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface TopProductsCardProps {
    TopProductsCardData: {
        id: number;
        img: string;
        title: string;
        description: string;
    } | null;
}

const TopProductsCard: React.FC<TopProductsCardProps> = ({ TopProductsCardData }) => {
    const router = useRouter();

    if (!TopProductsCardData) return null;

    const handleProductClick = () => {
        router.push(`/product/${TopProductsCardData.id}`);
    };

    return (
        <div className="mb-10 rounded-lg bg-white dark:bg-gray-800 hover:bg-black/80  hover:text-white relative shadow-xl duration-300 group max-w-[300px]" onClick={handleProductClick} role="button" tabIndex={0}>
            <div className="h-[100px] relative">
                <Image
                    src={TopProductsCardData.img}
                    alt={TopProductsCardData.title}
                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                    width={140}
                    height={100}
                />
            </div>
            <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" aria-label="Star icon" />
                    <FaStar className="text-yellow-500" aria-label="Star icon" />
                    <FaStar className="text-yellow-500" aria-label="Star icon" />
                    <FaStar className="text-yellow-500" aria-label="Star icon" />
                </div>
                <h2 className="text-xl font-bold">{TopProductsCardData.title}</h2>
                <p className="text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-2">{TopProductsCardData.description}</p>
            </div>
        </div>
    );
};

export default TopProductsCard;
