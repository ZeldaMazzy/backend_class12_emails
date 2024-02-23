const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
	try {
		const emailer = nodemailer.createTransport({
		    host: 'smtp.ethereal.email',
		    port: 587,
		    auth: {
		        user: 'una25@ethereal.email',
		        pass: 'F4Y4w9mcWvMb7Wj4te'
		    }
		});

		const emailToSend = await emailer.sendMail({
			from: '"Codefi Code Coach" <una25@ethereal.email>',
			to: 'zelda@zeldamazur.com',
			subject: 'Test',
			html: '<b>Hello, this is a test</b>'
		})

		res.status(201).json({ message: "Email Sent", email: emailToSend });
	} catch(e) {
		res.status(400).send("There was a problem sending the email: " + e.message);
	}
}

module.exports = {
	sendEmail
}