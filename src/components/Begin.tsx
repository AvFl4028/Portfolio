import github from "../assets/img/github.png"
import mail from "../assets/img/mail.webp"
import upwork from "../assets/img/upwork.webp"

import { Grid, Heading, Flex, Avatar } from "@radix-ui/themes"

function Begin() {
    return (<Grid columns="2" gap="2">
        <div>
            <Heading as="h1" id="begin" size="9">Hi! I'm Aviel Flores</Heading>
            <br />
            <br />
            <Heading as="h2">Software Developer with a focus on Python, Java and Web Technologies.</Heading>
        </div>
        <Grid rows="2" gap="4">
            <Flex justify="center">
                <Avatar fallback="A" size="9" />
            </Flex>
            <Flex justify="center">
                <Grid columns="3" gap="9" height="48px">
                    <a href="https://github.com/AvFl4028">
                        <img src={github} alt="github" width="48px" height="48px" />
                    </a>
                    <a href="">
                        <img src={upwork} alt="upwork" width="48px" height="48px" />
                    </a>
                    <a href="mailto:floresmeloavielaxel@gmail.com">
                        <img src={mail} alt="mail" width="48px" />
                    </a>
                </Grid>
            </Flex>
        </Grid>
    </Grid>)
}

export default Begin