const nodemailer = require("nodemailer");

module.exports = async (name, email, phone, message) => {
 const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS, 
  },
});

  await transporter.sendMail({
    from: email,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Form Submission",
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`,
  });
};
