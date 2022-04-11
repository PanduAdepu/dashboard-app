import React from 'react'
import { 
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MailIcon from '@mui/icons-material/Mail';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import { makeStyles, createStyles } from "@mui/styles";

// import {ReactComponent as Money} from './Money.svg';

const useStyles = makeStyles((theme?: any) => createStyles({
    muiDrawer: {
        width: "238px"
    }
}));

const Drawer = () => {
    const itemsList = [
        {
            text: 'Dashboard',
            icon: <HomeOutlinedIcon />
        },
        {
            text: 'Loans'
        },
        {
            text: 'Education Allowance',
            icon: <SchoolOutlinedIcon />
        },
        {
            text: 'Employee Expenses CLaims'
        },
        {
            text: "Non LPD Claims"
        },
        {
            text: "Self Service",
            icon: <TouchAppOutlinedIcon/>
        }
    ];
    const classes = useStyles();
  return (
    <MUIDrawer variant="permanent" open className={classes.muiDrawer}>
        <List>
        {itemsList.map((item, index) => {
            const { text, icon } = item;
            return (
            <ListItem button key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
            </ListItem>
        )})}
        </List>
    </MUIDrawer>
  )
}

export default Drawer