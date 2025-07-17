import { Grid, Heading, Card, Separator, Inset, Text, Link } from "@radix-ui/themes"

function Projects() {
    return (<>
        <Heading as="h2" size="8" id="projects">Projects</Heading>
        <Separator decorative={false} size="4" orientation="vertical" my="3" />

        <Grid columns="2" gap="6" minHeight="500px">
            <Card>
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Bold typography"
                        style={{
                            display: "block",
                            objectFit: "cover",
                            width: "100%",
                            height: 140,
                            backgroundColor: "var(--gray-5)",
                        }}
                    />
                </Inset>
                <Text as="p" size="3">

                </Text>
            </Card>
            <Card>
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Bold typography"
                        style={{
                            display: "block",
                            objectFit: "cover",
                            width: "100%",
                            height: 140,
                            backgroundColor: "var(--gray-5)",
                        }}
                    />
                </Inset>
                <Text as="p" size="3">

                </Text>
            </Card>
            <Card>
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Bold typography"
                        style={{
                            display: "block",
                            objectFit: "cover",
                            width: "100%",
                            height: 140,
                            backgroundColor: "var(--gray-5)",
                        }}
                    />
                </Inset>
                <Text as="p" size="3">

                </Text>
            </Card>
        </Grid>
    </>)
}

export default Projects