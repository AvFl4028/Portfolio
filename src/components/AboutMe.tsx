import { Text, Heading, Flex, Separator, Card, Grid, Strong, DataList, Badge } from "@radix-ui/themes"

function AboutMe() {
    return (<>
        <Heading as="h2" size="8" id="about">About Me</Heading>
        <Separator decorative={false} size="4" orientation="vertical" my="2" />
        <Grid columns="2" gap="9" justify="center">
            <Flex direction="column" gap="3" align="center">
                <Text>I'm a Computer Systems Engineering student with a strong passion for software development and learning new technologies. I'm currently exploring the world of programming through both academic projects and personal challenges.</Text>
                <Text>
                    I participated in a state prototype competition where I gained experience building real solutions under pressure, and I’ve also developed several personal projects focused on automation, AI integration, and web technologies. Some of my work includes:
                </Text>
                <br />
                <Grid columns="2" gap="6" width="95%">
                    <Card>
                        <Text>
                            <Strong>
                                A Python automation script that generates AI-based video stories.
                            </Strong>
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            <Strong>
                                A note-taking assistant bot designed to support my learning process.
                            </Strong>
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            <Strong>
                                A lightweight GitHub API integration project.
                            </Strong>
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            <Strong>
                                A PDF scraper built with Python to download documents from a specific site.
                            </Strong>
                        </Text>
                    </Card>
                </Grid>
                <br />
                <Text>
                    While my academic background is focused on Java, I've self-taught myself Python, JavaScript, TypeScript, and other tools. I adapt quickly to new environments and am always looking for opportunities to learn, grow, and contribute.
                </Text>

                <Text>
                    I'm passionate about solving real-world problems with clean, efficient code, and I’m open to freelance collaborations, internships, or open-source contributions.
                </Text>
            </Flex>
            <Flex direction="column" gap="3" align="start">
                <Heading as="h3" size="6">Skills</Heading>
                <DataList.Root>
                    <DataList.Item align="center">
                        <DataList.Label minWidth="88px" color="violet">Programming Languages</DataList.Label>
                        <DataList.Value>
                            <Grid columns="3" gap="3">
                                <Badge color="jade" variant="soft" radius="full">
                                    Python
                                </Badge>
                                <Badge color="orange" variant="soft" radius="full">
                                    Java
                                </Badge>
                                <Badge color="amber" variant="soft" radius="full">
                                    Kotlin
                                </Badge>
                                <Badge color="blue" variant="soft" radius="full">
                                    C++
                                </Badge>
                                <Badge color="amber" variant="soft" radius="full">
                                    JavaScript
                                </Badge>
                                <Badge color="sky" variant="soft" radius="full">
                                    TypeScript
                                </Badge>
                            </Grid>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align="center">
                        <DataList.Label minWidth="88px" color="violet">Frontend</DataList.Label>
                        <DataList.Value>
                            <Grid columns="3" gap="3">
                                <Badge color="blue" variant="soft" radius="full">
                                    React
                                </Badge>
                            </Grid>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align="center">
                        <DataList.Label minWidth="88px" color="violet">Backend / Tools</DataList.Label>
                        <DataList.Value>
                            <Grid columns="3" gap="3">
                                <Badge color="jade" variant="soft" radius="full">
                                    Nodejs
                                </Badge>
                                <Badge color="amber" variant="soft" radius="full">
                                    Git
                                </Badge>
                                <Badge color="violet" variant="soft" radius="full">
                                    Github
                                </Badge>
                            </Grid>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align="center">
                        <DataList.Label minWidth="88px" color="violet">Frameworks & UI</DataList.Label>
                        <DataList.Value>
                            <Grid columns="3" gap="3">
                                <Badge color="jade" variant="soft" radius="full">
                                    Qt
                                </Badge>
                            </Grid>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align="center">
                        <DataList.Label minWidth="88px" color="violet">Operating Systems</DataList.Label>
                        <DataList.Value>
                            <Grid columns="3" gap="3">
                                <Badge color="orange" variant="soft" radius="full">
                                    Linux
                                </Badge>
                            </Grid>
                        </DataList.Value>
                    </DataList.Item>
                </DataList.Root>
            </Flex>
        </Grid>

    </>)
}

export default AboutMe