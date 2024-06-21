"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { string } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface IssueForm {
  title: string;
  description: string;
}
const NewIssue = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
      className="max-w-xl space-y-3 "
    >
      <TextField.Root placeholder="title" {...register("title")}>
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit</Button>
    </form>
  );
};

export default NewIssue;
