import { Container, Separator } from "@radix-ui/themes"
import TopBar from "./components/TopBar.tsx"
import AboutMe from "./components/AboutMe.tsx"
import Projects from "./components/Projects.tsx"
import Begin from "./components/Begin.tsx"

function App() {
    return (
        <>
            <TopBar />
            <Separator decorative={false} size="4" orientation="vertical" my="9" />
            <Container size="4">
                <Begin />
                <Separator decorative={false} size="4" orientation="vertical" my="9" />
                <Separator decorative={false} size="4" orientation="vertical" my="9" />
                <Projects />
                <Separator decorative={false} size="4" orientation="vertical" my="9" />
                <Separator decorative={false} size="4" orientation="vertical" my="9" />
                <AboutMe />
                <Separator decorative={false} size="4" orientation="vertical" my="9" />
            </Container></>
    )
}

export default App