import React from "react";
import footerLogo from "@/utils/logo.png";
import Banner from "@/utils/cart_icon.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

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
    link: "/#",
  },
  {
    title: "Mens",
    link: "/#about",
  },
  {
    title: "Womens",
    link: "/#contact",
  },
  {
    title: "Kids",
    link: "/#blog",
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
            {/* company details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-slate-900">
                <img src={footerLogo} alt="" className="max-w-[50px]" />
                Shopsy
              </h1>
              <p className=" text-gray-900">
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
                  <ul className="flex flex-col gap-3 ">
                    {FooterImportantLinks.map((link) => (
                      <li
                        className="cursor-pointer text-gray-900 hover:text-white hover:translate-x-1 duration-300 "
                        key={link.title}
                      >
                        <span>{link.title}</span>
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
                        className="cursor-pointer hover:text-white hover:translate-x-1 duration-300 text-gray-900"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* social links */}

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
