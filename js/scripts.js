var add = function(q1, q2, q3, q4, q5) {
  return q1 + q2 + q3 + q4 + q5;
};

$(function() {
  $("form#formInput").submit(function(event) {
    var q1 = parseInt($("select#q1sel").val());
    var q2 = parseInt($("select#q2sel").val());
    var q3 = parseInt($("select#q3sel").val());
    var q4 = parseInt($("select#q4sel").val());
    var q5 = parseInt($("select#q5sel").val());
    var result = add(q1, q2, q3, q4, q5);


        if (result >= 26) {
            $("div").removeClass("sugg1 sugg2 sugg3");
            $('#netC').addClass("sugg1");
            $('#phpD').addClass("sugg2");
            $('#javaA').addClass("sugg3");
        } else if (result < 26 && result >= 21) {
            $("div").removeClass("sugg1 sugg2 sugg3");
            $('#phpD').addClass("sugg1");
            $('#netC').addClass("sugg2");
            $('#javaA').addClass("sugg3");
        } else if (result < 21 && result >= 16) {
            $("div").removeClass("sugg1 sugg2 sugg3");
            $('#javaA').addClass("sugg1");
            $('#phpD').addClass("sugg2");
            $('#rubyR').addClass("sugg3");
        } else if (result < 16 && result >= 11) {
            $("div").removeClass("sugg1 sugg2 sugg3");
            $('#rubyR').addClass("sugg1");
            $('#javaA').addClass("sugg2");
            $('#cssD').addClass("sugg3");
        } else if (result < 11 && result >= 5) {
            $("div").removeClass("sugg1 sugg2 sugg3");
            $('#cssD').addClass("sugg1");
            $('#rubyR').addClass("sugg2");
            $('#javaA').addClass("sugg3");
        } else {
            $("div").removeClass("sugg1 sugg2 sugg3");
            alert("Please select values for all questions.");
        }


    event.preventDefault();

  });

});
