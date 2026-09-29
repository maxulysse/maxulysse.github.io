(function () {
    var saved = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = saved === "dark" || saved === "light" || saved === "auto"
        ? saved
        : prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
})();
