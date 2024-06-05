import Hero from "@/components/Hero";
import Image from "next/image";
import NewCollections from "@/components/NewCollections";
import SalesCard from "@/components/SalesCard";
import { Children } from "react";
import TopProducts from "@/components/TopProducts";
import Reviews from '@/components/Reviews'
import FacebookMsg from "@/components/FacebookMsg";


export default function Home() {
  return (
    <main>
      <Hero/>
      <NewCollections/>
      <TopProducts/>
      <SalesCard/>
      <Reviews/>
      <FacebookMsg/>
    </main>
  );
}
