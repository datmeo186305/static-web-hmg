/* eslint-disable */

$(document).ready(function () {
  $(".navbar .dropdown-item.dropdown").on("click", function (e) {
    var $el = $(this).children(".dropdown-toggle");

    if ($el.length > 0 && $(e.target).hasClass("dropdown-toggle")) {
      var $parent = $el.offsetParent(".dropdown-menu");
      $(this).parent("li").toggleClass("open");

      if (!$parent.parent().hasClass("navbar-nav")) {
        if ($parent.hasClass("show")) {
          $parent.removeClass("show");
          $el.next().removeClass("show");
          $el.next().css({
            top: -999,
            left: -999,
          });
        } else {
          $parent.parent().find(".show").removeClass("show");
          $parent.addClass("show");
          $el.next().addClass("show");
          $el.next().css({
            top: $el[0].offsetTop,
            left: $parent.outerWidth() - 4,
          });
        }

        e.preventDefault();
        e.stopPropagation();
      }

      return;
    }
  });
  $(".navbar .dropdown").on("hidden.bs.dropdown", function () {
    $(this).find("li.dropdown").removeClass("show open");
    $(this).find("ul.dropdown-menu").removeClass("show open");
  });

  $(".navbar .sidebar-dropdown").on("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });

  $(".bnpl-step-list-mobile .bnpl-step-item").on("click", function () {
    $(".bnpl-step-list-mobile .bnpl-step-item .bnpl-step-dropdown").remove(
      "active"
    );

    $(".bnpl-step-item .bnpl-step-dropdown").hide();


    let firstChild = this.firstElementChild;
    firstChild.classList.add("active");
    var dropdownContent = firstChild.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
});
