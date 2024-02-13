const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'oladeler@gmail.com',
        password: '',
    },
    });

    // Define the email options
    const mailOptions = {
    from: 'oladeler@gmail.com',
    to: 'oladeler@hotmail.com',
    subject: 'Test Email',
    text: 'This is a test email from Node.js using nodemailer.',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
