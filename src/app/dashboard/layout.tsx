import DashboardHeader from "@/components/header/DashboardHeader";
import DashboardSidebar from "@/components/sidebar/DashboardSidebar";

// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  statsCards,
}: {
  children: React.ReactNode;
  statsCards?: React.ReactNode;
}) {
  return (
    <>
      <div className="flex bg-[var(--gray-bg)]">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <div className="p-4 bg-[var(--gray-bg)]">
            <DashboardHeader />
          </div>
          <div className="p-4">{children}</div>
          {statsCards && (
            <div className="p-4">{statsCards}</div>
          )}
        </div>
      </div>
    </>
  );
}
