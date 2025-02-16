"use client";

import { Card, Rating, Text } from "@mantine/core";

interface Props {
  className?: string;
  review: {
    username: string;
    rating: number;
    content: string;
  };
}

export function Review({ className, review }: Props) {
  return (
    <Card className={`${className}`}>
      <Card.Section>{review.username}</Card.Section>
      <Card.Section>
        <Rating value={review.rating} />
      </Card.Section>
      <Card.Section>
        <Text>{review.content}</Text>
      </Card.Section>
    </Card>
  );
}
