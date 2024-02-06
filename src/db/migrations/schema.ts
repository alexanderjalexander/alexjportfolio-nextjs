import { pgTable, integer, varchar, foreignKey, unique, date } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const creators = pgTable("creators", {
	id: integer("id").primaryKey().notNull(),
	name: varchar("name", { length: 30 }).notNull(),
});

export const videos = pgTable("videos", {
	id: integer("id").primaryKey().notNull(),
	name: varchar("name", { length: 20 }).notNull(),
	youtubeId: varchar("youtube_id", { length: 11 }).notNull(),
	publishDate: date("publish_date").notNull(),
	commissionFor: integer("commission_for").references(() => creators.id),
},
(table) => {
	return {
		videosYoutubeIdKey: unique("videos_youtube_id_key").on(table.youtubeId),
	}
});