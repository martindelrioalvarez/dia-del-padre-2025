const images = [
    "img/img1.jpeg",
    "img/img2.jpeg",
    "img/img3.jpeg"
];

const captions = [
    "Gracias por siempre estar a mi lado. ❤️",
    "Tus enseñanzas son mi mayor tesoro. 👨‍👦",
    "Eres el mejor padre del mundo. 🌍✨"
];

let currentImageIndex = 0;

document.getElementById("startButton").addEventListener("click", startSlideshow);
document.getElementById("nextButton").addEventListener("click", nextImage);

function startSlideshow() {
    document.querySelector(".message").style.display = "none";  // Oculta el mensaje inicial
    document.getElementById("startButton").style.display = "none";  // Oculta el botón de inicio
    document.getElementById("imageContainer").style.display = "flex"; // Muestra la imagen
    showImage(currentImageIndex);
}

function showImage(index) {
    const imageElement = document.getElementById("image");
    const captionElement = document.getElementById("caption");

    imageElement.src = images[index];  // Cambia la imagen
    captionElement.textContent = captions[index];  // Cambia el texto debajo de la imagen

    document.getElementById("nextButton").style.display = "block";  // Muestra el botón "Siguiente"
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Reinicia cuando llega al final
    showImage(currentImageIndex);
}
