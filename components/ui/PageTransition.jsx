"use client";

import React, { createContext } from "react";
import { AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default PageTransition;
