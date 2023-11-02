import { RiDashboardFill } from "react-icons/ri";

export const RouteDetails = [
  {
    title: "SPECTROMETER",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
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
        href: "/chargemix",
        icon: <RiDashboardFill />,
      },
      {
        label: "Melting furnace",
        href: "/chargemix/melting",
        icon: <RiDashboardFill />,
      },
      {
        label: "Holding furnace",
        href: "/chargemix/holding",
        icon: <RiDashboardFill />,
      },
    ],
  },
  {
    title: "Raw Materials",
    items: [
      {
        label: "Raw Materials",
        href: "/inventory",
        icon: <RiDashboardFill />,
      },
      {
        label: "Quality Reports",
        href: "/test",
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
        href: "/rfq",
        icon: <RiDashboardFill />,
      },
      {
        label: "Raise RFQ",
        href: "/raise",
        icon: <RiDashboardFill />,
      },
      {
        label: "Orders",
        href: "/orders",
        icon: <RiDashboardFill />,
      },
    ],
  },
];
