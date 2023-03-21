const $editor = document.getElementById('editor');
const $btnRun = document.getElementById('btn-run');
const $btnReset = document.getElementById('btn-reset');
const $contScript = document.getElementById('cont-script');
const $result = document.getElementById('result');

let editor = CodeMirror.fromTextArea(
  $editor,
  {
    mode: "javascript",
    smartIndent: true,
    lineNumbers: true,
    matchBrackets: true,
    autofocus: true,
    indentUnit: 4,
  }
);

$btnRun.addEventListener('click',()=>{
  $result.textContent='';
  let code = editor.getValue()
  try{
    eval(code);
    codePrint(code);
  } catch (e) {
    let warnResult = document.createElement('span');
    warnResult.className = 'error-msg';
    warnResult.textContent= e;
    $result.appendChild(warnResult);
  }
})


/**
 * 사용자가 입력한 코드를 분석하여 출력되어야 할 값을 가져오는 함수
 * - eval 함수는 콘솔창에 결과를 출력하고 undefined를 반환함
 */

function codePrint(code) {
  let result = '';
  code = code.replace(/console.log/g,'codeResult')
  eval(code)
}

function codeResult(args) {
  let cmdLine = document.createElement('span');
  cmdLine.className='cmd-msg'
  cmdLine.textContent=`${args}\n`;
  $result.appendChild(cmdLine);
}

// key event
let keys = [];
window.addEventListener('keydown',(e)=>{
  keys[e.code]=true;
  if((keys.ShiftLeft||keys.ShiftRight) && keys.Enter){
    
      $result.textContent='';
      let code = editor.getValue()
      console.log('e');
      try{
        eval(code);
      } catch (e) {
        console.log(e);
        let warnResult = document.createElement('span');
        warnResult.className = 'error-msg';
        warnResult.textContent= e;
        $result.appendChild(warnResult);
      }
      codePrint(code);
  }
})
window.addEventListener('keyup',(e)=>{
  keys[e.code]=false;
})