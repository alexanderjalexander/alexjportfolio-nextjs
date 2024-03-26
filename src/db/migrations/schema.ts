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

export const categories = pgTable("categories", {
	id: integer("id").primaryKey().notNull(),
	category: varchar("category", { length: 35 }).notNull(),
},
(table) => {
	return {
		categoriesCategoryKey: unique("categories_category_key").on(table.category),
	}
});

export const skillCategory = pgTable("skill_category", {
	category: integer("category").notNull().references(() => categories.id),
	skill: integer("skill").notNull().references(() => skills.id),
});

export const skills = pgTable("skills", {
	id: integer("id").primaryKey().notNull(),
	skill: varchar("skill", { length: 35 }).notNull(),
},
(table) => {
	return {
		skillsSkillKey: unique("skills_skill_key").on(table.skill),
	}
});