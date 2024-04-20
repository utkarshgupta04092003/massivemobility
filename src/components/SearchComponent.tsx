import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '7px',
    border: '2px solid grey',
    color: 'grey',
    marginLeft: 0,
    width: '100%',
    height: '55px',
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
    width: '150%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(2, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '50%',
    },
}));

export default function SearchComponent() {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search by company name..."
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}
