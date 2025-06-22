import {
  Header1Mono,
  Header2Mono,
  Header3Mono,
  SubheaderMono,
} from "@/components/text/headers";
import TypewriterWrapper from "@/components/text/typewriterwrapper";
import { PageWrapper } from "@/components/page-anim/pagewrapper";
import { FadeInScroll } from "@/components/page-anim/fadeinscroll";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Metadata } from "next";
import * as vid from "@/src/lib/data/videos";

export const metadata: Metadata = {
  title: "Video",
};

export default async function Video() {
  let vids: { url: string; date: string }[];
  let commissions: vid.CommissionsObject;
  try {
    vids = await vid.getPersonalVideos();
    commissions = await vid.getCommissions();
  } catch (e) {
    throw Error("500: " + e);
  }

  const outermost_css =
    "flex flex-wrap justify-center content-center my-2 sm:my-4 gap-4 md:gap-8";
  const vid_link_css = "w-2/5 md:w-fit md:h-fit";
  const card_css = "md:w-fit bg-blue-500 backdrop-blur-sm overflow-visible";
  const image_css = "h-[150px] md:h-fit z-0 object-cover opacity-0";

  return (
    <PageWrapper>
      {/* Intro Header */}
      <div className="h-screen flex items-center">
        <div className="h-min m-auto">
          <Header1Mono className="mb-5">Video Editing</Header1Mono>
          <SubheaderMono>
            <TypewriterWrapper text="All my editing experience, YouTube history, and content creation fascinations" />
          </SubheaderMono>
        </div>
      </div>

      {/* About Section */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono className="mb-5">About</Header2Mono>
        <p>
          Without a doubt, video editing has been one of my most prominent
          hobbies. I enjoy exploring how manipulation of certain video
          clips/shots allows for conveying specific messages, illlustrating
          stories, or implementing certain themes. Having experience with After
          Effects, VEGAS Pro, and Premiere Pro, I enjoy creating my own films
          and montages to create content and portray my best creative vision.
        </p>
        <p>
          While all of the data loaded here comes from this site`&apos;`s
          PostgreSQL backend, all the video data you see is fetched in tandem
          from Google`&apos;`s YouTube API. All views are calculated on the fly
          on every page revalidation, providing accurate statistics for videos,
          views, and channel names.
        </p>
      </FadeInScroll>

      {/* Database Fetched Personal Videos */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono>My YouTube Videos</Header2Mono>
        <div className={outermost_css}>
          {vids.map((item, index) => (
            <a
              key={index}
              target="_blank"
              href={vid.getVideoURL(item.url)}
              rel="noopener noreferrer"
              className={vid_link_css}
            >
              <Card isPressable className={card_css}>
                <Image
                  isZoomed
                  alt={`Video ${index} Link`}
                  src={vid.getVideoThumbnail(item.url)}
                  className={image_css}
                />
              </Card>
            </a>
          ))}
        </div>
      </FadeInScroll>

      {/* Database Fetched Commissions */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono>Commissions</Header2Mono>

        {Object.keys(commissions).map((commissioner, index) => (
          <FadeInScroll className="my-8" key={index}>
            <Header3Mono className="flex flex-col sm:flex-row gap-x-4 gap-y-1 justify-center items-center">
              <Image
                src={commissions[commissioner].pfp}
                alt={`${commissioner} Profile Picture`}
                height={100}
                width={100}
                radius="full"
                className="z-0 sm:w-min"
              />
              <div className="flex flex-wrap flex-row gap-x-4 gap-y-1 justify-center items-center">
                {commissioner}
                <Button
                  color="primary"
                  as={Link}
                  target="_blank"
                  href={`https://www.youtube.com/channel/${commissions[commissioner].id}`}
                  variant="solid"
                  showAnchorIcon
                  className="text-foreground bg-primary-700 sm:w-auto"
                >
                  Visit
                </Button>
              </div>
            </Header3Mono>
            <SubheaderMono>
              Total Views:{" "}
              {new Intl.NumberFormat().format(commissions[commissioner].views)}
            </SubheaderMono>
            <div className={outermost_css}>
              {commissions[commissioner].videos.map((video, innerIndex) => (
                <a
                  key={innerIndex}
                  target="_blank"
                  href={vid.getVideoURL(video.url)}
                  rel="noopener noreferrer"
                  className={vid_link_css}
                >
                  <Card isPressable className={card_css}>
                    <Image
                      isZoomed
                      alt={`${commissioner} Video ${index}`}
                      src={vid.getVideoThumbnail(video.url)}
                      className={image_css}
                    />
                  </Card>
                </a>
              ))}
            </div>
          </FadeInScroll>
        ))}
      </FadeInScroll>
    </PageWrapper>
  );
}
