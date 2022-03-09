const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// ==================== Circular Text ====================
const text = document.querySelector(".circle__text p");
text.innerHTML = text.innerText.split("").map(
    (char, i) => 
    `<span style="transform:rotate(${i*7.2}deg)">${char}</span>`
).join("");

// ==================== Swiper JS ====================
let swiper = new Swiper(".about__imgs", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// ==================== Cursor ====================
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 50)+"px; left: "+(e.pageX - 50)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// ==================== Horizontal Scrolling ====================
// const scrollContainer = document.querySelector(".works__container");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });




