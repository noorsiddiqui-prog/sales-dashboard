import { BiPackage } from "react-icons/bi";
import { BsCheckSquare } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { PiInvoiceLight } from "react-icons/pi";

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