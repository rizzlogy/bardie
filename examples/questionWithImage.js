const Bardie = require('../lib/bardie');
const bard = new Bardie();

async function call() {
	try {
		let result = await bard.questionWithImage({
			ask: "BE VERY SIMPLE. What is in the picture? And what colour is it?",
			image: "https://i.imgur.com/OpdQ5yY.jpg"
		});
		console.log(result);
	} catch (error) {
		console.error("Error:", error.message);
	}
};

call();
