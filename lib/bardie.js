"use strict";
const axios = require("axios");
const baseurl = "https://bard.rizzy.eu.org";

/**
 * @typedef {Class} Bardie
 * @see {Bardie}
 * @param {Class} Bardie
 * @example const { Bardie } = require("bardie");
 * @example import { Bardie } from "bardie";
 * @type {Class}
 * @class
 */
class Bardie {
  constructor() {}

  /**
   * The Question You Want to Ask Artificial Intelligence.
   * @param {Object} options Options for the question.
   * @param {string} options.ask - The Question You Want to Ask Artificial Intelligence.
   * @example const bard = new bardie();
   * bard.question({ ask: "Who is Elon Musk?" });
   * @type {Promise<Object>} The response from the AI.
   */
  async question({ ask }) {
    if (!ask) {
      throw new Error("Please specify a question!");
    }
    try {
      const response = await axios.post(baseurl + "/api/onstage", { ask }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err) {
      throw new Error("Error: " + err.message);
    }
  }

  /**
   * The Question You Want to Ask Artificial Intelligence.
   * @param {Object} options Options for the question.
   * @param {string} options.ask - The Question You Want to Ask Artificial Intelligence.
   * @param {string} options.image - URL of the image.
   * @example const bard = new bardie();
   * bard.questionWithImage({ ask: "What is in this image?", image: "https://telegra.ph/file/c34c149838ae6a1768897.jpg" });
   * @type {Promise<Object>} The response from the AI.
   */
  async questionWithImage({ ask, image }) {
    if (!ask) {
      throw new Error("Please specify a question!");
    }
    if (!image) {
      throw new Error("Please specify a URL for the image!");
    }
    try {
      const response = await axios.post(baseurl + "/api/onstage/image", { ask, image }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err) {
      throw new Error("Error: " + err.message);
    }
  }
}

module.exports = Bardie;
