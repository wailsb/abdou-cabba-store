"use client"
import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/Components/ACSidebar"

import localFont from "next/font/local";
import "./globals.css";
import Nav from "./Components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        
        <SidebarProvider>
          <AppSidebar/>
          
          <main className="w-full">
            
            <Nav>  
                <SidebarTrigger className="bg-transparent text-white p-5 rounded-lg hover:bg-white hover:text-black transition"/>
            </Nav>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  
}
