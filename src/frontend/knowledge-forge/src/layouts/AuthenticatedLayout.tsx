import { Box, Container, CssBaseline, Grid2 as Grid, ThemeProvider } from "@mui/material";
import { RouteConfig } from "../router/routes";
import { Header } from "./shared/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import React from "react";
import { defaultTheme } from "../themes/default";
import { Footer } from "./shared/Footer";

export function AuthenticatedLayout() {
    return <React.Fragment>
        <ThemeProvider theme={defaultTheme}  >
            <CssBaseline enableColorScheme />
            <Header />
            <Container maxWidth="lg" disableGutters sx={{
                minHeight: `${window.visualViewport!.height - 214}px`
            }}>
                <Outlet />
            </Container>
            <Footer />
        </ThemeProvider>
        <ScrollRestoration />
    </React.Fragment>
}

const PostsPage = React.lazy(() => import("../pages/posts/Posts"));
const LogoutPage = React.lazy(() => import("../pages/auth/Logout"));

export const authenticatedRoutes: RouteConfig = {
    path: "/",
    element: <AuthenticatedLayout />,
    isPublic: false,
    leafNodes: [
        {
            path: "",
            element: <PostsPage />
        },
        {
            path: "logout",
            element: <LogoutPage />
        }
    ]
}