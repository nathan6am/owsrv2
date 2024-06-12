import { pgTable, serial, integer, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  username: text("username").unique(),
  guid: text("guid").unique(),
  discordId: text("discord_id").unique(),
});

export const usersRelations = relations(users, ({ one }) => ({
  profileInfo: one(profile),
}));

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  name: text("name"),
  bio: text("bio"),
  country: text("country"),
  driverCode: text("driver_code"),
  avatar: text("avatar"),
  twitch: text("twitch"),
  youtube: text("youtube"),
});
