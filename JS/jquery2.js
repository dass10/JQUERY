$(document).ready(function () {
    $("#Toggle").click(function () {
        $("#demo").toggle(3000, function () {
            alert("done");

        }); //3000 means 3000

    });

    $("#FadeIn").click(function () {
        $("#demo").FadeIn("slow");

    });
    $("#Enlarge").mouseenter(function () {
        $("#demo").animate({width: "250px", height: "250px"});

    });
    $("#Enlarge").mouseleave(function () {
        $("#demo").animate({width: "100px", height: "100px"});
    });

    $("#slide").click(function () {
        $("#forslide").slideDown(2000).slideUp(2000).slideDown(2000)

    });
    $("#changeTextHere").click(function () {
        currentText = $("#changeTextHere").text(); //collect current text in paragraph
        alert("Current Text: " + currentText); //show it up in pop up
        $("#changeTextHere").text("Hello Shweta"); //change the text in paragraph
        currentValue = $("#changeValueHere").val(); //collect current value in input box
        alert("Current Value: " + currentValue); //show it in popup
        $("#changeValueHere").val("Hello Das"); //change the value in the input box

    });

    $("#addHTMLToTable").click(function () {
        alert($("#demoTable").html()); //collect html code in my element
        $("#demoTable").html("<tr><td>Shweta Das</td><td>32</td><td>Female</td></tr>" +
            "<tr><td>Shweta Das</td><td>32</td><td>Female</td></tr>");

    });
    $("#showAttrOfTable").click(function () {
        alert($("#demoTable").attr("price"));
        alert($("#demoTable").attr("age"));
        alert($("#demoTable").attr("attr1"));

    });

    $("#appendBtn").click(function () {
        $("#demoTable").append("<tr><td>Reyansh Das</td><td>30</td><td>Female</td></tr>");

    });

    $("#prependBtn").click(function () {
        $("#demoTable").append("<tr><td>Shweta Das</td><td>32</td><td>Female</td></tr>");

    });

    $("#addBeforeHeading").click(function () {
        $("#tableHeading").before("<tr><td>Before</td><td>32</td><td>Female</td></tr>");

    });

    $("#addAfterHeading").click(function () {
        $("#tableHeading").before("<tr><td>after</td><td>32</td><td>Female</td></tr>");

    });


    $("#removeHeading").click(function () {
        $("#tableHeading").remove();

    });

    $("#emptyTable").click(function () {
        $("#demoTable").empty();
    });


        $("#addClass").click(function () {
            $("#demoTable").addClass("table1");

        });

});