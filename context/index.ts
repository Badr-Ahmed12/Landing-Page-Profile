import { Logo, ContactInfo, Project, HeroText, NavLink, Skill, Testimonial, Images } from "../types";
import Group5334 from "@/public/Google.png";
import Image1Traced from "@/public/image 1 (Traced).png";
import Image2Traced from "@/public/image 2 (Traced).png";
import Image5Traced from "@/public/image 5 (Traced).png";
import Image1 from "@/public/Image (1).png";
import Image2 from "@/public/Image (2).png";
import Image3 from "@/public/Image (3).png";
import Image4 from "@/public/Image (4).png";
import Image5 from "@/public/Image (5).png";
import Image6 from "@/public/Image (6).png";
import HeaderImage1 from "@/public/HeaderImage 1.png";
import ClientImage from "@/public/Client Image.png";

const templateDescription = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.";

export const logos: Logo[] = [
  { src: Group5334, alt: "Company Logos" },
  { src: Image1Traced, alt: "Traced Logo 1" },
  { src: Image2Traced, alt: "Traced Logo 2" },
  { src: Image5Traced, alt: "Traced Logo 3" },
];

export const contactInfo: ContactInfo = {
  title: "Get in touch",
  description: "If you have any questions or would like to discuss a project, please don't hesitate to reach out. I look forward to hearing from you.",
};

export const projects: Project[] = [
  { image: Image1, title: "Project Title 1", category: "UI, Art Direction" },
  { image: Image2, title: "Project Title 2", category: "UI, Art Direction" },
  { image: Image3, title: "Project Title 3", category: "UI, Art Direction" },
  { image: Image4, title: "Project Title 4", category: "UI, Art Direction" },
  { image: Image5, title: "Project Title 5", category: "UI, Art Direction" },
  { image: Image6, title: "Project Title 6", category: "UI, Art Direction" },
];

export const heroText: HeroText = {
  title: "Visual Designer",
  description: templateDescription,
  image: HeaderImage1,
};

export const navLinks: NavLink[] = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
];

export const skills: Skill[] = [
  { title: "Product Design", description: templateDescription, color: "bg-red-200" },
  { title: "Visual Design", description: templateDescription, color: "bg-red-400" },
  { title: "Art Direction", description: templateDescription, color: "bg-green-500" },
];

export const testimonials: Testimonial[] = [
  { text: templateDescription, name: "Gemma Nolen", role: "Google", image: ClientImage, rating: 5 },
  { text: templateDescription, name: "John Doe", role: "Facebook", image: ClientImage, rating: 4 },
  { text: templateDescription, name: "Jane Doe", role: "Apple", image: ClientImage, rating: 5 },
  { text: templateDescription, name: "John Smith", role: "Microsoft", image: ClientImage, rating: 4 },
  { text: templateDescription, name: "Gina Smith", role: "Amazon", image: ClientImage, rating: 5 },
  { text: templateDescription, name: "Jim Doe", role: "Tesla", image: ClientImage, rating: 4 },
];

export const decorations = [
  { position: "-top-8 -left-8", size: "w-12 h-12", color: "bg-red-400", shape: "rounded-full", md: "md:w-16 md:h-16" },
  { position: "-bottom-8 -right-8", size: "w-16 h-16", color: "bg-green-600", shape: "rounded-lg", md: "md:w-20 md:h-20" },
];