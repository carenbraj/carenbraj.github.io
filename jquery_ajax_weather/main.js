"use strict";
$(document).ready(function(){
    $.get ("http://api.openweathermap.org/data/2.5/weather?apiKey=e5502ec69f5a458452a69bc6f9c04742&zip=02878,us",function(result){
        var message = ("getTemp: "+ result.weather[0].main);
        $('h1').append(message);
        console.log(r);
        });
    });
