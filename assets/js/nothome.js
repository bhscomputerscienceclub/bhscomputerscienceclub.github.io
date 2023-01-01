$(window).on("resize load", function () {
    if ($(".sidebar").width() / $(".sidebar").parent().width() == 1) {
      $("main").css("margin-right",0);
    } else {
        var thing = $(".sidebar").width()+20;
      $("main").css("margin-right",thing);
    }
  });

