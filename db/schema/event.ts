import {
  pgTable,
  serial,
  uuid,
  text,
  integer,
  timestamp,
  varchar,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";
import { gameEnum, licenseEnum, eventTypeEnum } from "./enums";
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  description: text("description"),
  game: gameEnum("game"),
  image: text("image"),
  eventType: eventTypeEnum("event_type"),
  track: text("track"),
  date: timestamp("date"),
  time: text("time"),
  duration: integer("duration"),
  license: licenseEnum("license").notNull(),
  maxParticipants: integer("max_participants"),
  dlcRequired: boolean("dlc_required"),
  config: jsonb("config"),
  tags: text("tags").array(),
});
