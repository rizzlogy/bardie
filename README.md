# Bardie <a href="https://bard.rizzy.eu.org"><img src="https://camo.githubusercontent.com/adb54264fe2ad5067d07d0752fc32600b4e6250073b01ce8c386575b431e3f06/68747470733a2f2f7777772e677374617469632e636f6d2f6c616d64612f696d616765732f66617669636f6e5f76315f31353031363063646466663766323934636533302e737667" height="20px"></a> API

<p align="center">
  <a target="_blank" href="https://bard.rizzy.eu.org">
    <img src="https://www.gstatic.com/lamda/images/favicon_v1_70c80ffdf27202fd2e84f.png" alt="" width="169" />
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://github.com/rizzlogy">
    <img title="Author" src="https://img.shields.io/badge/Author-RizzyFuzz-blue.svg?style=for-the-badge&logo=github" />
  </a>
  <br>
  <a target="_blank" href="https:////npmjs.com/bardie">
    <img src="https://img.shields.io/npm/dw/bardie?color=blue&label=Downloads&logo=npm&style=flat">
  </a>
  <br>
  <a target="_blank" href="https://www.npmjs.com/package/bardie?activeTab=versions">
    <img src="https://img.shields.io/npm/v/bardie?color=green&label=version&logo=npm&style=social">
  </a>
</p>

# Bardie Installation

**📂 Normal Installation**

```bash
npm i bardie
```

#

**🔲 Installation For CLI**

```bash
npm i bardie -g
```

# Simple Examples

### **Example Question To Send Bard API Request**

#

```js
const Bardie = require("bardie");
const bard = new Bardie();

async function askQuestion() {
  try {
    let result = await bard.question({ ask: "Keep it simple... What is Google Bard?" });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

askQuestion();
```

##### Response:

```json
{
  "content": "In a nutshell, I'm Google's AI helper you can chat with. I can answer your questions, generate creative text formats, and help you with various tasks in a simple and informative way. Think of me as a friendly AI companion ready to assist you anytime!",
  "status": 200,
  "creator": "RizzyFuzz"
}
```

### **Example Question With Image To Send Bard API Request**

#

```js
const Bardie = require("bardie");
const bard = new Bardie();

async function askQuestionWithImage() {
 try {
  let result = await bard.question({
   ask: "Keep it simple... What is this image?",
   image: "https://i.imgur.com/OgoPlnf.png"
  });
  console.log(result);
 } catch (error) {
  console.error("Error:", error.message);
 }
};

askQuestionWithImage();
```

##### Response:

```json
{
  "content": "The image you sent me is the logo of Bard, a large language model chatbot developed by Google AI. The logo consists of two colorful stars, one in red and orange and the other in blue and green, on a gray background. The stars are meant to represent creativity and knowledge, while the gray background represents the real world. I hope this helps!",
  "status": 200,
  "creator": "RizzyFuzz"
}
```

#

# Note

#### EN
> If there are bugs, please create [Issues](https://github.com/rizzlogy/bardie/issues/new)

#### ID
> Jika Ada Bug, Silahkan Buat [Issues](https://github.com/rizzlogy/bardie/issues/new)

#

**[Bardie](https://npmjs.com/bardie) also Supports Typescript & EsModule! 🥳**
