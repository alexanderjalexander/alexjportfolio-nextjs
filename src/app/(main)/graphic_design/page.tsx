import { Metadata } from "next";
import { listGraphicDesignResizedObjects } from "@/src/lib/repos/graphic-design.repo";

export const metadata: Metadata = {
  title: "Graphic Design",
};

export default async function Graphic_Design() {
  let objects = (await listGraphicDesignResizedObjects())!.map((obj) => obj.Key);

  return (
    <div></div>
  );
}
