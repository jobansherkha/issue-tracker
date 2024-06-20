import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3 ">
      <TextField.Root placeholder="title">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>

      <TextArea placeholder="Description" />

    <Button>Submit</Button>
    </div>
  );
};

export default NewIssue;
