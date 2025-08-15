import { StaticImageData } from "next/image";

export interface Logo {
    src: StaticImageData;
    alt: string;
  }

  
  export interface Project {
    image: StaticImageData;
    title: string;
    category: string;
  }
  
  export interface ContactInfo {
    title: string;
    description: string;
  }
  

  export interface HeroText {
    title: string;
    description: string;
    image: StaticImageData;
  }
  
  export interface NavLink {
    title: string;
    href: string;
  }
  
  export interface Skill {
    title: string;
    description: string;
    color: string;
  }
  
  export interface Testimonial {
    text: string;
    name: string;
    role: string;
    image: StaticImageData;
    rating: number;
  }
  
  export interface Images {
    Group5334: StaticImageData;
    Image1Traced: StaticImageData;
    Image2Traced: StaticImageData;
    Image5Traced: StaticImageData;
    Image1: StaticImageData;
    Image2: StaticImageData;
    Image3: StaticImageData;
    Image4: StaticImageData;
    Image5: StaticImageData;
    Image6: StaticImageData;
    HeaderImage1: StaticImageData;
    ClientImage: StaticImageData;
  }
