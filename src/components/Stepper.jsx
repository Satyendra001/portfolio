import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Testimonial from "./Testimonial";

const steps = [
  {
    label: "Internship",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Software Engineer",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "SDE - Backend",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", my: 10 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              <Typography
                variant="h6"
                sx={{ color: "white", textAlign: "left" }}
              >
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              {/* <Typography
                variant="body1"
                sx={{ color: "white", textAlign: "center", mb: 2 }}
              > */}
                <Testimonial data={step.description}/>
              {/* </Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          square
          elevation={0}
          sx={{
            maxWidth: "200px",
            // height: "100px",
            borderRadius: "30px",
            border: "1px solid #00C7FF",
            backgroundColor: "rgba(0, 10, 31, 255)",
            padding: 3,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            // justifyContent: "center",
          }}
        >
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          <Typography sx={{ color: "white", textAlign: "left"}} variant="h6" >Journey Continues!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1}} variant="contained">
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
