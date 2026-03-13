import { getProgrammingProjectsSkillsFull } from "@/src/lib/data/programming";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/react";

export default async function ProgrammingContent() {
  const programmingProjects = await getProgrammingProjectsSkillsFull();

  return (
    <div className="m-auto xs:w-3/4 grid grid-cols-2 gap-4">
      {programmingProjects.map((project, idx) => {
        return (
          <div
            key={idx}
          >
            <div className="rounded-lg dark:bg-primary-900 bg-secondary-50 shadow-medium h-full p-4">
              {/* First bit is the title, image, location, whatever*/}
              <div className="flex flex-row flex-nowrap items-center pb-2">
                <div className="w-full">
                  <div className="w-full flex flex-row">
                    <div className="font-bold">{project.title}</div>
                  </div>
                  <div className="font-light">{project.subtitle}</div>
                </div>
              </div>
              <Divider />
              {/* Next bit is the responsibilities */}
              <div className="m-2">
                {project.description}
              </div>
              {/* Lastly, all the chips */}
              <div className="mt-2">
                {project.skills?.map((skill, index) => (
                  <Chip key={index} className={`m-1 ${skill.color}`}>
                    {skill.skill}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
