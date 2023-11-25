// bardAI.d.ts

export = BardAI;

/**
 * @typedef {Class} BardAI
 * @see {BardAI}
 * @param {Class} BardAI
 * @example const { BardAI } = require("bardie");
 * @example import { BardAI } from "bardie";
 * @type {Class}
 * @class
 */
declare class BardAI {
  constructor();

  /**
   * The Question You Want to Ask Artificial Intelligence.
   * @param {Object} options Options for the question.
   * @param {string} options.ask - The Question You Want to Ask Artificial Intelligence.
   * @example const bardAI = new BardAI();
   * bardAI.question({ ask: "Who is Elon Musk?" });
   * @type {Promise<Object>} The response from the AI.
   */
  question(options: { ask: string }): Promise<Object>;

  /**
   * The Question You Want to Ask Artificial Intelligence.
   * @param {Object} options Options for the question.
   * @param {string} options.ask - The Question You Want to Ask Artificial Intelligence.
   * @param {string} options.image - URL of the image.
   * @example const bardAI = new BardAI();
   * bardAI.questionWithImage({ ask: "What is in this image?", image: "https://telegra.ph/file/c34c149838ae6a1768897.jpg" });
   * @type {Promise<Object>} The response from the AI.
   */
  questionWithImage(options: { ask: string, image: string }): Promise<Object>;
}

// Ensure the namespace is empty if not used
declare namespace BardAI {}
