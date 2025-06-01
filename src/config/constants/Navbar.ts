import { FiSearch } from "react-icons/fi";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaBoxes } from "react-icons/fa";
import { PiBasketBold } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";


export const Navbar = {
  links: [
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: RxDashboard 
    },
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Products",
      href: "/products",
      icon: FaBoxes
    },
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Orders",
      href: "/orders",
      icon: PiBasketBold
    },
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: AiOutlineMessage
    },
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Shipments",
      href: "/shipments",
      icon: TbTruckDelivery
    },
    {
      id: "Divider",
      isDivider: true,
    },
    {
      label: "Schedule",
      href: "/schedule",
      icon: FaRegCalendarAlt
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
