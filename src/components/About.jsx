import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import Testimonial from "./Testimonial";
import Experience from "./Experience";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid white",
    borderRadius: "25px",
    color: "white",
    width: "15%",
    display: "block",
    "&:hover": {
      border: "3px solid #00C7FF",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  }));

  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto", alignContent : "center"}} id="about">
      <CustomTitleBox>
        <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
          What People Say About my Work!
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      <CustomBox sx={{my: 7}}>
        <Experience/>

      </CustomBox>
      <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "100%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>

        <Typography variant="h4" sx={{color: "white", mt: 12, textAlign:"center"}}>
          Interested in Working Together?
        </Typography>
        <CustomButton variant="outlined" sx={{mx: "auto", mt: 3, mb: 8}}>
          Get In Touch
        </CustomButton>
    </Box>
  );
};

export default About;
