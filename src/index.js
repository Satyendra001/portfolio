import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { experimental_extendTheme as extendTheme } from "@mui/material";

const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          // The best part is that you can refer to the variables wherever you like 🤩
          gradient:
            'linear-gradient(to left, var(--mui-palette-primary-main), var(--mui-palette-primary-dark))',
          border: {
            subtle: 'var(--mui-palette-neutral-600)',
          },
        },
      },
      dark: {
        palette: {
          gradient:
            'linear-gradient(to left, var(--mui-palette-primary-light), var(--mui-palette-primary-main))',
          border: {
            subtle: 'var(--mui-palette-neutral-600)',
          },
        },
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App theme={theme}/>);
