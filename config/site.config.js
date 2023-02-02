const path = require("path");
const fs = require("fs");
require('dotenv').config()

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  // Your website's name, used for favicon meta tags
  site_name: "Monex site",

  // Your website's description, used for favicon meta tags
  site_description: "Monex - Mua trước trả sau",

  // Your website's URL, used for sitemap
  site_url: "https://monex.vn/",

  // Google Analytics tracking ID (leave blank to disable)
  googleAnalyticsUA: "",

  // The viewport meta tag added to your HTML page's <head> tag
  viewport: "width=device-width, initial-scale=1, user-scalable=no",

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, "/src/images/favicon.png"),

  //OG config
  og_image: "./images/fb-thumb.png",
  og_image_width: "800",
  og_image_height: "400",
  og_title: "Monex - Mua trước trả sau",
  og_site_name: "Monex site",
  og_type: "website",

  // Local development URL
  dev_host: process.env.HOST || "0.0.0.0",

  // Local development port
  port: process.env.PORT || 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV || "production",

  //Allow hosts
  allow_hosts: process.env.ALLOW_HOSTS || "monex.vn",

  root: ROOT,
  paths: {
    config: "config",
    src: "src",
    dist: "dist",
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, "/package.json"), { encoding: "utf-8" })
  ),
};

module.exports = config;
