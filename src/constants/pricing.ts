import type { PricingTier } from "@/types/marketing";

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    stripeLookupKey: "starter-monthly",
    name: "Starter",
    price: 89,
    usersIncluded: 2,
    trialDays: 14,
    recommended: false,
    available: true,
    tag: "Independents",

    features: [
      "Up to 2 users",
      "Service tickets & scheduling",
      "Basic parts inventory",
      "Customer SMS & email",
      "Email support",
    ],
  },

  {
    id: "business",
    stripeLookupKey: "business-monthly",
    name: "Business",
    price: 189,
    usersIncluded: 5,
    trialDays: 14,
    recommended: true,
    available: true,
    tag: "Growing Service Departments",

    features: [
      "Up to 5 users",
      "CRM & lead routing",
      "Multi-location inventory",
      "F&I deal builder",
      "Priority support",
    ],
  },

  {
    id: "pro",
    stripeLookupKey: "pro-monthly",
    name: "Pro",
    price: 299,
    usersIncluded: 10,
    trialDays: 14,
    recommended: false,
    available: true,
    tag: "Larger Service Centers",

    features: [
      "Up to 10 users",
      "Advanced analytics",
      "OEM integrations",
      "API access",
      "Dedicated success manager",
    ],
  },

  {
    id: "enterprise",
    stripeLookupKey: "enterprise-monthly",
    name: "Enterprise",
    price: 799,
    usersIncluded: null,
    trialDays: 14,
    recommended: false,
    available: true,
    tag: "Dealer Groups",

    features: [
      "Unlimited users",
      "Unlimited locations",
      "SSO & SAML",
      "Audit logging",
      "24/7 support",
    ],
  },
];