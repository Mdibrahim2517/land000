import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Avatar, Box, CssBaseline, IconButton, Stack, Toolbar, useMediaQuery } from '@mui/material';

import Breadcrumbs from 'components/Extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import navigation from 'menuItems';
import { drawerWidth, ROUTES } from 'utils/constant';
import { ChevronRight } from '@mui/icons-material';
import { setMenu } from 'store/slices/customizationSlice';
import { getAuthToken } from 'utils/storage.utils';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ open }) => {
    const theme = useTheme();
    return {
        ...theme.typography.mainContent,
        ...(!open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`,
            [theme.breakpoints.down('md')]: {
                marginLeft: '20px',
                width: `calc(100% - ${drawerWidth}px)`,
                padding: '16px',
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: '10px',
                width: `calc(100% - ${drawerWidth}px)`,
                padding: '16px',
                marginRight: '10px',
            },
        }),
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
            width: `calc(100% - ${drawerWidth}px)`,
        }),
    };
});

const MainLayout = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    const leftDrawerOpened = useSelector((state) => state.customization?.opened);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = getAuthToken();
        if (!token) {
            navigate(ROUTES.ROOT);
        }
    }, [navigate]);

    const handleLeftDrawerToggle = () => {
        dispatch(setMenu({ opened: !leftDrawerOpened }));
    };

    useEffect(() => {
        dispatch(setMenu({ opened: !matchDownMd }));
    }, [dispatch, matchDownMd]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={1}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: theme.transitions.create('width'),
                }}
            >
                <Toolbar>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                        <IconButton>
                            <Avatar alt="Profile" />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <Main open={leftDrawerOpened}>
                <Breadcrumbs separator={ChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
            </Main>
        </Box>
    );
};

export default MainLayout;