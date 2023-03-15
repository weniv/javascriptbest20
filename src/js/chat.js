// 채팅 기능
const $chatRoom = document.querySelector('.chatroom');
const $chatBtn = document.querySelector('.cont-chat .btn-open');
const $chatInput = document.querySelector(".inp-chat input");
const $sendBtn = document.querySelector(".send-chat");

/** 
 * 1. 버튼 누르면 채팅창 활성화
 */
$chatBtn.addEventListener('click',()=>{
  $chatRoom.classList.toggle('open')
})

// input 입력 값 받아오는 함수
// JSON ESCAPE 적용해야함
$chatInput.addEventListener("change", (e) => {
  console.log(e.target.value);
});

var data = JSON.stringify([
  {
    role: "system",
    content: "You are a helpful assistant.",
  },
  {
    role: "user",
    content: "Who won the world series in 2020?",
  },
  {
    role: "assistant",
    content: "The Los Angeles Dodgers won the World Series in 2020.",
  },
  {
    role: "user",
    content: "Where was it played?",
  },
]);

var config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://3.37.150.96/chat",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

const apiTest = (config) => {
  console.log("함수는 작동을 하기는 해")
  axios(config)
    .then(function (response) {
      console.log(111111111111);
      console.log(JSON.stringify(response));
    })
    .catch(function (err) {
      console.log(2222222222222);
      // timeout 에러뜸 -- postman도 동일
      console.log(err);
    });
};

$sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  apiTest(config);
});




