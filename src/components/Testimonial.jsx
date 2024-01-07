import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = ({data}) => {
  console.log("Data", data)
  return (
    <Box
      sx={{
        backgroundColor: "#00F2E",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
      }}
    >
      {console.log(data)}
      <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
        {data}
      </Typography>
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
          {" "}
          Random Name
        </span>
        <span style={{ color: "#7B89A8" }}> - CEO OF Infilect</span>
      </Typography>
      <FormatQuoteIcon
        sx={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          color: "#00C7FF",
          height: "50px",
          width: "50px",
        }}
      />
    </Box>
  );
};

export default Testimonial;
