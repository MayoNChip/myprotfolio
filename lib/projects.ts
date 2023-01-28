import { z } from "zod";
import guruImage from "../public/guru.png";

const projects2 = z.object({
  title: z.string(),
  desription: z.string(),
  url: z.string().url(),
  image: z.any(),
});

export const projects = [
  {
    title: "guru - Grocery shop",
    description: "some description",
    url: "http://www.google.com",
    image: guruImage,
  },
  {
    title: "Pet Project",
    description: "some description",
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
