"use client";

import { Card, Group, Pill, Stack, Text } from "@mantine/core";
import Link from "next/link";

interface Props {
  className?: string;
  session: {
    name: string;
    description: string;
    subject: string;
    time: Date;
  };
}

export function Session({ className, session }: Props) {
  return (
    <Card className={`min-w-64 max-w-fit ${className}`} withBorder padding="lg">
      <Card.Section></Card.Section>
      <Card.Section>
        <Stack className="p-4">
          {session.name}
          <Group>
            <Pill className="w-fit">
              <Link href={`/search?subject=${session.subject.toLowerCase()}`}>
                {session.subject.toUpperCase()}
              </Link>
            </Pill>
            <Text size="xs">
              {session.time.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
              })}
            </Text>
          </Group>
          <Text>{session.description}</Text>
        </Stack>
      </Card.Section>
      <Card.Section></Card.Section>
    </Card>
  );
}
