// Genera automáticamente una lista de 100 imágenes desde "img/imagen1.jpg" hasta "img/imagen100.jpg"
const images = [];
const captions = [];

for (let i = 1; i <= 100; i++) {
    images.push(`img/imagen${i}.jpg`);
    captions.push(`Foto especial #${i} para papá ❤️`);
}

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
