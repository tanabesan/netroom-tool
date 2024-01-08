let notice = Number(document.getElementsByClassName('notice clearfix')[0].getAttribute('id').replace('notice_', ''));
let lnotice = Number(prompt('フレンド申請は何件来ていますか？'));
for(let id = notice; id <= notice + lnotice; id++) {
let nid = 'notice_' + id;
let target0 = document.getElementById(nid);
let uid0 = target0.children[2].getAttribute('data-uid');
let imgNo0 = target0.children[2].getAttribute('data-img_no');
open_pvm(uid0, imgNo0);
};
