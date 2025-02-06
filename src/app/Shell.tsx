"use client";

import { AppShell, Burger, Center, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

interface Props {
  children?: React.ReactNode;
}

export function Shell({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <div>Logo</div>
            <Group visibleFrom="sm">
              <UnstyledButton component={Link} href="/home" className={""}>
                Home
              </UnstyledButton>
              <UnstyledButton component={Link} href="/contact" className={""}>
                Contact
              </UnstyledButton>
              <UnstyledButton component={Link} href="/about" className={""}>
                About
              </UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar className="flex flex-col">
        <UnstyledButton
          component={Link}
          href="/home"
          className={"flex items-center h-12 hover:bg-neutral-50"}
            onClick={toggle}
        >
          <Center className="px-4">Home</Center>
        </UnstyledButton>
        <UnstyledButton
          component={Link}
          href="/contact"
          className={"flex items-center h-12 hover:bg-neutral-50"}
            onClick={toggle}
        >
          <Center className="px-4">Contact</Center>
        </UnstyledButton>
        <UnstyledButton
          component={Link}
          href="/about"
          className={"flex items-center h-12 hover:bg-neutral-50"}
            onClick={toggle}
        >
          <Center className="px-4">About</Center>
        </UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
