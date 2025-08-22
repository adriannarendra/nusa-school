import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        <AppProvider>
          <Sidebar />
          <div className="ml-[320px] flex-1 flex flex-col p-[32px] gap-[20px] overflow-y-auto">
            <Navbar />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
