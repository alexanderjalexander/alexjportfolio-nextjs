import { FadeInScroll } from "./fadeinscroll"
import { Header2Mono } from "./headers"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { GithubIcon, LinkedInIcon } from "./icons"

export default function Footer() {
    return (
        <FadeInScroll>
            {/* TODO: Implement Stevens Webring */}
            <footer className="w-full flex flex-col sm:flex-row items-center content-center justify-around py-10 px-6">
                <div>
                    <Header2Mono>
                        Contact Me
                    </Header2Mono>
                    <p>Phone Number: (908)-367-0582</p>
                    <p>Email Address: ajansiew@stevens.edu</p>
                </div>
                <div>
                    <Header2Mono>
                        Socials
                    </Header2Mono>
                    <p>
                        <Button
                            href="https://www.linkedin.com/in/alexander-j-27144720b/"
                            as={Link}
                            isExternal
                            className="bg-primary-900"
                            showAnchorIcon
                            startContent={<LinkedInIcon/>}
                            variant="flat">
                            LinkedIn
                        </Button>
                    </p>
                    <p>
                        <Button
                            href="https://www.linkedin.com/in/alexander-j-27144720b/"
                            as={Link}
                            isExternal
                            className="bg-primary-900"
                            showAnchorIcon
                            startContent={<GithubIcon/>}
                            variant="flat">
                            Github
                        </Button>
                    </p>
                </div>
            </footer>
        </FadeInScroll>
    )
}