"use client";

import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import { useDisclosure } from "@heroui/use-disclosure";

import { useState } from "react";
import { Header2Mono } from "../text/headers";
import { FadeInScroll } from "../page-anim/fadeinscroll";

export default function GraphicDesignContent({
  artworks,
}: {
  artworks: (string | undefined)[];
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState({
    header: "",
    alt: "",
    url: "",
    loaded: false,
  });

  const openModal = (header: string, alt: string, url: string) => {
    setImage({ loaded: false, header: header, alt: alt, url: url });
    onOpen();
  };

  return (
    <>
      <div className="overflow-auto">
        <Modal
          isOpen={isOpen}
          className="bg-background"
          backdrop="blur"
          size="2xl"
          onOpenChange={onOpenChange}
          placement="top"
        >
          <ModalContent className="w-3/4">
            {(onClose) => (
              <>
                <ModalHeader>{image.header}</ModalHeader>
                <ModalBody className="justify-center content-center items-center">
                  {!image.loaded ? <Spinner label="Loading" /> : <></>}
                  <Image
                    alt={image.alt}
                    src={image.url}
                    loading="eager"
                    onLoad={() => setImage({ ...image, loaded: true })}
                    isBlurred
                    className="z-0 w-full h-full object-cover"
                  />
                </ModalBody>
                <ModalFooter>
                  <a target="_blank" href={image.url}>
                    <Button color="primary" variant="solid">
                      Open Full Image
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
        <Header2Mono className="mb-5">My Work</Header2Mono>
        <div className="columns-2 sm:columns-3 md:columns-4 my-2 sm:my-4 gap-4 sm:gap-8">
          {artworks !== undefined ? (
            artworks.map((artwork) => (
              <Card
                key={artwork}
                isPressable
                onPress={() =>
                  openModal(artwork!, artwork!, `api/graphic_design/${artwork}`)
                }
                className="w-full h-full mb-4 sm:gap-8"
              >
                <Image
                  isZoomed
                  alt={`${artwork}`}
                  src={`/api/graphic_design/resize/${artwork}`}
                  className="z-0 object-fill"
                />
              </Card>
            ))
          ) : (
            <></>
          )}
        </div>
      </FadeInScroll>
    </>
  );
}
