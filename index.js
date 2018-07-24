const request = require('request');
const argv = require('yargs').argv;



let apiKey='Your API Key here';
let city=argv.c || 'Boston';
let url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


request(url, function (error, response, body) {
  if(error)
  {

      console.log('error:',error);
  }else{
    let weather=JSON.parse(body);

    let message=`It's ${weather.main.temp}degrees in ${weather.name}!`;
    console.log(message);
    }
});
