"use client";

import { createTheme, ThemedProps, ThemeProvider } from "@mui/material";

export const MuiThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0ca092",
      }
    }
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
