'use strict';

var nodemailer = require('nodemailer');
var fs = require('fs');
 
// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport('smtps://leistane%40gmail.com:quadricolor@smtp.gmail.com');
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: 'Leistane<leistane@gmail.com>', // sender address 
    to: ['herbert.de.vaucanson@gmail.com', 'lionel.armanet@gmail.com', 'sophie.melenotte@gmail.com', 'gauthier.delemme@gmail.com'], // list of receivers 
    subject: 'Leistane dans face (funky!) ✔', // Subject line 
    html: fs.readFileSync('./src/mail-presentation.html'),
    attachments: [{
        filename: 'logo.png',
        path: 'main/images/logo.png',
        cid: 'logo'
    }, {
        filename: 'all.png',
        path: 'src/img/all-mail.jpg',
        cid: 'all'
    }, {
        filename: 'clap.png',
        path: 'src/img/clap-mail.jpg',
        cid: 'clap'
    }, {
        filename: 'lio.png',
        path: 'src/img/lio-mail.jpg',
        cid: 'lio'
    }, {
        filename: 'gau.png',
        path: 'src/img/gauth-mail.jpg',
        cid: 'gau'
    }, {
        filename: 'ju.png',
        path: 'src/img/ju-mail.jpg',
        cid: 'ju'
    }, {
        filename: 'hin.png',
        path: 'src/img/hinhinhin-mail.jpg',
        cid: 'hin'
    }, {
        filename: 'by.png',
        path: 'src/img/byherself-mail.jpg',
        cid: 'by'
    }, {
        filename: 'youtube.png',
        path: 'src/img/youtube.png',
        cid: 'youtube'
    }, {
        filename: 'fb.jpg',
        path: 'src/img/facebook.jpg',
        cid: 'fb'
    }, {
        filename: 'soundcloud.jpg',
        path: 'src/img/soundcloud.jpg',
        cid: 'soundcloud'
    }, {
        filename: 'leistane-fiche-technique.pdf',
        path: 'src/fichtec-23112015.pdf',
        contentType: 'application/pdf'
    }]
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});