import { FadeInScroll } from "@/components/page-anim/fadeinscroll";
import { Header1Mono, Header2Mono, Header3Mono, SubheaderMono } from "@/components/text/headers";
import { PageWrapper } from "@/components/page-anim/pagewrapper";
import TypewriterWrapper from "@/components/text/typewriterwrapper";
import { siteConfig } from "@/config/site";
import { getSkillsCategories } from "@/src/lib/data/skills";

import NextImage from "next/image";
import Link from "next/link";

import { Card, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

export default async function Home() {
  const skillsCategories = await getSkillsCategories();
  return (
    <PageWrapper>
      {/* Intro Card */}
      <div className="h-screen flex items-center">
        <div className="h-min m-auto">
          <div className="container max-w-screen-sm mx-auto pb-10 flex">
            <Image
              as={NextImage}
              width={300}
              height={300}
              removeWrapper={true}
              shadow="lg"
              alt="Profile Picture of AJ"
              src="/AJPicrew.png"
              loading="eager"
              radius="full"
              className="mx-auto z-1 max-w-[300px] w-4/5 border-8 border-primary-50"
            />
          </div>
          <Header1Mono>AJ&apos;s Portfolio</Header1Mono>
          <SubheaderMono>
            <TypewriterWrapper text="An interactive portfolio of my projects, accomplishments, and hobbies :)" />
          </SubheaderMono>
        </div>
      </div>

      {/* About Me */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono className="mb-5">About Me</Header2Mono>
        <div className="flex flex-wrap items-center justify-center gap-16">
          <Image 
            width={500}
            alt="Portrait Picture of AJ"
            src="/portrait.jpg"
            className="basis-1/5 z-1 max-w-[300px]"
          />
          <div className="basis-100 lg:basis-3/5">
            <p>
              Hello there! My name&apos;s Alex(he/him); I&apos;m a 4/4 Computer Science
              student at Stevens Institute of Technology and I am based in NJ. I am
              a creative and open-minded person committed to exploring the many ways
              I can express myself creatively or create exciting new projects
              through various forms of technology and media.
            </p>
            <p>
              For many years, I&apos;ve focused a lot of my passion into programming
              and various art forms surrounding design, multimedia, and technology.
              In addition to my studies as a Computer Science major, I enjoy
              programming my own projects, and have worked with high school teams to
              produce games as an extra-curricular activity. I also enjoy and am
              self-taught in video editing, animation, graphic design, and motion
              graphics.
            </p>
            <p>
              I hope that as you scroll through each part of this web page, you get
              a sense of who I am as an individual and how I blend my own creative
              inspirations into the things that I create!
            </p>
          </div>
        </div>
      </FadeInScroll>

      {/* My Skills */}
      <FadeInScroll>
        <Divider className="my-10" />
        <Header2Mono>My Skills</Header2Mono>
        <div className="flex flex-row justify-around flex-wrap">
          {Object.keys(skillsCategories).map(
            (category, index) => 
            <FadeInScroll className="my-2 sm:w-1/2" key={index}>
              <Header3Mono>{category}</Header3Mono>
              <div className="flex justify-center gap-2 flex-wrap">
                {skillsCategories[category].skills.map(
                  (skill:string) => 
                  { 
                    return (
                    <Chip key={skill} 
                      className={skillsCategories[category].color}
                      size="md">
                        {skill}
                    </Chip>)
                  }
                )}
              </div>
            </FadeInScroll>
          )}
        </div>
      </FadeInScroll>

      {/* My Work Experience */}
      <FadeInScroll>
        {/* Make some fancy stuff here with like lines and stuff to pop stuff in */}
        {/* NextUI Dividers have vertical orientation, might be able to make a custom timeline */}
        {/* Vertical Dividers and cards */}
      </FadeInScroll>

      {/* What I Do */}
      <FadeInScroll>
        <Divider className="my-10" />

        <div>
          <Header2Mono>What I Do</Header2Mono>
          <div className="block md:flex flex-row flex-wrap gap-1">
            {siteConfig.activities.map((item, index) => (
              <Card 
                key={index} 
                isPressable
                as={Link}
                href={item.href}
                className="my-5 h-[100px] w-4/5 sm:h-[150px] sm:w-[300px] mx-auto bg-primary-900 hover:bg-primary-700">
                <CardHeader className="absolute z-2 top-0 bottom-0">
                  <Header3Mono className="drop-shadow-sm">{item.label}</Header3Mono>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </FadeInScroll>

    </PageWrapper>
  );
}
