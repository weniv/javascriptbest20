// 채팅 기능
const $chatRoom = document.querySelector('.chatroom');
const $chatBtn = document.querySelector('.cont-chat .btn-open');

/** 
 * 1. 버튼 누르면 채팅창 활성화
 */
$chatBtn.addEventListener('click',()=>{
  $chatRoom.classList.toggle('open')
})

/**
 * 2. 채팅 입력시 API 호출
 * - 입력 정보 로컬 호스트에 저장
 */


