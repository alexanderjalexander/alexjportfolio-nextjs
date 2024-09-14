import { Header1Mono, SubheaderMono, Header2Mono, Header3Mono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { FadeInScroll } from "@/components/fadeinscroll";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

import { fontMono } from "@/config/fonts";

export const metadata: Metadata = {
    title: 'API Reference',
}

export const revalidate = siteConfig.revalidateTime;

export default async function Graphic_Design() {

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
                <p>Yes, you heard that right, this website has an official API! Is it overkill? Absolutely. Still cool? Absolutely.</p>
            </FadeInScroll>

            {/* API Reference Section.*/}
            <FadeInScroll>
                <Divider className="my-10" />
                <Header3Mono className="mb-5" align="left">/api/programming</Header3Mono>

                <Header3Mono className="mb-5" align="left">GET /</Header3Mono>
                <p>Obtains list of all my current programming projects.</p>
                <Card><CardBody className={"font-mono "+fontMono.variable}>
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
                </CardBody></Card>
                <p></p>

                <Divider className="my-10" />
                <Header3Mono className="mb-5" align="left">/api/video</Header3Mono>

                <Header3Mono className="mb-5" align="left">GET /</Header3Mono>
                <p>Obtains list of self-made videos. </p>
                <Card><CardBody className={"font-mono "+fontMono.variable}>
                    <pre>[</pre>
                    <pre>&emsp;&#123;</pre>
                    <pre>&emsp;&emsp;"url": 11-char youtube id,</pre>
                    <pre>&emsp;&emsp;"date": "...",</pre>
                    <pre>&emsp;&#125;,</pre>
                    <pre>...</pre>
                    <pre>]</pre>
                </CardBody></Card>
                <p></p>

                <Header3Mono className="mb-5" align="left">GET /commissions</Header3Mono>
                <p>Obtains list of commissions. All commissions done for a creator can be obtained through the key denoted by that creator's name.</p>
                <Card><CardBody className={"font-mono "+fontMono.variable}>
                    <pre>&#123;</pre>
                    <pre>&emsp;"Creator1": [,</pre>

                    <pre>&emsp;&emsp;&#123;</pre>
                    <pre>&emsp;&emsp;&emsp;"url": 11-char youtube id,</pre>
                    <pre>&emsp;&emsp;&emsp;"date": "...",</pre>
                    <pre>&emsp;&emsp;&#125;</pre>
                    <pre>&emsp;&emsp;...</pre>

                    <pre>&emsp;],</pre>
                    <pre>&emsp;"Creator2": [,</pre>

                    <pre>&emsp;&emsp;&#123;</pre>
                    <pre>&emsp;&emsp;&emsp;"url": 11-char youtube id,</pre>
                    <pre>&emsp;&emsp;&emsp;"date": "...",</pre>
                    <pre>&emsp;&emsp;&#125;</pre>
                    <pre>&emsp;&emsp;...</pre>

                    <pre>&emsp;],</pre>
                    <pre>&#125;</pre>
                </CardBody></Card>
                <p></p>

                <Divider className="my-10" />
                <Header3Mono className="mb-5" align="left">/api/motion</Header3Mono>

                <Header3Mono className="mb-5" align="left">GET /</Header3Mono>
                <p>Obtains list of motion graphics projects, ordered by date descending.</p>
                <Card><CardBody className={"font-mono "+fontMono.variable}>
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
                </CardBody></Card>
                <p></p>

                <Divider className="my-10" />
                <Header3Mono className="mb-5" align="left">/api/animation</Header3Mono>

                <Header3Mono className="mb-5" align="left">GET /</Header3Mono>
                <p>Obtains list of 3D animation projects, ordered by date descending.</p>
                <Card><CardBody className={"font-mono "+fontMono.variable}>
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
                </CardBody></Card>
                <p></p>

                <Divider className="my-10" />
                <Header3Mono className="mb-5" align="left">/api/graphic_design</Header3Mono>

                <Header3Mono className="mb-5" align="left">GET /</Header3Mono>
                <p>Fetches all possible keys provided in the image bucket for the graphic design page. Each key can be used to fetch that specific image.</p>
                <Card><CardBody className={"font-mono "+fontMono.variable}>
                    <pre>[</pre>
                    <pre>&emsp;&#123;</pre>
                    <pre>&emsp;&emsp;"Key": "Posters/Some poster here.jpg",</pre>
                    <pre>&emsp;&emsp;"Size": 85592</pre>
                    <pre>&emsp;&#125;,</pre>
                    <pre>...</pre>
                    <pre>]</pre>
                </CardBody></Card>
                <p></p>

                <Header3Mono className="mb-5" align="left">GET /[...id]</Header3Mono>
                <p>Returns a full-quality image provided from the key given.</p>
                <p>404s if the key leads to no image.</p>

                <Header3Mono className="mb-5" align="left">GET /resize/[...id]</Header3Mono>
                <p>Returns a low-quality image provided from the key given. Useful for keeping the graphic design page optimized when displaying every image.</p>
                <p>404s if the key leads to no image.</p>

            </FadeInScroll>

		</PageWrapper>
	);
}