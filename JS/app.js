
// product page 
let buy = document.querySelectorAll("#buy");
buy.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for buying");
    });
});



// signup page
function submitForm(event) {
    event.preventDefault();
    alert("Form submitted successfully");
    document.getElementById("form").reset();
}


// home page 
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(changeSlide, 3000);