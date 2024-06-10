"use client"

import { Button, Card, Divider, Image, Modal, ModalHeader, ModalContent, ModalFooter, ModalBody, Skeleton, useDisclosure } from "@nextui-org/react"
import { useState } from "react";
import { Header2Mono, Header3Mono } from "./headers";
import { FadeInScroll } from "./fadeinscroll";

export default function GraphicDesignContent({videos}:{videos:(string|undefined)[]}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [image, setImage] = useState({
        header: '', alt: '', url: ''
    });

    const openModal = (header:string, alt:string, url:string) => {
        setImage({header:header, alt:alt, url:url})
        onOpen();
    }

    return (<>
        <div className="overflow-auto">
            <Modal isOpen={isOpen} 
                    backdrop="blur" 
                    size="2xl"
                    onOpenChange={onOpenChange}
                    placement="top">
                    <ModalContent className="w-3/4">
                {(onClose) => (<>
                    <ModalHeader>{image.header}</ModalHeader>
                    <ModalBody className="justify-center content-center">
                        <Image 
                            alt={image.alt}
                            src={image.url}
                            loading="eager"
                            isBlurred
                            className="z-0 w-full h-full object-cover"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </>)}
            </ModalContent></Modal>
        </div>
        <FadeInScroll>
            <Divider className="my-10" />
            <Header2Mono className="mb-5">My Work</Header2Mono>
            <div className="columns-2 sm:columns-3 my-2 sm:my-4 gap-4 sm:gap-8">
                {(videos !== undefined) 
                ? (videos.map((video) => (
                    <Card key={video} isPressable onClick={() => openModal(video!, video!, `api/graphic_design/${video}`)} 
                      className="w-full h-fit mb-4 sm:gap-8">
                        <Image 
                            isZoomed
                            alt={`${video}`}
                            src={`/api/graphic_design/resize/${video}`}
                            className="z-0 w-full h-full object-cover"
                            height={160}
                        />
                    </Card>
                ))) 
                : (<></>)}
            </div>
        </FadeInScroll>
    </>)
}