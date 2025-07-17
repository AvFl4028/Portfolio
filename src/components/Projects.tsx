import {
    Grid,
    Heading,
    Separator,
} from "@radix-ui/themes";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <>
            <Heading as="h2" size="8" id="projects">
                Notable Projects
            </Heading>
            <Separator decorative={false} size="4" orientation="vertical" my="3" />
            <Grid columns="2" gap="6" minHeight="500px">
                <ProjectCard
                    title="Sparkle Bot"
                    description='It is a small bot for automating content on social networks (Youtube, Tiktok) about stories in the "Reddit Stories" style format.'
                    link="More"
                    linkSrc="https://github.com/AvFl4028/sparkle_bot"
                    imgSrc="https://github.com/AvFl4028/sparkle_bot/raw/master/img/img.png"
                    badge={[{ text: "Python", color: "jade" }]}
                />
                <ProjectCard
                    title="Project HERTA"
                    description="Is a IA assistant that can write notes of whatever you want to know"
                    link="More"
                    linkSrc="https://github.com/AvFl4028/Project-HERTA/tree/master"
                    imgSrc="https://github.com/AvFl4028/Project-HERTA/raw/master/img/img.png"
                    badge={[{ text: "Python", color: "jade" }]}
                />
                <ProjectCard
                    title="Resistance Calculator"
                    description="App that can calculate electric resistance values, electronic
                        circuits and ohm's law."
                    link="More"
                    linkSrc="https://github.com/AvFl4028/calculadora_resistencias"
                    imgSrc="https://github.com/AvFl4028/calculadora_resistencias/raw/main/img/img.png"
                    badge={[
                        { text: "c++", color: "blue" },
                        { text: "Qt", color: "jade" },
                    ]}
                />
            </Grid>
            <Separator decorative={false} size="4" orientation="vertical" my="3" />
            <Heading as="h4" size="5">
                More projects
            </Heading>
            <Separator decorative={false} size="4" orientation="vertical" my="3" />
            <Grid columns="3" gap="6" justify="center">
                <ProjectCard
                    title="News Scrapping"
                    description="A little script that scrap all the news of bbc web page "
                    link="More"
                    linkSrc="https://github.com/AvFl4028/Noticias_Scrapping"
                    imgSrc="https://github.com/AvFl4028/Noticias_Scrapping/raw/main/img/img.png"
                    badge={[{ text: "Python", color: "jade" }]}
                />
                <ProjectCard
                    title="Get_LN"
                    description="This project aims to scrape a website to obtain light novel links and store them in a JSON file. It then allows the user to select a novel and view the available links."
                    link="More"
                    linkSrc="https://github.com/AvFl4028/web_scraping_ln"
                    imgSrc="https://github.com/AvFl4028/web_scraping_ln/raw/master/img/img1.png"
                    badge={[{ text: "Python", color: "jade" }]}
                />
                <ProjectCard
                    title="AROPSY"
                    description="This is a little operative system that I do from scratch to practice my Arduino abilities"
                    link="More"
                    linkSrc="https://github.com/AvFl4028/mini-SO-arduino"
                    imgSrc="https://github.com/AvFl4028/mini-SO-arduino/raw/main/img/img1.jpeg"
                    badge={[
                        { text: "c++", color: "blue" },
                        { text: "Kotlin", color: "amber" },
                    ]}
                />
            </Grid>
        </>
    );
}

export default Projects;
