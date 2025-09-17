<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hello, world!!!</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="" />
  <link rel="icon" href="favicon.png">
</head>
<body>
  <header>
    <h1>Hello, world!</h1>
  </header>
  <nav class="nav" id="nav">
    <a href="#home">Logo</a>
    <a href="#menu-item-1">Menu Item 1</a>
    <a href="#menu-item-2">Menu Item 2</a>
    <a href="#menu-item-3">Menu Item 3</a>
    <a href="javascript:void(0);" id="menu-toggle" onclick="togglemenu()">
      <div class="menu-toggle__bar1"></div>
      <div class="menu-toggle__bar2"></div>
      <div class="menu-toggle__bar3"></div>
    </a>
  </nav>
  <style>
  /* For best practice, move CSS below to an external CSS file. */
  .nav {
    overflow: hidden; }
  .nav a {
    float: left;
    margin: 10px;
    display: block; }
  .nav #menu-toggle {
    display: none; }
  @media screen and (max-width: 600px) {
    .nav a:not(:first-child) {
      display: none; }
    .nav a#menu-toggle {
      float: right;
      display: block; } }
  @media screen and (max-width: 600px) {
    .nav.nav--open {
      position: relative; }
    .nav.nav--open #menu-toggle {
      position: absolute;
      right: 0;
      top: 0; }
    .nav.nav--open a {
      float: none;
      display: block;
      text-align: left; } }
  .menu-toggle__bar1, .menu-toggle__bar2, .menu-toggle__bar3 {
    width: 21px;
    height: 3px;
    background-color: #000000;
    margin: 4px 0;
    transition: 0.3s; }
  .menu-toggle--open .menu-toggle__bar1 {
    transform: translate(0, 7px) rotate(-45deg); }
  .menu-toggle--open .menu-toggle__bar2 {
    opacity: 0; }
  .menu-toggle--open .menu-toggle__bar3 {
    transform: translate(0, -7px) rotate(45deg); }
  </style>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
  <main>
    <section></section>
    <section></section>
    <section></section>
  </main>
  <form action="#">
    <label for="firstName">First name:</label><br>
    <input type="text" name="firstName" value="John"><br>
    <input type="submit" value="Submit">
  </form>
  <style>
  /* For best practice, move CSS below to an external CSS file. */
  .accordion {
    background-color: lightgray;
    color: #000000;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s; }
  .accordion-panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden; }
  .arrow-icon__line {
    width: 20px;
    height: 4px;
    background-color: #000000; }
  .accordion__indicator::after {
    content: "+"; }
  .accordion--open .accordion__indicator::after {
    content: "-"; }
  </style>
  <button class="accordion">
    Accordion Section Heading 1<span class="accordion__indicator"></span>
  </button>
  <div class="accordion-panel">
    <p>Accordion Section Content 1</p>
  </div>
  <button class="accordion">
    Accordion Section Heading 2<span class="accordion__indicator"></span>
  </button>
  <div class="accordion-panel">
    <p>Accordion Section Content 2</p>
  </div>
  <button class="accordion">
    Accordion Section Heading 3<span class="accordion__indicator"></span>
  </button>
  <div class="accordion-panel">
    <p>Accordion Section Content 3</p>
  </div>
  <style>
    .splide__slide img {
      width: 100%;
      height: auto;
    }
  </style>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.3/dist/css/splide.min.css">
  <section id="image-carousel" class="splide" aria-label="Images">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img src="https://via.placeholder.com/800x600/000000" alt="">
          <div>
            Description 01
          </div>
        </li>
        <li class="splide__slide">
          <img src="https://via.placeholder.com/800x600/333333" alt="">
          <div>
            Description 02
          </div>
        </li>
        <li class="splide__slide">
          <img src="https://via.placeholder.com/800x600/666666" alt="">
          <div>
            Description 03
          </div>
        </li>
      </ul>
    </div>
  </div>
  <table border="1" cellspacing="0" cellpadding="5">
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
      <td>Row 1, Column 3</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
      <td>Row 2, Column 3</td>
    </tr>
  </table>
  <footer>
    <small>© <script>document.write(new Date().getFullYear())</script> Your company name. All Rights Reserved.</small>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.3/dist/js/splide.min.js"></script>
  <script>
    new Splide( '.splide' ).mount();
  </script>
  <script>
  function togglemenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " nav--open";
    } else {
      x.className = "nav";
    }
    var element = document.getElementById("menu-toggle");
    element.classList.toggle("menu-toggle--open");
  }
  </script>
  <script>
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("accordion--open");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  </script>
</body>
</html>
