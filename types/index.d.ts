export interface Logo {
    src: string;
    alt: string;
  }
  
  export interface ContactInfo {
    title: string;
    description: string;
  }
  
  export interface Project {
    image: string;
    title: string;
    category: string;
  }
  
  export interface HeroText {
    title: string;
    description: string;
    image: string;
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
    image: string;
    rating: number;
  }
  
export interface ButtonProps {
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    name: string; 
}
