const { Bardie } = require("../lib/bardie");
const bard = new Bardie();

async function askQuestion() {
  try {
    let result = await bard.question({ ask: "Keep it simple... What is Google Bard?" });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

askQuestion();
