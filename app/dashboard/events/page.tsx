import SearchFilters from "./SearchFilters";
import SearchResults from "./SearchResults";
import SubmitButton from "./SubmitButton";
export const EVENTTYPES = [
  { name: "League Race", value: "league" },
  { name: "Hotlap", value: "hotlap" },
  { name: "Special Event", value: "special" },
  { name: "Fun Race", value: "fun" },
  { name: "Championship Series", value: "championship" },
];

export default function Events() {
  return (
    <div className="container px-1 sm:px-4 py-4 mx-auto">
      <h2 className="text-3xl mb-4 font-kallisto font-medium">Events</h2>
      <div className="rounded-lg bg-elevation-300 py-6">
        <SearchFilters />
      </div>
      <SearchResults>
        <div>Event</div>
      </SearchResults>
      <SubmitButton />
    </div>
  );
}
