import * as React from "react";
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
            fontSize: 35,
            fontWeight: "bold",
            padding: 2,
          }}
        >
          {props.title}
        </Typography>
         <Typography variant="p"  gutterBottom>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem fugiat veritatis corporis repellat eligendi laudantium, iusto eius nisi fuga animi officiis quisquam cumque minus voluptates accusantium perspiciatis dolorem laboriosam aspernatur harum placeat quasi cum velit? Provident dolor, libero, consequuntur itaque voluptatibus tenetur assumenda natus quod rem sunt doloribus voluptate dignissimos eos. Facilis maxime commodi reiciendis, eaque vel saepe quos suscipit provident corporis, praesentium sequi! Quidem, quod reprehenderit quaerat doloremque quibusdam dolorum accusantium iste praesentium ratione excepturi rem nihil deleniti, quos amet. Perferendis quis aliquam voluptatum ut iste repellat deserunt, ea deleniti voluptatibus consequuntur nam debitis sunt aut! Voluptates, harum magnam!</Typography> 
      </Box>
    </>
  );
}
