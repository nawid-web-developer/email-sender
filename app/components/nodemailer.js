import * as nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export const mailOptions = {
  from: "navidarefi85@gmail.com",
  to: "nawidwebdeveloper@gmail.com",
};
