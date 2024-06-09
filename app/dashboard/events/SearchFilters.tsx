"use client";
import React, { useState } from "react";
import { Input } from "@/components/base";
import MultiSelect from "@/components/base/MultiSelect";
import { MdSearch } from "react-icons/md";
import LicenseTag from "@/components/LicenseTag";
import { cn } from "@/utilities/cn";

export const EVENTTYPES = [
  { label: "League Race", value: "league" },
  { label: "Hotlap", value: "hotlap" },
  { label: "Special Event", value: "special" },
  { label: "Fun Race", value: "fun" },
  { label: "Championship Series", value: "championship" },
];
export const GAMES = [
  { label: "Assetto Corsa", value: "AC" },
  { label: "Assetto Corsa Competizione", value: "ACC" },
  { label: "rFactor 2", value: "RF2" },
  { label: "iRacing", value: "IRACING" },
];

type SetupType = "fixed" | "open";
type ContentType = "free" | "mod" | "paid";

interface SearchOptions {
  query?: string;
  games?: Game[];
  eventTypes?: string[];
  setup?: "fixed" | "open" | "all";
  ratedOnly?: boolean;
  before?: string;
  after?: string;
  contentRequired?: ContentType[];
}

export default function SearchFilters() {
  const [query, setQuery] = useState("");
  const [eventTypes, setEventTypes] = useState<string[]>([]);
  const [games, setGames] = useState<string[]>([]);
  const [setup, setSetup] = useState<SetupType[]>([]);
  const [license, setLicense] = useState<string[]>([]);
  return (
    <>
      <div className="flex flex-row justify-between items-start mb-4 pr-4">
        <Input
          placeholder="Search Events"
          className="mb-0 max-w-md"
          leftIcon={MdSearch}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        <MultiSelect
          showCheckAll
          placeholder="Filter by Event Type"
          label="Event Type"
          options={EVENTTYPES}
          value={eventTypes}
          onChange={setEventTypes}
        />

        <MultiSelect
          showCheckAll
          label="Game"
          placeholder="Filter by Game"
          options={GAMES}
          value={games}
          onChange={setGames}
        />

        <MultiSelect
          showCheckAll
          label="Setup"
          options={[
            { label: "Fixed", value: "fixed" },
            { label: "Open", value: "open" },
          ]}
          value={setup}
          placeholder="Filter by Open/Fixed Setup"
          onChange={setSetup}
        />
        <MultiSelect
          showCheckAll
          label="License Requirement"
          placeholder="Filter by Required License"
          options={[
            { label: "Rookie", value: "R" },
            { label: "C-Class", value: "C" },
            { label: "B-Class", value: "B" },
            { label: "A-Class", value: "A" },
            { label: "Super License", value: "S" },
          ]}
          value={license}
          renderLabel={({ option, selected }) => {
            return (
              <div className="flex flex-row items-center">
                <LicenseTag license={option.value as "R"} />
                <p
                  className={cn("ml-1", {
                    "text-light-200": selected,
                  })}
                >
                  {option.label}
                </p>
              </div>
            );
          }}
          onChange={setLicense}
        />
      </div>
    </>
  );
}
