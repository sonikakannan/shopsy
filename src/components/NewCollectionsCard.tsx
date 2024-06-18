import Image from "next/image";
import { useRouter } from "next/navigation";

interface NewCollectionsCardProps {
    data: {
        id: number;
        image: string;
        name: string;
        old_price: number;
        new_price: number;
    } | null; 
}

const NewCollectionsCard: React.FC<NewCollectionsCardProps> = ({ data }) => {
    const router = useRouter();

    if (!data) return null;

    const handleClick = () => {
        router.push(`/product/${data.id}`);
    };

    return (
        <div className="w-[300px] sm:w-auto border border-slate-200 mb-7 rounded-md relative shadow-xl hover:scale-105 cursor-pointer" onClick={handleClick}>
            <div className="aspect-w-3 aspect-h-2">
                <Image src={data.image} alt={data.name}  className="w-full h-[250px] rounded-t-md" />
            </div>
            <div className="py-5 px-4">
                <p className="text-gray-800 font-bold text-lg dark:text-white">{data.name}</p>
                <p className="text-gray-800 mt-2 dark:text-white">
                    ${data.new_price.toFixed(2)} {/* Ensuring price format */}
                </p>
            </div>
        </div>
    );
}

export default NewCollectionsCard;
