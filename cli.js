#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const baseurl = "https://bard.rizzy.eu.org";
quest(`${process.argv.slice(2)}`);
async function quest(content) {
  if (!content || content == undefined || content == null)
    return console.error("\x1b[38;5;160mPlease specify a question!\x1B[0m ");
  try {
    var api = await axios.post(baseurl + "/api/onstage", {
      ask: content,
      headers: {
        "content-type": "application/json",
      },
    });
    var data = api.data;
    return console.log(
      "\x1b[38;5;46mBardAI:\x1b[33m " + data.content + "\x1B[0m",
    );
  } catch (err) {
    console.error("\x1b[38;5;160mError:\x1B[0m " + err.message);
  }
}
