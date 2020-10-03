// 単語
var wordList = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India",
    "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"
];
 
// 時間制限
var timeLimit = 30;

var timer1;
var wordStr;
var wordChars;
var charIndex;
var messageArea;
var wordArea;
var typeArea;
var score;
var timeLeft;
var count;
 
window.onload = function (){
    messageArea = document.getElementById("message");
    wordArea    = document.getElementById("word");
    typeArea    = document.getElementById("type");
    startButton = document.getElementById("start-button");
}
 
// 3秒後に開始
function onStartButtonClick(){
    messageArea.textContent = "Ready.....?";
    setTimeout("startTyping()", 3000);
}

// 開始
function startTyping(){
    score = 0;
    timeLeft = timeLimit;
    nextWord();
    countDown();
    timer1 = setInterval("countDown()", 1000);
    startButton.disabled = true;
}
 
// 終了
function stopTyping(){
    clearInterval(timer1);
    wordChars = [];
    messageArea.textContent = "Score: " + score;
    wordArea.textContent = "";
    typeArea.textContent = "";
    startButton.disabled = false;
}
 
// 次の単語を表示
function nextWord(){
    charIndex = 0;
    var random = Math.floor( Math.random() * wordList.length );
    wordArea.textContent = wordList[random];
    typeArea.textContent = "";
    wordChars = wordList[random].toUpperCase().split('');
}
 
// 残り時間を計測
function countDown(){
    if(timeLeft <= 0) {
        stopTyping();
        return;
    }
    messageArea.textContent = timeLeft + " sec.";
    timeLeft--;
}

 
// キー押下時の処理
document.onkeydown = function (e){
    var keyStr;
    if(e.keyCode == 189){
        keyStr = "-";
    } else {
        keyStr = String.fromCharCode(e.keyCode);
    }
     
    if(wordChars[charIndex] == keyStr){
        charIndex++;
        typeArea.textContent = typeArea.textContent + keyStr;
        if(charIndex== wordChars.length){
            score++;
            nextWord();
        }
    }
};
