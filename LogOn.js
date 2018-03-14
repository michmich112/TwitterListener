var fs          = require('fs');
var color       = require('colors');

module.exports = {
 SecureLogOn: function(filepath, oauthFunction, callback){
  fs.readFile( filepath , (err,res)=>{
   if (err) {console.log('[Error] -> Authentication file not found/unreadable\nFull error log:\n'+err); return null;}
 
   try{
    let data = JSON.parse(res); //parses the json into the correct js object
    var output = new oauthFunction(data);
    console.log('[Success]'.green + ' -> Authentication Success!');
    callback(output);
   } catch(err){
    console.log('[Error]'.red + ' -> Authentication Failed');
   }
  });
 }
}
