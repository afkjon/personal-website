require('dotenv').config(); 

// Handles /contact API requests
export default async function handler(req, res) {
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

  // Construct Email wtih data
  const mailData = {
    from: process.env.CONTACT_FORM_EMAIL,
    to: process.env.CONTACT_FORM_INBOX_EMAIL,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }  
  
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else {
        console.log(info);

        // Send a response back to the user
        res.status(200)
          .send({message: 'Your message was sent successfully!'});
        return resolve();
      }
    })  
  })
}