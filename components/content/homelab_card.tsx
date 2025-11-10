"use client";

import { EndpointStatus } from "@/src/lib/data/programming";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/react";

import ImageModal from "./image_modal";

import { use } from "react";

export default function HomelabCard({
  uptimes,
}: {
  uptimes: Promise<EndpointStatus[]>;
}) {
  const allUptimes = use(uptimes);
  console.log(allUptimes);

  const {modal, openModal} = ImageModal();

  let half_way_index = Math.max(
    1,
    Math.min(5, Math.floor(allUptimes.length / 2)),
  );
  if (allUptimes.length % 2 === 1) {
    half_way_index += 1;
  }
  const uptimes_1 = allUptimes.slice(0, half_way_index);
  const uptimes_2 = allUptimes.slice(half_way_index);

  return (
    <div>
      {modal}
      <Card isBlurred className="bg-primary-900 my-8 max-w-2xl m-auto">
        <CardBody className="p-4">
          <div className="block sm:flex flex-row gap-4">
            <Card
              isPressable
              onPress={() => openModal({
                url: "/Homelab.jpg",
                alt: "An HP Pavilion 15 Laptop, serving as a Homelab server.",
                header: "Homelab",
              })}
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
                <tbody key={i} className="w-1/2 rounded-xl! h-fit overflow-clip">
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
