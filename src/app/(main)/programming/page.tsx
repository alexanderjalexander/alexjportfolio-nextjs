import {
  Header1Mono,
  Header2Mono,
  SubheaderMono,
} from "@/components/text/headers";
import TypewriterWrapper from "@/components/text/typewriterwrapper";
import { PageWrapper } from "@/components/page-anim/pagewrapper";
import { Metadata } from "next";
import { FadeInScroll } from "@/components/page-anim/fadeinscroll";

import { Divider } from "@heroui/divider";

import {
  getProgrammingProjectsSkillsFull,
  getHomelabUptimes,
} from "@/src/lib/data/programming";
import HomelabCard from "@/components/content/homelab_card";
import ProgrammingContent from "@/components/content/programming_content";

export const metadata: Metadata = {
  title: "Programming",
};

export default async function Programming() {
  const programmingProjects = await getProgrammingProjectsSkillsFull();
  const uptimes = getHomelabUptimes();

  return (
    <PageWrapper>
      {/* Intro Header */}
      <div className="h-screen flex items-center">
        <div className="h-min m-auto">
          <Header1Mono className="mb-5">Programming</Header1Mono>
          <SubheaderMono>
            <TypewriterWrapper
              text={
                'public static void main(String args[]) { System.out.println("Hello World!"); }'
              }
            />
          </SubheaderMono>
        </div>
      </div>

      {/* About Section */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono className="mb-5">About</Header2Mono>
        <p>
          Programming has not only been the primary facet of my studies in
          Computer Science, but has also been a distinct passion of mine ever
          since I started learning about it in middle school and high school.
          From developing games to creating parsers and interpreters, I&apos;ve
          always been super interested in developing my own programs and
          creating awesome products for users.
        </p>
      </FadeInScroll>

      {/* Homelab Card */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono className="mb-5">Homelab</Header2Mono>
        <HomelabCard />
      </FadeInScroll>

      {/* Programming Project Cards Section */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono className="mb-5">Projects</Header2Mono>
        <ProgrammingContent />
      </FadeInScroll>
    </PageWrapper>
  );
}
