import { BiPackage } from "react-icons/bi";
import { BsCheckSquare } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { PiInvoiceLight } from "react-icons/pi";
import { PiDressBold } from "react-icons/pi";
import { PiTShirtBold } from "react-icons/pi";
import { PiWatchBold } from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";

export const statsCardsData = [
    {
        label: "Total Revenue",
        value: "$4,360",
        iconColor: "bg-[var(--purple-light)]",
        change: "+2.34%",
        tagColor: "bg-[var(--blue-light)]",
        tagSubTitle: "From last week"
    },
    {
        label: "Total Orders",
        value: "3,054",
        iconColor: "bg-[var(--blue-light)]",
        change: "+2.34%",
        tagColor: "bg-[var(--blue-light)]",
        tagSubTitle: "From last week"
    },
    {
        label: "Monthly Growth",
        value: "13%",
        iconColor: "bg-[var(--blue-light)]",
        change: "-4.05%",
        tagColor: "bg-[var(--blue-light)]",
        tagSubTitle: "From last week"
    },
    {
        label: "Conversion Rate",
        value: "20%",
        iconColor: "bg-[var(--blue-light)]",
        change: "+3.45%",
        tagColor: "bg-[var(--blue-light)]",
        tagSubTitle: "From last week"
    },
]

export const activityData = [
    {
        icon: BiPackage,
        title: "Packed",
        count: 2034
    },
    {
        icon: BsCheckSquare,
        title: "Delivered",
        count: 1186
    },
    {
        icon: BsTruck,
        title: "Shipped",
        count: 635
    },
    {
        icon: PiInvoiceLight,
        title: "Invoiced",
        count: "$132"
    },
]

export const SalesDistributionCardsData = [
    {
        label: "Website Sales",
        value: "9,000 products",
        count: "$45,000,000",
        percentage: "45%",
        color: "#ff6200"
    },
    {
        label: "Store Sales",
        value: "5,000 products",
        count: "$25,000,000",
        percentage: "55%",
        color: "#8a5cf68b"
    },
    {
        label: "Other Sales",
        value: "5,000 products",
        count: "$25,000,000",
        percentage: "55%",
        color: "#8a5cf68b"
    },
    {
        label: "Other Sales",
        value: "5,000 products",
        count: "$25,000,000",
        percentage: "55%",
        color: "#8a5cf68b"
    },
]

export const categoryData = [
    {
        name: "Women's Clothing",
        percentage: "35%",
        icon: PiDressBold
    },
    {
        name: "Men's Clothing",
        percentage: "25%",
        icon: PiTShirtBold
    },
    {
        name: "Accessories",
        percentage: "20%",
        icon: PiWatchBold
    },
    {
        name: "Footwear",
        percentage: "15%",
        icon: TbShoe
    },
    {
        name: "Bags & Purses",
        percentage: "5%",
        icon: IoBagOutline
    },
]

export const countryStatsData = [
    { countryName: 'United States', countryCode: 'us', userCount: '128K', percent: 27 },
    { countryName: 'India', countryCode: 'in', userCount: '95K', percent: 20 },
    { countryName: 'Germany', countryCode: 'de', userCount: '73K', percent: 15 },
    { countryName: 'United Kingdom', countryCode: 'gb', userCount: '56K', percent: 12 },
    { countryName: 'Brazil', countryCode: 'br', userCount: '42K', percent: 8 },
];