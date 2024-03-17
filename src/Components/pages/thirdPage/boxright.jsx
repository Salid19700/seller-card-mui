import * as React from "react";
import { Children } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export function BoxRight(props) {
  return (
    <>
      <CssBaseline />
      <Box
        height={500}
        maxWidth='50%'
        my={4}
        display="flex"
        flexWrap="wrap"
        sx={{
          border: "2px solid grey",
          marginTop: 4,
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <Typography
          variant="h1"
          display="block"
          gutterBottom
          sx={{
            fontSize: 30,
            fontWeight: "bold",
            padding: 2,
          }}
        >
          {props.title}
        </Typography>
         <Typography variant="p"  gutterBottom>{props.description}</Typography> 
      </Box>
    </>
  );
}
