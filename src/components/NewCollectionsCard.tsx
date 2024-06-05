import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"

interface NewCollectionsCardProps {
    data: {
        image: string;
        name: string;
        old_price: number;
        new_price: number;
        id: string;
    } | null; // Handling potential absence of data
}

const NewCollectionsCard: React.FC<NewCollectionsCardProps> = ({ data }) => {
    const router = useRouter();

    if (!data) return null; // Handling null data

    return (
        <div className=" w-[300px] sm:w-auto border border-slate-200 mb-7 rounded-md relative shadow-xl hover:scale-105 " onClick={() => router.push(`/product/${data.id}`)}>
            <Image src={data?.image} alt={data?.name} width={300} height={200} className="w-full h-[250px] rounded-t-md " />
            <div className="py-5 px-4">
                <p className="text-gray-800 font-bold text-lg">{data.name}</p>
                <p className="text-gray-800 mt-2">
                    $<del className="text-gray-800">{data.old_price}</del> ${data.new_price}
                </p>
                
            </div>
            
        </div>
    );
}

export default NewCollectionsCard;
