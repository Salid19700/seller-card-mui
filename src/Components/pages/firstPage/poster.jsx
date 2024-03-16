import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Bar } from "./equipment/Bar";
import { MediaCard } from "./equipment/mediaCard";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Poster() {
  const List = [
    [ 
      "https://placehold.co/611x1111",
      "iran",
      "hello father",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
    [
      "https://placehold.co/622x1222",
      "iran",
      "hello brother",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
    [
      "https://placehold.co/633x1333",
      "iran",
      "hello mother",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
    [
      "https://placehold.co/644x1444",
      "iran",
      "hello sister",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
    [
      "https://placehold.co/655x1555",
      "iran",
      "hello grand",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
    [
      "https://placehold.co/666x1666",
      "iran",
      "hello uncle",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
    [
      "https://placehold.co/677x1777",
      "iran",
      "hello babe",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
    [
      "https://placehold.co/688x1888",
      "iran",
      "hello bro",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
    [
      "https://placehold.co/699x1999",
      "iran",
      "hello myselfe",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    ],
  ];
  
  return (
    <>
      <Box sx={{ flexGrow: 1, justifyContent: "space-around" }}>
        <Grid container spacing={2}>
          {List.map((item, index) => {
            return (
              <Grid item xs={4}>
                <MediaCard
                  banner={item[0]}
                  dec={item[1]}
                  title={item[2]}
                  description={item[3]}
                  Id= {index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
