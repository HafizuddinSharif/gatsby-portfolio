import * as React from "react"

// Components
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const BukuPythonPemula = () => {

    const navbarItem = [
        {
            title: 'Projects',
            url: '/#projects'
        },
        {
            title: 'Contact',
            url: '/#contact'
        },
        {
            title: 'FAQ',
            url: '/faq'
        },
        {
            title: 'Books',
            url: '/buku-python-pemula'
        }

    ]

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , color: 'white' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{  }}>
                {navbarItem.map((item, index) => (
                    <ListItem key={item.title} disablePadding>
                    <ListItemButton>
                        <AnchorLink to={item.url} className="text-left">{item.title}</AnchorLink>
                    </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider variant='middle' sx={{ backgroundColor: 'white' }}/>

        </Box>
    );

    return (
        <nav className="z-30 fixed lg:px-28 lg:py-3 grid gap-x-4 grid-cols-1 bg-gray-900 w-full">

            <div className="bottom-34 relative z-30 font-bold text-center text-white py-4 lg:py-0 lg:text-left bg-gray-900 grid grid-cols-2 lg:grid-cols-12 w-full px-5 lg:px-0">
                <a href="/" className="text-left lg:col-span-2">Hafizuddin Sharif</a>

                <button className="hidden lg:inline-block text-center lg:col-span-2 lg:text-right text-white">
                    <AnchorLink to="/#projects" >Projects</AnchorLink>
                </button>
                <button className="hidden lg:inline-block text-center lg:col-span-2 lg:text-right text-white">
                    <AnchorLink to="/#contact" >Contact</AnchorLink>
                </button>
                <button className="hidden lg:inline-block text-center lg:col-span-2 lg:text-right text-white">
                    <AnchorLink to="/faq" >FAQ</AnchorLink>
                </button>
                <button className="hidden lg:inline-block text-center lg:col-span-2 lg:text-right text-white">
                    <AnchorLink to="/buku-python-pemula" >Books</AnchorLink>
                </button>

                <a href="https://blog.hafizuddinsharif.com" className="hidden lg:inline-block lg:col-span-2 lg:text-right text-white text-center pb-5 lg:pb-0" target="_blank" rel="noreferrer">
                    Blog&nbsp;<svg className="inline" fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="18px" height="18px"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                </a>

                <div className="flex lg:hidden justify-end">
                    <React.Fragment key={'right'}>
                        <Button onClick={toggleDrawer('right', true)} sx={{ padding: 0, fontSize: 12, color: 'white' }}>
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px" className="ml-auto">
                                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/> 
                            </svg>
                        </Button>
                        <Drawer
                            PaperProps={{
                                sx: {
                                  backgroundColor: "#111827",
                                }
                            }}
                            anchor='right'
                            open={state['right']}
                            onClose={toggleDrawer('right', false)}
                        >
                            {list('right')}
                        </Drawer>
                    </React.Fragment>
                </div>
            </div>

            
            
            
            

        </nav>

        
    )
}

export default BukuPythonPemula
