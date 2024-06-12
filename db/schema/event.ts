import {
  pgTable,
  serial,
  uuid,
  text,
  integer,
  timestamp,
  date,
  varchar,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";
import { gameEnum, licenseEnum, eventTypeEnum } from "./enums";


export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  description: text("description"),
  game: gameEnum("game").notNull(),
  image: text("image").notNull(),
  headerImage: text("header_image"),
  eventType: eventTypeEnum("event_type").default("community-race"),
  track: text("track"),
  layout: text("layout"),
  cars: text("cars").array(),
  date: date("date"),
  startTime: timestamp("start_time"),
  regOpen: timestamp("reg_open"),
  regClose: timestamp("reg_close"),
  license: licenseEnum("license").default("R").notNull(),
  maxParticipants: integer("max_participants").default(20).notNull(),
  dlcRequired: boolean("dlc_required"),
  modsRequired: boolean("mods_required"),
  paidContentRequired: boolean("paid_content_required"),
  config: jsonb("config"),
  fixedSetup: boolean("fixed_setup"),
  tags: text("tags").array(),
  server: uuid("server_id").references(() => gameServers.id),
});


export const gameServers = pgTable("game_servers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  ip: varchar("ip", { length: 256 }),
  port: integer("port"),
  apiPort: integer("api_port"),
  dashboardPort: integer("dashboard_port"),
});
