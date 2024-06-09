import { pgEnum } from "drizzle-orm/pg-core";

export const gameEnum = pgEnum("game", [
  "assetto-corsa",
  "iracing",
  "rfactor2",
  "le-mans-ultimate",
  "asseto-corsa-competizione",
]);

export const eventTypeEnum = pgEnum("event_type", [
  "league-race",
  "special-event",
  "community-race",
  "hotlap",
  "championship-series",
]);

export const licenseEnum = pgEnum("license", ["A", "B", "C", "S", "R"]);

export const userRoleEnum = pgEnum("user_role", ["admin", "moderator", "user"]);


