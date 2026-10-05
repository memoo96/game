var width = $(window).width();

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $(function () {
    $("ul.dropdown-menu [data-toggle='dropdown']").on(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");

        if (!$(this).next().hasClass("show")) {
          $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show");
        }
        $(this)
          .parents("li.nav-item.dropdown.show")
          .on("hidden.bs.dropdown", function (e) {
            $(".dropdown-submenu .show").removeClass("show");
          });
      },
    );
  });

  $(document).on("click", function (event) {
    if ($(this).width() <= 991) {
      var $trigger = $(".navbar");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#navbarContent").removeClass("show");
        $(".navbar-toggler").addClass("collapsed");
      }
    }
  });

  var scrollButton = $(".scroll_top");
  $(window).scroll(function () {
    if ($("body").css("direction") == "ltr") {
      if ($(this).scrollTop() > 500) {
        scrollButton.css({
          opacity: "1",
          visibility: "visible",
          right: "50px",
        });
      } else {
        scrollButton.css({
          opacity: "0",
          visibility: "hidden",
          right: "0px",
        });
      }
    } else {
      if ($(this).scrollTop() > 500) {
        scrollButton.css({
          opacity: "1",
          visibility: "visible",
          left: "50px",
        });
      } else {
        scrollButton.css({
          opacity: "0",
          visibility: "hidden",
          left: "0px",
        });
      }
    }
  });

  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  $(window).scroll(function () {
    var sc = $(this).scrollTop();
    if ($(this).width() > 991) {
      if (sc > 10) {
        $(".MainNav").css({
          "background-color": "#53575a99"
        });
      } else {
        $(".MainNav").css({
          "background-color": "transparent"
        });
      }
    } else {
      if (sc > 10) {
        $(".MainNav").css({
          "background-color": "#53575a99"
        });
      } else {
        $(".MainNav").css({
          "background-color": "transparent"
        });
      }
    }
  });

  $(window).resize(function () {
    var sc = $(this).scrollTop();
    if ($(this).width() != width) {
      if ($(this).width() > 991) {
        $("#Category_page .Filter_Mobile").css("display", "block");
        if (sc > 10) {
          $(".MainNav").css({
            "background-color": "#53575a99"
          });
        } else {
          $(".MainNav").css({
            "background-color": "transparent"
          });
        }
      } else {
        $("#Category_page .Filter_Mobile").css("display", "none");
        if (sc > 10) {
          $(".MainNav").css({
            "background-color": "#53575a99"
          });
        } else {
          $(".MainNav").css({
            "background-color": "transparent"
          });
        }
      }
      width = $(window).width();
    }
  });

  $("#MyAddress .content .NewAddressButton a").click(function () {
    $("#MyAddress .content .Form").slideDown(1000);
    $("html, body").animate(
      {
        scrollTop: $("#MyAddress .content .Form").offset().top - 100,
      },
      1000,
    );
  });
  $("#MyAddress .content .Form .FormButtons .CancelBtn").click(function () {
    $("#MyAddress .content .Form").slideUp(1000);
    $("html, body").animate(
      {
        scrollTop: $("#MyAddress").offset().top - 100,
      },
      1000,
    );
  });

  $("#Category_page #FilterBtn").click(function () {
    $("#Category_page .Filter_Mobile").slideToggle();
  });

  $(".minus-btn").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest("div").find("input");
    var value = parseInt($input.val());

    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
    }

    $input.val(value);
  });

  $(".plus-btn").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest("div").find("input");
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }

    $input.val(value);
  });


  $("#ViewVedio").on("hide.bs.modal", function (e) {
    var ModalBody = $("#ViewVedio").find(".PopUpVedio")[0];
    ModalBody.pause();
  });

  $("select").niceSelect();
});

function ShowVideo(url, title) {
  var ViewVedioModal = $("#ViewVedio");
  var ModalBody = ViewVedioModal.find(".PopUpVedio");
  var ModalTitle = ViewVedioModal.find(".modal-title");
  ModalBody.attr("src", url);
  ModalTitle.html(title);
  // ViewVedioModal.modal({
  //     backdrop: 'static',
  //     keyboard: false
  // });
  ViewVedioModal.modal("show");
}

function CloseVideo() {
  var ViewVedioModal = $("#ViewVedio");
  var ModalBody = ViewVedioModal.find(".PopUpVedio")[0];
  ModalBody.pause();
  ViewVedioModal.modal("hide");
}

function CloseModel() {
  var PointsModel = $("#AddpointsModel");
  PointsModel.modal("hide");
}

/* login page animation */
const content = document.querySelector("#loginPage .content");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
  content.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  content.classList.remove("active");
});
