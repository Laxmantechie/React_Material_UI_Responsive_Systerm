import React from "react";
import { Box } from "@mui/material";

const HeroImage = () => {
  return (
    <Box
      sx={{
        width: "400px",
        display: "flex",
        flexDirection: "center",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <img src="assets/student.png" style={{ width: "100%" }}></img>
    </Box>
  );
};

export default HeroImage;
