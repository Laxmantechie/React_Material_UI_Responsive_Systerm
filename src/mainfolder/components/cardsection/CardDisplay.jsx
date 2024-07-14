import React from "react";
import Card1 from "./Card1";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import { Stack } from "@mui/material";

const CardDisplay = () => {
  return (
    <Stack
      direction="row"
      m={4}
      gap={2}
      sx={{ display: { xs: "block", sm: "flex", md: "flex", lg: "flex" } }}
    >
      <Card1 />
      <SecondCard />
      <ThirdCard />
    </Stack>
  );
};

export default CardDisplay;
