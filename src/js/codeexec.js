// const $execEditor = document.getElementById('execeditor');
// const $btnRun = document.querySelector('.btn-run');
// const $execResult = document.querySelector('.exec-result');

// let edit = CodeMirror.fromTextArea(
//   $execEditor,
//   {
//     mode: "javascript",
//     indentWithTabs: true, // tab으로 인식하게 할 것인지 => false
//     smartIndent: true,
//     lineNumbers: true,
//     matchBrackets: true,
//     autofocus: true,
//     indentUnit: 4,
//   }
// );

// $btnRun.addEventListener('click',()=>{
//   let code = execeditor.getValue()
//   $execResult.innerHTML = eval(execeditor.getValue())
//   $execResult.innerHTML = eval('for(let i = 0 ; i<10 ;i ++ ) {console.log(i)}')
//   // $execResult.innerHTML =  eval(execeditor.getValue())
//   console.log('test')
//   console.log('cmd>',execeditor.commands);
// })

const $editor = document.getElementById('editor');
$editor.innerHTML = "for (let i = 0; i&lt; 10 ; i++){\n &nbsp; console.log(i);\n}";

function runCode(){
  var scriptcont=document.getElementById("scriptcontainer");
  scriptcont.innerHTML="";
  var script=document.createElement("script");
  console.log('script,',script);
  var randCode="";
  for (var i=0;i<10;i++){
    var offset=Math.random()*2<1?65:97;
    randCode+=String.fromCharCode(Math.floor(Math.random()*26+offset));
  }
  var code=$editor.value;
  code=code.replace(/console./g,"innerConsole.");
  script.innerHTML="\nfunction main_"+randCode+"(){\n"+code+"\n}\n main_"+randCode+"();";
  scriptcont.appendChild(script);
}

var innerConsole={
  log: function(text){
    pushConsole("log",argsToStr(arguments),"> ");
  },
  warn: function(text){
    pushConsole("warning",argsToStr(arguments),"! ");
  },
  error: function(text){
    pushConsole("error",argsToStr(arguments),"×");
  },
  clear: function(){
    document.getElementById("console").innerHTML=" ";
  }
}

function argsToStr(args){
  var out="";
  for (var i=0;i<args.length;i++){
    out+=args[i]+" ";
  }
  console.log('out',out)
  return out;
}

function pushConsole(type,text,icon){
  let message = document.createElement('p');
  message.classList.add = `msg-${type}`
  message.innerHTML="<span class='icon'>"+icon+"</span><span class='content'>"+text+"</span>";
  document.getElementById("console").appendChild(message);
}

window.onerror = function(error,source,lineno,colno){
  innerConsole.error(error+" @ line "+(lineno-3));
}