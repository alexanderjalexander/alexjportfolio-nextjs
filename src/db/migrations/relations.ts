import { relations } from "drizzle-orm/relations";
import { programmingProjects, programmingSkills, skills, categories, skillCategory, workExperienceJobs, workExperienceSkills, creators, videos, motionGraphicsProjects, motionGraphicsSkills, animationSkills } from "./schema";

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

export const skillsRelations = relations(skills, ({many}) => ({
	programmingSkills: many(programmingSkills),
	skillCategories: many(skillCategory),
	workExperienceSkills: many(workExperienceSkills),
	motionGraphicsSkills: many(motionGraphicsSkills),
	animationSkills: many(animationSkills),
}));

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

export const videosRelations = relations(videos, ({one}) => ({
	creator: one(creators, {
		fields: [videos.commissionFor],
		references: [creators.id]
	}),
}));

export const creatorsRelations = relations(creators, ({many}) => ({
	videos: many(videos),
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

export const motionGraphicsProjectsRelations = relations(motionGraphicsProjects, ({many}) => ({
	motionGraphicsSkills: many(motionGraphicsSkills),
	animationSkills: many(animationSkills),
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