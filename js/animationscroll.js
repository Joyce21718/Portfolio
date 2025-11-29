const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active");
        } else {
            el.classList.remove("active"); 
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

