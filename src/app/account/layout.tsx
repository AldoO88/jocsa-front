// src/app/cuenta/layout.tsx
import { AccountSidebar } from "@/components/account/AccountSidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <AccountSidebar />
        <main className="flex-1 bg-white p-8 rounded-lg shadow-md">
          {children}
        </main>
      </div>
    </div>
  );
}