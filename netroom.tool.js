var procom = prompt("🌝NETROOM SCRIPTSへようこそ🌝             Ver.1.1.2\n\n" + "現在製作したスクリプトの一部が詰まっています。\n\n" + "　[Q&A]\n\n" + "Q.スクリプトを使うにはどうすれば良いですか？\n" + "A.下のエリアにコマンド一覧を新設いたしました。ご利用下さい。\n\n" + "　[スクリプトコマンド一覧]\n\n" + "\n" + "・#時計" + "　　　ステメが時計になります。\n\n" + "・#ボット" + "　　NETBOTが起動します。\n\n" +"・#編集" + "　　　文字などを全て編集できます。\n\n\n\n" + "  NETbot製作者 🍧璃空🍧キラー");

switch(procom) {

       case "#時計":

alert("時計が発動しました！");

var s=document.createElement('script');s.setAttribute('src','https://cdn.discordapp.com/attachments/1177992773387952219/1178131440500752474/clock.js?ex=65750768&is=65629268&hm=e539c412fc42877a136310e60b8c34f82eab9f1e9eacdfa131a9f011c58de22f&');s.setAttribute('charset','UTF-8');body.appendChild(s);

      break;   

       case "#ボット":

alert("ボットが発動しました！");

var s=document.createElement('script');s.setAttribute('src','https://cdn.discordapp.com/attachments/1161669008043561010/1167023966758649957/NETbot_1.0.js');s.setAttribute('charset','UTF-8');body.appendChild(s);

      break;

     case "#編集":
alert("編集できるようになりました！");

var s=document.createElement('script');s.setAttribute('src','https://cdn.discordapp.com/attachments/1177992773387952219/1178126886551957545/obfuscated_5.js?ex=6575032a&is=65628e2a&hm=2549a24b511d7cb3cee7e331f43355ec1e26cc8e1d34bfb51086bb678d72d80d&');s.setAttribute('charset','UTF-8');body.appendChild(s);

       break;

       default:

     alert("ERROR!\n発動がキャンセルされました。");


}
