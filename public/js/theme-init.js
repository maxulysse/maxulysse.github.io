(function () {
    let saved = null;
    try {
        saved = localStorage.getItem("theme");
    } catch {
        // Storage blocked: fall back to the system preference.
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved === "dark" || saved === "light"
        ? saved
        : prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
})();
