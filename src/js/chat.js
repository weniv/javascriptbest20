const $chatContainer = document.querySelector(".cont-chat");
const $chatRoom = document.querySelector(".chatroom");
const $chatInfo = document.querySelector(".chat-info");
const $chatBtn = document.querySelector(".btn-chatOpen");
const $adCarousel = document.querySelector("#kg-carousel");
const $chatCloseBtn = document.querySelector(".chat-close");
const $chatList = document.querySelector(".chat-list");
const $chatInput = document.querySelector(".inp-chat textarea");
const $sendForm = document.querySelector(".inp-chat");

// openAI API
let url = `https://openai-api.jejucodingcamp.workers.dev/`;

// 유저의 질문
let question = false;

// 질문을 저장하는 객체
let data = [
  {
    role: "system",
    content: "You are a helpful assistant.",
  },
];

// 화면에 뿌려줄 데이터
let questionData = [];

// 스크롤 최하단 이동
const scrollToBottom = () => {
  // 너비가 1200px 이하이고 navBar가 열려있을 경우
  if(window.innerWidth <= 1200 && $container.classList.contains('menu-on')) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
  // 너비가 1024px 이하일 경우
  else if (window.innerWidth <= 1024) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}

// 버튼 누르면 채팅창 활성화시키는 함수
$chatBtn.addEventListener("click", () => {
  $chatRoom.classList.add('open');
  $chatInfo.classList.add("close");
  $chatBtn.classList.add("close");
  $adCarousel.classList.add("close");
  $chatContainer.classList.add("open");
  $chatContainer.classList.remove("close");
  scrollToBottom()
});

// 채팅 창 닫기 버튼 이벤트
$chatCloseBtn.addEventListener('click',()=>{
  $chatRoom.classList.remove('open');
  $chatInfo.classList.remove("close");
  $chatBtn.classList.remove("close");
  $adCarousel.classList.remove("close");
  $chatContainer.classList.remove("open");
  $chatContainer.classList.add("close");
});

// 마크다운으로 변경해주는 함수
function convertMarkdown(message) {
  const markdownText = message;

  const codeBlockRegex = /(```(\w+)[ \t]*\r?\n)([\s\S]*?)(\r?\n[ \t]*```)/g;
  const wrappedCode = markdownText.replace(codeBlockRegex, (match, start, language, code, end) => {
    const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const langClass = `language-${language}`;
    return `<pre style="background: #F5F2F0;"><code class="${langClass}" >${escapedCode.trim()}</code></pre>`;
  });

  Prism.highlightAll();

  return wrappedCode;
}

// 유저 질문 받아오는 함수
$chatInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (question != e.target.value) {
    question = e.target.value;
  }
});

// 유저 질문 객체를 만들고 push
const sendQuestion = (question) => {
  if(question) {
    data.push({
      role: "user",
      content: question,
    });
    questionData.push({
      role: "user",
      content: convertMarkdown(question),
    });
  }
};

// 화면에 질문 그려주는 함수
const printQuestion = async() => {
  if(question) {
    let li = document.createElement("li");
    li.classList.add("user");
    questionData.map((el) => {
      li.innerHTML = el.content;
    });
    $chatList.appendChild(li);
    questionData = [];
    question = false;
  }
}

// 화면에 답변 그려주는 함수
const printAnswer = async (answer) => {
  let li = document.createElement("li");
  li.classList.add("chat-bot");
  li.innerHTML = answer;
  $chatList.appendChild(li);
};

// textarea size, focus 원복 함수
const focusOnTextarea = () => {
  $chatInput.style.height = "auto";
  $chatInput.focus()
}

// API 통신 관련 함수
const apiPost = async(config) => {
    let result = await axios(config)
        .then((res) => {
            const answer = res.data.choices[0].message.content;
            // console.log(answer);
            const markdownAnswer = convertMarkdown(answer);
            printAnswer(markdownAnswer);
        })
        .catch((err) => {
            console.log(err)
        })
};

// req 보내주는 함수
const sendReq = () => {
    $chatInput.value = null;
    sendQuestion(question);
    printQuestion();
    focusOnTextarea();

    // API 통신관련 config
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    apiPost(config);
}

// submit
$sendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 공백시 요청 막음
  if (question) {
    sendReq();
  }
})

// Enter로 textarea 제출, shift + Enter로 줄바꿈
// $chatInput.addEventListener("keydown", (e) => {
//   if (e.keyCode === 13 && !e.shiftKey) {
//     e.preventDefault();
//     sendReq();
//   }
// });