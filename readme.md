# Google <a href="https://bard.rizzy.eu.org/"><img src="https://camo.githubusercontent.com/adb54264fe2ad5067d07d0752fc32600b4e6250073b01ce8c386575b431e3f06/68747470733a2f2f7777772e677374617469632e636f6d2f6c616d64612f696d616765732f66617669636f6e5f76315f31353031363063646466663766323934636533302e737667" height="20px"></a> Bard API

<p align="center">
<a target="_blank" href="https://bard.rizzy.eu.org"><img src="https://www.gstatic.com/lamda/images/favicon_v1_70c80ffdf27202fd2e84f.png" alt="" width="169" /></a>
</p>
<p align="center">
<a target="_blank" href="https://github.com/rizzlogy"><img title="Author" src="https://img.shields.io/badge/Author-RizzyFuzz-blue.svg?style=for-the-badge&logo=github" /></a>
<br>
<a target="_blank" href="https:////npmjs.com/bardie"><img src="https://img.shields.io/npm/dw/bardie?color=blue&label=Downloads&logo=npm&style=flat"></a>
<br>
<a target="_blank" href="https://www.npmjs.com/package/bardie?activeTab=versions"><img src="https://img.shields.io/npm/v/bardie?color=green&label=version&logo=npm&style=social"></a>
</p>

# Note

ID<br>
Jika Ada Bug,<br>
Silahkan Buat [Issues](https://github.com/rizzlogy/BardAI/issues/new)

EN<br>
If there are bugs,<br>
please create [Issues](https://github.com/rizzlogy/BardAI/issues/new)
#

# Installation
**🔲 Installation For CLI**
```bash
npm i bardie -g
```
#
**📂 Installation**
```bash
npm i bardie
```
#
# Quick Example
### **Example Question To Send Bard API Request**
```js
const { BardAI } = require('bardie');
const bard = new BardAI();

async function call() {
  try {
    let result = await bard.questionWithImage({
      ask: "hi",
    });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

call();
```
> Response:
```js
{
  content: 'Hi there! How can I help you today?\r\n' +
    '\r\n' +
    'I am happy to answer your questions, help you with your tasks, or just have a conversation.',
  status: 200,
  creator: 'RizzyFuzz'
}
```
### **Example Question With Image To Send Bard API Request**
```js
const { BardAI } = require('bardie');
const bard = new BardAI();

async function call() {
  try {
    let result = await bard.questionWithImage({
      ask: "explain the error in this picture",
      image: "https://telegra.ph/file/b97fd7e8c626a0c03af8e.jpg"
    });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

call();
```
> Response:
```js
{
  content: 'The image you sent shows an error message:\r\n' +
    '\r\n' +
    '```\r\n' +
    'Error: Request failed with status code 413\r\n' +
    'at createError (/home/container/node_modules/axios/lib/core/createError.js:16:15)\r\n' +
    'at settle (/home/container/node_modules/axios/lib/core/settle.js:17:12)\r\n' +
    'at IncomingMessage.handleStreamEnd (/home/container/node_modules/axios/lib/adapters/http.js:293:11)\r\n' +
    'at IncomingMessage.emit (node:events:529:35)\r\n' +
    'at endReadableNT (node:internal/streams/readable:1368:12)\r\n' +
    'at process.processTicksAndRejections (node:internal/process/task_queues:82:21)\r\n' +
    '{\r\n' +
    '  config: {\r\n' +
    '    transitional: {\r\n' +
    '      silentJSONParsing: true,\r\n' +
    '      forcedJSONParsing: true,\r\n' +
    '      clarifyTimeoutError: false\r\n' +
    '    }\r\n' +
    '  }\r\n' +
    '}\r\n' +
    '```\r\n' +
    '\r\n' +
    'This error message means that the HTTP request that was made was too large for the server to handle. This can happen if you are trying to upload a very large file, or if you are submitting a form with a lot of data.\r\n' +
    '\r\n' +
    'To fix this error, you can try to reduce the size of your request. For example, you can try compressing your file before uploading it, or you can split your form into multiple submissions.\r\n' +
    '\r\n' +
    'Here are some additional tips for fixing a 413 error:\r\n' +
    '\r\n' +
    "* Check the server's documentation to see if there is a maximum file size limit. If there is, try to reduce the size of your file below that limit.\r\n" +
    '* If you are using a content management system (CMS) like WordPress, make sure that the file size limit is set high enough.\r\n' +
    '* If you are using a proxy server, check to make sure that it is configured to allow large requests.\r\n' +
    '* If you are still having problems, contact your web hosting provider for assistance.\r\n',
  status: true,
  creator: 'RizzyFuzz'
}
```
#
**Example CLI Command Usage**
```bash
bardie "Who is Elon Musk?"
```
**Example CLI Command With Url Image Usage**
```bash
bardie --image "What is in this image?" "https://telegra.ph/file/b97fd7e8c626a0c03af8e.jpg"
```

**[Bardie](https://npmjs.com/bardie) Also Supports Typescript & EsModule 🥳!**
