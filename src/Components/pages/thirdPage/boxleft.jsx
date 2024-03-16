import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

export function Boxleft(props) {
  return (
    <>
      <CssBaseline />
      <Box
        height={500}
        maxWidth='50%'
        my={4}
        display="flex"
        alignItems="center"
        gap={4}

        sx={{ border: "2px solid grey" }}
      >
        <img src={props.image} style={{display: 'block', width: '100%', height: '100%'}} alt="Loading" />
      </Box>
    </>
  );
}
