"use server";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { events } from "@/db/schema/event";

const connectionString = process.env.DATABASE_URL as string;
const client = postgres(connectionString, { prepare: false });
const db = drizzle(client);

export async function testCreate() {
  const event = await db.insert(events).values({
    title: "Test Event",
    description: "This is a test event",
    game: "assetto-corsa",
    image: "https://example.com/image.jpg",
    eventType: "community-race",
    track: "Silverstone GP",
    license: "R",
    date: new Date(),
  });
  return event;
}
