import { AppBar, Avatar, Box, Button, Grid2 as Grid, IconButton, Link, MenuItem, Select, SelectChangeEvent, Toolbar, Typography, Menu as ProfileMenu, Container } from "@mui/material"
import React, { useMemo } from "react"
import { config } from "../../config";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { useColorScheme } from '@mui/material/styles';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useAuth0 } from "@auth0/auth0-react";

const menuItems = [
    {
        title: "Test",
        path: "/"
    }
]

function Menu() {
    const { t } = useTranslation();

    return <Grid container spacing={2} display="flex" justifyContent="flex-end">
        {menuItems.map(item => {
            return <Grid key={item.title}>
                <Link to={item.path} component={NavLink}>
                    {t(item.title)}
                </Link>
            </Grid>
        })}
    </Grid>
}

type themeMode = 'light' | 'dark' | 'system';

function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    return (
        <Select
            size="small"
            value={mode}
            onChange={(event) => {
                setMode(event.target.value as themeMode);
            }}
        >
            <MenuItem value="system">System</MenuItem >
            <MenuItem value="light">Light</MenuItem >
            <MenuItem value="dark">Dark</MenuItem >
        </Select>
    );
}

const supportedLanguages = [
    {
        code: "tr",
        lang: "Türkçe",
        iconCode: "tr"
    },
    {
        code: "en",
        lang: "English",
        iconCode: "us"
    },
]

function LangSwitcher() {
    const { i18n } = useTranslation();

    const supportedLanguages = useMemo(() => {
        return [
            {
                code: "tr",
                lang: "Türkçe",
                iconCode: "tr"
            },
            {
                code: "en",
                lang: "English",
                iconCode: "us"
            },
        ];
    }, []);

    const handleLanguageChange = (event: SelectChangeEvent) => {
        let lang;
        switch (event.target.value) {
            case "en":
            case "en-GB":
            case "en-US":
                lang = "en";
                break;
            case "tr":
                lang = "tr";
        }

        i18n.changeLanguage(lang);
    }

    const getLanguage = () => {
        switch (i18n.language) {
            case "en-GB":
            case "en-US":
            case "en":
                return "en";
            case "tr-TR":
            case "tr":
            default:
                return "tr";
        }
    }
    return <Select
        value={getLanguage()}
        onChange={handleLanguageChange}
        size={"small"}
        sx={{ mr: 2 }}
    >
        {supportedLanguages.map(supportedLang => (
            <MenuItem value={supportedLang.code} key={supportedLang.lang}>
                <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${supportedLang.iconCode}.png`}
                    srcSet={`https://flagcdn.com/w40/${supportedLang.iconCode}.png 2x`}
                    alt={supportedLang.code}
                />
                <Typography variant="caption" sx={{ pl: 1 }}>
                    {supportedLang.lang}
                </Typography>
            </MenuItem>
        ))}
    </Select>
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
                    <Grid size={6}>
                        <Menu />
                    </Grid>
                    <Grid size={4}>
                        <Box sx={{
                            ml: 2,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}>
                            <ColorLensIcon />
                            <ModeSwitcher />
                            <LangSwitcher />
                            <AuthButton />
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </Container>
    </AppBar>
}