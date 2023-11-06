# Google <a href="https://bard.rizzy.eu.org/"><img src="https://camo.githubusercontent.com/adb54264fe2ad5067d07d0752fc32600b4e6250073b01ce8c386575b431e3f06/68747470733a2f2f7777772e677374617469632e636f6d2f6c616d64612f696d616765732f66617669636f6e5f76315f31353031363063646466663766323934636533302e737667" height="20px"></a> Bard API
<p align="center">
<a target="_blank" href="https://bard.rizzy.eu.org"><img src="https://www.gstatic.com/lamda/images/favicon_v1_70c80ffdf27202fd2e84f.png" alt="" width="169" /></a>
</p>
<p align="center">
<a target="_blank" href="https://github.com/rizzlogy"><img title="Author" src="https://img.shields.io/badge/Author-RizzyFuzz-blue.svg?style=for-the-badge&logo=github" /></a>
<br>
<a target="_blank" href="//npmjs.com/@rizzlogy/BardAI"><img src="https://img.shields.io/npm/dw/@rizzlogy/BardAI?color=blue&label=Downloads&logo=npm&style=flat"></a>
<br>
<a target="_blank" href="https://www.npmjs.com/package/@rizzlogy/BardAI?activeTab=versions"><img src="https://img.shields.io/npm/v/@rizzlogy/BardAI?color=green&label=version&logo=npm&style=social"></a>
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
npm i @rizzlogy/BardAI -g
```
#
**📂 Installation**
```bash
npm i @rizzlogy/BardAI
```
#
# Quick Example

**Example Question For CommonJS**
```js
/* Importing The Package */

const { BardAI } = require('@rizzlogy/BardAI');
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
import { BardAI } from "@rizzlogy/BardAI";

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
