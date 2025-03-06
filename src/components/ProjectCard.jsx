import { useState } from "react";
import { Box, Grid, Paper, Typography, Stack, IconButton, Dialog, DialogContent } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function ProjectCard({
  img,
  title,
  description,
  links,
  listOfTechStack,
  rightAlign,
}) {
  const isPhone = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [videoSrc, setVideoSrc] = useState(null); // Hanterar videouppspelning

  const setRightAlignment = () => (isPhone ? false : rightAlign);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={setRightAlignment() ? "row" : "row-reverse"}
    >
      <Grid item xs={12} md={7}>
        <Box
          component="img"
          src={img}
          width={"100%"}
          sx={{
            borderRadius: 1,
            height: { xs: "70px", md: "unset" },
            objectFit: "cover",
            display: { xs: "none", md: "unset" },
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ textAlign: setRightAlignment() ? "right" : "left" }}
      >
        <Typography variant="body1" color="primary">
          Nya projekt
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          {title}
        </Typography>
        <Box
          component="img"
          src={img}
          width={"100%"}
          sx={{
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            height: "130px",
            transform: "translateY(20px)",
            objectFit: "cover",
            display: { xs: "unset", md: "none" },
          }}
        />
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            textAlign: setRightAlignment() ? "right" : "left",
            width: { xs: "unset", md: "110%" },
            transform: {
              xs: "unset",
              md: setRightAlignment() ? "translateX(-9%)" : "translateX(0)",
            },
            boxSizing: { xs: "unset", md: "border-box" },
            marginBottom: 2,
          }}
        >
          <Typography>{description}</Typography>
        </Paper>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={setRightAlignment() ? "end" : "start"}
          sx={{ marginBottom: 2 }}
        >
          {listOfTechStack.map((tech, i) => (
            <Typography key={i} variant="body1" color="text.secondary">
              {tech}
            </Typography>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={setRightAlignment() ? "end" : "start"}
        >
          {links.map(({ Icon, href }, i) => (
            <IconButton
              key={i}
              sx={{ color: "text.secondary" }}
              onClick={() => {
                if (href.endsWith(".mp4")) {
                  setVideoSrc(href); // Spela upp videon om det är en .mp4-fil
                } else {
                  window.open(href, "_blank"); // Annars öppna länken som vanligt
                }
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>

        {/* Modal för att spela upp video */}
        <Dialog open={!!videoSrc} onClose={() => setVideoSrc(null)} maxWidth="md" fullWidth>
          <DialogContent>
            <video controls width="100%">
              <source src={videoSrc} type="video/mp4" />
              Din webbläsare stöder inte videouppspelning.
            </video>
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
}

