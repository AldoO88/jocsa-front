// src/app/cuenta/layout.tsx
import AccountSidebar from "@/components/account/AccountSidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <AccountSidebar />
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <main className="flex-1 space-y-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}