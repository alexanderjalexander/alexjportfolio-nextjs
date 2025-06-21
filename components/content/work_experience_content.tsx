import { CircularProgress } from "@heroui/progress";
import { Divider } from "@heroui/divider";
import { Header3Mono, SubheaderMono } from "@/components/text/headers";
import { getWorkExperienceJobsSkillsFull } from "@/src/lib/data/work_experience";
import { Chip } from "@heroui/chip";

export default async function WorkExperienceContent() {
  const workExperience = await getWorkExperienceJobsSkillsFull();

  return (
    <div className="m-auto xs:w-3/4 pr-8">
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
          end_date = new Date(job.jobEndDate).toLocaleDateString(
            "en-us", {
              weekday: undefined,
              day: undefined,
              month: "short",
              year: "numeric",
            }
          );
        }
        return (
          <div key={idx} className={"grid grid-cols-8 pb-4"}>
            <div className="col-1 basis-8 mr-4 mt-1 ml-auto">
              <CircularProgress
                value={100}
                strokeWidth={4}
                size={"sm"}
                disableAnimation={true}
                classNames={{ indicator: "stroke-primary-100" }}
              />
              <div className="ml-4 mt-3 h-full pb-8">
                <Divider
                  className="border-solid border-primary-100 border"
                  orientation="vertical"
                />
              </div>
            </div>
            <div className={"col-span-7 xs:col-span-6 pb-2"}>
              <div className={"block sm:flex flex-row justify-between items-center"}>
                <Header3Mono align={"left"} className={"w-max! max-w-fit"}>
                  {job.jobTitle}
                </Header3Mono>
                <div className={"sm:flex sm:text-right"}>
                  <>{start_date}</>
                  <>{" - "}</>
                  <>{end_date}</>
                </div>
              </div>
              <div className={"block sm:hidden"}>
                <div>{job.jobLocation}</div>
                <SubheaderMono align={"left"} className={"w-max! max-w-[50%]"}>
                  {job.jobCompany}
                </SubheaderMono>
              </div>
              <div className={"hidden sm:flex flex-row justify-between items-start"}>
                <SubheaderMono align={"left"} className={"w-max! max-w-[50%]"}>
                  {job.jobCompany}
                </SubheaderMono>
                <div>{job.jobLocation}</div>
              </div>
              <ul>
                {job.responsibilities
                  .split("\\n")
                  .map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
              </ul>
              <div>
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
