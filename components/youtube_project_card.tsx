import { Card, CardHeader, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import * as vid from "@/src/lib/data/videos";

interface project_interface {
    id: number,
    name: string,
    description: string,
    youtube_id: string,
    publish_date: string,
    skills: { color: string, skill: string }[]
}

export function makeCard(project:project_interface) {
    return (
        <Card key={project.id} isBlurred className="basis-full md:basis-2/5 bg-primary-900 p-1 my-4">
            <CardHeader className="justify-between items-baseline">
                <div className="text-lg lg:text-lg font-bold">{project.name}</div>
                <div className="text-sm lg:text-sm opacity-70 italic">{project.publish_date}</div>
            </CardHeader>
            <CardBody className="w-full">
                <div className="pb-3">
                    <a target="blank" href={vid.getVideoURL(project.youtube_id)}
                    rel="noopener noreferrer" className="mw-full">
                        <Card isPressable className="mw-full w-full">
                            <Image	removeWrapper
                                isZoomed
                                className="z-0 w-full object-cover"
                                alt={`${project.name} Link`}
                                src={vid.getVideoThumbnail(project.youtube_id)}
                            />
                        </Card>
                    </a>
                </div>
                <div>{project.description}</div>
            </CardBody>
            <CardFooter className="flex-wrap">
                {project.skills.map(
                    (skill, index) => 
                    (<Chip key={index} className={`m-1 ${skill.color}`}>{skill.skill}</Chip>)
                )}
            </CardFooter>
        </Card>
    )
}


export function makeCards(arr?:project_interface[]) {
    if (arr !== undefined) {
        return arr.map(
            (project) => 
            (<Card key={project.id} isBlurred className="basis-full md:basis-2/5 bg-primary-900 p-1 my-4">
                <CardHeader className="justify-between items-baseline">
                    <div className="text-lg lg:text-lg font-bold">{project.name}</div>
                    <div className="text-sm lg:text-sm opacity-70 italic">{project.publish_date}</div>
                </CardHeader>
                <CardBody className="w-full">
                    <div className="pb-3">
                        <a target="blank" href={vid.getVideoURL(project.youtube_id)}
                        rel="noopener noreferrer" className="mw-full">
                            <Card isPressable className="mw-full w-full">
                                <Image	removeWrapper
                                    isZoomed
                                    className="z-0 w-full object-cover"
                                    alt={`${project.name} Link`}
                                    src={vid.getVideoThumbnail(project.youtube_id)}
                                />
                            </Card>
                        </a>
                    </div>
                    <div>{project.description}</div>
                </CardBody>
                <CardFooter className="flex-wrap">
                    {project.skills.map(
                        (skill, index) => 
                        (<Chip key={index} className={`m-1 ${skill.color}`}>{skill.skill}</Chip>)
                    )}
                </CardFooter>
            </Card>)
        )
    } else {
        return [];
    }
}