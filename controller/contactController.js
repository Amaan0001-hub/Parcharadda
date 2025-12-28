const Contact = require("../models/contactModel");
const sendEmail = require("../utils/sendEmail");
//const sendWhatsApp = require("../utils/sendWhatsApp");

exports.submitForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 1️⃣ Save to MongoDB
    await Contact.create({ name, email, phone, message });

    // 2️⃣ Email
    await sendEmail(name, email, phone, message);

    // 3️⃣ WhatsApp
    // await sendWhatsApp(name, email, phone, message);

    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
