import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Collapse,
} from '@mui/material';
import {
    Close as CloseIcon,
    ExpandLess,
    ExpandMore,
    Menu as MenuIcon,
} from '@mui/icons-material';
import logo from '../../../../assets/logo3.png';
import { NAVITEMS } from '../../../../constant/homeConstant';

function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleDropdownToggle = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <>
            <AppBar
                position="fixed"
                color="default"
                elevation={1}
                sx={{ backgroundColor: 'white', color: 'black' }}
            >
                <Toolbar>
                    <Box display="flex" alignItems="center" flexGrow={1}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: 45, borderRadius: '50%', marginRight: 8 }}
                        />
                        <Typography
                            variant="h6"
                            component="a"
                            href="/"
                            sx={{
                                textDecoration: 'none',
                                color: '#010851',
                                fontWeight: 'bold',
                                fontSize: 22,
                                display: { xs: 'flex', md: 'block' },
                                alignItems: 'center',
                            }}
                        >
                            Thee Castable
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 2,
                            justifyContent: 'flex-end',
                        }}
                    >
                        {NAVITEMS.map((item, index) => (
                            <Box key={index} sx={{ position: 'relative', margin: 0 }}>
                                {item.dropdown ? (
                                    <Button
                                        onClick={() => handleDropdownToggle(item.name)}
                                        endIcon={
                                            activeDropdown === item.name ? <ExpandLess /> : <ExpandMore />
                                        }
                                        sx={{
                                            color: 'black',
                                            textTransform: 'none',
                                            fontSize: '17px',
                                            padding: '2px 4px',
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                ) : (
                                    <Button
                                        href={item.href}
                                        sx={{
                                            color: 'black',
                                            textTransform: 'none',
                                            fontSize: '17px',
                                            padding: '2px 4px',
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                )}

                                {item.dropdown && activeDropdown === item.name && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            backgroundColor: 'white',
                                            boxShadow: 3,
                                            borderRadius: 1,
                                            zIndex: 10,
                                            mt: 0.2,
                                        }}
                                    >
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <Button
                                                key={subIndex}
                                                href={subItem.href}
                                                sx={{
                                                    display: 'block',
                                                    textAlign: 'left',
                                                    width: '100%',
                                                    color: 'black',
                                                    px: 1.5,
                                                    py: 0.2,
                                                    textTransform: 'none',
                                                    fontSize: '16px'

                                                }}
                                            >
                                                {subItem.name}
                                            </Button>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        ))}

                        <Button
                            href="/Sign"
                            sx={{
                                color: 'black',
                                textTransform: 'none',
                                fontSize: '17px',
                                padding: '2px 26px',
                            }}
                        >
                            Sign In
                        </Button>
                        <Button
                            href="/SideBar"
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                border: '2px solid #010851',
                                textTransform: 'none',
                                fontSize: '18px',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                '&:hover': {
                                    backgroundColor: '#010851',
                                    color: 'white',
                                },
                            }}
                        >
                            Get Started
                        </Button>

                    </Box>

                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>


            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        boxShadow: 3,
                    },
                }}
            >
                <Box sx={{ width: '100%', p: 2 }}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ mb: 2 }}
                    >
                        <Box display="flex" alignItems="center">
                            <img
                                src={logo}
                                alt="Logo"
                                style={{ width: 40, borderRadius: '50%', marginRight: 8 }}
                            />
                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    textDecoration: 'none',
                                    color: '#010851',
                                    fontWeight: 'bold',
                                    fontSize: '17px',
                                }}
                            >
                                Thee Castable
                            </Typography>
                        </Box>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List sx={{ mt: 2 }}>
                        {NAVITEMS.map((item, index) => (
                            <Box key={index}>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => handleDropdownToggle(item.name)}>
                                        <ListItemText
                                            primary={item.name}
                                            sx={{ fontSize: '17px', margin: 0 }}
                                        />
                                        {item.dropdown &&
                                            (activeDropdown === item.name ? (
                                                <ExpandLess />
                                            ) : (
                                                <ExpandMore />
                                            ))}
                                    </ListItemButton>
                                </ListItem>

                                {item.dropdown && (
                                    <Collapse
                                        in={activeDropdown === item.name}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <ListItem key={subIndex} disablePadding>
                                                    <ListItemButton
                                                        component="a"
                                                        href={subItem.href}
                                                        sx={{ pl: 3 }}
                                                    >
                                                        <ListItemText
                                                            primary={subItem.name}
                                                            sx={{ fontSize: '16px', margin: 0 }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                                <Divider />
                            </Box>
                        ))}
                    </List>

                    <Box sx={{ mt: 2 }}>
                        <Button
                            fullWidth
                            href="/Sign"
                            sx={{
                                color: 'black',
                                fontSize: '17px',
                                mb: 1,
                            }}
                        >
                            Sign In
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            href="/SideBar"
                            sx={{
                                backgroundColor: '#010851',
                                color: 'white',
                                fontSize: '17px',
                                padding: '6px 10px',
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

export default NavBar;
