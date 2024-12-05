// Script para menu dropdown
document.querySelectorAll("#menu li").forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const dropdown = item.querySelector("ul");
        if (dropdown) {
            dropdown.style.display = "block";
        }
    });

    item.addEventListener("mouseleave", () => {
        const dropdown = item.querySelector("ul");
        if (dropdown) {
            dropdown.style.display = "none";
        }
    });
});
