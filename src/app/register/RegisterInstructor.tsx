"use client";

import { useRouter } from "next/navigation";
import { FormEvent, SetStateAction, useState } from "react";
import { UserInfo } from "./page";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Box,
  FileInput,
  MultiSelect,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { Group, Text, Button } from "@mantine/core";
import "@mantine/dates/styles.css";
import AccountInfo from "./components/AccountInfo";

interface Props {
  className?: string;
  /* TODO: Add Additional Props Here */
}

export type TeacherInfo = {
  userInfo: UserInfo;
  credentials: string[];
};
const subjects = [
  { value: "History", label: "History" },
  { value: "English", label: "English" },
  { value: "Math", label: "Math" },
  { value: "Science", label: "General Science" },
  { value: "Biology", label: "Biology" },
  { value: "Chemistry", label: "Chemistry" },
];

export function RegisterInstructor({ className }: Props) {
  const router = useRouter();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
  const { user, error, isLoading } = useUser();
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [number, setNumber] = useState<string | null>(null);

  const [teacherInfo, setTeacherInfo] = useState<TeacherInfo>({
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
    credentials: [],
  });
  // TODO: Attach this function to the form like so <form onSubmit={onSubmit}>
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoadingSubmit(true); // Start Loading

    try {
      const formData = new FormData(event.currentTarget);

      // TODO: Remove mock delay for testing
      const seconds = 1.5;
      await new Promise(resolve => setTimeout(resolve, seconds * 1000));

      // TODO: Implement API calls with formData (we don't need to worry about this part!)
      router.push("/instructor");
    } catch (error) {
      // Error Handling
      console.error(error);
    } finally {
      setIsLoadingSubmit(false);
    }
  }
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const handleDrop = (acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
  };

  const updateCredentials = (cred: string[]) => {
    setTeacherInfo({
      ...teacherInfo,
      credentials: cred,
    });
  };

  // const submit = () => {
  //   if (validateBirthdate(birthdate)) {
  //     let temp = new Date(birthdate);
  //     temp.setDate(temp.getDate() + 1);
  //     setUserInfo(prevState => ({
  //       ...prevState,
  //       birthdate: temp,
  //     }));
  //     //Add user to the database after the submit

  //     window.location.href = "/private/studentHome";
  //   } else {
  //     alert("Invalid birthdate");
  //   }
  // };

  //if (isLoading) return <div>Loading...</div>; //isLoading
  //if (error) return <div>{error.message}</div>; //error handling
  //if (!user) return <div>Please authenticate to access this page.</div>; //if user is defined

  //might be able to change this???

  // useEffect(() => {
  //   if (isValid) {
  //     let s = "phoneNumber";
  //     setUserInfo({ ...userInfo, [s]: number });
  //   }
  // }, [isValid]);
  return (
    <div className={`${className}`}>
      <AccountInfo data={teacherInfo} setData={setTeacherInfo} />
      <MultiSelect
        label="Credentialed Subjects"
        placeholder="Choose Subjects"
        data={subjects}
        onChange={e => updateCredentials(e)}
        clearable
      />

      <div style={{ maxWidth: 400, margin: "auto", paddingTop: 50 }}>
        <Text size="lg" style={{ marginBottom: 10 }}>
          Upload Your File
        </Text>


        <FileInput
          label="Choose a file to upload"
          placeholder="Pick a file"
          required
          onChange={file => console.log(file)} // Handle file selection
          styles={{
            root: {
              marginBottom: 20,
            },
          }}
        />
      </div>
    </div>
  );
}
