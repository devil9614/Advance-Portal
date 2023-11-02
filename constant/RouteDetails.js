import { RiDashboardFill } from "react-icons/ri";

export const RouteDetails = [
  {
    title: "SPECTROMETER",
    items: [
      {
        label: "Dashboard",
        href: "/spectrometer/dashboard",
        icon: <RiDashboardFill />,
      },
      {
        label: "Spectrometer",
        href: "/spectrometer",
        icon: <RiDashboardFill />,
      },
    ],
  },
  {
    title: "CHARGEMIX",
    items: [
      {
        label: "Dashboard",
        href: "/chargemix/dashboard",
        icon: <RiDashboardFill />,
      },
      {
        label: "Melting furnace",
        href: "/chargemix/melting-furnace",
        icon: <RiDashboardFill />,
      },
      {
        label: "Holding furnace",
        href: "/chargemix/holding-furnace",
        icon: <RiDashboardFill />,
      },
    ],
  },
  {
    title: "Raw Materials",
    items: [
      {
        label: "Raw Materials",
        href: "/raw-materials",
        icon: <RiDashboardFill />,
      },
      {
        label: "Quality Reports",
        href: "/quality-reports",
        icon: <RiDashboardFill />,
      },
    ],
  },
  {
    title: "Grades & Parts",
    items: [{ label: "Grades", href: "/grades", icon: <RiDashboardFill /> }],
  },
  {
    title: "PROCUREMENT",
    items: [
      {
        label: "Pricing and Rfq",
        href: "/procurement/pricing-rfq",
        icon: <RiDashboardFill />,
      },
      {
        label: "Raise RFQ",
        href: "/procurement/raise-rfq",
        icon: <RiDashboardFill />,
      },
      {
        label: "Orders",
        href: "/procurement/orders",
        icon: <RiDashboardFill />,
      },
    ],
  },
];
