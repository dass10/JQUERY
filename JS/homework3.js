$(document).ready(function () {

    $.ajax({
        type: 'GET', //action
        url:'https://djangorestframestudy.herokuapp.com/api/leads/',

    dataType: "JSON", // data type expected from server
        success: function (data) {
            console.log(data);
            i = 0;
            while (i < data.length) { //data from our console it is an array,I don't know the size of that array,I use
                person = data[i]; //each item in array(data),it is a person record
                $("#records").append("<tr>" +
                    "<td>" + person.id + "</td>" +
                    "<td>"+person.name + "</td>" +
                     "<td>"+person.email + "</td>" +
                    "<td>" + person.message + "</td>" +
                    "<td><button class='showPerson' personID='"+person.id+"'>Show</button></td>"+
                "</tr>");
                i = i + 1;
            }
            $(".showPerson").click(function () {
                $.ajax({//delete
                    url:'https://djangorestframestudy.herokuapp.com/api/leads/'+personID+'/',
                    success: function (data) {
                        console.log(data);
                        $("#personInfo").empty(); //clean my divider
                        $("#personInfo").append("" +
                        "<p>ID: "+data.id+"</p>" +
                            "<p>Name: "+data.n</p>"
                        },
                });

            });
        },
        error: function () {
            console.log('Error: ' + data);
            url:'https://djangorestframestudy.herokuapp.com/api/leads/' +personID+'/',
                success:function f(data) {
                console.log(data);






    });

});