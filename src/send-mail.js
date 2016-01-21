'use strict';

var nodemailer = require('nodemailer');
var fs = require('fs');
 
// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport('smtps://leistane%40gmail.com:quadricolor@smtp.gmail.com');
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: 'Leistane<leistane@gmail.com>', // sender address 
    to: 'herbert.de.vaucanson@gmail.com', // list of receivers 
    subject: 'Hello ✔', // Subject line 
    html: fs.readFileSync('./src/mail-presentation.html')
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});