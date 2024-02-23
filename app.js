//IMPORTS
const express = require('express'); 
const app = express();
const cors = require('cors');
require('dotenv').config();

// * CONFIG
const PORT = 5000; 
const SERVER_URL = `http://localhost:${PORT}`; 

const start = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server is running at: ${SERVER_URL}`);
		});
	} catch(e) {
		console.error("There was an error initializing the app: ", e.message);
	}
}

// * CONTROLLERS
const { sendEmail } = require("./controllers/email.controller");
const { purchase } = require("./controllers/stripe.controller");

// * MIDDLEWARE
app.use(express.json());
app.use(cors());

// * ROUTES
// TEMP
app.get('/', (req, res) => {
	res.send('Stripe / Email API');
});

app.get("/send", sendEmail);
app.post("/purchase", purchase);

// * START
start();