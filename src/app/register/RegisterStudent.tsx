"use client";

import { Button, Group, NumberInput, Stepper } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { UserInfo } from "./page";
import AccountInfo from "./components/AccountInfo";
import AddressInput from "./components/AddressInput";

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
  const [active, setActive] = useState(0);
  
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    userInfo: {
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
    },
    grade: 0,
  });

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  
  // TODO: Attach this function to the form like so <form onSubmit={onSubmit}>
  async function onSubmit() {

    setIsLoading(true); // Start Loading

    try {

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

  return (
    <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white shadow-lg rounded-xl ${className}`}>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          <div className="mb-6">
            <AccountInfo setData={setStudentInfo} />
          </div>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Input Address">
          <AddressInput setData={setStudentInfo} />
        </Stepper.Step>
        <Stepper.Step label="Credentials" description="Input school information">
          {/* Grade Level Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">School Grade Level</label>
            <p className="text-sm text-gray-500 mb-2">(1st-12th)</p>
            <input
              type="number"
              placeholder="Current Grade"
              value={studentInfo.grade}
              onChange={(e) => setStudentInfo({...studentInfo, ['grade']: Number(e.target.value)})}
              min={1}
              max={12}
              className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          </Stepper.Step>
          <Stepper.Completed>
          <div className="flex justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md w-full sm:w-auto"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </div>
        </Stepper.Completed>
      </Stepper>
      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
}
