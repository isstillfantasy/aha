/*
提取115中的视频使用infuse进行播放.
使用方法：
1.在[Script]分组下添加下面这行配置
http-request ^https?:\/\/.*\.115\.com\/.*\.m3u8.*$ script-path=https://raw.githubusercontent.com/isstillfantasy/aha/refs/heads/main/115toinfuse202411.js
*/
$notification.post('播放地址提取成功, 长按(重按)通知查看', '',  'infuse://play?url=' + $request.url);
$done({}); 




