import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

export default function HeroDivider() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 660,
        height: 330,
        borderRadius: 2,
        p: 3,
        height: { xs: 300, md: 500 },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            gutterBottom
            variant="h6"
            fontWeight={"800"}
            component="div"
          >
            LEARN AI DEVELOPMENT
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareRoundedIcon sx={{ fontSize: "40px" }} />
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          <Typography
            variant="h3"
            fontWeight={"800"}
            sx={{
              backgroundImage:
                "linear-gradient(to right, #121FCF 0%, #00FF00 50%, #CF1512 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontSize: { xs: "2rem", md: "2.2rem", sm: "3rem", lg: "3rem" },
            }}
          >
            Post Graduate Programme in Data Science
          </Typography>
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Dowload Syllabus" size="large" />
          <Chip color="warning" label="Apply Now" size="large" />
        </Stack>
      </Box>
    </Card>
  );
}
