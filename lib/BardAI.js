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
   * @param {string} options.ask The Question You Want to Ask Artificial Intelligence.
   * @example const bardAI = new BardAI();
   * bardAI.question({ ask: "Who is Elon Musk?" });
   * @type {Promise<Object>} The response from the AI.
   */
  async question({ ask }) {
    if (!ask || ask === undefined || ask === null) {
      throw new Error("Please specify a question!");
    }
    try {
      const response = await axios.post(baseurl + "/api/onstage", {
        ask,
      }, {
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
   * The Status You want to get from bard.rizzy.eu.org.
   * @example const bardAI = new BardAI();
   * bardAI.status();
   * @type {Promise<Object>} The status response from bard.rizzy.eu.org.
   */
  async status() {
    try {
      const response = await axios.get(baseurl + "/status", {
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