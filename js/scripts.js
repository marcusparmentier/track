$(function() {
  $("form#formInput").submit(function(event) {
    var q1 = parseInt($("select#q1sel").val());
    var q2 = parseInt($("select#q2sel").val());
    var q3 = parseInt($("select#q3sel").val());
    var q4 = parseInt($("select#q4sel").val());
    var q5 = parseInt($("select#q5sel").val());
    var result = add(q1, q2, q3, q4, q5);
    var result = parseInt($(result).val());

        if (result >= 26) {
          $("add class fix and show");
        }
        else if (result < 26 && >= 21) {
          $("add class fix and show");
        }
        else if (result < 21 && >= 16) {
          $("add class fix and show");
        }
        else if (result < 16 && >= 11) {
          $("add class fix and show");
        }
        else if (result < 11 && >= 6) {
          $("add class fix and show");
        }
        else {
          alert("Please select values for all questions.");
        }


    event.preventDefault();

  });

});
