let com_t = prompt('どのコマンドを使用しますか？');

  switch (com_t) {
       case 'rentou':
          alert('連投だよ');
       break;
       case null:
          alert('キャンセルしました。');
       break;

       default:
         alert('ERROR!\nそのコマンドは存在しないコマンド、あるいはまだ搭載できていないコマンドです。');
};
