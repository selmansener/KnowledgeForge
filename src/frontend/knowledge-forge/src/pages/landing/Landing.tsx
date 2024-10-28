import { Container, Grid2 as Grid, Paper, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Landing() {
    const { t } = useTranslation();

    return <Grid container spacing={4} size={12}>
        <Grid size={12}>
            <Typography variant="h3" sx={{
                textShadow: "1px 1px 1px #000"
            }}>
                {t("Pages.Landing.Title")}
            </Typography>
        </Grid>
        <Grid size={12}>
            <img src="/landing.webp" style={{
                width: "100%",
                borderRadius: 8
            }} />
        </Grid>
        <Grid size={12}>
            <Paper
                elevation={4}
                sx={{
                    p: 4,
                }}>
                <Typography>
                    {t("Pages.Landing.Description")}
                </Typography>
            </Paper>
        </Grid>
    </Grid>
}