import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MV from "../../assets/images/mv.jpg"
import Skill from "../../components/Skill"

const Top: React.FC = () => {
    const setSkillLists = [
        {
            labels: ["HTML / CSS ", "SASS / SCSS", "JavaScript", "TypeScript", "React", "Next.js"],
            datasets: [{
                label: "Front-End",
                data: [3, 3, 2, 2, 2, 2],
                fill: true,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(75, 192, 192, 1.0)",
            }],
        },
        {
            labels: ["PHP", "Laravel", "Ruby", "Ruby on Rails", "python", "Django"],
            datasets: [{
                label: "Back-End",
                data: [3, 3, 3, 3, 2, 2],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1.0)",
            }]
        },
        {
            labels: ["AWS", "GCP", "Linux", "Windows", "Nginx", "Apache"],
            datasets: [{
                label: "DevOps",
                data: [2, 1, 2, 1, 2, 2],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1.0)",
            }]
        }
    ];

    const setSkillChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            r: {
                max: 3,
                min: 0,
                ticks: {
                    stepSize: 1
                },
            },
        }
    }

    return(
        <>
            <Box sx={{ height: "65vh", backgroundImage: "url(" + MV + ")", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                <Container maxWidth='md' sx={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%) translateY(-50%)" }}>
                    <Grid container rowSpacing={2} columnSpacing={2} sx={{ textAlign: "center",color: "#FFFFFF", textShadow: "1px 1px 3px #000000" }}>
                        <Grid item xs={12} md={12}>
                            <Typography component="h2" variant="h2">
                                MVタイトル
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography>
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Button variant="contained" size="large" sx={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)" }}>
                    LearnMore
                </Button>
            </Box>
            <Box>
                <Container maxWidth='md'>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                            <Typography component="h2" variant="h2">
                                Skill
                            </Typography>
                        </Grid>
                        {setSkillLists.map((data) => {
                            return (
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ width: "100%", height: {xs: "400px", md: "200px"} }}>
                                        <Skill options={setSkillChartOptions} data={data}/>
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
                </Container>
            </Box>
            <Box>
                <Container maxWidth='md'>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                            <Typography component="h2" variant="h2">
                                Production
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                            <Button variant="contained" size="large">
                                LearnMore
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container maxWidth='md'>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                            <Typography component="h2" variant="h2">
                                Profile
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                            <Button variant="contained" size="large">
                                LearnMore
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container maxWidth='md'>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                            <Typography component="h2" variant="h2">
                                Contact
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ height: 400, backgroundColor: 'red' }}></Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Top;