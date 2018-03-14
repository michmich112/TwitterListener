var Twitter     = require('twitter');
var auth        = require('./LogOn');
var readline    = require("readline");
var color       = require('colors');

function main(){
 var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
 rl.question('Enter Keyword-> ', function(keyword) {
  rl.close();
  auth.SecureLogOn(".keys/twitterAuth.json",Twitter,(client)=>{
   var stream = client.stream('statuses/filter', {track: keyword});
   stream.on('data', function(event) {
     console.log('['.yellow + (event.created_at).yellow + ']'.yellow +' '+event.user.name + ' -> ' + event.text);
   });
    
   stream.on('error', function(error) {
     throw error;
   });
  });
 });
}

main();