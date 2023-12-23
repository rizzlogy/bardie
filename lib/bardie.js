"use strict";
const { homepage } = require("../package.json");
const axios = require("axios");
const baseurl = homepage;

/**
	* @typedef {Object} questionOptions
	* @property {string} ask - The question you want to ask the artificial intelligence.
	* @property {string} [image] - Optional URL of the image.
*/

/**
	* @typedef {Object} AIResponse
	* @property {string} content - The content of the response.
	* @property {boolean} status - The status of the response.
	* @property {string} creator - The creator of the response.
*/

class Bardie {
  constructor() {}
  /**
  	* Ask a question to the artificial intelligence.
  	* @param {questionOptions} options - The options for the question.
		* @description Example 1:
		* @example
		* const bard = new Bardie();
		* bard.question({ ask: "Keep it simple... What is Google Bard?" });
		* @desciption Example 2 With Image (Optional):
		* @example
		* const bard = new Bardie();
		* bard.question({ ask: "Keep it simple... What is this image?", image: "https://i.imgur.com/OgoPlnf.png" });
  	* @returns {Promise<AIResponse>} The response from the AI.
  	* @throws {Error} If the question is not specified or the image URL is invalid.
  */
  async question(options) {
    if (!options.ask || options.ask === "") {
      throw new Error("The 'ask' option must be a valid question!");
    }
    if (options.image === "" || (options.image && typeof options.image !== "string")) {
      throw new Error("The 'image' option must be a valid URL!");
    }
    try {
      const requestData = options.image ? { ask: options.ask, image: options.image } : { ask: options.ask };
      const response = await axios.post(baseurl + "/backend/conversation" + (options.image ? "/image" : ""), requestData, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Origin: baseurl,
          Referer: baseurl + "/"
        },
      });
      return response.data;
    } catch (err) {
      throw new Error("Error: " + err.message);
    }
  }
}

module.exports = Bardie;
