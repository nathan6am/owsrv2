"use client";

import React from "react";

import LicenseTag from "@/components/LicenseTag";
import { MdNotInterested, MdDownload } from "react-icons/md";
import { IoMdTrophy, IoMdPersonAdd, IoMdCar } from "react-icons/io";
import { Wrench } from "@phosphor-icons/react/dist/ssr";
import { FaUser, FaRoad } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { BiStopwatch, BiDollarCircle } from "react-icons/bi";

interface Props {
  event: {
    name: string;
    date: string;
    track: string;
    eventType: string;
    license: string;
    fixedSetup: boolean;
    image: string;
    paidContentRequired: boolean;
    modsRequired: boolean;
    dlcRequired: boolean;
    maxParticipants: number;
  };
}
export default function EventCard({ event }: Props) {
  return (
    <div className="rounded-lg bg-elevation-3 flex flex-col  w-full mx-auto max-w-lg aspect-[3/2] group hover:bg-elevation-4">
      <div
        style={{
          backgroundImage: `url(${event.image})`,
        }}
        className="w-full min-h-[10rem] rounded-t-lg relative overflow-hidden flex flex-col justify-end grow bg-cover bg-no-repeat bg-center"
      >
        <div className="absolute top-0 right-2 w-auto h-16 rounded-full">
          <img
            src="/images/AC-logo-color.png"
            className="h-full w-auto"
            alt="Assetto Corsa"
          />
        </div>

        <div className="backdrop-blur-md bg-elevation-0/[0.3] py-1.5 px-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center text-light-100">
              <FaUser className="text-light-100 mr-2 inline" />
              <h2 className="text-sm">{`0/${
                event.maxParticipants === -1 ? "∞" : event.maxParticipants
              }`}</h2>
              <IoMdCar
                className="text-light-100 ml-4 mr-2 inline"
                size={"1.3em"}
              />
              <h2 className="text-sm">1</h2>
            </div>
            <p className="text-xs">
              <FaRoad className="inline mr-1" />
              {event.track}
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 pr-8 relative">
        <div className="flex flex-row mb-2 gap-2">
          <LicenseTag license={event.license as LicenseClass} />
          <div className="flex flex-row items-center bg-light-200 text-elevation-1 shadow rounded-full pl-2 pr-3 text-sm">
            <Wrench size={"1.2em"} weight="fill" className="mr-1" />
            {event.fixedSetup ? "Fixed" : "Open"}
          </div>
          <div className="flex flex-row items-center bg-light-400 text-elevation-1 shadow rounded-full pl-2 pr-3 text-sm">
            <HiTrendingUp size={"1.2em"} className="mr-1" />
            Rated
          </div>
          {event.eventType === "hotlap" && (
            <div className="flex flex-row items-center bg-elevation-4 text-light-400 border border-elevation-5 shadow rounded-full pl-2 pr-3 text-sm">
              <BiStopwatch size={"1.2em"} className="mr-1" />
              Hotlap
            </div>
          )}
        </div>
        <p className="text-primary-300 text-sm mb-0.5">
          <IoMdTrophy className="mr-1 inline" />
          Praga R1 Cup Series
        </p>
        <h2 className="text-xl text-light-100 font-semibold mb-0.5">
          {event.name}
        </h2>
        <p className="text-light-300 text-sm">{event.date}</p>
        <div className="absolute bottom-0 top-0 right-4 py-3 flex flex-col justify-between items-end">
          <div className="flex flex-row items-center">
            {event.paidContentRequired && (
              <BiDollarCircle size="1.2em" className="mr-1" />
            )}
            {event.modsRequired && <MdDownload size="1.2em" />}
          </div>
          <IoMdPersonAdd size="1.8em" className="text-primary-300 inline" />
        </div>
      </div>
    </div>
  );
}
