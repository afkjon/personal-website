require('dotenv').config(); 

export default async function contact(req, res) {
  return new Promise(resolve => {
    let nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.CONTACT_FORM_EMAIL,
        pass: process.env.CONTACT_FORM_SECRET,
      }
    })

    transporter.set("oauth2_provision_cb", (user, renew, callback) => {
      let accessToken = userTokens[user];
      if (!accessToken) {
        return callback(new Error("Unknown user"));
      } else {
        return callback(null, accessToken);
      } 
    });

    const mailData = {
      from: process.env.CONTACT_FORM_EMAIL,
      to: process.env.CONTACT_FORM_INBOX_EMAIL,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }  
    
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else {
        console.log(info);
      }
    })  
    
    res
    .status(200)
    .send({message: 'Your message was sent successfully!'});
    return resolve();
  })
} 