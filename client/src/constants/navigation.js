// constants/navigation.js
import { House, FileText, User } from "lucide-react";

export const CUSTOMER_NAV = [
  {
    to: "/customer/dashboard",
    label: "Kryesore",
    shortLabel: "Kryesore",
    icon: House,
  },
  {
    to: "/customer/requests",
    label: "Kërkesat e mia",
    shortLabel: "Kërkesat",
    icon: FileText,
  },
  {
    to: "/customer/profile",
    label: "Profili",
    shortLabel: "Profili",
    icon: User,
  },
];
