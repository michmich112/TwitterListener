var Twitter     = require('twitter');
var auth        = require('./LogOn');
var readline    = require("readline");
var color       = require('colors');

var keys = undefined; //these are the keywords. Undefined for the moment, defined once it is entered in the terminal

function main(){
 var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
 rl.question('Enter Keyword-> ', function(keyword) {
  rl.close();
  try{
    keys = keyword.trim()
    keys = keys.split(',');
    console.log(keys);
    auth.SecureLogOn(".keys/twitterAuth.json",Twitter,(client)=>{
      var stream = client.stream('statuses/filter', {track: keyword});
      stream.on('data', function(event) {
        try{
          console.log('['.yellow + (event.created_at).yellow + ']'.yellow +' '+event.user.name + ': ' + (event.user.screen_name).cyan + ' -> ' + colorKeyword(event.extended_tweet.full_text,"red"));
        }catch(err){
          console.log('['.yellow + (event.created_at).yellow + ']'.yellow +' '+event.user.name + ': ' + (event.user.screen_name).cyan + ' -> ' + colorKeyword(event.text,"red"));
        }
      });
       
      stream.on('error', function(error) {
       console.log('[ERROR]'.red + '\n' + error);
       //throw error;
      });
    });
  }catch (err){
    console.log('[ERROR]'.red + ' -> event unreadable. close stream and try again.')
  }
 });
}

function colorKeyword(input,color){
  if((typeof color) != "string"){
    console.log('[ERROR]'.red + ' parameter `color` should be of type "string".');
    throw SyntaxError;
  }
  let tmp = input;
  let srchTmp = input.toLowerCase();
  keys.forEach((key)=>{
    let currentKey = key.toLowerCase();
    let ind = srchTmp.indexOf(key);
    if(ind > -1){
      let left = tmp.slice(0,ind);
      let mid = tmp.slice(ind,ind+key.length);
      let right = tmp.slice(ind+key.length,tmp.length);
      tmp =  left + chooseColor(mid,color) + colorKeyword(right,color);
    }
  });
  return tmp;
}

function chooseColor(input,color){
  switch(color){
    case 'cyan':
      return (input).cyan;
    case 'black':
      return (input).black;
    case 'green':
      return (input).green;
    case 'yellow':
      return (input).yellow;
    case 'blue':
      return (input).blue;
    case 'magenta':
      return (input).magenta;
    case 'red':
      return (input).red;
    case 'gray':
      return (input).gray;
    case 'grey':
      return (input).grey;
    default:
      return (input).white;
  }

}

main();