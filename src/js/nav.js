const $container = document.querySelector(".container");
const $main = $container.querySelector('.contents');
const $btnFold = document.querySelector(".btn-fold");
const $nav = $main.querySelector(".question-nav");
const $codeMirror = document.querySelector(".CodeMirror");
const $btnMenu = $container.querySelector('.hamburger-btn');
const $menuContainer = $container.querySelector('.menu-nav');
let isMobile = null;

const handleClose = () => {
  $container.classList.remove("menu-on");
  $btnFold.innerText = "메뉴 펼치기";
  $codeMirror.classList.remove("menu-on-CodeMirror")
  $codeMirror.classList.add("menu-off-CodeMirror")
}
const handleOpen = () => {
  if($menuContainer.classList.contains('is-active')){
    $menuContainer.classList.remove('is-active')
  }

  $container.classList.add("menu-on");
  $btnFold.innerText = "메뉴 접기";
  $codeMirror.classList.add("menu-on-CodeMirror")
  $codeMirror.classList.remove("menu-off-CodeMirror")
}

const handleToggleMenu = () => {
  if ($container.classList.contains("menu-on")) {
    handleClose();
  } else {
    handleOpen();
  }
};

const handleToggleHamburger = () => {
  let icon = $btnMenu.querySelector("img");
  let isActive = $menuContainer.classList.contains('is-active');
  
  $menuContainer.classList.toggle('is-active');
  icon.setAttribute('alt', isActive ? '메뉴 열기' : '메뉴 닫기')

  if($menuContainer.classList.contains('is-active')){
    handleClose()
  }
};

const handleCloseHamburger = (e) => {
  if($main.contains(e.target)){
    $menuContainer.classList.remove('is-active');
  }
}

const checkMobile = () => {
  const winWidth = window.innerWidth;

  if(winWidth > 1024){
    isMobile = false;
    $menuContainer.classList.remove('is-active');
  } else if(winWidth >= 820) {
    $menuContainer.classList.remove('is-active');
  } else{
    handleClose();
    isMobile = true;
  }
}

const handleResizeWidth =() =>{
  let timer = null;
  clearTimeout(timer);
  timer = setTimeout(function(){
    checkMobile();
  },300)
}

const handleCloseMobileMenu =(e) =>{
  const check = Boolean(e.target.closest('nav')) || Boolean(e.target.closest('header'));
  if(isMobile && $container.classList.contains("menu-on") && !check){
    handleClose();
  }
}

checkMobile();
$btnFold.addEventListener("click", handleToggleMenu);
$container.addEventListener("click", handleCloseMobileMenu);
window.addEventListener("resize", handleResizeWidth);

$btnMenu.addEventListener('click', handleToggleHamburger);
$main.addEventListener('click', handleCloseHamburger);