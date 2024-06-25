const path = "/portfolio";
// const path = "";

export const projects = [
  {
    num: "01",
    category: "Professional/Productive, Frontend",
    title: "Portfolio",
    description:
      "This project is a dynamic and responsive web application built using Next.js, showcasing the power of JavaScript, HTML, and CSS. Tailwind CSS is employed to create a modern and visually appealing user interface.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Next.js",
      },
    ],
    image: path + "/assets/portfolio.png",
    live: "https://d2j1.github.io/portfolio/",
    github: "https://github.com/d2j1/portfolio",
  },

  {
    num: "02",
    category: "Productivity App, Frontend",
    title: "Investment Calculator",
    description:
      "The Investment Calculator is a dynamic web application designed to help users estimate the future value of their investments. Built with React.js for a responsive and interactive user experience, the app leverages Tailwind CSS to ensure a sleek and modern design. Users can input initial investment amounts, expected annual interest rates, and investment duration to calculate potential returns.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React.js",
      },
    ],
    image: path + "/assets/investmentCalculator.png",
    live: "",
    github: "https://github.com/d2j1/pp-investment-calculator",
  },

  {
    num: "03",
    category: "Game, Frontend",
    title: "Tic Tac Toe",
    description:
      "This Tic Tac Toe project is a classic two-player game built using React.js, providing a seamless and interactive user experience. Tailwind CSS is utilized to design a modern, responsive, and aesthetically pleasing interface. Players can alternate turns, marking Xs and Os on a 3x3 grid until one achieves three in a row or the game ends in a draw. The project demonstrates effective state management and component-based architecture in React. It also highlights the use of utility-first CSS through Tailwind for rapid UI development and customization.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React.js",
      },
    ],
    image: path + "/assets/tiktactoe.png",
    live: "",
    github: "https://github.com/d2j1/pp-tic-tac-toe",
  },
];
