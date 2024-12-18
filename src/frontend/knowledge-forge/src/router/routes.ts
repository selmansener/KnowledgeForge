import React from "react";
import { authenticatedRoutes } from "../layouts/AuthenticatedLayout";
import { unauthenticatedRoutes } from "../layouts/UnauthenticatedLayout";

enum Environments {
    Production = "production",
    Staging = "staging",
    Int = "int",
    Development = "development"
}

enum Roles {
    Admin = "Admin"
}

export interface RouteConfig {
    path: string;
    element: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    isPublic?: boolean;
    roles?: string[];
    disabledEnvironments?: Environments[];
    leafNodes?: RouteConfig[];
    loading?: React.ReactNode;
    error?: React.ReactNode;
    menuItem?: {
        name: string;
        icon: React.ReactNode;
    }
}

export const routes: RouteConfig[] = [
    unauthenticatedRoutes,
    authenticatedRoutes,
];