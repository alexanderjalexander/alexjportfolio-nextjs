import { getWorkExperienceJobsSkillsFull } from "@/src/lib/data/work_experience";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/react";

export default async function WorkExperienceContent() {
  const workExperience = await getWorkExperienceJobsSkillsFull();

  const MAX_IMG_WIDTH = 50;

  return (
    <div className="m-auto xs:w-3/4 grid grid-cols-2 gap-4">
      {workExperience.map((job, idx) => {
        let start_date = new Date(job.jobStartDate).toLocaleDateString(
          "en-us",
          {
            weekday: undefined,
            day: undefined,
            month: "short",
            year: "numeric",
          },
        );
        let end_date;
        if (job.jobEndDate === null) {
          end_date = "Present";
        } else {
          end_date = new Date(job.jobEndDate).toLocaleDateString("en-us", {
            weekday: undefined,
            day: undefined,
            month: "short",
            year: "numeric",
          });
        }
        return (
          <div
            key={idx}
            className={
              idx === 0
                ? `col-span-2 w-full`
                : `col-span-2 lg:col-span-1 w-full`
            }
          >
            <div className="rounded-lg dark:bg-primary-900 bg-secondary-50 h-full shadow-medium p-4 flex flex-col">
              {/* First bit is the title, image, location, whatever*/}
              <div className="flex flex-row flex-nowrap items-center pb-2">
                {job.companyPictureKey !== undefined &&
                  job.companyPictureKey !== null && (
                    <Image
                      src={`/api/work/img/${job.companyPictureKey}`}
                      removeWrapper={true}
                      loading="eager"
                      alt={`Company Picture for ${job.jobCompany}`}
                      className="w-[50px] brightness-0 m-2 dark:brightness-100 object-contain"
                      width={MAX_IMG_WIDTH}
                      height={MAX_IMG_WIDTH}
                    />
                  )}
                <div className="w-full">
                  <div className="w-full flex flex-row">
                    <div className="font-bold">{job.jobTitle}</div>
                    <div className="italic hidden sm:block ml-auto">
                      {start_date} - {end_date}
                    </div>
                  </div>
                  <div className="font-bold italic">{job.jobCompany}</div>
                  <div className="font-light">{job.jobLocation}</div>
                  <div className="italic sm:hidden">
                    {start_date} - {end_date}
                  </div>
                </div>
              </div>
              <Divider />
              {/* Next bit is the responsibilities */}
              <div className="m-2">
                <ul>
                  {job.responsibilities
                    .split("\\n")
                    .map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                </ul>
              </div>
              {/* Lastly, all the chips */}
              <div className="flex flex-row items-end flex-wrap mt-auto">
                {job.skills?.map((skill, index) => (
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
