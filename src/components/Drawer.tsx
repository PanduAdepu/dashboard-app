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
import { makeStyles, createStyles } from "@mui/styles";
import { createSvgIcon } from '@mui/material/utils';

// import {ReactComponent as Money} from './Money.svg';

// creating svg icons
const MoneyIcon = createSvgIcon (
    <>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84716 8.5L7.9662 8.5C8.1942 8.5 8.37903 8.70987 8.37903 8.96875C8.37903 9.22763 8.1942 9.4375 7.9662 9.4375H6.84733C6.69134 9.43768 6.55734 9.56337 6.52774 9.73729C6.49815 9.91113 6.58117 10.0844 6.72575 10.1506V10.1506L7.86214 10.667C8.3737 10.9007 8.66754 11.5134 8.5629 12.1281C8.45827 12.7428 7.98452 13.1871 7.43311 13.1875H6.31489C6.08689 13.1875 5.90206 12.9776 5.90206 12.7188C5.90206 12.4599 6.08689 12.25 6.31489 12.25H7.43254C7.58858 12.2499 7.72264 12.1242 7.75225 11.9502C7.78184 11.7764 7.69883 11.6031 7.55427 11.5369V11.5369L6.41784 11.0205C5.90629 10.7868 5.61244 10.1741 5.71708 9.55939C5.82172 8.94466 6.29575 8.50044 6.84716 8.5Z" fill="#757575"/>
        <path d="M6.72575 10.1506C6.58117 10.0844 6.49815 9.91113 6.52774 9.73729C6.55734 9.56337 6.69134 9.43768 6.84733 9.4375H7.9662C8.1942 9.4375 8.37903 9.22763 8.37903 8.96875C8.37903 8.70987 8.1942 8.5 7.9662 8.5L6.84716 8.5C6.29575 8.50044 5.82172 8.94466 5.71708 9.55939C5.61244 10.1741 5.90629 10.7868 6.41784 11.0205L7.55427 11.5369M6.72575 10.1506V10.1506ZM6.72575 10.1506L7.86214 10.667C8.3737 10.9007 8.66754 11.5134 8.5629 12.1281C8.45827 12.7428 7.98452 13.1871 7.43311 13.1875H6.31489C6.08689 13.1875 5.90206 12.9776 5.90206 12.7188C5.90206 12.4599 6.08689 12.25 6.31489 12.25H7.43254C7.58858 12.2499 7.72264 12.1242 7.75225 11.9502C7.78184 11.7764 7.69883 11.6031 7.55427 11.5369M7.55427 11.5369V11.5369Z" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14061 8.03125C7.36861 8.03125 7.55344 8.24112 7.55344 8.5V8.96875C7.55344 9.22763 7.36861 9.4375 7.14061 9.4375C6.91261 9.4375 6.72778 9.22763 6.72778 8.96875V8.5C6.72778 8.24112 6.91261 8.03125 7.14061 8.03125Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14061 12.25C7.36861 12.25 7.55344 12.4599 7.55344 12.7188V13.1875C7.55344 13.4464 7.36861 13.6562 7.14061 13.6562C6.91261 13.6562 6.72778 13.4464 6.72778 13.1875V12.7188C6.72778 12.4599 6.91261 12.25 7.14061 12.25Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83789 6.15625C3.83789 5.89737 4.02272 5.6875 4.25072 5.6875H10.0303C10.2583 5.6875 10.4432 5.89737 10.4432 6.15625C10.4432 6.41513 10.2583 6.625 10.0303 6.625H4.25072C4.02272 6.625 3.83789 6.41513 3.83789 6.15625Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4547 1.41732C6.60785 1.15659 6.86559 1 7.1416 1C7.41764 1 7.67541 1.15663 7.82855 1.4174L8.10544 1.8943L9.15128 1.30179C9.46907 1.12168 9.8527 1.19252 10.1038 1.47769C10.355 1.76286 10.4174 2.19845 10.2588 2.55929L9.4671 4.35708C9.36514 4.58863 9.11716 4.68249 8.91324 4.56671C8.70931 4.45094 8.62665 4.16937 8.72861 3.93782L9.52002 2.14061L8.4742 2.7331C8.10184 2.9441 7.64931 2.80751 7.41846 2.41435L7.1416 1.93751L6.86171 2.41389C6.63093 2.80754 6.17772 2.94458 5.80527 2.73285C5.16561 2.39236 4.77352 2.12689 4.76411 2.14121L5.53697 3.90282C5.63894 4.13437 5.55628 4.41594 5.35235 4.53171C5.14842 4.64749 4.90045 4.55363 4.79848 4.32208L4.02169 2.55804C3.86424 2.19719 3.92719 1.76251 4.1781 1.4779C4.43057 1.19151 4.8209 1.12337 5.13655 1.30138L6.17447 1.8943L6.4547 1.41732Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60332 7.19442C4.78236 7.35471 4.81307 7.64945 4.67191 7.85274L3.28472 9.85048C2.62349 10.8281 2.50831 12.1473 2.98778 13.2534C3.46869 14.3628 4.42898 15.0619 5.54602 15.0619H8.73306C9.83729 15.0619 10.8108 14.3618 11.2913 13.2534C11.77 12.1491 11.656 10.8325 10.9977 9.85536L9.53498 7.86263C9.38901 7.66376 9.41266 7.36818 9.5878 7.20243C9.76295 7.03669 10.0233 7.06354 10.1692 7.26241L11.6373 9.26241C11.6407 9.2671 11.6441 9.27186 11.6473 9.2767C12.5016 10.5376 12.6508 12.2401 12.0321 13.6674C11.414 15.0932 10.1549 15.9994 8.73306 15.9994H5.54602C4.10937 15.9994 2.86461 15.0922 2.24699 13.6674C1.62828 12.2401 1.77747 10.5376 2.63175 9.2767L2.63475 9.27227L2.63477 9.2723L4.02354 7.2723C4.1647 7.069 4.42428 7.03413 4.60332 7.19442Z" fill="#757575" stroke="#757575" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
    </>,
    'Money'
);

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
            text: 'Loans',
            icon: <MoneyIcon />
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
            text: "Self Service"
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