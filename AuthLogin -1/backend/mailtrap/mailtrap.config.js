import nodemailer from "nodemailer";

export const mailtrapClient = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "devendranishad981@gmail.com",
    pass: "klyh ltsi kxyj bapu",
  },
});



// import {MailtrapClient} from "mailtrap"
// import dotenv  from "dotenv";

// dotenv.config()
// const TOKEN = process.env.MAILTRAP_TOKEN;
// const ENDPOINT = process.env.MAILTRAP_ENDPOINT

// export const mailtrapClient = new MailtrapClient({
//     endpoint: ENDPOINT,
//     token: TOKEN,
// });

export const sender =  '"DEVENDRA" <devendranishad981@gmail.com>"'


