let openMenu = document.querySelector("#openMenu");
let closeMenu = document.querySelector("#closeMenu");
let mobileMenu = document.querySelector("#menuWrapper");
let shortenBtn = document.querySelector("#shorten");
let shortenInput = document.querySelector("#shortenInput");
let OrignalUrldiv = document.querySelector("#Url");
let generatedDiv = document.querySelector("#generatedDiv");
let shortUrlDiv = document.querySelector("#shortUrlDiv");
let copyBtn = document.querySelector("#copyBtn");
let generatedSkeletonDiv = document.querySelector("#generatedSkeletonDiv");

let form = document.querySelector("#form");

/****************** Toggle Menu ***********************/

openMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("toggle");
  closeMenu.classList.toggle("toggle");
  openMenu.classList.toggle("toggle");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("toggle");
  openMenu.classList.toggle("toggle");
  closeMenu.classList.toggle("toggle");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  /***************** API Functionality ********************/

  shortenBtn.addEventListener("click", async function () {
    let orignalUrl = shortenInput.value;

    //Displaying Skeleton untill API Fetch
    generatedSkeletonDiv.classList.remove("toggle");

    //Feteching Short Url
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${orignalUrl}`
    );
    const data = await res.json();

    //Removing Skeleton , API Fetched
    generatedSkeletonDiv.classList.add("toggle");

    //Putting Fetched Data in generatedDiv
    OrignalUrldiv.innerHTML = orignalUrl;
    shortUrlDiv.innerHTML = data.result.short_link;

    //Displaying Fetched Data From API
    generatedDiv.classList.remove("toggle");

    //Changing value of copy button after a new link generated
    copyBtn.innerHTML = "Copy";

    //Clearing input screen after click of button shorten it
    shortenInput.value = "";
  });
});

/******************** Copy Button Functionality *******************/

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);

  //Changing value of copy btn after copied
  copyBtn.innerHTML = "Copied!";
});
