import { useAuth0 } from "@auth0/auth0-react";
import { Grid2 as Grid } from "@mui/material";
import { useEffect } from "react";

export default function Logout() {
    const { logout } = useAuth0();

    useEffect(() => {
        logout();
    }, []);

    return <Grid>
        Logout
    </Grid>
}