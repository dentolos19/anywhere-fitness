"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useCompletion } from "ai/react";

export default function Page() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <TextField value={input} onChange={handleInputChange}/>
      <Button type={"submit"}>Go!</Button>
      <Typography>{completion}</Typography>
    </Box>
  );
}