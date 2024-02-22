import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Bar } from './Components/Bar';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Bar/>
      </Container>
    </React.Fragment>
  );
}

export default App;
