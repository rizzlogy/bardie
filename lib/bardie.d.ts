export = bardie;

/**
 * @typedef {Class} bardie
 * @see {bardie}
 * @param {Class} bardie
 * @example const { bardie } = require("bardie");
 * @example import { bardie } from "bardie";
 * @type {Class}
 * @class
 */
declare class bardie {
  constructor();

  /**
   * The Question You Want to Ask Artificial Intelligence.
   * @param {Object} options Options for the question.
   * @param {string} options.ask - The Question You Want to Ask Artificial Intelligence.
   * @example const bard = new bardie();
   * bard.question({ ask: "Who is Elon Musk?" });
   * @type {Promise<Object>} The response from the AI.
   */
  question(options: { ask: string }): Promise<Object>;

  /**
   * The Question You Want to Ask Artificial Intelligence.
   * @param {Object} options Options for the question.
   * @param {string} options.ask - The Question You Want to Ask Artificial Intelligence.
   * @param {string} options.image - URL of the image.
   * @example const bard = new bardie();
   * bard.questionWithImage({ ask: "What is in this image?", image: "https://telegra.ph/file/c34c149838ae6a1768897.jpg" });
   * @type {Promise<Object>} The response from the AI.
   */
  questionWithImage(options: { ask: string, image: string }): Promise<Object>;
}

// Ensure the namespace is empty if not used
declare namespace bardie {}
