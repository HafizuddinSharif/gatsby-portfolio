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
            title: 'Faq',
            url: '/faq'
        },

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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
        {navbarItem.map((item, index) => (
            <ListItem key={item.title} disablePadding>
            <ListItemButton>
                <AnchorLink to={item.url} className="text-left">{item.title}</AnchorLink>
            </ListItemButton>
            </ListItem>
        ))}
        </List>
        <Divider />
    </Box>
    );

    return (
        <nav className="z-30 fixed lg:px-28 lg:py-3 grid gap-x-4 grid-cols-1 bg-gray-900 w-full">

            <div className="bottom-34 relative z-30 font-bold text-center text-white py-4 lg:py-0 lg:text-left bg-gray-900 grid grid-cols-2 w-full px-5 lg:px-0">
                <a href="/" className="text-left">Hafizuddin Sharif</a>

                <div className="">
                    <React.Fragment key={'right'}>
                        <Button onClick={toggleDrawer('right', true)}>Right</Button>
                        <Drawer
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
