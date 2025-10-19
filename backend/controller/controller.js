import nodemailer from "nodemailer";
import generateEmailTemplate from "../template/template.js";

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Recipient email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = generateEmailTemplate({ name, message });

    const mailOptions = {
      from: `"MyApp Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ message: "Email sent successfully!", data: info });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
};

export default sendEmail;
