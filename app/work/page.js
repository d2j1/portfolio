"use client";

import React, { useState } from "react";
import "swiper/css";
import { projects } from "./Values";
import Beta from "./Beta";

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="flex flex-col  items-center ">
        <Beta />
      </div>
    </section>
  );
};

export default Work;
