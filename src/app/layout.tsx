import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import AppSidebar from "./fragments/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Footer from "./fragments/Footer";

const geisNunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Estação Clima",
  description: "Instalação, manutenção e venda de equipamentos de refrigeração com qualidade e eficiência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geisNunito.className} bg-gray-50 dark:bg-gray-950 antialiased p-3 w-full`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col w-full h-screen">
            <SidebarTrigger className="bg-gray-600 hover:bg-gray-500 hover:text-white text-white cursor-pointer" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
