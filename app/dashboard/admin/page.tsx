import { Suspense } from "react";
import CarsList from "./CarsList";
import CreateEventForm from "./CreateEventForm";
export const EVENTTYPES = [
  { name: "League Race", value: "league" },
  { name: "Hotlap", value: "hotlap" },
  { name: "Special Event", value: "special" },
  { name: "Fun Race", value: "fun" },
  { name: "Championship Series", value: "championship" },
];

export default function AdminDashboard() {
  return (
    <div className="container px-1 sm:px-4 py-4 mx-auto">
      <h2 className="text-3xl mb-4 font-kallisto font-medium">
        Admin Dashboard
      </h2>
      <div className="rounded-lg bg-elevation-300 py-6">
        <Suspense fallback={<div>Loading...</div>}>
          <CarsList />
        </Suspense>
      </div>
      <CreateEventForm />
    </div>
  );
}
