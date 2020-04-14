import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import RoutesCore from "./Routes";
import { colors } from "./constants";

const theme = createMuiTheme({ palette: { primary: colors } });

const App = () => (
  <ThemeProvider theme={theme}>
    <RoutesCore />
  </ThemeProvider>
);

export default App;
