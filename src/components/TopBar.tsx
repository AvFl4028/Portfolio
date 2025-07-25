import { TabNav } from "@radix-ui/themes";

function TopBar() {
    return (
        <TabNav.Root>
            <TabNav.Link href="#begin">Begin</TabNav.Link>
            <TabNav.Link href="#projects">Projects</TabNav.Link>
            <TabNav.Link href="#about">About</TabNav.Link>
            <TabNav.Link href="#cv">CV</TabNav.Link>
        </TabNav.Root>
    );
}

export default TopBar;
