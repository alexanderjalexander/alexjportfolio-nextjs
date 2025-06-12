"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";

import { Header2Mono } from "@/components/text/headers";
import { FadeInScroll } from "@/components/page-anim/fadeinscroll";
import { useState } from "react";
import { getVideoThumbnail, getVideoURL } from "@/src/lib/data/videos";

import LiteYouTubeEmbed from "react-lite-youtube-embed";

export interface project_interface {
  id: number;
  name: string;
  description: string;
  youtube_id: string;
  publish_date: string;
  skills: { color: string; skill: string }[];
}

export default function VideoCardContent({
  content,
  header,
}: {
  content: project_interface[];
  header: string;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [video, setVideo] = useState({
    header: "",
    id: "",
    loaded: false,
  });

  const openModal = (header: string, id: string) => {
    setVideo({ loaded: false, header: header, id: id });
    onOpen();
  };

  const player = (
    <div className={"rounded-xl"}>
      <LiteYouTubeEmbed
        id={video.id}
        playlist={false}
        params="autoplay"
        title={video.header}
        noCookie={true}
      />
    </div>
  );

  return (
    <div>
      <div className="overflow-auto">
        <Modal
          isOpen={isOpen}
          className="bg-background w-full"
          backdrop="blur"
          size="5xl"
          onOpenChange={onOpenChange}
          placement="center"
        >
          <ModalContent className="">
            {(onClose) => (
              <>
                <ModalHeader>{video.header}</ModalHeader>
                <ModalBody className="justify-center content-center rounded-xl px-2 md:px-6">
                  {player}
                </ModalBody>
                <ModalFooter>
                  <a target="_blank" href={getVideoURL(video.id)}>
                    <Button color="primary" variant="solid">
                      Open Video In New Tab
                    </Button>
                  </a>
                  <Button color="danger" variant="solid" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono>{header}</Header2Mono>
        <div className="flex flex-wrap justify-around content-center my-2 sm:my-4 gap-4 sm:gap-8">
          {content.map((project) => (
            <Card
              key={project.id}
              isBlurred
              className="basis-full md:basis-2/5 bg-primary-900 p-1 my-4"
            >
              <CardHeader className="justify-between items-baseline">
                <div className="text-lg lg:text-lg font-bold">
                  {project.name}
                </div>
                <div className="text-sm lg:text-sm opacity-70 italic">
                  {project.publish_date}
                </div>
              </CardHeader>
              <CardBody className="w-full">
                <div className="pb-3">
                  <Card
                    isPressable
                    onPress={() => openModal(project.name, project.youtube_id)}
                    className="mw-full w-full"
                  >
                    <Image
                      removeWrapper
                      isZoomed
                      className="z-0 w-full object-cover"
                      alt={`${project.name} Link`}
                      src={getVideoThumbnail(project.youtube_id)}
                    />
                  </Card>
                </div>
                <div>{project.description}</div>
              </CardBody>
              <CardFooter className="flex-wrap">
                {project.skills.map((skill, index) => (
                  <Chip key={index} className={`m-1 ${skill.color}`}>
                    {skill.skill}
                  </Chip>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </FadeInScroll>
    </div>
  );
}
