$(document).ready(function () {
  $(".design,#hide1").click(function () {
      $(".design").toggle();
      $("#hide1").toggle();
  });
  $(".development,#hide2").click(function () {
      $(".development").toggle();
      $("#hide2").toggle();
  });
  $(".product,#hide3").click(function () {
      $(".product").toggle();
      $("#hide3").toggle();
  });
});

// toggle for the portfolio part.

$(document).ready(function () {
  $(".image1").hover(function () {
      $(".overlay1, this").slideToggle('slow');
  }, function () {
      $(".overlay1, this").slideToggle('slow');
  });
  $(".image2").hover(function () {
      $(".overlay2, this").slideToggle('slow');
  }, function () {
      $(".overlay2, this").slideToggle('slow');
  });
  $(".image3").hover(function () {
      $(".overlay3, this").slideToggle('slow');
  }, function () {
      $(".overlay3, this").slideToggle('slow');
  });
  $(".image4").hover(function () {
      $(".overlay4, this").slideToggle('slow');
  }, function () {
      $(".overlay4, this").slideToggle('slow');
  });
  $(".image5").hover(function () {
      $(".overlay5, this").slideToggle('slow');
  }, function () {
      $(".overlay5, this").slideToggle('slow');
  });
  $(".image6").hover(function () {
      $(".overlay6, this").slideToggle('slow');
  }, function () {
      $(".overlay6, this").slideToggle('slow');
  });
  $(".image7").hover(function () {
      $(".overlay7, this").slideToggle('slow');
  }, function () {
      $(".overlay7, this").slideToggle('slow');
  });
  $(".image8").hover(function () {
      $(".overlay8, this").slideToggle('slow');
  }, function () {
      $(".overlay8, this").slideToggle('slow');
  });
});

// DRY  the above code and make it shorter.

var shorten = function (){
  var image = [".image1",".image2",".image3",".image4",".image5",".image6",".image7",".image8"]
  var overlay = [".overlay1",".overlay2",".overlay3",".overlay4",".overlay5",".overlay6",".overlay7",".overlay8"]
}

// The feedback input form

$(document).ready(function () {
  $("#messageus").submit(function () {

      var name = $("input#yourname").val();
      var email = $("input#email").val();
      var feedback = $("input#feedback").val();

      alert("Hello " + name + ". we have received your feedback.Thank you for reaching out to us.");
      $(this).get(0).reset();
      event.preventDefault();
  });
});