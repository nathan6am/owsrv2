"use client";
import "../globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import React from "react";
import SideMenu from "./SideMenu";

const inter = Figtree({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
  auth: React.ReactNode;
}
import { useMediaQuery } from "@react-hook/media-query";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utilities/cn";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  children: React.ReactNode;
}

const Dashboard = ({ children }: Props) => {
  const router = useRouter();
  const isMobile = useMediaQuery("only screen and (max-width: 640px)");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  // Auto collapse Sidebar on route change on mobile devices
  useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  }, [isMobile]);

  return (
    <>
      <button
        className={`text-white z-[90] hover:opacity-75 fixed top-4 left-6 p-2 bg-white/[0.3] rounded-xl sm:hidden ${
          sidebarCollapsed ? "sm:hidden" : "hidden"
        }`}
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu size={25} />
      </button>
      <SideMenu collapse={sidebarCollapsed} toggle={toggleSidebar} />
      <div
        className={cn("w-full bg-elevation-1 trasition ease-in-out duration-500 min-h-screen", {
          "pl-0 sm:pl-[70px]": sidebarCollapsed,
          "sm:pl-[70px] lg:pl-[300px]": !sidebarCollapsed,
        })}
      >
        <main className="h-full w-full ">{children}</main>
      </div>
    </>
  );
};

export default Dashboard;
