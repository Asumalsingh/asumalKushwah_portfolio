import INotebook from "./assets/portfolio/inotebook.png";
import TodoList from "./assets/portfolio/todo-list.png";
import ChitChat from "./assets/portfolio/chit-chat.png";
const projects = [
  {
    image: ChitChat,
    title: "Chit-Chit (Social media web app)",
    demo: "https://chitchat-mern.netlify.app",
    code: "https://github.com/Asumalsingh/chit-chat",
    description: [
      "User can login",
      "User can upload & delete his/her photos, likes posts, follow & unfollow other users",
      "Used Cloudinary to store images of user. ",
      "Added search APIs",
      "Technology used : MERN Stack, JWT, Bcrypt, Cloudinary, Tailwind CSS",
    ],
  },
  {
    image: INotebook,
    title: "Note taking web app",
    demo: "https://i-notebook-mern.netlify.app/",
    code: "https://github.com/Asumalsingh/i-notebook-frontend",
    description: [
      "User can login with google",
      "Use can add, delete, update & share his/her notes with others",
      "Email will be sent when user share note with others",
      "Added search APIs & pagination",
      "Technology used : MERN Stack, JWT, Bcrypt, Nodemailer",
    ],
  },
  {
    image: TodoList,
    title: "Todo list using pure javascript",
    demo: "",
    code: "https://github.com/Asumalsingh/todo-lsit",
    description: ["User can create and delte todos"],
  },
];

export default projects;
