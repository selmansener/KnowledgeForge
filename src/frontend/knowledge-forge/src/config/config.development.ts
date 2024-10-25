import { AuthConfig } from "./shared";

export interface EnvConfig {
    socialMediaLinks: {
        instagram: string;
        facebook: string;
        twitter: string;
        linkedIn: string;
    },
    authConfig: AuthConfig;
    api: string;
}

export const config: EnvConfig = {
    socialMediaLinks: {
        instagram: "https://www.instagram.com/modilistcom/",
        facebook: "https://www.facebook.com/modilistcom",
        twitter: "https://twitter.com/modilistcom",
        linkedIn: "https://www.linkedin.com/company/modilist/"
    },
    authConfig: {
        domain: "selman-personal.eu.auth0.com",
        clientId: "Fwa753w2BpErTcVb4bi1AGIUsUVh8aXG",
        redirectUri: "http://localhost:3000",
        audience: "https://academyplus.com",
        scopes: [
            "openid", 
            "profile", 
            "email",
            "read:playlists"
        ]
    },
    api: "https://localhost:7296"
};