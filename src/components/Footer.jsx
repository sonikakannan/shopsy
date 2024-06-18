import React from "react";
import footerLogo from "@/utils/logo_big.png";
import Banner from "@/utils/cart_icon.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Image from "next/image";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterImportantLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Mens",
    link: "/mens",
  },
  {
    title: "Womens",
    link: "/womens",
  },
  {
    title: "Kids",
    link: "/kids",
  },
];

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="text-blck bg-gray-700 mt-9">
        <div className="container">
          <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-9 pt-5">
            {/* Company details */}
            <div className="py-8 px-4">
              <h1 className=" text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-slate-900">
                <Image src={footerLogo} alt="Shopsy Logo" className=" w-6 h-6" />
                Shopsy
              </h1>
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                beatae ea recusandae blanditiis veritatis.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-slate-900">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterImportantLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:text-white hover:translate-x-1 duration-300 text-gray-900"
                      >
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-slate-900">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:text-white hover:translate-x-1 duration-300 text-gray-900"
                      >
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social links and contact */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Noida, Uttar Pradesh</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 123456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
