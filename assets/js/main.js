// Ityped
var txtType = document.getElementById("aboutTyped");
ityped.init(txtType, {showCursor : true, strings: ['برنامه نویس و طراح سایت', 'مدرس دوره های برنامه نویسی' , 'مشاور پروژه' ] });


// Dark Mode Theme
$(document).ready(function () {

  var ThemeVal = localStorage.getItem("ThemeMode");
  if(ThemeVal == "dark"){
    $("html").addClass("dark");
    $("#swBtn").attr("checked","checked");
  }else{
    $("html").removeClass("dark");
  }


  $("#swBtn").click(function () { 
    if($(this).is(":checked")){
      $("html").addClass("dark");
      localStorage.setItem("ThemeMode","dark");
    }else{
      $("html").removeClass("dark");
      localStorage.setItem("ThemeMode","light");
    }
  });
});



// Prue Counter init
// $(document).ready(function () {
//   new PureCounter();
// });

// Preloader
// $(window).on("load",function(){
//   $(".preloader").fadeOut("slow");
// })

// Preloader
// $(window).on("load", function(){
//   $(".preloader").delay(800).fadeOut("slow");
// })



