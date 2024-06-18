import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import Layout from "@/components/Layout";
import CartProvider from "@/provider/CartProvider";
import { Toaster } from "react-hot-toast";
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: "Shopsy App",
  description: "Nextjs Ecommerce Webssite ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className=" dark:bg-slate-900">
        <Toaster toastOptions={{style:{
          background:' rgb( 51 65 85)',
          color: '#fff',
        }}}/>

       <CartProvider>
       <Layout>
       <Navbar/>
        {children}
        <Footer/>
       </Layout>
       </CartProvider>
        </body>
    </html>
  );
}
