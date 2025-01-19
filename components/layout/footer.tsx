import { FadeInScroll } from "../page-anim/fadeinscroll"
import { Header2Mono } from "../text/headers"
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"
import { GithubIcon, LinkedInIcon } from "../icons"
import Webring from "../webring"

export default function Footer() {
    return (
        <FadeInScroll>
            <footer className="px-6">
                <Webring />
                <div className="w-full flex flex-col sm:flex-row items-center content-center justify-around">
                    <div>
                        <Header2Mono>
                            Contact Me
                        </Header2Mono>
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
                                href="https://github.com/alexanderjalexander/"
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
                </div>
                <div className="text-center py-6">&copy; 2024 Alexander Jansiewicz. All Rights Reserved.</div>
            </footer>
        </FadeInScroll>
    )
}