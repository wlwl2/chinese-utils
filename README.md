# chinese-utils

Utility tools for working with simplified/traditional Chinese characters and
Pinyin in Node.js.

## Installation

```bash
npm i chinese-utils --save
```

## Usage

### pinyinToAlphabet()

`ChineseUtils.pinyinToAlphabet(string)`

Removes the tone marks from a Pinyin `string` and keeps the original case of the
Pinyin and any spaces/whitespace. This is also known as accent folding.

Returns a `string` with just plain English and no tone marks (keeps the original
case of the Pinyin).

#### Example:

```js
const ChineseUtils = require('chinese-utils');

const examplePinyin = ChineseUtils.pinyinToAlphabet('wǒ mèi mei');

console.log(examplePinyin); // logs 'wo mei mei'
```
