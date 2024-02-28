import * as React from "react";
import Box from "@mui/material/Box";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { TextPublish } from "./TextPublish";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { SelectorPublish } from "./SelectorPublish";
import { Link } from "react-router-dom";
import { ButtonPublish } from "./ButtonPublish";
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function PublishPage() {
  return (
    <>
      <Box
        height={600}
        width={500}
        my={4}
        display="flex"
        margin=" 40px auto"
        flexWrap="wrap"
        gap={1}
        p={2}
        borderRadius="10px"
        sx={{ border: "2px solid grey", flexGrow: 1}}
      >
        <Grid container spacing={0}>
          <Grid item xs={8}>
              <AlternateEmailOutlinedIcon />
              added email addres:{" "}
              <TextPublish lablel="email" placeholder="addres@gmail.com" />
          </Grid>
          <Grid item xs={8}>
            <DriveFileRenameOutlineIcon />
            added FullName: <TextPublish lablel="name" placeholder="hi" />
          </Grid>
          <Grid item xs={8}>
            <DriveFileRenameOutlineIcon />
            added Description: <TextPublish lablel="Description" placeholder="hi" />
          </Grid>
          <Grid item xs={5}>
            <SelectorPublish />
          </Grid>
          <Grid item xs={8}>
            <Link to='/'><ButtonPublish/></Link>
          </Grid>
          <Grid>
          <Button variant="outlined">Publishing</Button>
          </Grid>

        </Grid>
      </Box>
    </>
  );
}
