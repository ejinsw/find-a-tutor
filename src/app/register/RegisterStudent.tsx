"use client";

import { NumberInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { UserInfo } from "./page";
import AccountInfo from "./components/AccountInfo";

interface Props {
  className?: string;
  /* TODO: Add Additional Props Here */
}
export type StudentInfo = {
  userInfo: UserInfo;
  grade: number;
};

export function RegisterStudent({ className }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    language: "English",
    birthdate: new Date(),
    address: {
      street: "",
      city: "",
      state: "",
      zip: 0,
      country: "",
    },
  });
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    userInfo: userInfo,
    grade: 0,
  });
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
      router.push("/student");
    } catch (error) {
      // Error Handling
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return <div className={`${className}`}>
    <AccountInfo data={studentInfo} setData={setStudentInfo} />
    <NumberInput
        label="School Grade Level"
        description="(1th-12th)"
        placeholder="Current Grade"
        //onChange={e => updateDataManually("phoneNumber", e.toString())}
        clampBehavior="strict"
        min={1}
        max={12}
      />
  </div>;
}
