import { relations } from "drizzle-orm/relations";
import { categories, skillCategory, skills, motionGraphicsProjects, animationSkills, motionGraphicsSkills, programmingProjects, programmingSkills, creators, videos, workExperienceJobs, workExperienceSkills } from "./schema";

export const skillCategoryRelations = relations(skillCategory, ({one}) => ({
	category: one(categories, {
		fields: [skillCategory.category],
		references: [categories.id]
	}),
	skill: one(skills, {
		fields: [skillCategory.skill],
		references: [skills.id]
	}),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	skillCategories: many(skillCategory),
}));

export const skillsRelations = relations(skills, ({many}) => ({
	skillCategories: many(skillCategory),
	animationSkills: many(animationSkills),
	motionGraphicsSkills: many(motionGraphicsSkills),
	programmingSkills: many(programmingSkills),
	workExperienceSkills: many(workExperienceSkills),
}));

export const animationSkillsRelations = relations(animationSkills, ({one}) => ({
	motionGraphicsProject: one(motionGraphicsProjects, {
		fields: [animationSkills.project],
		references: [motionGraphicsProjects.id]
	}),
	skill: one(skills, {
		fields: [animationSkills.skill],
		references: [skills.id]
	}),
}));

export const motionGraphicsProjectsRelations = relations(motionGraphicsProjects, ({many}) => ({
	animationSkills: many(animationSkills),
	motionGraphicsSkills: many(motionGraphicsSkills),
}));

export const motionGraphicsSkillsRelations = relations(motionGraphicsSkills, ({one}) => ({
	motionGraphicsProject: one(motionGraphicsProjects, {
		fields: [motionGraphicsSkills.project],
		references: [motionGraphicsProjects.id]
	}),
	skill: one(skills, {
		fields: [motionGraphicsSkills.skill],
		references: [skills.id]
	}),
}));

export const programmingSkillsRelations = relations(programmingSkills, ({one}) => ({
	programmingProject: one(programmingProjects, {
		fields: [programmingSkills.project],
		references: [programmingProjects.id]
	}),
	skill: one(skills, {
		fields: [programmingSkills.skill],
		references: [skills.id]
	}),
}));

export const programmingProjectsRelations = relations(programmingProjects, ({many}) => ({
	programmingSkills: many(programmingSkills),
}));

export const videosRelations = relations(videos, ({one}) => ({
	creator: one(creators, {
		fields: [videos.commissionFor],
		references: [creators.id]
	}),
}));

export const creatorsRelations = relations(creators, ({many}) => ({
	videos: many(videos),
}));

export const workExperienceSkillsRelations = relations(workExperienceSkills, ({one}) => ({
	workExperienceJob: one(workExperienceJobs, {
		fields: [workExperienceSkills.job],
		references: [workExperienceJobs.id]
	}),
	skill: one(skills, {
		fields: [workExperienceSkills.skill],
		references: [skills.id]
	}),
}));

export const workExperienceJobsRelations = relations(workExperienceJobs, ({many}) => ({
	workExperienceSkills: many(workExperienceSkills),
}));