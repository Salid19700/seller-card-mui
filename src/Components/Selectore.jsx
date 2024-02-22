import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useCity } from '../Hooks/useCity';


export function SelectorCity() {
  const [cityName, setCityName] = useCity('');

  return (
    
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">CITY-NAME</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cityName}
          label="Age"
          onChange={setCityName}
        >
          <MenuItem value={'Tehran'}>Tehran</MenuItem>
          <MenuItem value={'Arāk'}>Arāk</MenuItem>
          <MenuItem value={'Kondor'}>Kondor</MenuItem>
          <MenuItem value={'Lūlamān'}>Lūlamān</MenuItem>
          <MenuItem value={'Shahrestānak'}>Shahrestānak</MenuItem>
          <MenuItem value={'Kūcheşfahān'}>Kūcheşfahān</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
