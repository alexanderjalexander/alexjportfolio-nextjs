import { EndpointStatus } from "../types/programming";
import { ProgrammingProject, ProgrammingProjectDto } from "@/src/lib/types/programming";
import { getProgrammingProjects, getProgrammingProjectSkills } from "@/src/lib/repos/programming.repo";
import { getColorCategorizedSkills } from "@/src/lib/services/skills.service";

export async function getHomelabUptimes(): Promise<EndpointStatus[]> {
  const services = [];

  const statuses_response = await fetch(`${process.env["UPTIME_API_URL"]!}/endpoints/statuses`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    }
  });

  if (!statuses_response.ok) {
    console.error(`Uptime API URL: ${process.env["UPTIME_API_URL"]!}/endpoints/statuses`);
    console.error(statuses_response.status);
    throw Error("Could not obtain homelab endpoint statuses.");
  }

  const statuses = await statuses_response.json();
  for (let status of statuses) {
    const uptime_response = await fetch(
      `${process.env["UPTIME_API_URL"]!}/endpoints/${status.key}/uptimes/7d`,
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

export async function getProgrammingProjectsWithSkills(): Promise<ProgrammingProject[]> {
  const programmingSkills = await getProgrammingProjectSkills();

  let projects = await getProgrammingProjects();

  return projects.map(project => ({
    ...project,
    skills: programmingSkills
      .filter(el => el.project = project.id)
      .map(el => el.skill)
  }));
}

export async function getProgrammingProjectsWithColoredSkills(): Promise<ProgrammingProjectDto[]> {
  const programmingSkills = await getProgrammingProjectSkills();

  let projects = await getProgrammingProjects();

  const skillsColored = await getColorCategorizedSkills();

  return projects.map(project => ({
    ...project,
    skills: programmingSkills
      .filter((element) => element.project === project.id)
      .map((element) => element.skill)
      .map((skill) => {
        let color = skillsColored.filter(
          (color_skill) => color_skill.skill === skill,
        )[0].color;
        return { color: color, skill: skill };
      })
  }));
}
