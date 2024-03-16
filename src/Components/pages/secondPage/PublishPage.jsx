import * as React from "react";
import Box from "@mui/material/Box";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { TextPublish } from "./equpment/TextPublish";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { SelectorPublish } from "./../firstPage/equipment/SelectorPublish";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { ButtonPublish } from "./equpment/ButtonPublish";
import { Barr } from "../firstPage/equipment/Bar";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function PublishPage() {

  const CategoryList =[
    {
      namee: "املاک",
      id: 1
    },
    {
      namee: "وسایل نقلیه",
      id: 2
    },
    {
      namee: "کالای دیجیتال",
      id: 3
    },
    {
      namee: "خاناشپزخانه",
      id: 4
    },
    {
      namee: "حدمات",
      id: 5
    },
    {
      namee: "وسایل شخصی",
      id: 6
    },
    {
      namee: "سرگرمی و فراقت",
      id: 7
    },
    {
      namee: "اجتمایی",
      id: 8
    },
    {
      namee: "تجهیزاتو صنعتی",
      id: 9
    },
    {
      namee: "استخدام و کاریابی",
      id: 10
    },
  ]

  return (
    <>
    <Barr />
      <Box
        height={600}
        width={500}
        my={4}
        display="flex"
        margin=" -30px auto"
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
            <SelectorPublish catList={CategoryList}/>
          </Grid>
          <Grid item xs={8}>
            <Link to='/'><ButtonPublish /></Link>
          </Grid>
          <Grid>
          <Button variant="outlined">Publishing</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
