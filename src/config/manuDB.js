import house from "./icons/house.png";
import contactBook from "./icons//contact-book.png";
import project from "./icons/content-management.png";
import skills from "./icons/requirements.png";
import contact from "./icons/user.png";
import blog from "./icons/blogger.png";
import businessMan from './icons/businessMan.png'


const mainDB = [
    {
        id: "home",
        name: "Home",
        title: "Home",
        link: "#home",
        icon: house,
      },
    {
    id: "about",
    name: "About",
    title: "Find Me",
    link: "#about",
    icon: contactBook,
  },
  {
    name: "Project",
    id: "project",
    title: "Project",
    link: "#project",
    icon: project,
  },
  {
    name: "Skills",
    id: "skills",
    title: "Skills",
    link: "#skills",
    icon: skills,
  },

  {
    name: "Blogs",
    id: "blog",
    title: "Blog",
    link: "#blog",
    icon: blog
  },
  {
    name: "Contact",
    id: "contact",
    title: "contact",
    link: "#contact",
    icon: contact,
  },
];

exports.profileIcon = {
  businessMan
}

const Description01 = {
  Description:
    "I am a full stack developer with expertise in JavaScript. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies.",
};

module.exports = {
  mainDB,
  Description01,
  businessMan
};
