#!/usr/bin/env node
"use strict";
const axios = require("axios");
const baseurl = "https://bard.rizzy.eu.org";

async function quest(content, isImage = false) {
  try {
    if (!content || content === undefined || content === null) {
      console.error("\x1b[38;5;160mPlease specify a question or image URL!\x1B[0m ");
      return;
    }

    const endpoint = isImage ? "/api/onstage/image" : "/api/onstage";
    const requestData = isImage ? { ask: content, image: content } : { ask: content };

    const response = await axios.post(
      baseurl + endpoint,
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    console.log("\x1b[38;5;46mBardAI:\x1b[33m " + data.content + "\x1B[0m");
  } catch (err) {
    console.error("\x1b[38;5;160mError:\x1B[0m " + err.message);
  }
}

// Extract command line arguments excluding the first two (node and script path)
const [, , ...args] = process.argv;

// Check if --image flag is present
const isImage = args.includes("--image");

// Remove --image flag from arguments if present
const contentIndex = args.indexOf("--image");
const contentArgs = contentIndex !== -1 ? args.slice(0, contentIndex).concat(args.slice(contentIndex + 2)) : args;

const content = contentArgs.join(" ");

quest(content, isImage);
