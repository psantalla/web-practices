const images = document.querySelectorAll("img:not([alt]), img[alt='']");
images.forEach((image) => {
    image.style.filter = "blur(10px) grayscale(100%)";
});

const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

const headerBackgroundColors = {
    "h1": "#F7941D",
    "h2": "#878A8B",
    "h3": "#1EC2F3",
    "h4": "#FFD0B6",
    "h5": "#74A378",
    "h6": "#9C8ACE"
};

headings.forEach((heading) => {
    const tagName = heading.tagName.toLowerCase();

    const dot = document.createElement("div");
    dot.style.width = "30px";
    dot.style.height = "30px";
    dot.style.backgroundColor = headerBackgroundColors[tagName];
    dot.style.borderRadius = "50%";
    dot.style.display = "flex";
    dot.style.alignItems = "center";
    dot.style.justifyContent = "center";
    dot.style.marginRight = "10px";

    const headerTag = document.createElement("span");
    headerTag.textContent = tagName;
    headerTag.style.color = "white";
    headerTag.style.fontWeight = "bold";

    dot.appendChild(headerTag);

    heading.insertAdjacentElement("beforebegin", dot);
});
