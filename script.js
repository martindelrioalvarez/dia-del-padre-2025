const images = [];
const captions = [
    "Gracias por siempre estar a mi lado. ❤️",
    "Tus enseñanzas son mi mayor tesoro. 👨‍👦",
    "Eres el mejor padre del mundo. 🌍✨"
];

let currentImageIndex = 0;

// Cargar las imágenes desde archivos
async function loadImages() {
    const imageFiles = ["b64/img1.txt", "b64/img2.txt", "b64/img3.txt"];
    
    for (const file of imageFiles) {
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Error cargando ${file}: ${response.statusText}`);
            }
            const text = await response.text();
            console.log(`Imagen cargada desde ${file}:`, text.substring(0, 50));  // Muestra un fragmento en consola
            images.push(text);
        } catch (error) {
            console.error(error);
        }
    }
    
    if (images.length > 0) {
        document.querySelector(".message").style.display = "none";  
        document.querySelector(".image-container").style.display = "block"; 
        showImage(currentImageIndex);
        setInterval(nextImage, 3000);
    } else {
        console.error("No se cargaron imágenes correctamente.");
    }
}

function showImage(index) {
    const imageElement = document.getElementById("image");
    const captionElement = document.getElementById("caption");

    imageElement.src = images[index];  
    captionElement.textContent = captions[index];  
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    showImage(currentImageIndex);
}

// Cargar imágenes cuando la página esté lista
window.onload = loadImages;
