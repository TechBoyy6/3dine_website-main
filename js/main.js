let objToRender = {
  papad: `models/textured_mesh_glb.glb`,
  laddu: `models/laddu.glb`,
  fried_gavar: `models/fried_gavar.glb`,
  pumpkin: `models/pumkin.glb`,
};

let selectedItem = "";

var items = document.getElementsByClassName("eye");
for (let i = 0; i < items.length; i++) {
  // items[i].addEventListener("click", function () {
  //     document.getElementById("id01").style.display = "block";
  //     itemSelected = Object.keys(objToRender)[i];
  //     console.log(itemSelected);
  //     //Instantiate a loader for the .gltf file
  //     const loader = new GLTFLoader();

  //     //Load the file
  //     loader.load(
  //     objToRender[itemSelected],
  //     function (gltf) {
  //         //If the file is loaded, add it to the scene
  //         object = gltf.scene;
  //         scene.add(object);
  //     },
  //     function (xhr) {
  //         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  //     },
  //     function (error) {
  //         console.log("An error happened");
  //     }
  //     );
  // });
  items[i].addEventListener("click", function () {
    selectedItem = Object.values(objToRender)[i];
    document.getElementById("id01").style.display = "block";
  });
}

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
