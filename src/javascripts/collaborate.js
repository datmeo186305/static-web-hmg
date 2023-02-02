/* eslint-disable */
// url get post data
const url = "https://home.monex.vn/wp-json/wp/v2/posts?per_page=5&page=1";
/* owl carousel */
const owlTestimonial = $(".testimonial-carousel");
const owlArticles = $(".articles-carousel");
owlTestimonial.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
  },
});

const stopAutoPlay = () => {
  owlTestimonial.trigger("stop.owl.autoplay");
};
const playAutoPlay = () => {
  owlTestimonial.trigger("play.owl.autoplay");
};
const nextCarousel = () => {
  owlTestimonial.trigger("next.owl.carousel", [1000]);
};
const prevCarousel = () => {
  owlTestimonial.trigger("prev.owl.carousel", [1000]);
};
// Go to the next item
const testimonialNavNext = $("#testimonial-nav_next");
const testimonialNavNextMobile = $("#testimonial-nav_next_mobile");
testimonialNavNext.click(nextCarousel);
testimonialNavNext.mouseenter(stopAutoPlay);
testimonialNavNext.mouseleave(playAutoPlay);
testimonialNavNextMobile.click(nextCarousel);
testimonialNavNextMobile.mouseenter(stopAutoPlay);
testimonialNavNextMobile.mouseleave(playAutoPlay);
// Go to the previous item
const testimonialNavPrev = $("#testimonial-nav_prev");
const testimonialNavPreMobile = $("#testimonial-nav_prev_mobile");
testimonialNavPrev.click(prevCarousel);
testimonialNavPrev.mouseenter(stopAutoPlay);
testimonialNavPrev.mouseleave(playAutoPlay);
testimonialNavPreMobile.click(prevCarousel);
testimonialNavPreMobile.mouseenter(stopAutoPlay);
testimonialNavPreMobile.mouseleave(playAutoPlay);

/** datepicker */
Date.prototype.ddmmyyyy = function () {
  var dd = this.getDate().toString();
  var mm = (this.getMonth() + 1).toString();
  var yyyy = this.getFullYear().toString();
  return (
    (dd[1] ? dd : "0" + dd[0]) + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + yyyy
  );
};

const datePicker = $("#datePicker");
datePicker.datepicker({
  dateFormat: "dd-mm-yy",
  duration: "fast",
});

datePicker.on("change", function () {
  var selectedDate = $(this).val();
  var todaysDate = new Date().ddmmyyyy();
  const blockDatePicker = datePicker.parent();
  if (selectedDate < todaysDate) {
    blockDatePicker.addClass("error");
  } else {
    blockDatePicker.removeClass("error");
  }
});

$(document).ready(function () {
  /*
  toggle show filter option contact form
  */
  let filterOption;
  let filterSearch;

  const handleForcusSearchField = (elm) => {
    if (!elm) return;
    filterSearch = elm.parentElement;
    filterSearch.classList.add("active");
    filterOption = filterSearch.parentElement;
    filterOption.classList.add("active");
  };

  const contactForm = document.getElementById("contact-form-wrapper");
  const searchField = contactForm.querySelector("#search-field");
  const iconAngleDown = contactForm.querySelector(".angle-down");
  searchField.addEventListener("focus", () => {
    handleForcusSearchField(searchField);
  });
  searchField.addEventListener("focusout", () => {
    filterOption.classList.remove("active");
    filterSearch.classList.remove("active");
  });
  iconAngleDown.addEventListener("click", () => {
    handleForcusSearchField(searchField);
  });

  /* click to outside close filter option */

  const main = document.getElementById("main-collaborate");
  main.addEventListener("click", (event) => {
    const filterOptionActive = contactForm.querySelectorAll(
      ".filter-option.active"
    );
    if (
      filterOptionActive.length > 0 &&
      !$(event.target).closest(".filter-option").length &&
      !$(event.target).is(".filter-option")
    ) {
      filterOption.classList.remove("active");
      filterSearch.classList.remove("active");
    }
  });

  const optionList = contactForm.querySelectorAll(".option");
  optionList.forEach((elm) => {
    elm.addEventListener("click", () => {
      searchField.value = elm.textContent;
      filterOption.classList.remove("active");
      filterSearch.classList.remove("active");
    });
  });

  /** event datePicker */
  let blockDatePicker;
  const datePickerField = contactForm.querySelector("#datePicker");
  const iconCalculator = contactForm.querySelector(".icon-calculator");

  const datePickerSetActive = (datePickerField) => {
    blockDatePicker = datePickerField.parentElement;
    blockDatePicker.classList.add("active");
    $(datePickerField).focus();
  };
  datePickerField.addEventListener("focus", () => {
    datePickerSetActive(datePickerField);
  });
  datePickerField.addEventListener("focusout", () => {
    blockDatePicker = datePickerField.parentElement;
    blockDatePicker.classList.remove("active");
  });

  main.addEventListener("click", (event) => {
    const blockDatePickerActive = contactForm.querySelectorAll(
      "#block-datePicker.active"
    );
    if (
      blockDatePickerActive.length > 0 &&
      !$(event.target).closest("#block-datePicker").length &&
      !$(event.target).is("#block-datePicker")
    ) {
      blockDatePickerActive[0].classList.remove("active");
    }
  });

  iconCalculator.addEventListener("click", () => {
    datePickerSetActive(datePickerField);
  });

  /** validate submit form */

  const setErrorFor = (input) => {
    const { parentElement } = input;
    parentElement.className = "parent-input error";
    $(input).click();
    $(input).blur(() => {
      parentElement.className = "parent-input";
    });
    $(input).focus(() => {
      parentElement.className = "parent-input success";
    });
  };

  const setSuccessFor = (input) => {
    const { parentElement } = input;
    parentElement.className = "parent-input success";
    $(input).click();
  };

  const checkInput = (element, value, email = false, phoneNumber) => {
    if (!element) return;

    const emailRgx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const phoneRgx = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    if (value.length === 0) {
      setErrorFor(element);
    } else if (email && !emailRgx.test(value)) {
      setErrorFor(element);
    } else if (!email && phoneNumber && !phoneRgx.test(value)) {
      setErrorFor(element);
    } else {
      setSuccessFor(element);
    }
  };

  const handleSubmitContactForm = () => {
    // get input element
    const merchant = contactForm.querySelector("#merchant");
    const channel = contactForm.querySelector("#search-field");
    const bookDemo = contactForm.querySelector("#datePicker");
    const fullName = contactForm.querySelector("#fullName");
    const email = contactForm.querySelector("#email");
    const phoneNumber = contactForm.querySelector("#phoneNumber");
    // trim value
    const merchantValue = merchant.value.trim();
    const channelValue = channel.value.trim();
    const bookDemoValue = bookDemo.value.trim();
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();

    checkInput(merchant, merchantValue);
    checkInput(fullName, fullNameValue);
    checkInput(email, emailValue, true);
    checkInput(phoneNumber, phoneNumberValue, false, true);
    checkInput(channel, channelValue);
    checkInput(bookDemo, bookDemoValue);
    return {
      merchant: merchantValue,
      channel: channelValue,
      bookDemo: bookDemoValue,
      fullName: fullNameValue,
      email: emailValue,
      phoneNumber: phoneNumberValue,
    };
  };

  const handleThenSendContactSuccess = (modalLoading) => {
    modalLoading.className = "";
    const modalSuccess = document.querySelector(
      "#myModal-receive-email-success"
    );
    const btnSuccess = modalSuccess.querySelector(
      ".receive-email-modal-submit"
    );
    modalSuccess.style.display = "block";
    const descriptionSuccess = $(".description_success");
    const oldText = descriptionSuccess.text();
    descriptionSuccess.text("Gửi thông tin thành công");

    btnSuccess.addEventListener("click", () => {
      descriptionSuccess.text(oldText);
      modalSuccess.style.display = "none";
      $(".block-form")[0].reset();
      const contactFieldList = document.querySelectorAll(".contact-field");
      contactFieldList.forEach((field) => {
        field.parentElement.className = "parent-input";
      });
    });
  };

  const handleThenSendContactFailed = (modalLoading) => {
    modalLoading.className = "";
    const modalFailed = document.querySelector("#myModal-receive-email-fail");
    const btnSuccess = modalFailed.querySelector(".receive-email-modal-submit");
    const descriptionFailed = $(".description_failed");
    const oldText = descriptionFailed.text();
    modalFailed.style.display = "block";
    descriptionFailed.text("Gửi thông tin thất bại. Vui lòng thử lại.");
    btnSuccess.addEventListener("click", () => {
      descriptionFailed.text(oldText);
      modalFailed.style.display = "none";
    });
  };

  const sendContact = (userInfo, loading) => {
    $.ajax({
      url: window.location.href,
      type: "POST",
      data: {
        userInfo,
      },
      success: function (data) {
        handleThenSendContactSuccess(loading);
      },
      error: function (error) {
        handleThenSendContactFailed(loading);
      },
    });
  };

  const button = contactForm.querySelector("#submit-contact-form");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const contactInfo = handleSubmitContactForm();
    const inputErrorGroups = contactForm.querySelectorAll(
      ".parent-input.error"
    );
    if (inputErrorGroups.length === 0) {
      const modalLoading = document.querySelector("#modal-loading");
      modalLoading.className = "show";

      // sendContact(contactInfo, modalLoading);
      setTimeout(() => {
        handleThenSendContactSuccess(modalLoading);
      }, 2000);
    }
  });

  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });

  /** render post in articles */
  const renderPostArticles = (articles) => {
    owlArticles.trigger("destroy.owl.carousel");
    owlArticles.find(".owl-stage-outer").children().unwrap();
    owlArticles.removeClass("owl-center owl-loaded owl-text-select-on");

    const articlesCarousel = document.querySelector(".articles-carousel");
    const articleTemplate = document.querySelector("#article-template").content;
    const blockArticle = articleTemplate.querySelector(".article-post");

    for (const article of articles) {
      const cloneBlockArticle = blockArticle.cloneNode(true);
      const thumbnailArticle = cloneBlockArticle.querySelector(".image");
      const articleCreateAt =
        cloneBlockArticle.querySelector(".article-createAt");
      const titleArticle = cloneBlockArticle.querySelector(".article-title");
      const articleLink = cloneBlockArticle.querySelector(".article-link");
      articleLink.href = article.link;
      // articleLink.setAttribute("target", "_blank");
      thumbnailArticle.srcset = `${article.yoast_head_json.og_image[0].url} 2x`;
      const modified = new Date(article.modified_gmt);
      titleArticle.innerHTML = article.title.rendered;
      articleCreateAt.textContent = `${modified.getDate()}/${
        modified.getMonth() + 1
      }/${modified.getFullYear()}`;
      articlesCarousel.appendChild(cloneBlockArticle);
    }

    owlArticles.owlCarousel({
      items: 3,
      loop: true,
      margin: 16,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 1000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          stagePadding: 24,
          items: 1,
          margin: 8,
        },
        576: {
          stagePadding: 0,
          items: 2,
          margin: 16,
        },
        768: {
          items: 3,
        },
      },
    });
  };

  $.ajax({
    url: url,
    type: "GET",
    success: function (articles) {
      renderPostArticles(articles);
    },
    error: function (error) {
      console.log(error);
    },
  });

  // render post
});
