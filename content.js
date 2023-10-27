// Aplicar efecto de borrosidad y escala de grises a imágenes sin atributo "alt" o con atributo vacío.
const images = document.querySelectorAll("img:not([alt]), img[alt='']");
images.forEach((image) => {
    image.style.filter = "blur(10px) grayscale(100%)"; // Aplicamos el efecto de borrosidad y escala de grises
});

// Busca todos los encabezados h1, h2, h3, h4, h5, h6.
const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

// Define colores de fondo correspondientes a cada nivel de encabezado.
const headerBackgroundColors = {
    "h1": "#F7941D",
    "h2": "#878A8B",
    "h3": "#1EC2F3",
    "h4": "#FFD0B6",
    "h5": "#74A378",
    "h6": "#9C8ACE"
};

// Itera a través de los encabezados y agrega el "dot" con la etiqueta correspondiente y el fondo adecuado.
headings.forEach((heading) => {
    // Obtiene el nombre del encabezado (h1, h2, etc.).
    const tagName = heading.tagName.toLowerCase();

    // Crea un elemento div para el "dot" con el tamaño adecuado.
    const dot = document.createElement("div");
    dot.style.width = "30px"; // Ajusta el tamaño para que quepa el texto.
    dot.style.height = "30px"; // Ajusta el tamaño para que quepa el texto.
    dot.style.backgroundColor = headerBackgroundColors[tagName]; // Establece el fondo según el nivel de encabezado.
    dot.style.borderRadius = "50%";
    dot.style.display = "flex";
    dot.style.alignItems = "center";
    dot.style.justifyContent = "center";
    dot.style.marginRight = "10px"; // Ajusta el margen según tus preferencias.

    // Crea un elemento de etiqueta (por ejemplo, "h1", "h2") para el nombre del encabezado.
    const headerTag = document.createElement("span");
    headerTag.textContent = tagName; // Obtén el nombre del encabezado (h1, h2, etc.).
    headerTag.style.color = "white"; // Establece el color del texto en blanco para que se vea sobre el "dot".
    headerTag.style.fontWeight = "bold"; // Hace el texto en negrita.

    // Agrega la etiqueta dentro del "dot".
    dot.appendChild(headerTag);

    // Inserta el "dot" con la etiqueta y el fondo adecuado justo antes del encabezado.
    heading.insertAdjacentElement("beforebegin", dot);
});
