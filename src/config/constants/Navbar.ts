import { FiSearch } from "react-icons/fi";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = {
  links: [
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Orders",
      href: "/orders",
    },
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Users",
      href: "/users",
    },
  ],
};

export const navIcons = [
  {
    id: "search",
    icon: FiSearch,
  },
  {
    id: "notification",
    icon: IoMdNotificationsOutline,
  },
  {
    id: "Profile",
    isProfile: true,
  },
  {
    id: "Profile",
    icon: IoIosArrowDown,
  },
];

export const headerMenuItems = [
  {
    id: "Profile",
    isProfile: true,
  },
  {
    id: "Divider",
    isDivider: true,
  },
  {
    id: "Notification",
    label: "Notification",
    icon: IoMdNotificationsOutline,
  },
  {
    id: "Divider",
    isDivider: true,
  },
  {
    id: "Search",
    label: "Search",
    icon: FiSearch,
  },
  {
    id: "Divider",
    isDivider: true,
  },
  {
    id: "Logout",
    label: "Logout",
    icon: IoMdLogOut,
  },
];
