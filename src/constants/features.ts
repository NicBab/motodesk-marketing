import {
  Bike,
  Calendar,
  LineChart,
  Package,
  Receipt,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

import type { Feature } from "@/types/marketing";

export const FEATURES: Feature[] = [
  {
    icon: Wrench,
    title: "Service Bay",
    description: "Digital repair tickets, tech assignments, and job time tracking that replace paper work orders.",
  },
   {
    icon: Package,
    title: "Parts & Inventory",
    description: "Real-time stock across locations with vendor catalogs, reorder points, and VIN-matched fitment.",
  },
  {
    icon: Bike,
    title: "Unit Management",
    description: "Track every new and pre-owned unit from floor plan to delivery with full VIN history.",
  },
  {
    icon: Users,
    title: "CRM & Leads",
    description: "Capture leads from your site, DMS, and marketplaces. Follow up with automated workflows.",
  },
  {
    icon: Receipt,
    title: "Sales & F&I",
    description: "Build deals in minutes with tax rules, add-ons, financing, and e-sign built in.",
  },
  {
    icon: Calendar,
    title: "Scheduling",
    description: "Drag-and-drop bay scheduler with SMS reminders and customer self-booking.",
  },
  {
    icon: LineChart,
    title: "Reporting",
    description: "Live dashboards for revenue, gross, tech efficiency, and inventory aging.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description: "SOC 2 Type II, role-based access, and audit trails for every transaction.",
  },
];