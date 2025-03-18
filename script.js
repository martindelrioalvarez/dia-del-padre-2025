// Genera automáticamente imágenes desde "img/imagen1.jpg" hasta "img/imagen100.jpg"
const images = [];
const captions = [];
const specialComments = {}; // Comentarios para imágenes específicas
const rangeComments = {}; // Comentarios para rangos de imágenes

for (let i = 1; i <= 125; i++) {
    images.push(`img/imagen${i}.jpg`);
    captions.push(`Foto especial #${i} para papuchi ❤️`);
}

// Esquiar
specialComments[4] = "⛷️ ESQUÍ 🎿";
specialComments[12] = "⛷️ ESQUÍ 🎿";
rangeComments["19-24"] = "⛷️ ESQUÍ 🎿";
rangeComments["26-27"] = "⛷️ ESQUÍ 🎿";
rangeComments["43-44"] = "⛷️ ESQUÍ 🎿";
rangeComments["46-48"] = "⛷️ ESQUÍ 🎿";
specialComments[89] = "⛷️ ESQUÍ 🎿";
specialComments[90] = "⛷️ ESQUÍ y GEOCACHING 🔎";
rangeComments["91-93"] = "⛷️ ESQUÍ 🎿";
specialComments[104] = "⛷️ ESQUÍ 🎿";

// Granada
specialComments[5] = "📍 GRANADA";

// Madrid
specialComments[7] = "📍 MADRID";

specialComments[11] = "🥐 Nunca es mal momento para una buena napolitana de chocolate 🍫";
specialComments[88] = "🥐 Lo dicho, nunca es mal momento para una buena napolitana de chocolate 🍫";

// Londres
specialComments[25] = "🎡 LONDON 💂🏼‍♂️";
rangeComments["28-41"] = "🎡 LONDON 💂🏼‍♂️";

// Bicicleta
specialComments[42] = "🚵‍♀️ BICI 🚲";
specialComments[45] = "🚵‍♀️ BICI 🚲";
specialComments[51] = "🚵‍♀️ BICI 🚲";

specialComments[49] = "Plato 7 con arroz y un mediterráneo";

specialComments[60] = "🚵‍♀️ La Vuelta en Ourense 🚲";

// Geocaching
rangeComments["53-59"] = "🔎 GEOCACHING 📦";
rangeComments["61-68"] = "🔎 GEOCACHING 📦";
specialComments[95] = "🔎 GEOCACHING 📦";

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
// document.getElementById("prevButton").addEventListener("click", prevImage);

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
    // prevButton.classList.remove("show");

    // Esperar un poco antes de cambiar la imagen (para que la animación fluya mejor)
    setTimeout(() => {
        const comment = getComment(index + 1); // Ajustamos el índice (sumamos 1)

        imageElement.src = images[index];  
        captionElement.innerHTML = `${captions[index]}<br>${comment}`;

        // Agregar la clase para activar la animación después de cambiar la imagen
        imageElement.classList.add("show");
        captionElement.classList.add("show");
        nextButton.classList.add("show");
        // prevButton.classList.add("show");
    }, 300); // Pequeña pausa para la animación de salida antes de la nueva imagen
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}
