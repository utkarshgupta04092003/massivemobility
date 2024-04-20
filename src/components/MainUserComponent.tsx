import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '7px',
    border: '2px solid grey',
    color: 'grey',
    marginLeft: 0,
    width: '100%',
    minWidth: '300px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function MainUserComponent() {
    return (
        <Box sx={{ flexGrow: 1, width: '80vw', position : 'fixed', left: '19rem', zIndex: '10' }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none' }}>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Box className='flex items-center'>
                        <Badge badgeContent={4} color="primary" sx={{ marginRight: '20px' }}>
                            <CircleNotificationsIcon sx={{ color: 'lightgrey', fontSize: '40px', position: 'relative', left: '10px', bottom: '2px' }} />
                        </Badge>
                        <Avatar alt="Cindy Baker" src="/user.svg" />
                        <Box className='flex-col mx-5'>
                            <Typography sx={{ color: 'grey' }}>Shailesh Vickram</Typography>
                            <Typography sx={{ color: 'grey', fontSize: 'small' }}>Investor</Typography>

                        </Box>
                        <ArrowDropDownCircleIcon sx={{ color: 'grey', fontSize: '25px' }} />
                    </Box>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
