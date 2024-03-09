import { Outlet, useParams } from "react-router-dom";
import { Bar } from "../firstPage/equpment/Bar";
import { Boxleft } from "./boxItem";

export function PosterItem(){

    return(<>
      <Bar />
      <Boxleft image='https://placehold.co/600x400'/>
      
    </>
        );
}