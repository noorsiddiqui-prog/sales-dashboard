import DashboardHeader from "@/components/header/DashboardHeader";

// src/app/dashboard/layout.tsx
export default function DashboardLayout(
    {
        children
    }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <div className="p-4 bg-[var(--gray-bg)]"><DashboardHeader /></div>
            <div className="p-4">{children}</div>
        </>
    );
}
