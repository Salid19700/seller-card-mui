import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {SelectorCity} from './SelectorCity';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function ModalCity(){

    const [open, setOpen] = React.useState(false);
    const [prov, setProv] = React.useState("Tehran");
    const [city, setCity] = React.useState('')

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const iranProvinces = [
      ["Alborz",0],
      ["Ardabil",1],
      ["Bushehr",2],
      ["Chaharmahal and Bakhtiari",3],
      ["East Azerbaijan",4],
      ["Isfahan",5],
      ["Fars",6],
      ["Gilan",7],
      ["Golestan",8],
      ["Hamadan",9],
      ["Hormozgan",10],
      ["Ilam",11],
      ["Kerman",12],
      ["Kermanshah",13],
      ["Khuzestan",14],
      ["Kohgiluyeh and Boyer-Ahmad",15],
      ["Kurdistan",16],
      ["Lorestan",17],
      ["Markazi (Central)",18],
      ["Mazandaran",19],
      ["North Khorasan",20],
      ["Qazvin",21],
      ["Qom",22],
      ["Razavi Khorasan",23],
      ["Semnan",24],
      ["Sistan and Baluchestan",25],
      ["South Khorasan",26],
      ["Tehran",27],
      ["West Azerbaijan",28],
      ["Yazd",29],
      ["Zanjan",30]
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
        <div>
        <Button onClick={handleOpen} color="inherit" size='small'>Provence: {prov}</Button>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SelectorCity setProv={setProv} setCity={setCity} provance={iranProvinces} cityes={holeCity}/>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Chose YOUR City
            </Typography>
            <Button onClick={handleClose} >close</Button>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              the city that chosen by you we will find stuff in your city
            </Typography>
          </Box>
        </Modal>
      </div>
    );
}