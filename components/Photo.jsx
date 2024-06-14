"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Avatar from "../public/assets/avatar.png";

function Photo() {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.2, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.2, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src={Avatar}
            alt="avatar"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photo;
