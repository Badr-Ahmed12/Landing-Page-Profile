import companyLogos from "@/public/Group 5334.png?trace";
import companyLogosTraced1 from "@/public/image 1 (Traced).png?trace";
import companyLogosTraced2 from "@/public/image 2 (Traced).png?trace";
import companyLogosTraced3 from "@/public/image 5 (Traced).png?trace";
import img from "@/public/HeaderImage 1.png?trace";
import img1 from "@/public/Image (1).png?trace";
import img2 from "@/public/Image (2).png?trace";
import img3 from "@/public/Image (3).png?trace";
import img4 from "@/public/Image (4).png?trace";
import img5 from "@/public/Image (5).png?trace";
import img6 from "@/public/Image (6).png?trace";
import img7 from "@/public/Client Image.png?trace";
import { Logo, ContactInfo, Project, HeroText, NavLink, Skill, Testimonial } from "@/types/index.d.ts";

export const Logos: Logo[] = [
  { src: companyLogos, alt: "Company Logos" },
  { src: companyLogosTraced1, alt: "Traced Logo 1" },
  { src: companyLogosTraced2, alt: "Traced Logo 2" },
  { src: companyLogosTraced3, alt: "Traced Logo 3" },
];

export const contactInfo: ContactInfo = {
  title: "Get in touch",
  description: "If you have any questions or would like to discuss a project, please don't hesitate to reach out. I look forward to hearing from you.",
};

export const projects: Project[] = [
  { image: img1, title: "Project title", category: "UI, Art direction" },
  { image: img2, title: "Project title", category: "UI, Art direction" },
  { image: img3, title: "Project title", category: "UI, Art direction" },
  { image: img4, title: "Project title", category: "UI, Art direction" },
  { image: img5, title: "Project title", category: "UI, Art direction" },
  { image: img6, title: "Project title", category: "UI, Art direction" },
];

export const heroText: HeroText = {
  title: "Visual Designer",
  description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.",
  image: img,
};

export const navLinks: NavLink[] = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
];

export const skills: Skill[] = [
  { title: "Product Design", description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", color: "bg-red-200" },
  { title: "Visual Design", description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", color: "bg-red-400" },
  { title: "Art Direction", description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", color: "bg-green-500" },
};

export const testimonials: Testimonial[] = [
  { text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", name: "Gemma Nolen", role: "Google", image: img7, rating: 5 },
  { text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", name: "John Doe", role: "Facebook", image: img7, rating: 4 },
  { text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", name: "Jane Doe", role: "Apple", image: img7, rating: 5 },
  { text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", name: "John Smith", role: "Microsoft", image: img7, rating: 4 },
  { text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", name: "Gina Smith", role: "Amazon", image: img7, rating: 5 },
  { text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com", name: "Jim Doe", role: "Tesla", image: img7, rating: 4 },
];

