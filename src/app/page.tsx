import React, { useState } from 'react';
import Hero from "@/components/Hero";
import NewCollections from "@/components/NewCollections";
import SalesCard from "@/components/SalesCard";
import TopProducts from "@/components/TopProducts";
import Reviews from '@/components/Reviews'
import Chatbot from '@/components/ChatBot';

export default function Home() {

  
  return (
    <main>
      <Chatbot/>
      <Hero/>
      <NewCollections/>
      <TopProducts/>
      <SalesCard/>
      <Reviews/>
    </main>
  );
}
