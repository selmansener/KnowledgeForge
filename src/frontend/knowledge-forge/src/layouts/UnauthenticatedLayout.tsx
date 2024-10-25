import { Box, CssBaseline, Grid2 as Grid, ThemeProvider, useTheme } from "@mui/material";
import { RouteConfig } from "../router/routes";
import React from "react";
import { ScrollRestoration } from "react-router-dom";
import { Header } from "./shared/Header";
import { defaultTheme } from "../themes/default";

export function UnauthenticatedLayout() {

    return <React.Fragment>
        <ThemeProvider theme={defaultTheme} >
            <CssBaseline enableColorScheme />
            <Header />
            <Grid>
            </Grid>
        </ThemeProvider>
        <ScrollRestoration />
    </React.Fragment>
}

export const unauthenticatedRoutes: RouteConfig = {
    path: "/",
    element: <UnauthenticatedLayout />,
    isPublic: true,
}