const $chatRoom = document.querySelector(".chatroom");
const $chatBtn = document.querySelector(".cont-chat .btn-open");
const $chatInput = document.querySelector(".inp-chat input");
const $sendForm = document.querySelector(".inp-chat");

// 유저의 질문을 담은 변수
let question;

// 질문과 답변을 저장하는 객체
// data 내부에서 이스케이프 문자열 인식안됨 \u이 아닌 \\u로 인식되는 문제가 발생함
let data = [
  {
    role: "system",
    content: "You are a helpful assistant.",
  },
];

// JSON ESCAPE 인코딩 함수
const encode = (text) => {
  let str = "";
  for (let i = 0; i < text?.length; i++) {
    if (String(text.charCodeAt(i)).length > 3) {
      str += String("\\u"  + text.charCodeAt(i).toString(16));
    } else {
      str += String(text[i]);
    }
  }
  console.log("str");
  console.log(str);
  return str;
};

// 버튼 누르면 채팅창 활성화시키는 함수
$chatBtn.addEventListener("click", () => {
  $chatRoom.classList.toggle("open");
});

// 유저 질문 받아오는 함수
$chatInput.addEventListener("change", (e) => {
  e.preventDefault();
  if (question != e.target.value) {
    question = e.target.value;
  }
});

// 유저의 질문을 담은 객체를 data arr에 push
const sendQuestion = (question) => {
  data.push({
      role: "user",
      content: encode(question),  
    });

  // console.log("encode(question)");
  console.log(encode(question));
  console.log(data);
  // console.log(typeof data);
};

$sendForm.addEventListener("click", (e) => {
  e.preventDefault();
  // 이전 질문과 동일한 질문일 경우 data arr에 push 하지않음
  if (data[data.length - 1].content !== encode(question)) {
    sendQuestion(question);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://3.37.150.96/chat",
      headers: {
        "Content-Type": "application/json",
      },
      // data: JSON.stringify(data),
      data: data,
    };
    apiTest(config);
  }
});

// API 통신 관련 함수
const apiTest = async(config) => {
  let result = await axios(config)
    .then(function (response) {
      console.log(111111111111);
      const result = response.data.choices[0].message.content;
      console.log(JSON.stringify(result));
    })
    .catch(function (err) {
      console.log(2222222222222);
      console.log(err);
    });
};
