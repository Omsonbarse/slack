const solution = document.querySelector(".Solution");
const box = document.querySelector(".box");
const resourses = document.querySelector(".resourses");
const box2 = document.querySelector(".box2");
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

// solutionBtn
// Open/Close on click
solution.addEventListener("click", (e) => {
    e.stopPropagation();
    box.classList.toggle("active");
});

// Prevent closing when clicking inside the dropdown
box.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Close when clicking anywhere else
document.addEventListener("click", () => {
    box.classList.remove("active");
});


// resourseBtn

resourses.addEventListener("click", (e) => {
    e.stopPropagation();
    box2.classList.toggle("active");
});

// Prevent closing when clicking inside the dropdown
box2.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Close when clicking anywhere else
document.addEventListener("click", () => {
    box2.classList.remove("active");
});

// Toggle mobile navigation
if (navToggle && nav) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('open');
    });

    // Close nav when clicking outside
    document.addEventListener('click', () => {
        nav.classList.remove('open');
    });

    // Prevent closing when clicking inside nav
    nav.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}


