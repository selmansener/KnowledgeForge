import { Container, Grid2 as Grid, Paper } from "@mui/material";

export function Footer() {
    return <Paper sx={{
        minHeight: "150px",
        mt: 4
    }}>
        <Container maxWidth="lg" disableGutters>
            <Grid container spacing={2}>

            </Grid>
        </Container>
    </Paper>
}