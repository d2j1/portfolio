"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating responsive, user-friendly websites that enhance user experience and drive engagement. Utilizing the latest technologies and best practices",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX design",
    description:
      "I specialize in creating responsive, user-friendly websites that enhance user experience and drive engagement. Utilizing the latest technologies and best practices",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I specialize in creating responsive, user-friendly websites that enhance user experience and drive engagement. Utilizing the latest technologies and best practices",
    href: "",
  },
  {
    num: "04",
    title: "Search Engine Optimization",
    description:
      "I specialize in creating responsive, user-friendly websites that enhance user experience and drive engagement. Utilizing the latest technologies and best practices",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    {" "}
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
