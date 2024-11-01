import { Container, Grid2 as Grid, MenuItem, Paper, Select, SelectChangeEvent, Typography, useColorScheme } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ColorLensIcon from '@mui/icons-material/ColorLens';


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


export function Footer() {



    return <Paper sx={{
        minHeight: "150px",
        mt: 4
    }}>
        <Container maxWidth="lg" disableGutters>
            <Grid container spacing={2}>
                <Grid>
                    <ColorLensIcon />
                    <ModeSwitcher />
                    <LangSwitcher />
                </Grid>
            </Grid>
        </Container>
    </Paper>
}