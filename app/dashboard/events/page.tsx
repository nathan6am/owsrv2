"use client";
import { Input } from "@/components/UIKit";
import SearchFilters from "./SearchFilters";
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
export default function Events() {
  const [view, setView] = useState<"list" | "grid">("list");
  const [eventTypes, setEventTypes] = useState([]);
  return (
    <div className="container px-1 sm:px-4 py-4">
      <h2 className="text-2xl mb-4">Events</h2>
      <div className="rounded-lg bg-elevation-300 p-6">
        <SearchFilters />
      </div>
      <div className="flex flex-row justify-between items-center pb-2 mb-2 border-b border-light-100 mt-4">
        <h2 className="text-lg my-2">Search Results</h2>
        {/* <ListGridToggle value={view} onChange={setView} /> */}
      </div>
      <div className="grid gap-4 mt-4 grid-cols-eventGridSm sm:grid-cols-eventGrid">
        <div className="rounded-lg bg-elevation-300 flex flex-col w-full mx-auto max-w-lg aspect-[3/2]">
          <div
            style={{
              backgroundImage: "url(https://owsr-public-img.s3.amazonaws.com/praga-silverstone.jpg)",
            }}
            className="w-full min-h-[10rem] rounded-t-lg relative overflow-hidden flex flex-col justify-end grow bg-cover bg-no-repeat bg-center"
          >
            <div className="absolute top-2 right-2 w-auto h-12 rounded-full">
              <img src="/images/AC-logo.png" className="h-full w-auto" alt="Assetto Corsa" />
            </div>

            <div className="backdrop-blur-md bg-elevation-100/[0.1] py-1.5 px-3">
              <div className="flex flex-row items-center">
                <FaUser className="text-light-400 mr-2 inline" />
                <h2 className="text-sm">3/20</h2>
                <IoMdCar className="text-light-400 ml-4 mr-2 inline" size={"1.3em"} />
                <h2 className="text-sm">1</h2>
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <LicenseTag license="B" />
            <h2 className="text-xl text-light-500 font-semibold">Praga R1 Cup - Silverstone</h2>
            <p className="text-light-300 text-sm">Sunday, 12th September 2021</p>
            <p className="text-light-300 text-sm">20:00 UTC</p>
          </div>
        </div>
        <div className="rounded-lg bg-elevation-300 flex flex-col  w-full mx-auto max-w-lg aspect-[3/2]">
          <div
            style={{
              backgroundImage: "url(https://owsr-public-img.s3.amazonaws.com/praga-silverstone.jpg)",
            }}
            className="w-full min-h-[10rem] rounded-t-lg relative overflow-hidden flex flex-col justify-end grow bg-cover bg-no-repeat bg-center"
          >
            <div className="absolute top-2 right-2 w-auto h-12 rounded-full">
              <img src="/images/AC-logo.png" className="h-full w-auto" alt="Assetto Corsa" />
            </div>

            <div className="backdrop-blur-md bg-elevation-1/[0.1] py-1.5 px-3">
              <div className="flex flex-row items-center">
                <MdNotInterested className="text-primary-500 mr-2" size="1.2em" />
                <FaUser className="text-light-200 mr-2" />
                <h2 className="text-sm">3/20</h2>
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <LicenseTag license="B" />
            <h2 className="text-xl text-light-100 font-semibold">Praga R1 Cup - Silverstone</h2>
            <p className="text-light-300 text-sm">Sunday, 12th September 2021</p>
            <p className="text-light-300 text-sm">20:00 UTC</p>
          </div>
        </div>
        <div className="rounded-lg bg-elevation-3 hover:bg-elevation-4 flex flex-col cursor-pointer group w-full mx-auto max-w-lg aspect-[3/2]">
          <div
            style={{
              backgroundImage: "url(https://owsr-public-img.s3.amazonaws.com/praga-silverstone.jpg)",
            }}
            className="w-full min-h-[10rem] rounded-t-lg relative overflow-hidden flex flex-col justify-end grow bg-cover bg-no-repeat bg-center"
          >
            <div className="absolute top-2 right-2 w-auto h-12 rounded-full">
              <img src="/images/AC-logo.png" className="h-full w-auto" alt="Assetto Corsa" />
            </div>

            <div className="backdrop-blur-md bg-elevation-1/[0.1] py-1.5 px-3">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <MdNotInterested className="text-primary-500 mr-2" size="1.2em" />
                  <FaUser className="text-light-400 mr-2 inline" />
                  <h2 className="text-sm">3/20</h2>
                  <IoMdCar className="text-light-400 ml-4 mr-2 inline" size={"1.3em"} />
                  <h2 className="text-sm">1</h2>
                </div>
                <p className="text-xs">
                  <FaRoad className="inline mr-1" />
                  Silverstone GP
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 pr-8 relative">
            <div className="flex flex-row mb-2 gap-2">
              <LicenseTag license="B" />
              <div className="flex flex-row items-center bg-light-200 text-elevation-1 shadow rounded-full pl-2 pr-3 text-sm">
                <Wrench size={"1.2em"} weight="fill" className="mr-1" />
                Fixed
              </div>
              <div className="flex flex-row items-center bg-light-400 text-elevation-1 shadow rounded-full pl-2 pr-3 text-sm">
                <HiTrendingUp size={"1.2em"} className="mr-1" />
                Rated
              </div>
              <div className="flex flex-row items-center bg-elevation-4 text-light-400 border border-elevation-5 shadow rounded-full pl-2 pr-3 text-sm">
                <BiStopwatch size={"1.2em"} className="mr-1" />
                Hotlap
              </div>
            </div>
            <p className="text-primary-300 text-sm mb-0.5">
              <IoMdTrophy className="mr-1 inline" />
              Praga R1 Cup Series
            </p>
            <h2 className="text-xl text-light-100 font-semibold mb-0.5 group-hover:underline">
              Praga R1 Cup - Silverstone
            </h2>
            <p className="text-light-300 text-sm">Sunday, 12th September 2021 - 20:00 UTC</p>
            <div className="absolute bottom-0 top-0 right-4 py-3 flex flex-col justify-between items-end">
              <div className="flex flex-row items-center">
                <BiDollarCircle size="1.2em" className="mr-1" />
                <MdDownload size="1.2em" />
              </div>
              <IoMdPersonAdd size="1.8em" className="text-primary-300 inline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
