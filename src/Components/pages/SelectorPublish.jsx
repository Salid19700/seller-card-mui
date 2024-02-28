import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectorPublish() {
  const [age, setAge] = React.useState('');
  const CategoryList =[
    "املاک",
    "وسایل نقلیه",
    "کالای دیجیتال",
    "خاناشپزخانه",
    "حدمات",
    "وسایل شخصی",
    "سرگرمی و فراقت",
    "اجتمایی",
    "تجهیزاتو صنعتی",
    "استخدام و کاریابی"
  ]
  const handleChange = (event) => {
    setAge(event.target.value);
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
            {CategoryList.map((text,index)=>{
                return <MenuItem key={text}>{text}</MenuItem>
            }
            )}

        </Select>
      </FormControl>
    </Box>
  );
}