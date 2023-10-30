const nodemailer = require('nodemailer');
require('dotenv').config();
// Create a Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'smtp.mailgun.org',
  port: 587 , // Use 587 for TLS or 465 for SSL
  auth: {
    user: '',
    pass: ''// Replace with your email password
  }
});

// Define email content
let mailOptions = {
  from: '',
  to: '', // Replace with the recipient's email address
  subject: 'Manav Here',
  text: 'Hello from Manav',
  
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
  }
});

/*
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
require('dotenv').config();
// Mailgun transporter
const auth = {
  auth: {
    api_key: process.env.MAIL_GUN_API_KEY, // Replace with your Mailgun API key
    domain: '' // Replace with your Mailgun domain
  }
};

const transporter = nodemailer.createTransport(mailgunTransport(auth));

// Email content
const mailOptions = {
  from: '',
  to: '',
  subject: 'Success',
  text: 'NodeMailer works!!!'
};

// Sending the email
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
*/
