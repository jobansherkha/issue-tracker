"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { string } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { error } from "console";
interface IssueForm {
  title: string;
  description: string;
}
const NewIssue = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  const [error, setError] = useState('');
  return (
    <div  className="max-w-xl space-y-3 ">
      {error && (<Callout.Root className="mb-5">
  <Callout.Text>
    {error}
  </Callout.Text>
</Callout.Root>)}
    <form className="max-w-xl space-y-3 "
      onSubmit={handleSubmit(async (data) => {
        
        try {
          await axios.post("/api/issues", data);
          router.push("/issues");
          
        } catch (error) {

          console.log(error)
          setError('an unexpected error occured')
          
        }

      })}
     
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
    </form></div>
  );
};

export default NewIssue;
