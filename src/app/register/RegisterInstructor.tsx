"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface Props {
  className?: string;
  /* TODO: Add Additional Props Here */
}

export function RegisterInstructor({ className }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // TODO: Attach this function to the form like so <form onSubmit={onSubmit}>
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Start Loading

    try {
      const formData = new FormData(event.currentTarget);

      // TODO: Remove mock delay for testing
      const seconds = 1.5;
      await new Promise((resolve) => setTimeout(resolve, seconds * 1000));

      // TODO: Implement API calls with formData (we don't need to worry about this part!)
      router.push("/instructor");
    } catch (error) {
      // Error Handling
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return <div className={`${className}`}></div>;
}
