
window.onload = function() {
document.getElementById('button').addEventListener('click', (e) => {
    
    e.preventDefault();
    var city = document.getElementById('searchbar').value;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=329426993c359486d3e4dd41b278451a", function(data){

    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";


    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp + " degrees");

    }
    );
});

}
