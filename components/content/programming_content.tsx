"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
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

export default function ProgrammingContent({}: {}) {
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
    <div>
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
                <ModalBody className="justify-center content-center items-center w-full max-w-full!">
                  {!image.loaded ? <Spinner label="Loading" /> : <></>}
                  <Image
                    alt={image.alt}
                    src={image.url}
                    onLoadedMetadata={() => setImage({ ...image, loaded: true })}
                    onLoad={() => setImage({ ...image, loaded: true })}
                    onLoadedData={() => setImage({ ...image, loaded: true })}
                    isBlurred
                    className="z-0 object-cover w-[230px]"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="solid" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <Card isBlurred className="bg-primary-900 my-8 max-w-2xl m-auto">
        {/* TODO: Add chips for each service & their uptime. */}
          <CardBody className="flex flex-row p-4 gap-4">
            <Card
              isPressable
              onPress={() =>
                openModal("Homelab", "A picture of my homelab laptop.", `/AJPicrew.png`)
              }
              className="w-full h-full m-auto"
            >
              <Image
                isZoomed
                src={`/AJPicrew.png`}
                className="z-0 rounded-xl object-fill"
              />
            </Card>
            <div>
              <p className="mt-0!">
                I also host my own Homelab! I host several services on it (e.g.
                Minecraft Server, Uptime Dashboard, Cloudflare DDNS, Zero Trust
                Tunnel, etc.), some for public use and some for private use.
              </p>
              <p className="mt-0! mb-0!">
                It runs off of an old HP Pavilion 15 from 2017-2018. I use
                Tailscale to connect to it securely, and expose services using
                Traefik, Cloudflare DDNS, and Cloudflare Zero Trust Tunnel. With
                such an architecture, I can effectively load-balance any
                incoming traffic while also keeping my home network secure and
                unaffected.
              </p>
            </div>
          </CardBody>
          <CardFooter>
            <Button
              href={"https://uptime.alexanderjalexander.com/"}
              as={Link}
              target="_blank"
              color="primary"
              showAnchorIcon
              variant="solid"
              className="text-foreground bg-primary-700 right-0 ml-auto sm:w-auto"
            >
              View Uptime
            </Button>
          </CardFooter>
      </Card>
    </div>
  )
}