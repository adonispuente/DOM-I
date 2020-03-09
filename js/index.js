const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
//inserted pictures

let codepic = document.getElementById("cta-img");
codepic.setAttribute("src", siteContent["cta"]["img-src"]);

let codepic2 = document.getElementById("middle-img");
codepic2.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//nav bar

const anchor = document.querySelector("nav").getElementsByTagName("a");

anchor[0].innerText = siteContent.nav["nav-item-1"];
anchor[1].innerText = siteContent.nav["nav-item-2"];
anchor[2].innerText = siteContent.nav["nav-item-3"];
anchor[3].innerText = siteContent.nav["nav-item-4"];
anchor[4].innerText = siteContent.nav["nav-item-5"];
anchor[5].innerText = siteContent.nav["nav-item-6"];

//task3 changing nav
for (let i = 0; i < anchor.length; i++) {
  anchor[i].style.color = "green";
}

//task 3 adding two new things
document
  .querySelector("nav")
  .prepend((document.createElement("a").innerText = "Bebop"));

let newA2 = document.createElement("a");
newA2.textContent = "Bobeep";
let navParent = document.querySelector("nav");
navParent.appendChild(newA2);

// let p = document.createElement("p");
// document.body.appendChild(p);

//adding h1
const newH1 = document.querySelector("h1");
newH1.textContent = siteContent["cta"]["h1"];
//inserting button
const butt = document.querySelector("button");
butt.textContent = siteContent["cta"]["button"];

//middle section
//features
const h4F = document.querySelectorAll("h4");

h4F[0].textContent = siteContent["main-content"]["features-h4"];
h4F[1].textContent = siteContent["main-content"]["about-h4"];

const midp = document.querySelectorAll("p");
midp[0].textContent = siteContent["main-content"]["features-content"];
midp[1].textContent = siteContent["main-content"]["about-content"];

//bottom section

const mdl = document.querySelectorAll(".bottom-content .text-content h4");
mdl[0].textContent = siteContent["main-content"]["services-h4"];
mdl[1].textContent = siteContent["main-content"]["product-h4"];
mdl[2].textContent = siteContent["main-content"]["vision-h4"];

const p2 = document.querySelectorAll(".bottom-content .text-content p");
p2[0].textContent = siteContent["main-content"]["services-content"];
p2[1].textContent = siteContent["main-content"]["product-content"];
p2[2].textContent = siteContent["main-content"]["vision-content"];

//contact page

const end = document.querySelector(".contact h4");
end.textContent = siteContent["contact"]["contact-h4"];
//contact p part

const end2 = document.querySelectorAll(".contact p");
end2[0].textContent = siteContent["contact"]["address"];
end2[1].textContent = siteContent["contact"]["phone"];
end2[2].textContent = siteContent["contact"]["email"];

// copyright

const bebop = document.querySelector("footer p");
bebop.textContent = siteContent["footer"]["copyright"];
