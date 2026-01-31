import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "nawidwebdeveloper@gmail.com",
      subject: name,
      text: message,
    });

    console.log("Email sent successfully!");
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send email!" });
  }
});

export default router;
