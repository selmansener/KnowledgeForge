import { CssBaseline, Grid2 as Grid, ThemeProvider } from "@mui/material";
import { RouteConfig } from "../router/routes";
import { Header } from "./shared/Header";
import { ScrollRestoration } from "react-router-dom";
import React from "react";
import { defaultTheme } from "../themes/default";

export function AuthenticatedLayout() {
    return <React.Fragment>
        <ThemeProvider theme={defaultTheme}  >
            <CssBaseline enableColorScheme />
            <Header />
            <Grid>

            </Grid>
        </ThemeProvider>
        <ScrollRestoration />
    </React.Fragment>
}


export const authenticatedRoutes: RouteConfig = {
    path: "/",
    element: <AuthenticatedLayout />,
    isPublic: false,
}