import { integer, pgTable, text, timestamp, varchar, uuid } from "drizzle-orm/pg-core";

export const charactersTable = pgTable("characters", {
  id: uuid("id").primaryKey().defaultRandom(),
  anilistId: integer("anilist_id").notNull().unique(),
  name: varchar("name", { length: 100 }).notNull(),
  imageUrl: text("image_url"),
  description: text("description"),
  animeTitle: varchar("anime_title", { length: 150 }),
  createdAt: timestamp("created_at").defaultNow(),
});


export const chatsTable = pgTable("chats", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("user_id", { length: 510 }).notNull(),
  characterId: uuid("character_id").references(() => charactersTable.id, { onDelete: "cascade" }).notNull(),
  title: varchar("title", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const messagesTable = pgTable("messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  chatId: uuid("chat_id").references(() => chatsTable.id, { onDelete: "cascade" }).notNull(),
  sender: text("sender").notNull(), // "user" or "ai"
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
