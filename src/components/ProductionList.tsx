import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MediaList from "./MediaCard";

const ProductionList: React.FC = () => {
    const setMediaList = [
        {
            'title': 'タイトル1',
            'description': "タイトル1の説明が入ります。",
            'image': "/images/production/production-001.png",
        },
        {
            'title': 'タイトル2',
            'description': "タイトル3の説明が入ります。",
            'image': "/images/production/production-002.png",
        },
        {
            'title': 'タイトル3',
            'description': "タイトル3の説明が入ります。",
            'image': "/images/production/production-003.png",
        }
    ];

    return(
        <>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    <Typography component="h2" variant="h2">
                        Production
                    </Typography>
                </Grid>
                {setMediaList.map((data) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <Box sx={{ width: "100%" }}>
                                <MediaList title={data.title} description={data.description} image={data.image} />
                            </Box>
                        </Grid>
                    );
                })}
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    <Button variant="contained" size="large">
                        LearnMore
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default ProductionList;