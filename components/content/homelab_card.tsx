"use client";

import { EndpointStatus } from "@/src/lib/data/programming";
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
import { Chip } from "@heroui/react";
import { Spinner } from "@heroui/spinner";
import { useDisclosure } from "@heroui/use-disclosure";

import { useState } from "react";

export default function HomelabCard({
  uptimes,
}: {
  uptimes: EndpointStatus[];
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

  // uptimes.push(...uptimes);

  const half_way_index = Math.max(
    1,
    Math.min(5, Math.floor(uptimes.length / 2)),
  );
  console.log(half_way_index);
  const uptimes_1 = uptimes.slice(0, half_way_index);
  const uptimes_2 = uptimes.slice(half_way_index, half_way_index * 2);

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
          <ModalContent className="w-1/2">
            {(onClose) => (
              <>
                <ModalHeader>{image.header}</ModalHeader>
                <ModalBody className="justify-center content-center items-center w-full max-w-full!">
                  {!image.loaded ? <Spinner label="Loading" /> : <></>}
                  <Image
                    alt={image.alt}
                    src={image.url}
                    onLoad={() => setImage({ ...image, loaded: true })}
                    isBlurred
                    className="z-0 object-cover"
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
        <CardBody className="p-4">
          <div className="block sm:flex flex-row gap-4">
            <Card
              isPressable
              onPress={() =>
                openModal(
                  "Homelab",
                  "An HP Pavilion Laptop 15 that serves as a homelab",
                  `/Homelab.jpg`,
                )
              }
              className="w-full h-full mb-4 sm:gap-8 mx-auto max-w-[300px]"
            >
              <Image
                isZoomed
                src={`/Homelab.jpg`}
                className="z-0 rounded-xl object-fill"
                removeWrapper={true}
              />
            </Card>
            <div className="sm:w-3/4">
              <p className="mt-0!">
                I also host my own Homelab! I host several services on it, some
                for public use and some for private use.
              </p>
              <p className="mt-0! mb-0!">
                It&apos;s an old HP Pavilion 15 from 2017-2018. I connect to it
                With Tailscale, and expose services using Traefik and Cloudflare
                Zero Trust Tunnel. With such an architecture, I can load-balance
                all incoming traffic while also keeping my home network secure.
              </p>
            </div>
          </div>
          <div className="pt-4">
            <table className="w-full flex flex-row gap-2">
              {[uptimes_1, uptimes_2].map((uptime_slice, i) => (
                <tbody key={i} className="w-1/2 rounded-xl! overflow-clip">
                  {uptime_slice.map((uptime, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 === 0 && "bg-[#FFFFFF10]"}`}
                    >
                      <td className="pl-2 w-full mr-auto">{uptime.name}</td>
                      <td className="py-1 px-2">
                        <Chip
                          size="sm"
                          color={uptime.up ? "success" : "danger"}
                        >
                          {uptime.uptime_percent}%
                        </Chip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
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
  );
}
