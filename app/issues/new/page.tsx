'use client'

import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3 ">
      <TextField.Root placeholder="title">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>

      <SimpleMDE placeholder="Description" />

    <Button>Submit</Button>
    </div>
  );
};

export default NewIssue;
