export const navItems = [
  { name: "Home", link: "/"},
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const about = [
  {
    title: 'About Me',
    description: 'I am a full-stack developer with a passion for creating beautiful and functional web applications. I have experience working with React, ts, Node.js, Express, MongoDB, and other technologies. I am always eager to learn new things and improve my skills. I am currently looking for new opportunities to work on exciting projects and collaborate with other developers.',
    header: '',
    className: "md:col-span-2",
  },
  // {
  //   title: '',
  //   description: '',
  //   className: "md:col-span-1",
  // },
  {
    title: 'Languages / Frameworks & Tools',
    description: '',
    header: '',
    icon: ['/mono-svg/js.svg', '/mono-svg/ts.svg', '/mono-svg/react.svg', '/svg/next.svg', '/mono-svg/sass.svg', '/mono-svg/tailwind.svg', '/mono-svg/bootstrap.svg', '/mono-svg/shadcnui.svg', '/mono-svg/socketio.svg', '/mono-svg/redux.svg', '/mono-svg/node.svg', '/svg/express.svg', '/mono-svg/mongodb.svg', '/mono-svg/mongoose.svg', '/mono-svg/prisma.svg', '/mono-svg/git.svg', '/mono-svg/ghactions.svg', '/mono-svg/wp.svg', '/mono-svg/figma.svg'],
    className: "md:col-span-1",
  },
  // {
  //   title: 'Education',
  //   description: 'September, 2023 - PRESENT Cornerstone International Community College of Canada - Diploma in Web and Mobile App Development',
  //   className: "md:col-span-2",
  // }
]

export const projects = [
  {
    id: 1,
    title: "Canmeet",
    des: "Facebook Marketplace-like Website. A full-stack web app that allows users to post items for sale and chat in real time with other users.",
    img: "/canmeet.png",
    iconLists: ["/svg//react.svg", "/svg//ts.svg", "/svg//tailwind.svg", "/svg//shadcnui.svg", "/svg/redux.svg", "/svg/socketdotio.svg", "/svg/node.svg", "/svg/express.svg", "/svg/mongodb.svg"],
    demoLink: "https://canmeet.app/",
    ghLink: "https://github.com/Cornerstone-Canmeet/canmeet-app",
  },
  {
    id: 2,
    title: "Vocabulary App",
    des: "A vocabulary app that allows users to create, edit, and delete words and quizzes. It also has a dark mode feature.",
    img: "/ready.png",
    iconLists: ["/svg/react.svg", "/svg/ts.svg", "/svg/shadcnui.svg", "/svg/tailwind.svg", "/svg/node.svg", "/svg/express.svg", "/svg/mongodb.svg"],
    demoLink: "",
    ghLink: "",
  },
  {
    id: 3,
    title: "Vancouver No Ouchi",
    des: "A real estate app with map integration and detail filtering options. Users can search for properties and property owners can post their properties for rent.",
    img: "/ready.png",
    iconLists: ["/svg/next.svg", "/svg/ts.svg", "/svg/tailwind.svg", "/svg/node.svg", "/svg/express.svg", "/svg/mongodb.svg"],
    demoLink: "",
    ghLink: "https://github.com/orgs/Cornerstone-Canmeet/repositories",
  },
  {
    id: 3,
    title: "Simple Weather App",
    des: "A simple weather app that shows the current weather and forecast using two external APIs for weather and background images.",
    img: "/weather-app.png",
    iconLists: ["/svg/react.svg", "/svg/ts.svg", "/svg/tailwind.svg"],
    demoLink: "https://simple-weather-app-my.netlify.app",
    ghLink: "https://github.com/MarinaYano/weather-app",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/svg/gh.svg",
    link: "https://github.com/MarinaYano",
  },
  {
    id: 2,
    img: "/svg/link.svg",
    link: "https://www.linkedin.com/in/marina-yano-a08b072a1/",
  },
]