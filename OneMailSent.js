
require('dotenv').config();

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const log = console.log;

// Step 1
const auth = {
    auth: {
        api_key: process.env.MAIL_GUN_API_KEY || 'mailgun_api_key', // TODO: 
        domain: process.env.MAIL_GUN_DOMAIN || 'mailgun_domain' // TODO:
    }
};

// Step 2
let transporter = nodemailer.createTransport( mailGun(auth) );


// Step 3
let mailOptions = {
    from: 'khanduriemanav@gmail.com', // TODO: email sender
    to: 'manavkhandurie@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});