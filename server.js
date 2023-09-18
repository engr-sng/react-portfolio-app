const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { email, message } = req.body;

    // メール送信の設定
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // 使用するメールサービスを指定
        auth: {
            user: 'engr.sng@gmail.com', // 送信元のメールアドレス
            pass: 'vjostbnxevshsajl', // 送信元のメールアドレスのパスワード
        },
    });

    const SendMailOptions = {
        from: 'engr.sng@gmail.com', // 送信元のメールアドレス
        to: email, // 送信先のメールアドレス
        subject: 'お問い合わせありがとうございます。', // メールの件名
        text: message, // メールの本文
    };

    const ReceiveMailOptions = {
        from: 'engr.sng@gmail.com', // 送信元のメールアドレス
        to: 'engr.sng@gmail.com', // 送信先のメールアドレス
        subject: 'ホームページからのお問い合わせ', // メールの件名
        text: `Email: ${email}\n\n本文:${message}`, // メールの本文
    };

    try {
        await transporter.sendMail(SendMailOptions); // 送信メール
        await transporter.sendMail(ReceiveMailOptions); // 受信メール
        res.status(200).json({ message: 'メールが送信されました' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'メールの送信に失敗しました' });
    }
});

app.listen(port, () => {
    console.log(`サーバーがポート ${port} で起動しました`);
});
