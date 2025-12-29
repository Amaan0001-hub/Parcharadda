// const nodemailer = require("nodemailer");

// module.exports = async (name, email, phone, message) => {
//  const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: false, 
//   auth: {
//     user: process.env.SMTP_USER, 
//     pass: process.env.SMTP_PASS, 
//   },
// });

//   await transporter.sendMail({
//     from: `" Contact to Parcharadda" <${process.env.ADMIN_EMAIL}>`,
//     to: process.env.ADMIN_EMAIL,
//     subject: "New Contact Form Submission",
//     text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Message: ${message}
// `,
//   });
// };
const SibApiV3Sdk = require("sib-api-v3-sdk");

module.exports = async (name, email, phone, message) => {
  try {
    const client = SibApiV3Sdk.ApiClient.instance;

    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = {
      sender: {
        email: process.env.ADMIN_EMAIL,
        name: "Parcharadda Contact",
      },
      to: [
        {
          email: process.env.ADMIN_EMAIL,
          name: "Admin",
        },
      ],
      subject: "New Contact Form Submission",
      textContent: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email sent successfully via Brevo API");

  } catch (error) {
    console.error("❌ Brevo Email Error:", error.response?.body || error.message);
  }
};
