// Ityped
var txtType = document.getElementById("aboutTyped");
ityped.init(txtType,  {
  showCursor: true,
  startDelay: 0,
  strings: [
    "برنامه نویس و توسعه دهنده وب",
    "فعالیت در حوزه هوش مصنوعی",
    "مشاور پروژه",
    "مدرس دوره های برنامه نویسی",
  ],
});

// Dark Mode Theme
$(document).ready(function () {
  var ThemeVal = localStorage.getItem("ThemeMode");
  if (ThemeVal == "dark") {
    $("html").addClass("dark");
    $("#swBtn").attr("checked", "checked");
  } else {
    $("html").removeClass("dark");
  }

  $("#swBtn").click(function () {
    if ($(this).is(":checked")) {
      $("html").addClass("dark");
      localStorage.setItem("ThemeMode", "dark");
    } else {
      $("html").removeClass("dark");
      localStorage.setItem("ThemeMode", "light");
    }
  });
});

// Prue Counter init
$(document).ready(function () {
  new PureCounter();
});

// Preloader
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
});

// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 4,
    dotsEach: true,
    lazyLoad: true,
    autoplay: true,
    animateIn: true,
  });
});
// Numbers Convert to Persian Numbers
$(document).ready(function () {
  $("*").persiaNumber();
});

// Contact us Send Message
const SendBtn = $("#SendBtn");
$(document).ready(function () {
  $(SendBtn).click(function () {
    Swal.fire({
      title: "پیامتون ثبت شد",
      text: "در اولین فرصت چک میکنم (:",
      icon: "success",
      confirmButtonColor: "#2ecc71",
      confirmButtonText: "حله ، مرسی",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "index.html";
      }
    });
  });
});
