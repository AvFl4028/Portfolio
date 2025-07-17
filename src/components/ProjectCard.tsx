import {
    Card,
    Inset,
    Heading,
    Text,
    Link,
    Flex,
    Badge,
    Box,
    type BadgeProps,
} from "@radix-ui/themes";
import type { JSX } from "react";

type badgeType = {
    text: string;
    color: BadgeProps["color"];
};

interface ProjectCardProps {
    imgSrc?: string;
    title: string;
    description: string;
    link: string;
    linkSrc: string;
    badge: Array<badgeType>;
}

function ProjectCard({
    imgSrc = "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    title,
    description,
    link,
    linkSrc,
    badge,
}: ProjectCardProps) {
    function getBadges(): JSX.Element[] {
        return badge.map((b, index) => (
            <Box key={index} width="48px">
                <Badge color={b.color} variant="soft" radius="full">
                    {b.text}
                </Badge>
            </Box>
        ));
    }

    return (
        <Card>
            <Inset clip="padding-box" side="top" pb="current">
                <img
                    src={imgSrc}
                    alt={title}
                    style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: 140,
                        backgroundColor: "var(--gray-5)",
                    }}
                />
            </Inset>
            <Heading as="h4" size="5" style={{ paddingBottom: "5px" }}>
                {title}
            </Heading>
            <Text as="p" size="3" style={{ paddingBottom: "5px" }}>
                {description}
            </Text>

            <Link href={linkSrc}>{link}</Link>
            <br />
            <Flex direction="row" style={{ paddingTop: "5px" }}>
                {getBadges()}
            </Flex>
        </Card>
    );
}

export default ProjectCard;
