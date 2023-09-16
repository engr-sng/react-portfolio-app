import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProfileList: React.FC = () => {
    return(
        <>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    <Typography component="h2" variant="h2">
                        Profile
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ width: "100%" }}>
                        <img style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="/images/common/profile_image.jpg" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ width: "100%", paddingLeft: {sx: "0px", md: "30px"} }}>
                        <Typography variant="body2" color="text.secondary">
                            <p>中小企業である人材会社で営業とキャリアアドバイザーからキャリアをスタートし、東証一部上場企業の総合商社である大手グループ企業で人事業務全般に従事。</p>
                            <p>その後、HR Techのベンチャー企業やホスティングサービス業界でトップシェアを誇る企業にて人事組織の立ち上げに参画。人事機能の基盤作りを中心に人事戦略を立案し、採用戦略・教育企画・評価制度・労働環境の整備など多岐にわたり実施。</p>
                            <p>様々な経験を経てモノづくりに携わりたい思いを実現すべく技術者として生きる道を決意し、人事マネージャーからWebエンジニアへジョブチェンジ。現在はWeb開発を中心に携わらせていただいています。</p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    <Button variant="contained" size="large">
                        LearnMore
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default ProfileList;