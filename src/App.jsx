import React from "react";
import { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./mainfolder/pages/LandingPage";

const App = () => {
  const [mode, setMode] = useState("light");

  const darktheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darktheme}>
      <Box bgcolor={"background.default"}>
        <LandingPage mode={mode} setMode={setMode} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
