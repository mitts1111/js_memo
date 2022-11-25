// jsを記述する際はここに記載していく
//1.Save クリックイベント
$("#save").on('click', function () {
      let key = $("#key").val();
      let memo = $("#memo").val();
      console.log(key, 'データが取れてるかチェック')
      console.log(memo, 'データが取れてるかチェック')
      if(!key){
      alert('タイトルが入力されていません。');
      return false;
      }
      if(!memo){
      alert('本文が入力されていません。');
      return false;
      }
      let date = new Date();
      localStorage.setItem(key,memo)
      const html = `
          <li>${key}</li>
      `;
      $("#allnote").html("");
      
      for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const html = `
                  <li id=${key}>${key}</li>
                  `
      $("#allnote").append(html);
  }
  $("#key").html("");
  $("#memo").html("");
  addlist()
  });

//2.clear クリックイベント
$("#crear").on("click",function(){
localStorage.clear();
$("#allnote").empty();
});

//3.ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const html = `
          <li id=${key}>${key}</li>
              `
      // 画面上に埋め込み
      $("#allnote").append(html);}


// 4. クリックした場所のIDを取得して、画面に表示する
function addlist(){
$('#allnote li').click(function() {
let id_name = $(this).attr('id');
let text = localStorage.getItem(id_name);
console.log(id_name,"id取得できているか")
console.log(text,"text取得できているか")
$("#memo").val(text);
$("#key").val(id_name);
$("#key").html(id_name);
$("#key").html(key);
$("#memo").html(value);

});
}
addlist()