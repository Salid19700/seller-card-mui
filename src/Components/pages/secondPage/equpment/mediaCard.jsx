import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { PosterItem } from "../../thirdPage/posteritem";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export function MediaCard(props) {
  return (
    <>
    <Link to="/poster/77">
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.banner}
          title={props.dec}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </Link>
    <Routes>
      <Route path=":posterId" component={PosterItem} />
    </Routes>
    </>
  );
}
