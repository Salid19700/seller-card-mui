import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Bar } from "../firstPage/equpment/Bar";
import { MediaCard } from "./equpment/mediaCard";


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
      ]
  ];
  return (
    <>
      <Bar />
      <Box sx={{ flexGrow: 1, justifyContent: "space-around" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MediaCard
              banner={List[0][0]}
              dec={List[0][1]}
              title={List[0][2]}
              description={List[0][3]}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              banner={List[1][0]}
              dec={List[1][1]}
              title={List[1][2]}
              description={List[1][3]}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              banner={List[2][0]}
              dec={List[2][1]}
              title={List[2][2]}
              description={List[2][3]}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              banner={List[3][0]}
              dec={List[3][1]}
              title={List[3][2]}
              description={List[3][3]}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              banner={List[4][0]}
              dec={List[4][1]}
              title={List[4][2]}
              description={List[4][3]}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              banner={List[5][0]}
              dec={List[5][1]}
              title={List[5][2]}
              description={List[5][3]}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              banner={List[6][0]}
              dec={List[6][1]}
              title={List[6][2]}
              description={List[6][3]}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              banner={List[7][0]}
              dec={List[7][1]}
              title={List[7][2]}
              description={List[7][3]}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              banner={List[8][0]}
              dec={List[8][1]}
              title={List[8][2]}
              description={List[8][3]}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
