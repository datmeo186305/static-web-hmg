/* eslint-disable */
$(document).ready(function () {
  $(".bnpl-step-illustrator").hide();
  $("#bnpl-step-1").show();
  $(".bnpl-step-list #bnpl-step-1-dropdown").click();
  let stepIndex = 1;
  let mobileInterval;
  let desktopInterval;

  $(".bnpl-step-item").hover(function () {
    if (
      stepIndex !== 6 &&
      stepIndex + 1 !== $(this).index()
    ) {
      clearInterval(desktopInterval);
    }
    stepIndex = $(this).index();
    $(".bnpl-step-item").removeClass("bnpl-step-item-active");
    $(this).addClass("bnpl-step-item-active");

    // Desktop
    $(".bnpl-step-illustrator").hide();
    $("#bnpl-step-" + stepIndex).show();
  });

  $(".bnpl-step-item").click(function () {
    if (
      stepIndex !== 6 &&
      stepIndex + 1 !== $(this).index()
    ) {
      clearInterval(mobileInterval);
    }
    stepIndex = $(this).index();
    $(".bnpl-step-item").removeClass("bnpl-step-item-active");
    $(this).addClass("bnpl-step-item-active");

    // Desktop
    $(".bnpl-step-illustrator").hide();
    $("#bnpl-step-" + stepIndex).show();
  });

  if (window.innerWidth < 768) {
    mobileInterval = setInterval(() => {
      let activeBnplStepElement = $(
        ".bnpl-step-list-mobile .bnpl-step-item.bnpl-step-item-active"
      );
      if (stepIndex < 6) {
        if (activeBnplStepElement.get(0)) {
          activeBnplStepElement.get(0).nextElementSibling.click();
        }
      } else {
        $(".bnpl-step-list-mobile #bnpl-step-1-dropdown").click();
      }
    }, 2000);
  } else {
    desktopInterval = setInterval(() => {
      let activeBnplStepElemenDesktop = $(
        ".bnpl-step-list-desktop .bnpl-step-item.bnpl-step-item-active"
      );
      if (stepIndex < 6) {
        if (activeBnplStepElemenDesktop.get(0)) {
          activeBnplStepElemenDesktop.get(0).nextElementSibling.click();
        }
      } else {
        $(".bnpl-step-list-desktop .bnpl-step-item").first().click();
      }
    }, 2000);
  }
});
