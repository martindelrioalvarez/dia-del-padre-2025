// Genera automáticamente imágenes desde "img/imagen1.jpg" hasta "img/imagen100.jpg"
const images = [];
const captions = [];
const specialComments = {}; // Comentarios para imágenes específicas
const rangeComments = {}; // Comentarios para rangos de imágenes

for (let i = 1; i <= 125; i++) {
    images.push(`img/imagen${i}.jpg`);
    captions.push(`Foto especial #${i} para papá ❤️`);
}

// 🔹 Comentario especial para la imagen 57
specialComments[57] = "⭐ Esta imagen es muy especial para nosotros. ¡Momentos inolvidables!";

// 🔹 Comentario especial para el rango 60 - 70
rangeComments["60-70"] = "📖 Un capítulo lleno de recuerdos hermosos entre nosotros.";

// Función para obtener el comentario especial o por rango
function getComment(index) {
    if (specialComments[index]) {
        return `<strong>${specialComments[index]}</strong>`;
    }
    for (const range in rangeComments) {
        const [start, end] = range.split("-").map(Number);
        if (index >= start && index <= end) {
            return `<em>${rangeComments[range]}</em>`;
        }
    }
    return "";
}

let currentImageIndex = 0;

document.getElementById("startButton").addEventListener("click", startSlideshow);
document.getElementById("nextButton").addEventListener("click", nextImage);

function startSlideshow() {
    document.querySelector(".message").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("imageContainer").style.display = "flex";
    showImage(currentImageIndex);
}

function showImage(index) {
    const imageElement = document.getElementById("image");
    const captionElement = document.getElementById("caption");
    const nextButton = document.getElementById("nextButton");

    // Quitar la clase de animación antes de cambiar la imagen
    imageElement.classList.remove("show");
    captionElement.classList.remove("show");
    nextButton.classList.remove("show");

    // Esperar un poco antes de cambiar la imagen (para que la animación fluya mejor)
    setTimeout(() => {
        const comment = getComment(index + 1); // Ajustamos el índice (sumamos 1)

        imageElement.src = images[index];  
        captionElement.innerHTML = `${captions[index]}<br>${comment}`;

        // Agregar la clase para activar la animación después de cambiar la imagen
        imageElement.classList.add("show");
        captionElement.classList.add("show");
        nextButton.classList.add("show");
    }, 300); // Pequeña pausa para la animación de salida antes de la nueva imagen
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}
