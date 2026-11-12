const searchItems = JSON.parse(document.getElementById("search-data").textContent);
const searchInput = document.getElementById("search-input");
const searchSummary = document.getElementById("search-summary");
const searchResults = document.getElementById("search-results");
const searchEmpty = document.getElementById("search-empty");

function normalize(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function buildHaystack(item) {
    return normalize(
        [
            item.title,
            item.description,
            item.tags.join(" "),
            item.id.replaceAll("/", " "),
        ].join(" "),
    );
}

function createResultNode(item) {
    const anchor = document.createElement("a");
    anchor.className = "list-group-item list-group-item-action";
    anchor.href = `/blog/${item.id}/`;

    const title = document.createElement("h2");
    title.className = "h6 mb-1";
    title.textContent = item.title;

    const meta = document.createElement("small");
    meta.className = "text-muted d-block mb-1";
    meta.textContent = `${item.date}${item.tags.length ? ` - ${item.tags.join(", ")}` : ""}`;

    const description = document.createElement("p");
    description.className = "mb-0 text-muted";
    description.textContent = item.description;

    anchor.append(title, meta, description);
    return anchor;
}

function renderResults(rawQuery) {
    const query = normalize(rawQuery || "");
    searchResults.innerHTML = "";

    if (!query) {
        searchSummary.textContent = `Showing ${searchItems.length} posts. Enter a search term to filter.`;
        searchEmpty.classList.add("d-none");
        searchItems.slice(0, 12).forEach((item) => {
            searchResults.appendChild(createResultNode(item));
        });
        return;
    }

    const terms = query.split(/\s+/).filter(Boolean);
    const results = searchItems.filter((item) => {
        const haystack = buildHaystack(item);
        return terms.every((term) => haystack.includes(term));
    });

    searchSummary.textContent = `${results.length} result${results.length === 1 ? "" : "s"} for "${rawQuery}".`;

    if (!results.length) {
        searchEmpty.classList.remove("d-none");
        return;
    }

    searchEmpty.classList.add("d-none");
    results.slice(0, 50).forEach((item) => {
        searchResults.appendChild(createResultNode(item));
    });
}

const params = new URLSearchParams(window.location.search);
const initialQuery = params.get("q") || "";
searchInput.value = initialQuery;
renderResults(initialQuery);
