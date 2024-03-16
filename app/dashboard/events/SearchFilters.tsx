import React, { useState } from "react";
import { Input } from "@/components/UIKit";
import MultiSelect from "@/components/UIKit/MultiSelect";
import { MdSearch } from "react-icons/md";
export const EVENTTYPES = [
  { name: "League Race", value: "league" },
  { name: "Hotlap", value: "hotlap" },
  { name: "Special Event", value: "special" },
  { name: "Fun Race", value: "fun" },
  { name: "Championship Series", value: "championship" },
];
export const GAMES = [
  { name: "Assetto Corsa", value: "AC" },
  { name: "Assetto Corsa Competizione", value: "ACC" },
  { name: "rFactor 2", value: "RF2" },
  { name: "iRacing", value: "IRACING" },
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
      <div className="flex flex-row gap-4">
        <MultiSelect showCheckAll label="Event Type" options={EVENTTYPES} value={eventTypes} onChange={setEventTypes} />
        <MultiSelect showCheckAll label="Game" options={GAMES} value={games} onChange={setGames} />
        <MultiSelect
          showCheckAll
          label="Setup"
          options={[
            { name: "Fixed", value: "fixed" },
            { name: "Open", value: "open" },
          ]}
          value={setup}
          onChange={setSetup}
        />
      </div>
    </>
  );
}
