// Genera automáticamente imágenes desde "img/imagen1.jpg" hasta "img/imagen125.jpg"
const images = [];
const captions = [];
const specialComments = {};
const rangeComments = {};

for (let i = 1; i <= 125; i++) {
    images.push(`img/imagen${i}.jpg`);
    captions.push(`Foto especial #${i} para papuchi ❤️`);
}

// Comentarios específicos y por rangos
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

specialComments[5] = "📍 GRANADA";
specialComments[7] = "📍 MADRID";
specialComments[11] = "🥐 Nunca es mal momento para una buena napolitana de chocolate 🍫";
specialComments[88] = "🥐 Lo dicho, nunca es mal momento para una buena napolitana de chocolate 🍫";
specialComments[25] = "🎡 LONDON 💂🏼‍♂️";
rangeComments["28-41"] = "🎡 LONDON 💂🏼‍♂️";
specialComments[42] = "🚵‍♀️ BICI 🚲";
specialComments[45] = "🚵‍♀️ BICI 🚲";
specialComments[51] = "🚵‍♀️ BICI 🚲";
rangeComments["70-73"] = "📍 O PORTO";
specialComments[49] = "Plato 7 con arroz y un mediterráneo";
specialComments[60] = "🚵‍♀️ La Vuelta en Ourense 🚲";
rangeComments["53-59"] = "🔎 GEOCACHING 📦";
rangeComments["61-68"] = "🔎 GEOCACHING 📦";
specialComments[95] = "🔎 GEOCACHING 📦";
rangeComments["74-75"] = "🔎 GEOCACHING 📦";
rangeComments["77-78"] = "🔎 GEOCACHING 📦";
rangeComments["81-82"] = "🔎 GEOCACHING 📦";
specialComments[98] = "Quién diría que ahora la puedo conducir...";
specialComments[125] = "Feliz día del padre❤️";

// 🔥 Mensaje especial cuando llega a la última imagen
const finalMessage = `
    <h2>🎉 ¡Feliz día del padre! 🎉</h2>
    <p>Espero que hayas disfrutado de este viaje por algunas de nuestras memorias juntos. 💖</p>
    <p>Eres el mejor padre que me pudo haber tocado</p>
    <p>Por muchos más cachés, pistas de esquí, rutas en bici, rutas en moto y muchas más cosas juntos</p>
    <p>Te quiero mucho papuchi ❤️</p>
    <p>¡Disfruta de tu día! 🎁</p>
    <button id="restartButton" class="nav-button">🔄 Ver de nuevo</button>
`;

// Función para obtener comentarios
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
    const imageContainer = document.getElementById("imageContainer");

    // 🎯 Si es la última imagen, mostrar mensaje final
    if (index === images.length) {
        imageContainer.innerHTML = finalMessage;

        // Agregar funcionalidad al botón de reinicio
        document.getElementById("restartButton").addEventListener("click", restartSlideshow);
        return;
    }

    // 🔥 Ocultar animaciones antes del cambio
    imageElement.classList.remove("show");
    captionElement.classList.remove("show");
    nextButton.classList.remove("show");

    // ⏳ Pequeña pausa para la transición
    setTimeout(() => {
        const comment = getComment(index + 1);

        imageElement.src = images[index];  
        captionElement.innerHTML = `${captions[index]}<br>${comment}`;

        // 🎬 Activamos las animaciones
        setTimeout(() => {
            imageElement.classList.add("show");
            captionElement.classList.add("show");
            nextButton.classList.add("show");
        }, 100);
    }, 300);
}

// 🔜 Función para avanzar de imagen
function nextImage() {
    currentImageIndex++;
    showImage(currentImageIndex);
}

// 🔄 Función para reiniciar la presentación SIN recargar la página
function restartSlideshow() {
    currentImageIndex = 0;
    document.getElementById("imageContainer").innerHTML = `
        <img id="image" src="" alt="Imagen de celebración" />
        <p id="caption" class="caption"></p>
        <button id="nextButton" class="nav-button">Siguiente</button>
    `;
    document.getElementById("nextButton").addEventListener("click", nextImage);
    showImage(currentImageIndex);
}
