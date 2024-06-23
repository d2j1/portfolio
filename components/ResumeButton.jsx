"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

function handleResumeButtonClick() {
  window.open(
    "https://drive.google.com/file/d/1OS0BsSINhNlceVH8bY1b5nAcWS7p6RfG/view?usp=sharing",
    "_blank"
  );
}

const ResumeButton = () => {
  return (
    <Button
      varient="outline "
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={() => handleResumeButtonClick()}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default ResumeButton;
