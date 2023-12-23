const Bardie = require('../lib/bardie');
const bard = new Bardie();

async function call() {
  try {
    let result = await bard.question({ ask: "hi" });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

call();
