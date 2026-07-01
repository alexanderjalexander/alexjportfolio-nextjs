import { Metadata } from "next";

import { getPersonalVideoRows } from "@/src/lib/repos/videos.repo";
import { getCommissionsForCreators } from "@/src/lib/services/video.service";
import { getVideoURL, getVideoThumbnail } from "@/src/lib/utils/video.utils";
import { CommissionsForCreatorsDto } from "@/src/lib/types/videos";

export const metadata: Metadata = {
  title: "Video",
};

export default async function Video() {
  let vids: { url: string; date: string }[];
  let commissions: CommissionsForCreatorsDto;
  try {
    vids = await getPersonalVideoRows();
    commissions = await getCommissionsForCreators();
  } catch (e) {
    throw Error("500: " + e);
  }

  return (
    <div></div>
  );
}
