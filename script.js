const images = [
    "img/img1.jpeg", // Asegúrate de que las imágenes estén en la carpeta "img"
    "img/img2.jpeg",
    "img/img3.jpeg",
    "img/img4.jpeg"
];
let currentImageIndex = 0;

document.getElementById("startButton").addEventListener("click", startSlideshow);
document.getElementById("nextButton").addEventListener("click", nextImage);

function startSlideshow() {
    document.querySelector(".message").style.display = "none"; // Ocultamos el mensaje inicial
    document.getElementById("startButton").style.display = "none";  // Ocultamos el botón de inicio
    document.getElementById("imageContainer").style.display = "block"; // Mostramos el contenedor de imágenes
    showImage(currentImageIndex);
}

function showImage(index) {
    const imageElement = document.getElementById("image");
    imageElement.src = images[index];
    document.getElementById("nextButton").style.display = "block"; // Mostramos el botón de siguiente
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Si llegamos al final de las imágenes, volvemos a la primera
    }
    showImage(currentImageIndex);
}
