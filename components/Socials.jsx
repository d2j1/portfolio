import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const social = [
  {
    icon: <FaGithub />,
    path: "https://github.com/d2j1",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/d2j1",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
