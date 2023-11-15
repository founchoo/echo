!(function () {
    // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
            // 首先，如果有getUserMedia的话，就获得它
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

            // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }

            // 否则，为老的navigator.getUserMedia方法包裹一个Promise
            return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        }
    }
    const constraints = {
        video: true,
        audio: false
    };
    let promise = navigator.mediaDevices.getUserMedia(constraints);
    promise.then(stream => {
        let hostVideo = document.getElementById('host-video');
        // 旧的浏览器可能没有srcObject
        if ("srcObject" in hostVideo) {
            hostVideo.srcObject = stream;
        } else {
            // 防止在新的浏览器里使用它，因为它已经不再支持了
            hostVideo.src = window.URL.createObjectURL(stream);
        }
        hostVideo.onloadedmetadata = function (e) {
            hostVideo.play();
        };
    }).catch(err => {
        console.error(err.name + ": " + err.message);
    })
})();

function speak(type, para) {
    var speakContent = '';
    if (type == 'id') {
        speakContent = document.getElementById(para).value;
    } else {
        speakContent = para;
    }
    var utterThis = new window.SpeechSynthesisUtterance(speakContent);
    utterThis.voice = window.speechSynthesis.getVoices()[63];
    window.speechSynthesis.speak(utterThis);
}

window.onload = function () {
    var typeText = document.getElementById('typeText');
    var textButton = document.getElementById('textButton');
    typeText.addEventListener('keyup', function (e) {
        if (typeText.value.length == 0) {
            textButton.disabled = true;
        } else {
            textButton.disabled = false;
        }
    });
}

var wsr = new webkitSpeechRecognition();
wsr.continuous = true;
wsr.interimResults = false;
wsr.lang = 'cmn-Hans-CN'; //普通话 (中国大陆)

var totalResult = '';

wsr.onresult = function(event) {
    var resultElement = document.getElementById('recognitionResult');
    var last = event.results.length - 1;
    var result = event.results[last][0].transcript;
    totalResult += result;
    console.log(event);
    resultElement.innerText = '语音识别结果：' + totalResult;
}


function recognition(sender) {
    if (sender.innerText == '开始录音') {
        sender.innerText = '停止录音';
        wsr.start();
    } else {
        sender.innerText = '开始录音';
        totalResult = '';
        document.getElementById('recognitionResult').innerText = '检测结果将在此显示';
        wsr.stop();
    }
}

var searchList = [
    'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w',
    'a', 'o', 'e', 'i', 'u', 'v', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 've', 'er', 'an', 'en', 'in', 'un', 'ang', 'eng', 'ing', 'ong',
    'zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying'
];

function pron(btn) {
    var audio = btn.nextElementSibling;
    audio.play();
    var video = document.getElementById('video');
    var index = searchList.indexOf(btn.innerText);
    setTimeout(() => {
        video.currentTime = 0.50 + index * 0.50;
        video.play();
        setTimeout(() => {
            video.pause();
        }, 500);
    }, 500);
}