"use strict";
const axios = require("axios");
const baseurl = "https://bard.rizzy.eu.org";

/**
 * @typedef {Class} BardAI
 * @see {Hercai}
 * @param {Class} BardAI
 * @example const { BardAI } = require("bardai");
 * @example import { BardAI } from "bardai";
 * @type {Class}
 * @class
 */
class BardAI {
  constructor() {}

  /**
   * The Question You Want to Ask Artificial Intelligence.
   * @param {Object} options Options for the question.
   * @param {string} options.ask - The Question You Want to Ask Artificial Intelligence.
   * @example const bardAI = new BardAI();
   * bardAI.question({ ask: "Who is Elon Musk?" });
   * @type {Promise<Object>} The response from the AI.
   */
  async question({ ask }) {
    // Check if 'ask' is truthy
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
   * @example const bardAI = new BardAI();
   * bardAI.questionWithImage({ ask: "What is in this image?", image: "https://telegra.ph/file/c34c149838ae6a1768897.jpg" });
   * @type {Promise<Object>} The response from the AI.
   */
  async questionWithImage({ ask, image }) {
    // Check if 'ask' and 'image' are truthy
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

module.exports = BardAI;
