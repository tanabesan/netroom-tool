let textMsg = document.getElementById('my_info_name');
let name_t  = textMsg.textContent;

     if(name_t == 'ゲスト'){
         alert('ゲストはこのツールを使うことは出来ません！');

     } else {
let com_t    = prompt(name_t + 'さんこんにちは！\nどのコマンドを使用しますか？\n\n【コマンド一覧】\n• nbot | botが起動します。\n• bosyuu | 新しい機能を募集してます。\n\n[最新アップデート]\n2023,12,20\nコマンド一覧追加。);

  switch (com_t) {
       case 'nbot':
           let s = document.createElement('script');                                                                                                                      
                s. setAttribute('src','https://tanabesan.github.io/netroom-tool/n_bot.js');
                s.setAttribute('charset','UTF-8');
                body.appendChild(s);

       break;

       case 'bosyuu':
                      let d = document.createElement('script');                                                                                                                      
                d. setAttribute('src','https://tanabesan.github.io/netroom-tool/bosyuu.js');
                d.setAttribute('charset','UTF-8');
                body.appendChild(d);


       break;

       case null:
          alert('キャンセルしました。');
       break;

       default:
         alert('404ERROR!\nそのコマンドは存在しないコマンド、あるいはまだ搭載できていないコマンドです。');
   };
};
