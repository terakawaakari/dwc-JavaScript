// 関数の作成
function addString(strA){
  var addStr = "Hello "+ strA;
  return addStr;
}

// メイン部分
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

var promptStr = prompt('何か好きな文字を入力してください');
alert(promptStr);

// じゃんけん
// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// ユーザのてとJSの手を比べる関数を呼び出す
var judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は'+ user_hand +'です。\nJavaScriptの選んだ手は'+ js_hand +'です。\n結果は'+ judge +'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor(Math.random()*3);

  if(js_hand_num == 0){
    js_hand_name = 'グー';
  } else if(js_hand_num == 1){
    js_hand_name = 'チョキ';
  } else if(js_hand_num == 2){
    js_hand_name = 'パー';
  }
  return js_hand_name;
}

// ユーザの手とJSのてを比べる関数
function winLose(user,js){
  var sinLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}