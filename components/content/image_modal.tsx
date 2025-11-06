"use client";

import { Button } from "@heroui/button";
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

import { useState, ReactNode, useImperativeHandle, forwardRef } from "react";

export interface ImageModalProps {
  url: string;
  alt?: string;
  header?: string;
}

export interface ImageModalHandle {
  openModal: (data: ImageModalProps) => void;
}

const ImageModal = forwardRef<ImageModalHandle>((_, ref) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<ImageModalProps>({
    header: "",
    alt: "",
    url: "",
  });
  const [loaded, setLoaded] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: (data: ImageModalProps) => {
      setImage(data);
      setLoaded(false);
      onOpen();
    }
  }))

  return (
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
                {!loaded ? <Spinner label="Loading" /> : <></>}
                <Image
                  alt={image.alt}
                  src={image.url}
                  onLoad={() => setLoaded(true)}
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
  );
});

ImageModal.displayName = "ImageModal";
export default ImageModal;