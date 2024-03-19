"use strict";
const { homepage } = require("../package.json");
const axios = require("axios");
const baseurl = homepage;

/**
  * @typedef {Object} questionOptions
  * @property {string} ask - The question you want to ask the AI. This is a required field.
  * @property {string} [image] - An optional image URL. If provided, the AI will consider the image while answering the question.
*/

/**
  * @typedef {Object} AIResponseData
  * @property {string} content - The content of the response.
  * @property {boolean} status - The status of the response.
  * @property {string} creator - The creator of the response.
*/

/**
  * @typedef {Object} AIResponse
  * @property {AIResponseData} data - The data of the response.
*/

const headers = {
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  Origin: baseurl,
  Referer: baseurl + "/"
};

class Bardie {
  constructor() {}
  /**
    * Ask a question to the artificial intelligence.
    * @param {questionOptions} options - The options for the question.
    * @param {string} options.ask - The question you want to ask the AI. This is a required field.
    * @param {string} [options.image] - An optional image URL. If provided, the AI will consider the image while answering the question.
    * @description Asking a question without an image (Example 1)
    * @example const Bardie = require("bardie");
    * const bard = new Bardie();
    * 
    * bard.question({ ask: "Keep it simple... What is Google Bard?" });
    * @returns {Promise<AIResponseData>} "I'm like a chatty robot friend from Google!
    * I can answer your questions, write stories, translate languages, and more. Think of me as a helpful guide through the world of information."
    * @description Optionally asking a question with an image (Example 2)
    * @example const Bardie = require("bardie");
    * const bard = new Bardie();
    * 
    * bard.question({ ask: "Keep it simple... What is this image?", image: "https://i.imgur.com/OgoPlnf.png" });
    * @returns {Promise<AIResponseData>} "The image you sent me is the logo of Bard, a large language model chatbot developed by Google AI.
    * The logo is made up of two colorful stars, one blue and one orange, on a gray background.
    * The stars are meant to represent the creativity and intelligence of Bard. I hope this helps!"
    * @throws {Error} Throws an error if the API is down, the question is not specified or the image URL is invalid.
  */
  async question(options) {
    if (!options.ask || options.ask === "") {
      throw new Error("The 'ask' option must be a valid question!");
    }
    if (options.image === "" || (options.image && typeof options.image !== "string")) {
      throw new Error("The 'image' option must be a valid URL!");
    }
    try {
      const requestData = { ask: options.ask, image: options.image || null };
      const response = await axios.post(baseurl + "/backend/conversation" + (options.image ? "/image" : ""), requestData, { headers });
      return response.data;
    } catch (err) {
      throw new Error("Error: " + err.message);
    }
  }

  async questionGemini(options) {
    if (!options.ask || options.ask === "") {
      throw new Error("The 'ask' option must be a valid question!");
    }
    if (options.image === "" || (options.image && typeof options.image !== "string")) {
      throw new Error("The 'image' option must be a valid URL!");
    }
    try {
      const requestData = { ask: options.ask, image: options.image || null };
      const response = await axios.post(baseurl + "/backend/conversation/gemini" + (options.image ? "/image" : ""), requestData, { headers });
      return response.data;
    } catch (err) {
      throw new Error("Error: " + err.message);
    }
  }
 
}

module.exports = Bardie;
