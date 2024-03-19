const { Bardie } = require("../lib/bardie");
const bard = new Bardie();

async function askQuestionWithImage() {
	try {
		let result = await bard.questionGemini({
			ask: "Keep it simple... What is this image?",
			image: "https://i.imgur.com/OgoPlnf.png"
		});
		console.log(result);
	} catch (error) {
		console.error("Error:", error.message);
	}
};

askQuestionWithImage();
