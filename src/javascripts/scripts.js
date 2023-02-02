import "bootstrap";
import * as AOS from "aos/dist/aos";
import "./libs/bootstrap-navbar-dropdowns";
import "owl.carousel/dist/owl.carousel";
import "./header";
import "./libs/notification";

AOS.init({
  disable: window.innerWidth < 1024,
  offset: 200,
  duration: 1000,
  easing: "ease-in-sine",
  delay: 0,
  once: true,
});
