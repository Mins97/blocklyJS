
import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './logo.svg';

import BlocklyComponent, { Block, Value, Field, Shadow, Category } from './Blockly';

import BlocklyJS from 'blockly/javascript';

import './blocks/customblocks';
import './generator/generator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.state = { headerToggle: true }
  }
  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    navigator.clipboard.writeText(code); //코드 Ctrl + C 해주는 부분
    console.log(code);
    //알림창
    toast.info('📋코드는 F12를 눌러 Console에서 확인하거나 Ctrl+V 붙여넣기로 확인할 수 있습니다.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { fontSize: 15 }
    });
  }
  help = () => {
    prompt("❓아래의 내용을 JS가장 상단에 붙여 넣어주세요! \n 그리고나서 그곳에 복사한 코드를 붙여넣어보세요! ", "document.getElementsByTagName(\"p\")[0].innerHTML  =\"여기에 값을 입력하세요.");
  }
  exam = () => {
    prompt("🔑아래의 내용을 JS가장 상단에 붙여 넣어주세요!", "if (true) { var a = 111; var b = 111; } else { var a = 999; var b = 999; document.getElementsByTagName(\"p\")[0].innerHTML = a + b");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ fontSize: 12 }}>
          <div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.generateCode} style={{ background: "green", border: "none", color: "white" }}>📋복사하기 Copy to js </button>
          <div style={{ flexDirection: "row" }}>
            <button style={{ background: "none", border: "none", color: "white" }} onClick={this.help}>　　❓도움말 help　　</button>
            <button style={{ background: "none", border: "none", color: "white" }} onClick={this.exam}>　　🔑예시 example　　</button>
            　　📧tkarnrwl78627862@gmail.com
          <a href="https://github.com/Mins97/blocklyJS" style={{ color: "white", textDecoration: "none" }} >　　🖥️https://github.com/Mins97/blocklyJS　　</a>
          </div>
          <div>
            <ToastContainer />
          </div>
          <BlocklyComponent ref={this.simpleWorkspace}
            readOnly={false} trashcan={true} media={'media/'}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true
            }}
            initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="number" x="250" y="100"></block>
</xml>
      `}>

            <Category name="기본 라이브러리 함수들">
              <Category name="배열 list">
                <Block type="lists_create_empty" />
                <Block type="lists_create_with" />
                <Block type="lists_repeat" />
                <Block type="lists_length" />
                <Block type="lists_isEmpty" />
                <Block type="lists_indexOf" />
                <Block type="lists_getIndex" />
                <Block type="lists_setIndex" />
                <Block type="lists_getSublist" />
                <Block type="lists_sort" />
                <Block type="lists_split" />
                <Block type="lists_reverse" />
              </Category>

              <Category name="문자 text">
                <Block type="text" />
                <Block type="text_multiline" />
                <Block type="text_join" />
                <Block type="text_append" />
                <Block type="text_length" />
                <Block type="text_isEmpty" />
                <Block type="text_indexOf" />
                <Block type="text_charAt" />
                <Block type="text_getSubstring" />
                <Block type="text_changeCase" />
                <Block type="text_trim" />
                <Block type="text_print" />
                <Block type="text_prompt_ext" />
                <Block type="text_prompt" />
                <Block type="text_count" />
                <Block type="text_replace" />
                <Block type="text_reverse" />
              </Category>

              <Category name="변수 variables_dynamic">
                <Block type="variables_set" />
                <Block type="variables_get" />
              </Category>

              <Category name="반복 loop">
                <Block type="controls_repeat_ext" />
                <Block type="controls_repeat" />
                <Block type="controls_for" />
                <Block type="controls_forEach" />
                <Block type="controls_flow_statements" />
              </Category>

              <Category name="절차 procedures">
                <Block type="procedures_defreturn" />
                <Block type="procedures_defnoreturn" />
                <Block type="procedures_callreturn" />
                <Block type="procedures_callnoreturn" />
                <Block type="procedures_ifreturn" />
              </Category>

              <Category name="수학 math">
                <Block type="math_number" />
                <Block type="math_arithmetic" />
                <Block type="math_single" />
                <Block type="math_constant" />
                <Block type="math_number_property" />
                <Block type="math_change" />
                <Block type="math_round" />
                <Block type="math_trig" />
                <Block type="math_on_list" />
                <Block type="math_modulo" />
                <Block type="math_constrain" />
                <Block type="math_random_int" />
                <Block type="math_random_float" />
                <Block type="math_atan2" />
              </Category>

              <Category name="조건(논리) logic">
                <Block type="controls_if" />
                <Block type="controls_ifelse" />
                <Block type="logic_compare" />
                <Block type="logic_operation" />
                <Block type="logic_negate" />
                <Block type="logic_boolean" />
                <Block type="logic_null" />
                <Block type="logic_ternary" />
              </Category>

              <Category name="색상 color">
                <Block type="colour_random" />
                <Block type="colour_picker" />
                <Block type="colour_rgb" />
                <Block type="colour_blend" />
              </Category>

              <Category name="기타 others">
                <Block type="test_react_field" />
                <Block type="test_react_date_field" />
                <Block type="controls_repeat_ext">
                  <Value name="TIMES">
                    <Shadow type="math_number">
                      <Field name="NUM">10</Field>
                    </Shadow>
                  </Value>
                </Block>
                <Block type="text_charAt">
                  <Value name="VALUE">
                    <Block type="variables_get">
                      <Field name="VAR">text</Field>
                    </Block>
                  </Value>
                </Block>
              </Category>
            </Category>
            <Category name="배열 Array" >            </Category>
            <Category name="참거짓 Boolean" >            </Category>
            <Category name="날짜 Date" >            </Category>
            <Category name="에러 Error" >            </Category>
            <Category name="함수 Function" >            </Category>
            <Category name="JSON" >            </Category>
            <Category name="수학 Math" >            </Category>
            <Category name="숫자 Number" >
              <Block type="number" />
            </Category>
            <Category name="객체 Object" >            </Category>
            <Category name="정규식 RegExp" >            </Category>
            <Category name="문장 String" >            </Category>
            <Category name="배열반복 Map" >            </Category>
            <Category name="세트 Set" >            </Category>
            <Category name="WeakMap" >            </Category>
            <Category name="WeakSet" >            </Category>
          </BlocklyComponent>
        </header>
        <iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="450" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/codepen/embed/PNaGbb?height=450&amp;theme-id=23710&amp;slug-hash=PNaGbb&amp;default-tab=html%2Cresult&amp;user=codepen&amp;embed-version=2&amp;editable=true&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" ></iframe>
      </div>
    );
  }
}

//<iframe title="a" src="https://codepen.io/chriscoyier/embed/gfdDu" ></iframe>
export default App;
