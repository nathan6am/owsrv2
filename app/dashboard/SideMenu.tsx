import React, { useContext, useEffect, useState, Component } from "react";
import IconButton from "@/components/UIKit/IconButton";
import { usePathname } from "next/navigation";
//icons
import { GiHamburgerMenu, GiFullMotorcycleHelmet } from "react-icons/gi";
import { BsFillCalendar2WeekFill, BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { FaFlagCheckered, FaTrophy } from "react-icons/fa";
import {
  MdNotifications,
  MdLogout,
  MdOutlineFormatListNumbered,
  MdOutlineHelpOutline,
  MdSettings,
} from "react-icons/md";

//componenets
import Link from "next/link";

//hooks
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

//utils
import { cn } from "@/utilities/cn";

interface SidebarProps {
  toggle: () => void;
  collapse: boolean;
}
export default function SideMenu({ toggle, collapse }: SidebarProps) {
  const supabase = createClientComponentClient();
  //Set active tab based on router path
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("my-races");
  useEffect(() => {
    if (pathname.startsWith("/dashboard/my-races")) {
      setActiveTab("my-races");
    } else if (pathname.startsWith("/dashboard/events")) {
      setActiveTab("events");
    } else if (pathname.startsWith("/dashboard/results")) {
      setActiveTab("results");
    } else if (pathname.startsWith("/dashboard/leagues")) {
      setActiveTab("leagues");
    } else if (pathname.startsWith("/dashboard/profile")) {
      setActiveTab("profile");
    } else {
      return;
    }
  }, [pathname]);
  return (
    <div
      className={` z-[5] h-screen  w-[300px] bg-elevation-1 flex flex-col justify-between h-full border-r border-light-500 fixed trasition ease-in-out duration-500 overflow-y-auto ${
        collapse ? "translate-x-[-300px] sm:translate-x-[-230px]" : "translate-x-0 "
      }`}
    >
      <nav className="flex flex-col">
        <div className="flex flex-row h-16 items-center pl-10 pr-4  border-light-500 justify-between">
          <img src="/images/logo.png" width="120px" height="auto" />
          <IconButton iconSize="1.5em" icon={collapse ? BsArrowBarRight : BsArrowBarLeft} onClick={toggle} />
        </div>
        <ul className="">
          <MenuItem
            icon={FaFlagCheckered}
            activeTab={activeTab}
            collapse={collapse}
            activeKey="my-races"
            href="/dashboard/my-races"
            label="My Races"
          />
          <MenuItem
            icon={BsFillCalendar2WeekFill}
            activeTab={activeTab}
            activeKey="events"
            href="/dashboard/events"
            label="Events"
            collapse={collapse}
          />
          <MenuItem
            icon={FaTrophy}
            activeTab={activeTab}
            activeKey="leagues"
            href="/dashboard/leagues"
            label="Leagues"
            collapse={collapse}
          />
          <MenuItem
            icon={MdOutlineFormatListNumbered}
            activeTab={activeTab}
            activeKey="results"
            href="/dashboard/results"
            label="Results"
            collapse={collapse}
          />
          <MenuItem
            icon={GiFullMotorcycleHelmet}
            activeTab={activeTab}
            activeKey="profile"
            href="/dashboard/profile"
            label="Driver Profile"
            collapse={collapse}
          />
        </ul>
      </nav>
      <div className="flex flex-row items-center justify-between mb-4 p-2 px-4 rounded-md shadow bg-elevation-3 mx-4">
        <IconButton icon={MdOutlineHelpOutline} />

        <IconButton icon={MdSettings} />

        <IconButton
          icon={MdLogout}
          onClick={() => {
            supabase.auth.signOut();
          }}
        />
      </div>
    </div>
  );
}

interface MenuItemProps {
  icon: React.FC<any>;
  activeTab: string;
  activeKey: string;
  label: string;
  href: string;
  collapse: boolean;
  iconSize?: number;
}

const MenuItem = ({ icon: Icon, activeTab, activeKey, label, href, collapse, iconSize }: MenuItemProps) => {
  const active = activeTab === activeKey;
  return (
    <Link href={href}>
      <li
        className={cn("cursor-pointer py-4 px-8 flex flex-row group border-l-4 border-transparent", {
          "bg-elevation-4 text-light-200 border-primary-400": active,
          "hover:bg-elevation-300 text-light-200 hover:text-light-200": !active,
        })}
      >
        <Icon
          className={cn("inline mr-6", {
            "fill-light-200 text-light-200": active,
            "fill-light-300 text-light-300 group-hover:fill-light-200 group-hover:text-light-200": !active,
            "sm:mr-0 sm:translate-x-[218px]": collapse,
          })}
          size={iconSize || 20}
        />
        {label}
      </li>
    </Link>
  );
};
