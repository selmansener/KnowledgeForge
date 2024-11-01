import { AppBar, Avatar, Box, Button, Grid2 as Grid, IconButton, Link, MenuItem, Toolbar, Typography, Menu as ProfileMenu, Container } from "@mui/material"
import React, { useMemo } from "react"
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const menuItems = [
    {
        title: "MenuItems.NewPost",
        path: "/new-post",
        isPublic: false
    },
    {
        title: "MenuItems.About",
        path: "/",
        isPublic: true
    }
]

function Menu() {
    const { isAuthenticated } = useAuth0();
    const { t } = useTranslation();
    const _menuItems = useMemo(() => {
        return menuItems.filter(x => x.isPublic != isAuthenticated);
    }, [isAuthenticated]);

    return <Grid container spacing={2} display="flex" justifyContent="flex-end">
        {_menuItems.map(item => {
            return <Grid key={item.title}>
                <Link to={item.path} component={NavLink}>
                    {t(item.title)}
                </Link>
            </Grid>
        })}
    </Grid>
}


const settings = [
    {
        title: 'Profile',
        path: "/"
    },
    {
        title: 'Account',
        path: "/"
    },
    {
        title: 'Dashboard',
        path: "/"
    },
    {
        title: 'Logout',
        path: "/logout"
    }
];

function AuthButton() {
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

    if (isLoading) {
        return;
    }

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = (path: string) => {
        setAnchorElUser(null);

        navigate(path);
    };

    return <React.Fragment>
        {!isAuthenticated && <Button onClick={() => { loginWithRedirect() }}>
            Login
        </Button>}
        {isAuthenticated && <Box><IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="profile" src="/profile.png" />
        </IconButton>
            <ProfileMenu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting.title} onClick={() => handleCloseUserMenu(setting.path)}>
                        <Typography sx={{ textAlign: 'center' }}>{setting.title}</Typography>
                    </MenuItem>
                ))}
            </ProfileMenu>
        </Box>
        }
    </React.Fragment>
}

export function Header() {
    return <AppBar elevation={1}
        position="relative"
        sx={(theme) => ({
            zIndex: theme.zIndex.drawer + 2,
            mb: 4
        })}>
        <Container maxWidth="lg" disableGutters>
            <Toolbar disableGutters sx={{
                width: "100%"
            }}>
                <Grid width={"100%"} size={12} container display="flex" justifyContent="space-between" alignItems="center">
                    <Grid size={2}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexGrow: 1,
                        }}>
                            <Link to="/" component={NavLink}>
                                KnowledgeForge
                            </Link>
                        </Box>
                    </Grid>
                    <Grid size={9}>
                        <Menu />
                    </Grid>
                    <Grid size={1} display="flex" justifyContent="flex-end">
                        <AuthButton />
                    </Grid>
                </Grid>
            </Toolbar>
        </Container>
    </AppBar>
}