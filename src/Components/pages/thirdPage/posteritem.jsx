import { Outlet, useParams } from "react-router-dom";
import { Boxleft } from "./boxleft";
import { Barr } from "../firstPage/equipment/Bar";
import { BoxRight } from "./boxright";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

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

export function PosterItem() {
  return (
    <>
      <Barr />
      <div style={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between'}}>
      <BoxRight title="phone" />
      <Boxleft image="https://placehold.co/600x800" />
      </div>

    </>
  );
}
