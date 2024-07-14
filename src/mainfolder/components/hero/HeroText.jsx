import { Typography, Box } from "@mui/material";
import React from "react";
import HeroDivider from "./HeroDivider";

const HeroText = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "500",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "100%", sm: "100%" },
        marginTop: { xs: "20px", sm: "20px" },
      }}
    >
      <Box>
        <HeroDivider />
      </Box>
      {/* <Typography variant="h4" fontWeight={"500"}>
        Post Graduate Programme in Data Science
      </Typography> */}
    </Box>
  );
};

export default HeroText;
