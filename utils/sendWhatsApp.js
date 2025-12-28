const axios = require("axios");

module.exports = async (name, email, phone, message) => {
  await axios.post(
    `https://api.ultramsg.com/${process.env.WA_INSTANCE}/messages/chat`,
    {
      to: process.env.ADMIN_WHATSAPP,
      body: `New Contact Query

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
    },
    {
      params: {
        token: process.env.WA_TOKEN,
      },
    }
  );
};
