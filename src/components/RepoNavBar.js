import { Container, Toolbar, Typography, Box, Menu, MenuItem, Button, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { styled } from '@mui/system';




export default function RepoNavBar({ }) {
    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const open = Boolean(anchorElNav);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }


    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#744253' }}>
            <Toolbar >
                <BakeryDiningIcon fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#f8c630' }} />
                <Typography
                    variant="h5"
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Borel, cursive',
                        fontWeight: 200,
                        letterSpacing: '.3rem',
                        color: '#f8c630',
                        textDecoration: 'none'
                    }}
                >
                    REPOSTERÍA ÁNGELES</Typography>
                <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        onClick={() => router.push('/listaprecios')}
                        sx={{ my: 2, color: '#f8c630', fontFamily: 'Borel', fontSize: '18px', }}
                        data-testid="desktop-prices-button"
                    >Precios</Button>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, textAlign: 'center', margin: '0', paddingTop: '0' }} >
                    <IconButton
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        aria-label='open-menu'
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon fontSize="large" sx={{ mr: 1, color: '#f8c630' }} />
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            mr: 0,
                            fontFamily: 'Borel, cursive',
                            fontWeight: 200,
                            color: '#f8c630',
                            textAlign: 'center',
                            marginBottom: '0',
                            alignSelf: 'center'
                        }}
                    >Repostería Ángeles</Typography>
                    <Menu
                        id="menu-appbar"
                        data-testid="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={open}
                        onClose={handleCloseNavMenu}
                        elevation={2}
                        MenuListProps={{ disablePadding: true }}
                        sx={{
                            display: { xs: 'block', md: 'none' }, margin: '0'
                        }}


                    >
                        <MenuItem
                            sx={{ backgroundColor: '#744253', margin: '0', padding: '0' }}
                            data-testid='menu-item'
                        >
                            <Typography
                                textAlign="center"
                                component="a"
                                href="#"
                                onClick={() => router.push('/listaprecios')}
                                sx={{
                                    color: '#f8c630', backgroundColor: '#744253', padding: '20px 10px', margin: '0',
                                }}
                                data-testid="mobile-prices-button"
                            >Precios</Typography>
                        </MenuItem>

                    </Menu>

                </Box>
            </Toolbar>



        </AppBar>
    );

};