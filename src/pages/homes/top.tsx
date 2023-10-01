import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MV from "../../assets/images/mv.jpg"
import SkillList from "../../components/SkillList"
import ProductionList from "../../components/ProductionList"
import ProfileList from "../../components/ProfileList";
import ContactForm from "../../components/ContactForm";

const styles = {
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '60px 0',
    },
};

const Top: React.FC = () => {
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
            <Box sx={styles.boxContainer}>
                <Container maxWidth='md'>
                    <SkillList />
                </Container>
            </Box>
            <Box sx={styles.boxContainer}>
                <Container maxWidth='md'>
                    <ProductionList />
                </Container>
            </Box>
            <Box sx={styles.boxContainer}>
                <Container maxWidth='md'>
                    <ProfileList />
                </Container>
            </Box>
            <Box sx={styles.boxContainer}>
                <Container maxWidth='md'>
                    <ContactForm />
                </Container>
            </Box>
        </>
    );
};

export default Top;