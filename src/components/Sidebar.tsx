'use client';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import { sideBarClasses } from '../styles/styles';
import { sidebarProps } from '../../types';
import {sidebarData} from '../data/data';
import Image from 'next/image';

export default function Sidebar({selected}: sidebarProps) {
  const [open, setOpen] = React.useState(false);
  const icon = <SendIcon />
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={sideBarClasses.sidebar}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={sideBarClasses.sideBarLogo}>
          <Image src={'/logo.svg'} height={50} width={50} alt='logo'/>
          <p>Climate Angels</p>
        </ListSubheader>
      }
    >

      {sidebarData?.map((data, index) => (
        < >

          {
            data?.childern != null ?
              <ListItemButton sx={index == selected ? sideBarClasses.selectedListItem : sideBarClasses.listItem} onClick={handleClick}>
                <ListItemIcon>
                  {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.text} />
                {data?.childern != null && (open ? <ExpandLess /> : <ExpandMore />)}

              </ListItemButton>
              :
              <ListItemButton sx={index == selected ? sideBarClasses.selectedListItem : sideBarClasses.listItem} >
                <ListItemIcon>
                  {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.text} />
                {data?.childern != null && (open ? <ExpandLess /> : <ExpandMore />)}

              </ListItemButton>
          }
         

          {data?.childern != null && <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{pl:4}}>
              <ListItemButton sx={sideBarClasses.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          }
        </>
      ))}



    </List>
  );
}
