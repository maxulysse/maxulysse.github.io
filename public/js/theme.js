function resolveTheme(saved) {
    if (saved === "dark") return "dark";
    if (saved === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    var icon = document.querySelector("#theme-toggle i");
    if (icon) {
        icon.className = "fa-solid";
        icon.classList.add(theme === "dark" ? "fa-moon" : "fa-sun");
    }
    var meta = document.querySelector("meta[name='theme-color']");
    if (meta) meta.setAttribute("content", theme === "dark" ? "#1a1a1a" : "#f8f9fa");
}

function setActiveOption(saved) {
    document.querySelectorAll(".theme-option").forEach(function (opt) {
        opt.classList.toggle("active", opt.dataset.theme === saved);
    });
}

function setTheme(saved) {
    applyTheme(resolveTheme(saved));
    setActiveOption(saved);
}

function switchTheme(e) {
    var opt = e.currentTarget;
    if (!opt || !opt.dataset || !opt.dataset.theme) return;
    var saved = opt.dataset.theme;
    localStorage.setItem("theme", saved);
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

var saved = localStorage.getItem("theme");
if (!saved) localStorage.setItem("theme", "auto");
applyTheme(resolveTheme(saved));
setActiveOption(saved || "auto");

document.getElementById("theme-toggle").addEventListener("click", toggleDropdown);
document.querySelectorAll(".theme-option").forEach(function (opt) {
    opt.addEventListener("click", switchTheme);
});
document.addEventListener("click", function (e) {
    var target = e.target;
    if (target && !target.closest(".theme-dropdown")) closeDropdown();
});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    var current = localStorage.getItem("theme");
    if (!current || current === "auto") setTheme("auto");
});
