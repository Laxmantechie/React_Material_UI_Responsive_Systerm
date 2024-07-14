import React from "react";
import SecondChart from "./SecondChart";
import Chart1 from "./FirstChart";
import { Stack } from "@mui/material";
import FirstChart from "./FirstChart";

function MainGraph() {
  return (
    <Stack
      direction={"row"}
      sx={{ display: { xs: "block", sm: "block", md: "flex", lg: "flex" } }}
    >
      <FirstChart />
      <SecondChart />
    </Stack>
  );
}

export default MainGraph;
