const nodemailer = require("nodemailer");

const styledMailData = require("../helpers/styledMailData");

const sendMailWithNM = async (items) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    let info = await transporter.sendMail({
      from: "cruds",
      to: "faiyazkhan024@gmail.com",
      subject: "Mail From CRUDS Form",
      text: "",
      html: styledMailData(items),
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return { info, url: nodemailer.getTestMessageUrl(info) };
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = sendMailWithNM;
