"use client";
import { Button, Input } from "@/components/UIKit";
import MultiSelect from "@/components/UIKit/MultiSelect";
import LicenseTag from "@/components/LicenseTag";
import { MdNotInterested, MdCheckCircleOutline, MdDownload } from "react-icons/md";
import { IoMdTrophy, IoMdPersonAdd, IoMdCar } from "react-icons/io";
import { Wrench } from "@phosphor-icons/react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { FaUser, FaRoad } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { BiStopwatch, BiDollarCircle } from "react-icons/bi";
export const EVENTTYPES = [
  { name: "League Race", value: "league" },
  { name: "Hotlap", value: "hotlap" },
  { name: "Special Event", value: "special" },
  { name: "Fun Race", value: "fun" },
  { name: "Championship Series", value: "championship" },
];
export default function Leagues() {
  const [view, setView] = useState<"list" | "grid">("list");
  const [eventTypes, setEventTypes] = useState([]);
  return (
    <div className="w-full h-full flex  flex-col items-center">
      <div className="p-8">
        <h2 className="text-2xl  font-kallisto text-light-200">Leagues & Championships</h2>
      </div>
      <div className="w-full container">
        <LeagueCard
          image="/images/fa01.JPG"
          name="Formula Abarth Championship Series"
          description="Tatuus FA01 fixed setup league for lots of racing fun lolol"
        />
        <LeagueCard image="/images/atf1.jpg" name="Formula Hybrid Championship Series" />
        <LeagueCard image="/images/atf1.jpg" name="iRacing Legacy Endurance Tour" />
        <LeagueCard image="/images/atf1.jpg" name="Historic Racing Series" />
      </div>
    </div>
  );
}

interface LeagueCardProps {
  name: string;
  description?: string;
  image: string;
}
function LeagueCard({ name, image, description }: LeagueCardProps) {
  return (
    <div className="mb-8 w-full bg-elevation-0 border-y border-elevation-3 group">
      <div className="flex lg:flex-row flex-col w-full relative">
        <div className="absolute top-4 right-12 left-12 flex flex-row justify-end z-20">
          <div className="py-4 w-fit text-left px-8 text-light-100 bg-gradient-to-r from-elevation-1/[0.3] to-primary-700 transition-all duration-300 text-3xl text-shadow-sm shadow-elevation-1 font-bold  uppercase italic font-header -skew-x-12 drop-shadow-xl">
            {name}
          </div>
        </div>

        <div
          className="w-full lg:w-[36em] aspect-[2/1] shrink-0 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image}` }}
        >
          <div className="absolute bottom-6 right-6">
            <img src="/images/AC-logo.png" className="h-12 w-auto" alt="Assetto Corsa" />
          </div>
        </div>
        <div className="w-full p-8 flex flex-col justify-end items-end">
          <p className="text-light-200  w-full">{description}</p>
          <Button variant="secondary">Learn More</Button>{" "}
          <Button variant="secondary" outline>
            League Rules
          </Button>
        </div>
      </div>
    </div>
  );
}
