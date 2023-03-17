const $editor = document.getElementById('editor');
const $btnRun = document.getElementById('btn-run');
const $btnReset = document.getElementById('btn-reset');
const $contScript = document.getElementById('cont-script');
const $result = document.getElementById('result');

// test용 실행 코드
$editor.innerHTML = "for (let i = 0; i&lt; 10 ; i++){\n &nbsp; console.log(i);\n}";

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
  // $result.textContent = editor.getValue()
  // $result.textContent = eval(editor.getValue())
  console.log(eval(editor.getValue()))
})
$btnReset.addEventListener('click',()=>{
  alert('reset!');
})