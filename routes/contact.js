// require("dotenv").config();
// const express = require("express"),
//       app = express();
// const req = require("request");
// const bodyParser = require("body-parser");
//       app.use(bodyParser.json());
// const router = express.Router();
// const url = require("url");
// const mailgun = require("mailgun-js");
// const nodemailer = require("nodemailer");
// const DOMAIN = process.env.MAILGUN_URL;
// const mg = mailgun({apiKey: process.env.MAILGUN_API, domain: DOMAIN});
// const multer = require("multer");
//
//
// router.get("/", function (req, res) {
//   console.log("Request for contact page recieved");
//   res.render("contact");
// });
//
// router.post("/send", function(req, res) {
// var name = req.body.name;
// var email = req.body.email;
// var enquiry = req.body.enquiry;
// var attachment = req.body.attachment;
//
// var emailMessage = `Hi ${name},\n\nThank you for contacting us.\n\nYour email is: ${email}.\n.\nYour attachment is: ${attachment}.\n\nYour enquiry is: ${enquiry}\n.`;
//
// console.log(emailMessage);
// res.redirect("/contact_send");
//
// let transporter = nodemailer.createTransport({
//     host: "smtp.mailgun.org",
//     port: 587,
//     auth: {
//          user: process.env.MG_SMTP_USERNAME,
//          pass: process.env.MG_SMTP_PASSWORD
//       }
//   });
//
// const mailData = {
//   from: "your name <your@email.com>",
//   to: process.env.GMAIL_URL,
//   subject: "Art Request",
//   html: "your enquiry",
//   attachment: {
//     filename: "example.image.name",
//     filetype: "example.jpg",
//     path: "folder/image.jpg"
//   }
// };
//
// transporter.sendMail(mailData, (err, info) => {
//   if (err) {
//     console.log(err);
//     res.redirect('/contact_send');
//   } else {
//     console.log('Message Sent: ' + info.response);
//     console.log('Email Message: ' + emailMessage);
//     res.redirect('/contact_error');
//   }
// });
// });
// module.exports = router;
