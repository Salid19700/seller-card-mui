import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useCity } from "../../../../Hooks/useCity";
import { useState } from "react";

export function MainSelector(props) {
  const [cityName, setCityName] = useState("");
  const [holecity, setHoleCity] = useState("");

  function provenceVisible(event){
    setCityName(event.value.target);

  }
  function cityvisible(id) {
    setHoleCity(id);
  }

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={cityName}
      label="Age"
      onChange={provenceVisible}
    >
      {/*
        {props.provence.map((item, index) => {
          return (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cityName}
              label="Age"
              onChange={setCityName}
            >
              <MenuItem>
                {item.map((inneritem, innerindex) => {
                  return <span>{inneritem}</span>;
                })}
              </MenuItem>
            </Select>
          );
        })}


        
    */}

    {/* {      {props.citty[holecity].map((item, index) => {
        console.log(holecity);
        return (
          <MenuItem key={index} value={item}>
            {item.map((inneritem, innerindex) => {
              return <span key={innerindex}>{inneritem}</span>;
            })}
          </MenuItem>
        );
      })}} */}
    </Select>
  );
}
