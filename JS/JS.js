$(document).ready(function (){
        // if you use id,please add # in front
        // # means id, #button is the selector, click() is the action

        $("#button").click(function () {
            $("p").show();
            // p is my seletor, show() is my action
        });

    $("#button2").click(function () {
    //class group1 1 will be selector, hide() is my action.
    // .means class
    $(".group1").hide();

    });
    $("#button3").click(function () {
        $("#p5").hide();

    });
    $("#button4").click(function () {
        $(".group2").toggle();

    });
    $("#doubleClick").dblclick(function () {
        $("p").toggle();

    });
    $("#mouse").mouseenter(function () {
        $("p").show();
    });
    $("#mouse").mouseleave(function () {
        $("p").hide();

    })
});