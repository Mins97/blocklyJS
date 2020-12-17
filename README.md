### 프로젝트 바로 보기
  Open [https://blocklyjs.web.app/](https://blocklyjs.web.app/)

# 프로젝트 목적

 [blockly-react-sample](https://github.com/google/blockly-samples/tree/master/examples/blockly-react)를 활용하여 blockly-js의 expansion를 개발하는 것을 목적으로합니다.
 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)을 기준으로 javascript의 함수 기능들을 블록코딩으로 가능하도록 만들어줍니다.

[업데이트 내역](./update.md)

# blockly-react-sample [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

This sample shows how to load Blockly in a [React](https://reactjs.org/) project.

## Running the sample

### Installation

```
npm install
```

### 로컬 실행 테스트

```
npm run start
```
하고
Open [http://localhost:3000/](http://localhost:3000/)

### GIT 업데이트

```
npm run upload
```

### Firebase hosting 배포하기

```
npm run deploy
```

### Firebase hosting 브라우저로 보기

Open [https://blocklyjs.web.app/](https://blocklyjs.web.app/)

## Community projects

[react-blockly](https://github.com/nbudin/react-blockly):
A React component that embeds Blockly. It uses the official [Blockly npm package](https://www.npmjs.com/package/blockly).
"# blocklyJS" 

### 기초 이론
[google blockly tools](https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools)

### 개발자 블록 생성기
[blockly-demo](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)

### blockly의 내부 핵심 코드(npm i 필수)
해당폴더:\blockly-samples-master\examples\blockly-react\node_modules\blockly\generators\javascript에서
파일들 (colour.js/lists.js/login.js/loops.js/math.js/procedures.js/text.js/variables_dynamic.js/variables.js) 에서 확인한다.
