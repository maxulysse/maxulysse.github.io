// Shared with theme.js: classic scripts share the global scope.
function readTheme() {
    try {
        return localStorage.getItem("theme");
    } catch {
        return null;
    }
}

function resolveTheme(saved) {
    if (saved === "dark") return "dark";
    if (saved === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

document.documentElement.setAttribute("data-bs-theme", resolveTheme(readTheme()));
