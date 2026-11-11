/* global readTheme, resolveTheme */
function writeTheme(theme) {
    try {
        localStorage.setItem("theme", theme);
    } catch {
        // Storage blocked: the choice lasts until the page reloads.
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    const icon = document.querySelector("#theme-toggle i");
    if (icon) {
        icon.className = "fa-solid";
        icon.classList.add(theme === "dark" ? "fa-moon" : "fa-sun");
    }
    const meta = document.querySelector("meta[name='theme-color']");
    if (meta) meta.setAttribute("content", theme === "dark" ? "#1a1a1a" : "#f8f9fa");
}

function setActiveOption(saved) {
    document.querySelectorAll(".theme-option").forEach((opt) => {
        opt.classList.toggle("active", opt.dataset.theme === saved);
    });
}

function setTheme(saved) {
    applyTheme(resolveTheme(saved));
    setActiveOption(saved);
}

function switchTheme(e) {
    const opt = e.currentTarget;
    if (!opt || !opt.dataset || !opt.dataset.theme) return;
    const saved = opt.dataset.theme;
    writeTheme(saved);
    setTheme(saved);
    closeDropdown();
}

function toggleDropdown(e) {
    e.stopPropagation();
    document.querySelector(".theme-dropdown").classList.toggle("open");
}

function closeDropdown() {
    document.querySelector(".theme-dropdown").classList.remove("open");
}

const saved = readTheme();
applyTheme(resolveTheme(saved));
setActiveOption(saved || "auto");

document.getElementById("theme-toggle").addEventListener("click", toggleDropdown);
document.querySelectorAll(".theme-option").forEach((opt) => {
    opt.addEventListener("click", switchTheme);
});
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target && !target.closest(".theme-dropdown")) closeDropdown();
});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    const current = readTheme();
    if (!current || current === "auto") setTheme("auto");
});
