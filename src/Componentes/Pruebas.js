import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';



const Ops = [
    {
      Nombre: 'Datos Medicos',
      id:1,
     
    },
    {
      Nombre: 'Referencias Personales',
      id:2,
    },
    {
        Nombre: 'Marco familiar',
        id:3,
    }, 
    {
        Nombre: 'Datos de la vivienda',
        id:4,
    },
    {
        Nombre: 'Área económica',
        id:5,
    }

  ];

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log(checked);
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {Ops.map((value) => {
        const labelId = value.Nombre;

        return (
          <ListItem
            key={value.id}
            
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={value.id} primary={value.Nombre} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}