const functions = require("firebase-functions")
const nodemailer = require("nodemailer")
const cors = require("cors")({origin: true})
const auth = require("./credentials.json")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, message } = request.body;

    const mailOptions = {
      from: "Contact Us Form <me@josephkim.online>",
      to: "me@josephkim.online",
      replyTo: email,
      subject: `New message received at ${new Date()}`,
      text: `${message}

Reply to this email to respond to ${name}.

Regards,
Contact Us Form`,
      html: `<p>
  ${message}
</p>
<i>
  Reply to this email to respond to ${name}.
</i>
<br />
<p>
  Regards,
</p>
<p>
  Contact Us Form
</p>`
    };

    return transporter.sendMail(mailOptions).then(() => {
      response.send("Success");
    }).catch((error) => {
      response.send("ERROR: " + JSON.stringify(error));
    });
  });
});
