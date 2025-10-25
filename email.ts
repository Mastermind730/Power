import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // TLS starts automatically
  auth: {
    user: "alex@power.energy", // your full email
    pass: "zitqez-2byZga-wupqes", // password or app password
  },
  tls: {
    ciphers: "SSLv3",
  },
});
