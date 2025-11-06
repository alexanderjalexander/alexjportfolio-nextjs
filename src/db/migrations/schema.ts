import { pgTable, unique, integer, varchar, foreignKey, date, check } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const categories = pgTable("categories", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "categories_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	category: varchar({ length: 35 }).notNull(),
}, (table) => [
	unique("categories_category_key").on(table.category),
]);

export const skillCategory = pgTable("skill_category", {
	category: integer().notNull(),
	skill: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.category],
			foreignColumns: [categories.id],
			name: "skill_category_category_fkey"
		}),
	foreignKey({
			columns: [table.skill],
			foreignColumns: [skills.id],
			name: "skill_category_skill_fkey"
		}),
]);

export const skills = pgTable("skills", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "skills_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	skill: varchar({ length: 35 }).notNull(),
}, (table) => [
	unique("skills_skill_key").on(table.skill),
]);

export const workExperienceJobs = pgTable("work_experience_jobs", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "work_experience_jobs_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	jobTitle: varchar("job_title", { length: 50 }).notNull(),
	jobStartDate: date("job_start_date").notNull(),
	jobEndDate: date("job_end_date"),
	jobCompany: varchar("job_company", { length: 75 }).notNull(),
	jobLocation: varchar("job_location", { length: 75 }).notNull(),
	responsibilities: varchar({ length: 1000 }).notNull(),
});

export const workExperienceSkills = pgTable("work_experience_skills", {
	job: integer().notNull(),
	skill: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.job],
			foreignColumns: [workExperienceJobs.id],
			name: "work_experience_skills_job_fkey"
		}),
	foreignKey({
			columns: [table.skill],
			foreignColumns: [skills.id],
			name: "work_experience_skills_skill_fkey"
		}),
]);

export const programmingProjects = pgTable("programming_projects", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "programming_projects_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	title: varchar({ length: 50 }).notNull(),
	subtitle: varchar({ length: 100 }).notNull(),
	description: varchar({ length: 500 }).notNull(),
	repoLink: varchar("repo_link", { length: 75 }),
	liveLink: varchar("live_link", { length: 75 }),
}, (table) => [
	unique("programming_projects_title_key").on(table.title),
]);

export const programmingSkills = pgTable("programming_skills", {
	project: integer().notNull(),
	skill: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.project],
			foreignColumns: [programmingProjects.id],
			name: "programming_skills_project_fkey"
		}),
	foreignKey({
			columns: [table.skill],
			foreignColumns: [skills.id],
			name: "programming_skills_skill_fkey"
		}),
]);

export const creators = pgTable("creators", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "creators_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar({ length: 30 }).notNull(),
	channelId: varchar("channel_id", { length: 50 }).notNull(),
}, (table) => [
	unique("creators_channel_id_key").on(table.channelId),
]);

export const videos = pgTable("videos", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "videos_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar({ length: 20 }).notNull(),
	youtubeId: varchar("youtube_id", { length: 11 }).notNull(),
	publishDate: date("publish_date").notNull(),
	commissionFor: integer("commission_for"),
}, (table) => [
	foreignKey({
			columns: [table.commissionFor],
			foreignColumns: [creators.id],
			name: "videos_commission_for_fkey"
		}),
	unique("videos_youtube_id_key").on(table.youtubeId),
	check("id_length", sql`length((youtube_id)::text) = 11`),
]);

export const motionGraphicsProjects = pgTable("motion_graphics_projects", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "motion_graphics_projects_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar({ length: 30 }).notNull(),
	description: varchar({ length: 300 }).notNull(),
	youtubeId: varchar("youtube_id", { length: 11 }).notNull(),
	publishDate: date("publish_date").notNull(),
}, (table) => [
	unique("motion_graphics_projects_youtube_id_key").on(table.youtubeId),
	check("id_length", sql`length((youtube_id)::text) = 11`),
]);

export const motionGraphicsSkills = pgTable("motion_graphics_skills", {
	project: integer().notNull(),
	skill: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.project],
			foreignColumns: [motionGraphicsProjects.id],
			name: "motion_graphics_skills_project_fkey"
		}),
	foreignKey({
			columns: [table.skill],
			foreignColumns: [skills.id],
			name: "motion_graphics_skills_skill_fkey"
		}),
]);

export const animationProjects = pgTable("animation_projects", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "animation_projects_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar({ length: 30 }).notNull(),
	description: varchar({ length: 300 }).notNull(),
	youtubeId: varchar("youtube_id", { length: 11 }).notNull(),
	publishDate: date("publish_date").notNull(),
}, (table) => [
	unique("animation_projects_youtube_id_key").on(table.youtubeId),
	check("id_length", sql`length((youtube_id)::text) = 11`),
]);

export const animationSkills = pgTable("animation_skills", {
	project: integer().notNull(),
	skill: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.project],
			foreignColumns: [motionGraphicsProjects.id],
			name: "animation_skills_project_fkey"
		}),
	foreignKey({
			columns: [table.skill],
			foreignColumns: [skills.id],
			name: "animation_skills_skill_fkey"
		}),
]);
