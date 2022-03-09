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
const scrollContainer = document.querySelector(".works__container");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});




// ==================== Circular Text ====================
const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map(
    (char, i) => 
    `<span style="transform:rotate(${i*9.5}deg)">${char}</span>`
).join("")