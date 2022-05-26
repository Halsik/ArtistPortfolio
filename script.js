const firstImage = document.querySelector(".onePaint");
const secondImage = document.querySelector(".secondPaint");
const thirdImage = document.querySelector(".thirdPaint");
const fourthImage = document.querySelector(".fourthPaint");
const fifthImage = document.querySelector(".fifthPaint");
const sixthImage = document.querySelector(".sixthPaint");
const seventhImage = document.querySelector(".seventhPaint");
const eightImage = document.querySelector(".eightPaint");
const ninethImage = document.querySelector(".ninethPaint");

const showLayout = document.querySelector(".overlay")
const modalButton = document.querySelector(".modalButton")
const modalImage = document.querySelector(".modalImage")

let photo = ["2about.jpeg", "1.jpg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"]

modalButton.addEventListener("click", function() {
   showLayout.classList.remove("show")
})


firstImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[0]);
})
secondImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[3]);
})
thirdImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[1]);
})
fourthImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[7]);
})
fifthImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[4]);
})
sixthImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[5]);
})
seventhImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[2]);
})
eightImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[8]);
})
ninethImage.addEventListener("click", function() {
    showLayout.classList.toggle("show")
    modalImage.setAttribute("src", photo[6]);
})






