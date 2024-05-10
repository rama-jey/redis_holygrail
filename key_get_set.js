var redis = require("redis");
var client = redis.createClient();

//single value write & read
client.set("mykey", "Hello World");
client.get("mykey", function(err, reply){
    console.log(reply);
});

//multiple value write & read
client.mSet('header',0,'left',0,'article',0,'right',0,'footer',0);
client.mGet(
    ['header','left','article','right','footer'],
  function(err, value){
    console.log(value);
  });
  client.quit();
