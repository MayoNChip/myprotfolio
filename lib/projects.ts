import { z } from "zod";
import guruImage from "../public/guru.png";
import ChatAppImage from "../public/angularTodos.png";

export const projects = [
  {
    title: "guru - Grocery shop",
    description: "some description",
    tags: ["React", "ChakraUI", "Frontend"],
    url: "http://www.google.com",
    image: guruImage,
  },
  {
    title: "do! - Todo's App",
    description: "To-do app.",
    tags: ["AngularJS", "TailwindCSS", "Frontend"],
    url: "http://www.google.com",
    image: ChatAppImage,
  },
  {
    title: "Pet Project",
    description: "Pet Adoption.",
    tags: ["React", "Frontend", "Backend", "ChakraUI", "MongoDB", "Express"],
    url: "http://www.google.com",
    image: guruImage,
  },
  {
    title: "ChatApp",
    description: "some description",
    url: "http://www.google.com",
    image: guruImage,
  },
];
