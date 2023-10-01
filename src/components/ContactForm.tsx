import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleEmailchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleMessagechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setIsSending(true);
            // 送信する処理
            await axios.post('http://localhost:3001/send-mail', {
                email: email,
                message: message,
            })
            console.log("メールが送信されました。")
            // メール送信が終わったあと
            setEmailSent(true);
        } catch (error) {
            console.log(error);
        } finally {
            setIsSending(false);
        };
        console.log('送信されたメール：', email)
        console.log('送信されたメッセージ：', message)
    };

    return(
        <>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    <Typography component="h2" variant="h2">
                        Contact
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    {emailSent ? (
                        <Box sx={{ width: "100%", textAlign: "center" }}>
                            メールが送信されました。
                        </Box>
                    ) : (
                        <Stack sx={{ width: "100%" }} component="form" spacing={2} onSubmit={handleSubmit} autoComplete="off">
                            <TextField required fullWidth label="メールアドレス" name="email" variant="outlined" value={email} onChange={handleEmailchange} />
                            <TextField required fullWidth multiline rows={4} label="お問い合わせ内容" name="message" variant="outlined" value={message} onChange={handleMessagechange} />
                            {isSending ? (
                                <Button variant="contained" color="primary">
                                    <CircularProgress />
                                </Button>
                            ) : (
                                <Button type="submit" variant="contained" color="primary">
                                    送信
                                </Button>
                            )}
                        </Stack>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default ContactForm;