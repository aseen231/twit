var Twit = require('twit');



var T = new Twit({
  consumer_key:         'brd1UQbmjqtEZiSUEXy7AYSXd',
  consumer_secret:      '7ne594DlxkQ5C8PovyveZt7tzPk2DBY0xt0rCYrQr0GtTF2dUq',
  access_token:         '1380077587993530368-9JaI7QnsiFRk7TdyHiygVg5uDjI1gB',
  access_token_secret:  'ABBLvuKEIw03CJTsCpzgaZwpvsbjqM5DbTWLVG98v5Pxq',
});

T.get('friends/list', { screen_name: 'Aseen75145052' },  getFriends);

function getFriends(err, data, response) {
var fs = require('fs');
 var json = JSON.stringify(data, null, 2);
 fs.writeFile("friends.json",json);

}
