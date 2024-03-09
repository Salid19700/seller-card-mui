import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useCity } from '../../../../Hooks/useCity';
import { MainSelector } from './mainSelector';


export function SelectorCity() {
  const [cityName, setCityName] = useCity('');
  const iranProvinces = [
    ["Alborz",1],
    ["Ardabil",2],
    ["Bushehr",3],
    ["Chaharmahal and Bakhtiari",4],
    ["East Azerbaijan",5],
    ["Isfahan",6],
    ["Fars",7],
    ["Gilan",8],
    ["Golestan",9],
    ["Hamadan",10],
    ["Hormozgan",11],
    ["Ilam",12],
    ["Kerman",13],
    ["Kermanshah",14],
    ["Khuzestan",15],
    ["Kohgiluyeh and Boyer-Ahmad",16],
    ["Kurdistan",17],
    ["Lorestan",18],
    ["Markazi (Central)",19],
    ["Mazandaran",20],
    ["North Khorasan",21],
    ["Qazvin",22],
    ["Qom",23],
    ["Razavi Khorasan",24],
    ["Semnan",25],
    ["Sistan and Baluchestan",26],
    ["South Khorasan",27],
    ["Tehran",28],
    ["West Azerbaijan",29],
    ["Yazd",30],
    ["Zanjan",31]
  ]; 

  const holeCity=[
    ["karaj","mohammadabad", "kamalabad", "adran", "sayedabad"],
    ["ardabel","parseabade","khalkhal","garmi","bilesavare","namin"],
    ["boshehre","borazjan","bandaregenavee ","bandarkagan "],
    ["shahrekord","brojen","lordegan","farakh","farsan","hafshejan"],
    ["tabriz","basmage","achayee","azarshahre","aghkand"],
    [" esfahan","aranbidgol","khomainishahre"],
    ["shiraz","marvdasht","jahrom","kazeroon"],
    ["bandaranzaly ","astaneashrafeye ","rezvanshahre "],
    ["gorgan"," aghla"," bandartorkaman"],
    ["hamedan","jokar","nahavand"],
    ["arak","saveh","khomein","mohajeran","senejan","delijan"]
  ];


  return (
    
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">iranProvinces</InputLabel>
        <MainSelector provence={iranProvinces} cityy={holeCity} />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">iranCity</InputLabel>
        <MainSelector provence={iranProvinces} cityy={holeCity} />
      </FormControl>

    </Box>
  );
}
