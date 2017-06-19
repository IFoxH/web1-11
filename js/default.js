//確認ダイアログを表示
var result = window.confirm('準備OK？');
//結果を表示
document.getElementById('choice').textContent = result;

//答えを用意
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください！'));

while(0){
var message;
if(answer === number){
  message = 'あたり！';
  return 0;
}else if (answer < number){
  message = '残念！もっと大きいです';
}else if (number < answer){
  message = '残念！もっと小さいです';
}else{
  message = '0～3の数字を入力してください';
}
}

//結果を表示
document.getElementById('choice').textContent = message;
