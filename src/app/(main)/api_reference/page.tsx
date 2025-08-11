/* eslint-disable react/no-unescaped-entities */

import {
  Header1Mono,
  SubheaderMono,
  Header2Mono,
  Header3Mono,
} from "@/components/text/headers";
import { PageWrapper } from "@/components/page-anim/pagewrapper";
import TypewriterWrapper from "@/components/text/typewriterwrapper";
import { FadeInScroll } from "@/components/page-anim/fadeinscroll";
import { Card, CardBody } from "@heroui/card";
import { Code } from "@heroui/code";
import { Divider } from "@heroui/divider";
import { Metadata } from "next";

import { fontMono } from "@/config/fonts";

export const metadata: Metadata = {
  title: "API Reference",
};

export default async function API_Reference() {
  return (
    <PageWrapper>
      {/* Intro Header */}
      <div className="h-screen flex items-center">
        <div className="h-min m-auto">
          <Header1Mono className="mb-5">API Reference</Header1Mono>
          <SubheaderMono>
            <TypewriterWrapper text="For any programmers out there who want to do some funky things with this site!" />
          </SubheaderMono>
        </div>
      </div>

      {/* About Section */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono className="mb-5">About</Header2Mono>
        <p>
          Yes, you heard that right, this website has an official API! Is it
          overkill? Absolutely. Still cool? Absolutely.
        </p>
      </FadeInScroll>

      {/* API Reference Section.*/}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header3Mono className="mb-5" align="left">
          /api/programming
        </Header3Mono>

        <Header3Mono className="mb-5" align="left">
          GET /
        </Header3Mono>
        <p>Obtains list of all my current programming projects.</p>
        <Card>
          <CardBody className={"bg-primary-900 font-mono " + fontMono.variable}>
            <pre>[</pre>
            <pre>&emsp;&#123;</pre>
            <pre>&emsp;&emsp;"id": 4,</pre>
            <pre>&emsp;&emsp;"title": "...",</pre>
            <pre>&emsp;&emsp;"subtitle": "...",</pre>
            <pre>&emsp;&emsp;"description": "...",</pre>
            <pre>&emsp;&emsp;"link": "...",</pre>
            <pre>&emsp;&emsp;"skills": [ "...", ... ]</pre>
            <pre>&emsp;&#125;,</pre>
            <pre>...</pre>
            <pre>]</pre>
          </CardBody>
        </Card>
        <p></p>
      </FadeInScroll>
      <FadeInScroll>
        <Divider className="my-10" />
        <Header3Mono className="mb-5" align="left">
          /api/video
        </Header3Mono>

        <Header3Mono className="mb-5" align="left">
          GET /
        </Header3Mono>
        <p>Obtains list of self-made videos. </p>
        <Card>
          <CardBody className={"bg-primary-900 font-mono " + fontMono.variable}>
            <pre>[</pre>
            <pre>&emsp;&#123;</pre>
            <pre>&emsp;&emsp;"url": 11-char youtube id,</pre>
            <pre>&emsp;&emsp;"date": "...",</pre>
            <pre>&emsp;&#125;,</pre>
            <pre>...</pre>
            <pre>]</pre>
          </CardBody>
        </Card>
        <p></p>

        <Header3Mono className="mb-5" align="left">
          GET /commissions
        </Header3Mono>
        <p>
          Obtains list of commissions. All commissions done for a creator can be
          obtained through the key denoted by that creator's name.
        </p>
        <Card>
          <CardBody className={"bg-primary-900 font-mono " + fontMono.variable}>
            <pre>&#123;</pre>

            <pre>&emsp;"Creator1": ,</pre>
            <pre>&emsp;&emsp;"views": number,</pre>
            <pre>
              &emsp;&emsp;"pfp": a URL containing a 240x240 profile picture,
            </pre>
            <pre>&emsp;&emsp;"id": some string id,</pre>
            <pre>&emsp;&emsp;"videos": [,</pre>
            <pre>&emsp;&emsp;&emsp;&#123;</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"url": 11-char youtube id,</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"date": "...",</pre>
            <pre>&emsp;&emsp;&emsp;&#125;</pre>
            <pre>&emsp;&emsp;&emsp;...</pre>
            <pre>&emsp;&emsp;],</pre>

            <pre>&emsp;"Creator2": ,</pre>
            <pre>&emsp;&emsp;"views": number,</pre>
            <pre>
              &emsp;&emsp;"pfp": a URL containing a 240x240 profile picture,
            </pre>
            <pre>&emsp;&emsp;"id": some string id,</pre>
            <pre>&emsp;&emsp;"videos": [,</pre>
            <pre>&emsp;&emsp;&emsp;&#123;</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"url": 11-char youtube id,</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"date": "...",</pre>
            <pre>&emsp;&emsp;&emsp;&#125;</pre>
            <pre>&emsp;&emsp;&emsp;...</pre>
            <pre>&emsp;&emsp;],</pre>

            <pre>&#125;</pre>
          </CardBody>
        </Card>
        <p></p>
      </FadeInScroll>
      <FadeInScroll>
        <Divider className="my-10" />
        <Header3Mono className="mb-5" align="left">
          /api/motion
        </Header3Mono>

        <Header3Mono className="mb-5" align="left">
          GET /
        </Header3Mono>
        <p>
          Obtains list of motion graphics projects, ordered by date descending.
        </p>
        <Card>
          <CardBody className={"bg-primary-900 font-mono " + fontMono.variable}>
            <pre>[</pre>
            <pre>&emsp;&#123;</pre>
            <pre>&emsp;&emsp;"id": 4,</pre>
            <pre>&emsp;&emsp;"name": "...",</pre>
            <pre>&emsp;&emsp;"description": "...",</pre>
            <pre>&emsp;&emsp;"youtube_id": 11-char youtube id,</pre>
            <pre>&emsp;&emsp;"publish_date": "YYYY-MM-DD",</pre>
            <pre>&emsp;&emsp;"skills": [ "...", ... ]</pre>
            <pre>&emsp;&#125;,</pre>
            <pre>...</pre>
            <pre>]</pre>
          </CardBody>
        </Card>
        <p></p>
      </FadeInScroll>
      <FadeInScroll>
        <Divider className="my-10" />
        <Header3Mono className="mb-5" align="left">
          /api/animation
        </Header3Mono>

        <Header3Mono className="mb-5" align="left">
          GET /
        </Header3Mono>
        <p>
          Obtains list of 3D animation projects, ordered by date descending.
        </p>
        <Card>
          <CardBody className={"bg-primary-900 font-mono " + fontMono.variable}>
            <pre>[</pre>
            <pre>&emsp;&#123;</pre>
            <pre>&emsp;&emsp;"id": 4,</pre>
            <pre>&emsp;&emsp;"name": "...",</pre>
            <pre>&emsp;&emsp;"description": "...",</pre>
            <pre>&emsp;&emsp;"youtube_id": 11-char youtube id,</pre>
            <pre>&emsp;&emsp;"publish_date": "YYYY-MM-DD",</pre>
            <pre>&emsp;&emsp;"skills": [ "...", ... ]</pre>
            <pre>&emsp;&#125;,</pre>
            <pre>...</pre>
            <pre>]</pre>
          </CardBody>
        </Card>
        <p></p>
      </FadeInScroll>
      <FadeInScroll>
        <Divider className="my-10" />
        <Header3Mono className="mb-5" align="left">
          /api/graphic_design
        </Header3Mono>

        <Header3Mono className="mb-5" align="left">
          GET /
        </Header3Mono>
        <p>
          Fetches all possible keys provided in the image bucket for the graphic
          design page. Each key can be used to fetch that specific image.
        </p>
        <Card>
          <CardBody className={"bg-primary-900 font-mono " + fontMono.variable}>
            <pre>[</pre>
            <pre>&emsp;&#123;</pre>
            <pre>&emsp;&emsp;"Key": "Posters/Some poster here.jpg",</pre>
            <pre>&emsp;&emsp;"Size": 85592</pre>
            <pre>&emsp;&#125;,</pre>
            <pre>...</pre>
            <pre>]</pre>
          </CardBody>
        </Card>
        <p></p>

        <Header3Mono className="mb-5" align="left">
          GET /[...id]
        </Header3Mono>
        <p>Returns a full-quality image provided from the key given.</p>
        <p>404s if the key leads to no image.</p>

        <Header3Mono className="mb-5" align="left">
          GET /resize/[...id]
        </Header3Mono>
        <p>
          Returns a low-quality image provided from the key given. Useful for
          keeping the graphic design page optimized when displaying every image.
        </p>
        <p>404s if the key leads to no image.</p>

        <Header3Mono className="mb-5" align="left">
          GET /sync
        </Header3Mono>

        <p>
          Requires an alphanumeric bearer token to be attached to the header.
          Syncs the contents of the normal bucket with the older bucket.
        </p>
        <p>
          Syncs the contents of the resized bucket with the full-size bucket.
        </p>
        <p>
          Returns 401 if unauthorized, or the following if authorization passes and
          revalidations are successful.
        </p>

        <Card>
          <CardBody className={"bg-primary-900 font-mono " + fontMono.variable}>
            <pre>[</pre>
            <pre>&emsp;&#123;</pre>
            <pre>&emsp;&emsp;&emsp;"Key": "..."</pre>
            <pre>&emsp;&emsp;&emsp;"$metadata": &#123;</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"httpStatusCode"?: 200,</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"requestId"?: "...",</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"extendedRequestId"?: "...",</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"cfId"?: "...",</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"attempts"?: 1,</pre>
            <pre>&emsp;&emsp;&emsp;&emsp;"totalRetryDelay"?: 0,</pre>
            <pre>&emsp;&emsp;&emsp;&#125;</pre>
            <pre>&emsp;&emsp;&emsp;"ContentType": "..."</pre>
            <pre>&emsp;&emsp;&emsp;"ETag": "..."</pre>
            <pre>&emsp;&emsp;&emsp;"VersionId": "..."</pre>
            <pre>&emsp;&#125;</pre>
            <pre>&emsp;...</pre>
            <pre>]</pre>
          </CardBody>
        </Card>

      </FadeInScroll>
      <FadeInScroll>
        <Divider className="my-10" />
        <Header3Mono className="mb-5" align="left">
          /api/cron
        </Header3Mono>
        <Header3Mono className="mb-5" align="left">
          GET /refresh_all/
        </Header3Mono>
        <p>
          Activates the portfolio site's main Cron job: revalidate every path
          that is not dynamic. This is helpful to ensure that caches are
          properly updated every day at regular times. The website automatically
          fires this every week on Sunday at 12:00AM.
        </p>
        <p>
          To manually activate it, the correct 16-digit alphanumeric Bearer
          token is required. This is to prevent unauthorized cache
          invalidations.
        </p>
        <p>
          Returns 401 if unauthorized, or the following if authorization passes and
          revalidations are successful.
        </p>
        <Card>
          <CardBody className={"bg-primary-900 font-mono " + fontMono.variable}>
            <pre>&#123;</pre>
            <pre>&emsp;&emsp;"syncedObjects": &#123;&#125;[],</pre>
            <pre>&emsp;&emsp;"revalidatedPaths": []</pre>
            <pre>&emsp;&emsp;"revalidatedPaths": []</pre>
            <pre>&#125;</pre>
          </CardBody>
        </Card>
        <Header3Mono className="mb-5" align="left">
          GET /refresh_some/
        </Header3Mono>
        <p>
          Activates the portfolio site's secondary Cron job: revalidate only
          certain non-dynamic paths that aren't expensive to recompute. The
          website automatically fires this every 24 hours at 12:00AM.
        </p>
        <p>
          To manually activate it, the correct 16-digit alphanumeric Bearer
          token is required. This is to prevent unauthorized cache
          invalidations.
        </p>
        <p>
          Returns 401 if unauthorized, or{" "}
          <Code>&#123; success: true &#125;</Code> if authorization passes and
          revalidations are successful.
        </p>
      </FadeInScroll>
    </PageWrapper>
  );
}
