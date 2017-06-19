//確認ダイアログを表示
//var result = window.confirm('準備OK？');
//結果を表示
//document.getElementById('choice').textContent = result;

//答えを用意
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください！'));

var message;
while(1){
  
  if(answer === number){
    message = 'あたり！';
    break;
  }else if (answer < number){
    var answer = parseInt(window.prompt('残念！もっと大きいです。0~2の数字を入力してください！'));
  }else if (number < answer){
    var answer = parseInt(window.prompt('残念！もっと小さいです。0~2の数字を入力してください！'));
  }else{
    var answer = parseInt(window.prompt('0～3の数字を入力してください'));
  }
}

//結果を表示
document.getElementById('choice').textContent = message;
