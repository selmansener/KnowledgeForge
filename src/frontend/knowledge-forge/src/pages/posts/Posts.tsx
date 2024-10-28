import { Grid2 as Grid } from "@mui/material";
import { PostItem } from "./components/PostItem";

export default function Posts() {
    return <Grid container spacing={2} size={12}>
        <PostItem />
    </Grid>
}