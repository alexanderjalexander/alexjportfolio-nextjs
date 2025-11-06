import { getDatabase } from "@/src/db";
import {
  programmingProjects,
  programmingSkills,
  skills,
} from "@/src/db/migrations/schema";
import { eq } from "drizzle-orm";
import { getColorCategorizedSkills } from "./skills";

export interface EndpointStatus {
  name: string;
  url: string | null;
  up: boolean;
  uptime_percent: number;
}

export async function getHomelabUptimes(): Promise<EndpointStatus[]> {
  const services = [];

  const base_url = "https://uptime.alexanderjalexander.com/api/v1";

  const statuses_response = await fetch(`${base_url}/endpoints/statuses`, {
    method: "GET",
  });

  if (!statuses_response.ok) {
    throw Error("Could not obtain homelab endpoint statuses.");
  }

  const statuses = await statuses_response.json();
  for (let status of statuses) {
    const uptime_response = await fetch(
      `${base_url}/endpoints/${status.key}/uptimes/7d`,
    );
    if (!uptime_response.ok) {
      throw Error(`Could not obtain homelab uptime status for ${status.key}.`);
    }
    const uptime_text = await uptime_response.text();
    const uptime = Math.floor(Number(uptime_text) * 10000) / 100;
    const ok = status.results[status.results.length - 1].success;

    services.push({
      name: status.name,
      url: status.url,
      up: ok,
      uptime_percent: uptime,
    });
  }

  return services;
}

export async function getProgrammingProjects() {
  return (await getDatabase()).select().from(programmingProjects);
}

export async function getProgrammingSkills() {
  return (await getDatabase())
    .select({
      project: programmingSkills.project,
      skill: skills.skill,
    })
    .from(programmingSkills)
    .innerJoin(skills, eq(skills.id, programmingSkills.skill));
}

export async function getProgrammingProjectsSkills() {
  const programmingSkills = await getProgrammingSkills();
  /** skills =
   * [
   *  { project: id, skill }
   * ...
   * ]
   */
  let projects = await getProgrammingProjects();
  /** projects =
   * [
   *  { id, title, subtitle, description, link }
   * ...
   * ]
   */
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    // @ts-ignore
    // Because adding a new thing to an object isn't fun
    project["skills"] = programmingSkills
      .filter((element) => element.project === project.id)
      .map((element) => element.skill);
  }

  return projects;
}

export async function getProgrammingProjectsSkillsFull() {
  const programmingSkills = await getProgrammingSkills();
  /** skills =
   * [
   *  { project: id, skill }
   * ...
   * ]
   */
  let projects = await getProgrammingProjects();
  /** projects =
   * [
   *  { id, title, subtitle, description, link }
   * ...
   * ]
   */
  const skillsColored = await getColorCategorizedSkills();
  /** skillsColored =
   * [
   *  { color: 'red', skill: 'Git & GitHub' },
   *  ...
   *  { color: 'cyan', skill: 'VEGAS Pro' },
   *  ...
   * ]
   */
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    // @ts-ignore
    // Because adding a new thing to an object isn't fun
    project["skills"] = programmingSkills
      .filter((element) => element.project === project.id)
      .map((element) => element.skill)
      .map((skill) => {
        let color = skillsColored.filter(
          (color_skill) => color_skill.skill === skill,
        )[0].color;
        return { color: color, skill: skill };
      });
  }

  return projects;
}

// Desired Format:
/** Desired Format:
 * [
 *  {   id,
 *      title,
 *      subtitle,
 *      description,
 *      link,
 *      skills:
 *          [
 *
 *          ]}
 * ]
 */
