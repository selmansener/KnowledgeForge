import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/loading/loading";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { config } from "../../config";
import { authSlice } from "../../store/auth/auth";
import { Alert, Snackbar } from "@mui/material";
import { useTranslation } from "react-i18next";

const AuthenticatedInner = (props: React.PropsWithChildren) => {
    const { t } = useTranslation();
    const token = useAppSelector((state) => state.auth.token);
    const dispatch = useAppDispatch();
    const {
        user,
        getAccessTokenSilently,
        isLoading
    } = useAuth0();

    useEffect(() => {
        if (!token && !isLoading) {
            getAccessTokenSilently({
                authorizationParams: {
                    audience: config.authConfig.audience,
                    redirect_uri: config.authConfig.redirectUri
                }
            }).then(response => {
                console.log(response);
                // TODO: validate jwt
                dispatch(authSlice.actions.setToken(response))
            }).catch(err => {
                // TODO: handle err
                console.log(err);
            });
        }
    }, [token, isLoading]);

    return <React.Fragment>
        {props.children}
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={user && !user.email_verified}
        >
            <Alert
                closeText=""
                severity="warning"
                variant="filled"
                sx={{
                    width: '100%'
                }}
            >
                {t("Auth.VerificationMessage")}
            </Alert>
        </Snackbar>
    </React.Fragment>
}

const AuthenticatedWrapper = withAuthenticationRequired(AuthenticatedInner, {
    onRedirecting: () => <Loading />
})

export const Authenticated = (props: React.PropsWithChildren) => {
    const { isAuthenticated } = useAuth0();

    return <React.Fragment>
        {isAuthenticated && <AuthenticatedWrapper {...props} />}
    </React.Fragment>
}