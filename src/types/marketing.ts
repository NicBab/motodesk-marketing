import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: number;
  tag: string;
  features: readonly string[];
  recommended?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

// export interface FooterColumn {
//     title: string;
//     links: readonly string[];
// }