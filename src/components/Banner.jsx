import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import Banneimg from './Banneimg';
import bannerimg from '../assets/bannerImg.png';
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
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
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Banner() {
    return (
        <div className='banner_wrapper wrapper'>
            <div className='banner_content'>
                <h2>Find the perfect job for you</h2>
                <p>Search your career opportunity through 12,800 jobs</p>
                <form class="example" action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><AiOutlineSearch /></button>
                </form>

                <h4>Popular Searches</h4>
                <ul>
                    <li>Designer</li>
                    <li>Writer</li>
                    <li>Team leader</li>
                    <li>Senior</li>
                    <li>Web designer</li>
                </ul>

            </div>
            <div className='bannerimg_wrap'>
                <img src={bannerimg} alt="" />
            </div>
        </div>
    )
}

export default Banner