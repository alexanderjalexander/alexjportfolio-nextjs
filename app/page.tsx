import { Header1Mono, Header2Mono, Header3Mono, SubheaderMono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { siteConfig } from "@/config/site";
import { Card, CardHeader, Divider, Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Home() {
  return (
    <PageWrapper>
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
      <Divider className="my-10" />
      <div>
        <Header2Mono>About Me</Header2Mono>
        <p>
          Hello there! My name&apos;s Alex; I&apos;m a 3/4 Computer Science
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
      <Divider className="my-10" />
      <div>
        <Header2Mono>My Skills</Header2Mono>
        <div className="block md:flex flex-row flex-wrap gap-1">
          {siteConfig.skills.map((item, index) => (
            <Card key={index} className="my-5 h-[100px] sm:h-[150px] sm:w-[300px] mx-auto">
              <CardHeader className="absolute z-10 top-0 bottom-0">
                <Header3Mono>{item.label}</Header3Mono>
              </CardHeader>
              <Image
                  removeWrapper
                  alt=""
                  className="z-0 w-full h-full blur-sm object-cover"
                  src={item.img}
                />
            </Card>
          ))}
        </div>
      </div>
      <Divider className="mt-10" />
    </PageWrapper>
  );
}
