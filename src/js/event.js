const $btnQue = document.querySelectorAll('.btn-que');
const $btnRun = document.querySelector("#btn-run");
const $resultInfo = document.querySelector("#result_info");
const $btnDownload = document.querySelector(".btn-download");
const OLD_CONSOLE_LOG = console.log;
let debug = true;



// 문제 로딩
$btnQue.forEach(element => {
    element.addEventListener('click', function (e) {
        document.getElementById('q' + PAGE_NAME).classList.remove('active')
        PAGE_NAME = e.target.id.slice(1);
        document.getElementById('q' + PAGE_NAME).classList.add('active')
        history.pushState(null, PAGE_NAME, `?page=${PAGE_NAME}`);
        // 문제 이동 시 에러 메시지 초기화
        document.getElementById('result_desc').textContent = '';
        render();
        loadCode();
    });
});

// 로컬 스토리지에서 code 읽어오기
function loadCode() {
    const localStorageValue = window.localStorage.getItem(PAGE_NAME);
    if (!!localStorageValue) {
        editor.setValue(localStorageValue);
        $resultInfo.classList.remove("result-info-none");
    } else {
        editor.setValue(`function solution(data){
    return undefined
}`);
        $resultInfo.classList.remove("result-info-none");
    }
}
loadCode()

$btnRun.addEventListener("click", (e) => {
    e.preventDefault();
    let text = editor.getValue();
    codeEditor = document.querySelector('#codeeditor');
    window.localStorage.setItem(PAGE_NAME, text);
    codeEditor.textContent = text;
    $resultInfo.classList.add("result-info-none");
    debug = false;
    console.log = function () { }
});

$btnRun.addEventListener('mouseleave', () => {
    debug = true;
    console.log = OLD_CONSOLE_LOG
})

const downloadFile = async ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
    const link = document.createElement('a');

    link.download = fileName;
    link.href = await URL.createObjectURL(blob);

    const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    link.dispatchEvent(clickEvt);
    link.remove();
};

$btnDownload.addEventListener("click", (e) => {
    let totalData = ''
    for (let i = 1; i < 21; i++) {
        let localStorageValue = window.localStorage.getItem(i);
        let passCheck = window.localStorage.getItem(`${i}_check`);
        if (!!localStorageValue) {
            localStorageValue = '```javascript\n' + localStorageValue + '\n```'
            if (!!passCheck) {
                localStorageValue = `# 문제 ${i}번\n\n* 문제 링크 : https://jsalgo.co.kr/?page=${i}\n* 통과여부 : Y\n\n${localStorageValue}\n\n`
            } else {
                localStorageValue = `# 문제 ${i}번\n\n* 문제 링크 : https://jsalgo.co.kr/?page=${i}\n* 통과여부 : N\n\n${localStorageValue}\n\n`
            }

            totalData += localStorageValue
        }
    }
    if (!!totalData) {
        const name = `solution_total`;
        downloadFile({
            data: totalData,
            fileName: `${name}.md`,
            fileType: 'text/json',
        });
    } else {
        window.alert('다운로드 할 데이터가 없습니다.')
    }
});

