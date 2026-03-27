import { getProgrammingProjectsSkillsFull } from "@/src/lib/data/programming";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/react";
import Link from "next/link";

import * as constants from "@/components/constants";

export default async function ProgrammingContent() {
  const programmingProjects = (await getProgrammingProjectsSkillsFull()).reverse();

  return (
    <div className="m-auto xs:w-3/4 grid grid-cols-2 gap-4">
      {programmingProjects.map((project, idx) => {
        return (
          <div
            key={idx}
            className="col-span-2 lg:col-span-1"
          >
            <div className="rounded-lg dark:bg-primary-900 bg-secondary-50 shadow-medium h-full p-4 flex flex-col">
              {/* First bit is the title, image, location, whatever*/}
              <div className="flex flex-row flex-nowrap items-center pb-2">
                <div className="w-full">
                  <div className="w-full flex flex-row">
                    <div className="font-bold text-xl">{project.title}</div>
                  </div>
                  <div className="font-light">{project.subtitle}</div>
                </div>
              </div>
              <Divider />
              {/* Next bit is the responsibilities */}
              <div className="py-4">
                {project.description}
              </div>
              <div className="flex flex-row items-end mt-auto">
                {/* Then the chips */}
                <div className="flex-1 flex flex-wrap">
                  {project.skills?.map((skill, index) => (
                    <Chip key={index} className={`m-1 ${skill.color}`}>
                      {skill.skill}
                    </Chip>
                  ))}
                </div>
                {/* Then the repo links */}
                <div className="flex-shrink-0 ml-2 mb-3">
                  {project.repoLink &&
                    <Link
                      target="_blank"
                      href={project.repoLink}
                      className={`${constants.BUTTON_CLASSNAME} transition rounded-xl m-1 p-3`}
                    >
                      Visit Repo
                    </Link>
                  }
                  {project.liveLink &&
                    <Link
                      target="_blank"
                      href={project.liveLink}
                      className={`${constants.BUTTON_CLASSNAME} transition rounded-xl m-1 p-3`}
                    >
                      Visit Site
                    </Link>
                  }
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
