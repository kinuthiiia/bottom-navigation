import { ActionIcon, AppShell, useMantineTheme, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

export default function BottomNavigation({
  sections,
  defaultKey,
  activeColor,
}) {
  const [active, setActive] = useState(defaultKey || sections[0].key);

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  if (!isMobile) {
    return (
      <div className="p-8">
        {/* Not a mobile phone. Display some other stuff here */}
        <Text color="dimmed">
          Not a mobile device. Switch to a bigger screen to view the demo
        </Text>
      </div>
    );
  }

  return (
    <AppShell padding={0}>
      <div className="h-[100%] w-full">
        {sections.map((section) => {
          if (section?.key == active) return section?.component;
        })}
      </div>

      <div
        className=" mx-3 justify-around bottom-[1px] fixed bg-gray-200 p-3 flex rounded-3xl"
        style={{ width: "calc(100% - 24px)" }}
      >
        {sections.map((section) => {
          return (
            <ActionIcon
              w={50}
              h={50}
              p={0}
              color={active == section?.key ? activeColor || "dark" : "gray"}
              radius="lg"
              variant={active == section?.key ? "light" : "subtle"}
              key={section?.key}
              onClick={() => setActive(section?.key)}
            >
              {section?.icon}
            </ActionIcon>
          );
        })}
      </div>
    </AppShell>
  );
}
