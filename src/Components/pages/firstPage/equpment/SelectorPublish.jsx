import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectorPublish() {
  const [age, setAge] = React.useState('');
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
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
        >
            {CategoryList.map((item)=>{
              
                return <MenuItem key={item.id} value={item.namee}>{item.namee}</MenuItem>
            }
            )}

        </Select>
      </FormControl>
    </Box>
  );
}