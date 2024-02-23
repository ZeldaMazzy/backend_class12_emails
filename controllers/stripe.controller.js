const stripe = require("stripe")(process.env.STRIPE_KEY);

const purchase = async (req, res) => {
	try {
		const { totalAmount, shippingFee } = req.body;
		if(totalAmount == undefined || shippingFee == undefined) {
			throw new Error("Amount and Shipping must be defined");
		};

		const orderAmount = totalAmount + shippingFee;

		const payment = await stripe.paymentIntents.create({
			amount: orderAmount,
			currency: 'usd'
		});

		res.status(201).json({ message: "Payment Successful", payment: payment.client_secret })
	} catch(e) {
		res.status(400).send("There was a problem processing the payment: " + e.message);
	}
}

module.exports = { purchase };