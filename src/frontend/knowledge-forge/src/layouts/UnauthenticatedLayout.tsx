import { Box, Container, CssBaseline, Grid2 as Grid, ThemeProvider, useTheme } from "@mui/material";
import { RouteConfig } from "../router/routes";
import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./shared/Header";
import { defaultTheme } from "../themes/default";
import { Footer } from "./shared/Footer";

export function UnauthenticatedLayout() {

    return <React.Fragment>
        <ThemeProvider theme={defaultTheme} >
            <CssBaseline enableColorScheme />
            <Header />
            <Container maxWidth="lg" disableGutters  sx={{
                minHeight: `${window.visualViewport!.height - 214}px`
            }}>
                <Outlet />
            </Container>
            <Footer />
        </ThemeProvider>
        <ScrollRestoration />
    </React.Fragment>
}

const LandingPage = React.lazy(() => import("../pages/landing/Landing"));

export const unauthenticatedRoutes: RouteConfig = {
    path: "/",
    element: <UnauthenticatedLayout />,
    isPublic: true,
    leafNodes: [
        {
            path: "",
            element: <LandingPage />,
        }
    ]
}