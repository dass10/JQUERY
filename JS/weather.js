$(document).ready(function () {


    $("#submitBtn").click(function () {
        city = $("#cityName").val();
        $.ajax({
            type: 'GET', //action get,post,put,delete
            // Auckland was a word inside url, we don't have to change
            // city is a variable, if we want to add a variable to a string, we need + it in
            url: 'https://api.openweathermap.org/data/2.5/weather?q= ' + city + '&appid=c4d8492f9efd161c9ca1f6bd5a0e2666',
            dataType: "JSON", // data type expected from server
            success: function (data) {
                console.log(data);

                $("#locationPlace").text(data.name);
                $("#forecastPlace").text(data.weather[0].description);
                $("#tempPlace").text(data.main.temp);
                $("#windPlace").text(data.wind.speed);
                $("#icon").html("<img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'>");

            },
            error: function () {
                console.log('Error: ' + data);
            }
        });
    });
});

