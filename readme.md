# Google <a href="https://bard.google.com/"><img src="https://camo.githubusercontent.com/adb54264fe2ad5067d07d0752fc32600b4e6250073b01ce8c386575b431e3f06/68747470733a2f2f7777772e677374617469632e636f6d2f6c616d64612f696d616765732f66617669636f6e5f76315f31353031363063646466663766323934636533302e737667" height="20px"></a> Bard API

#
# Installation
**🔲 Installation For CLI**
```bash
npm i BardAI -g
```
#
**📂 Installation**
```bash
npm i BardAI
```
#
# Quick Example
#

**Example Question For CommonJS**
```js
/* Importing The Package */

const { BardAI } = require('BardAI');
const bard = new BardAI();

/*Send Request Message:*/
return bard.question({ ask: "hi" })
/*
Result:
{
  content: 'Hi there! How can I help you today?\r\n' +
    '\r\n' +
    'I am happy to answer your questions, help you with your tasks, or just have a conversation.',
  status: 200,
  creator: 'RizzyFuzz'
}
*/

/*Get Status From Server:*/
return bard.status()
/*
Result:
{
  stats: {
    ping: '0.0116 s',
    cpu: 'Intel(R) Xeon(R) Processor @ 2.50GHz (2x)',
    platfrom: 'linux',
    arch: 'x64',
    memoryRAM: '201.83 MB / 1.16 GB',
    runtime: '52 seconds'
  },
  status: 'Always On 🟢',
  creator: 'RizzyFuzz ©Vercel Inc.'
}
*/
```
#
**Example Interface And Usage For TypeScript;**
```ts
import { BardAI } from "BardAI";

const bard = new BardAI();

/*Send Request Message:*/
return bard.question({ ask: "hi" })
/*
Result:
{
  content: 'Hi there! How can I help you today?\r\n' +
    '\r\n' +
    'I am happy to answer your questions, help you with your tasks, or just have a conversation.',
  status: 200,
  creator: 'RizzyFuzz'
}*/

/*Get Status From Server:*/
return bard.status()
/*
Result:
{
  stats: {
    ping: '0.0116 s',
    cpu: 'Intel(R) Xeon(R) Processor @ 2.50GHz (2x)',
    platfrom: 'linux',
    arch: 'x64',
    memoryRAM: '201.83 MB / 1.16 GB',
    runtime: '52 seconds'
  },
  status: 'Always On 🟢',
  creator: 'RizzyFuzz ©Vercel Inc.'
}
*/
```
#
**Example CLI Command Usage;**
```hs
bard <Your Question>
```
**[BardAI](https://bard.rizzy.eu.org) Also Supports TypeScript And EsModule 🥳!**
