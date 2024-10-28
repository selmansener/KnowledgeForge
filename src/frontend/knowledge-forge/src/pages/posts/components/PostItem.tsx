import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';

export function PostItem() {

    return <Grid container spacing={2} size={12}>
        <Grid size={8} display="flex" flexDirection="column" justifyContent="space-between">
            <Box display="flex" alignItems="center" sx={{
                mb: 2
            }}>
                <Avatar sx={{
                    mr: 2
                }} />
                <Typography variant="h3">
                    Author Name
                </Typography>
            </Box>
            <Typography variant="h4">
                Post Title
            </Typography>
            <Typography sx={{
                flexGrow: 1
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet maximus vulputate. Aenean rhoncus cursus libero, at mattis odio auctor et. Donec congue augue sed leo congue iaculis. Morbi eleifend scelerisque turpis, nec tincidunt neque ullamcorper ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Typography>
            <Grid container spacing={2} size={12}>
                <Grid size={2} display="flex">
                    <FavoriteIcon fontSize="small" />
                    <Typography variant="body2" ml={2}>
                        25.5K
                    </Typography>
                </Grid>
                <Grid size={2} display="flex">
                    <VisibilityIcon fontSize="small" />
                    <Typography variant="body2" ml={2}>
                        5.8K
                    </Typography>
                </Grid>
                <Grid size={2} display="flex">
                    <CommentIcon fontSize="small" />
                    <Typography variant="body2" ml={2}>
                        26
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid size={4}>
            <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s" />
        </Grid>
    </Grid>
}