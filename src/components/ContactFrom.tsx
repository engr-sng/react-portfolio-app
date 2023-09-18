import React, { useState } from "react";
import axios from 'axios';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress'; // スピナーのコンポーネント

const ContactFrom: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [isSendding, setIsSendding] = useState(false); // 送信中かどうかを示す状態

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setIsSendding(true); // 送信中に設定

            await axios.post('http://localhost:3001/send-email', {
                email: email,
                message: message,
            });

            // 送信成功時の処理をここに追加するか、リダイレクトなどを行う
            console.log('メールが送信されました');
            setEmailSent(true); // 送信が成功したことをトラッキング
        } catch (error) {
            // エラーハンドリング
            console.error(error);
        } finally {
            setIsSendding(false); // 送信が完了したら設定解除
        }

        console.log('送信されたメール:', email);
        console.log('送信されたメッセージ:', message);
    };

    return (
        <>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    <Typography component="h2" variant="h2">
                        Contact
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    {emailSent ? (
                        <Box sx={{ width: "100%" }}>メールが送信されました。</Box>
                    ) : (
                        <Stack sx={{ width: "100%" }} component="form" onSubmit={handleSubmit} spacing={2} autoComplete="off">
                            <TextField required fullWidth label="メールアドレス" name="email" variant="outlined" value={email} onChange={handleEmailChange} />
                            <TextField required fullWidth multiline rows={4} label="お問い合わせ内容" name="message" variant="outlined" value={message} onChange={handleMessageChange} />
                            {isSendding ? (
                                <Button variant="contained" color="primary">
                                    <CircularProgress size={24} />
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

export default ContactFrom;