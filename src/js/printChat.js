const $chatRoom = document.querySelector(".chatroom");
const $chatBtn = document.querySelector(".cont-chat .btn-open");
const $chatList = document.querySelector(".chat-list");
const $chatInput = document.querySelector(".inp-chat input");
const $sendForm = document.querySelector(".inp-chat");

// 유저의 질문을 담은 변수
let question;

// 질문과 답변을 저장하는 객체
let data = [
  {
    role: "system",
    content: "You are a helpful assistant.",
  },
];

// 화면에 뿌려줄 데이터
let questionData = [];

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

// 유저 질문 객체를 만들고 push
const sendQuestion = (question) => {
  data.push({
    role: "user",
    content: question,  
  });
  questionData.push({
    role: "user",
    content: question,
  });
};

// 화면에 채팅 그려주는 함수
const printQuestion = async() => {
    let li = document.createElement("li");
    li.classList.add("question");
    questionData.map((el) => {
        li.innerText = el.content;
    })
    $chatList.appendChild(li);
    questionData = [];
}

const printAnswer = async (answer) => {
  let li = document.createElement("li");
  li.classList.add("question");
  li.innerText = answer;
  $chatList.appendChild(li);
};

// API 통신 관련 함수
const sendReq = async(config) => {
    let result = await axios(config)
        .then((res) => {
            const answer = res.data.choices[0].message.content;
            console.log(answer);
            printAnswer(answer);
        })
        .catch((err) => {
            console.log(err)
        })
};

// submit
$sendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  $chatInput.value = null;
  sendQuestion(question);
  printQuestion();

  // API 통신관련 config
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://3.37.150.96/chat",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  sendReq(config);
})