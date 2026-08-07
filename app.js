const catalog = {
  films: [
    {
      rank: 1, title: "Memories of Murder", year: "2003", format: "Film", imdb: "tt0353969", rating: "8.1",
      reason: "A dark serial-killer procedural that sits between Zodiac, Seven, and True Detective.",
      watch: [{ label: "Cineasterna", url: "https://www.playpilot.com/se/movie/memories-of-murder-pptikwn/" }]
    },
    {
      rank: 2, title: "Incendies", year: "2010", format: "Film", imdb: "tt1255953", rating: "8.3",
      reason: "Villeneuve puzzle-box storytelling fused with history, war, mystery, and family drama.", watch: []
    },
    {
      rank: 3, title: "The Lives of Others", year: "2006", format: "Film", imdb: "tt0405094", rating: "8.4",
      reason: "A precise historical surveillance thriller built on moral pressure and controlled tension.", watch: []
    },
    {
      rank: 4, title: "L.A. Confidential", year: "1997", format: "Film", imdb: "tt0119488", rating: "8.2",
      reason: "Dense adult crime mystery with corruption, intersecting characters, and patient payoff.",
      watch: [{ label: "Disney+ / Prime", url: "https://www.playpilot.com/se/movie/la-confidential/" }]
    },
    {
      rank: 5, title: "City of God", year: "2002", format: "Film", imdb: "tt0317248", rating: "8.6",
      reason: "Propulsive crime drama with morally complicated characters and large-scale storytelling.",
      watch: [{ label: "Streaming options", url: "https://www.playpilot.com/se/movie/city-of-god/" }]
    },
    {
      rank: 6, title: "The Killer", year: "2023", format: "Film", imdb: "tt1136617", rating: "6.7",
      reason: "A direct extension of the strongest director signal in the ratings history: David Fincher.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/80234448" }]
    },
    {
      rank: 7, title: "Beasts of No Nation", year: "2015", format: "Film", imdb: "tt1365050", rating: "7.7",
      reason: "An uncompromising war drama matching the strong history and serious-drama signals.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/80044545" }]
    },
    {
      rank: 8, title: "The King", year: "2019", format: "Film", imdb: "tt7984766", rating: "7.3",
      reason: "Historical war drama centered on palace politics, leadership, and combat.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/80182016" }]
    },
    {
      rank: 9, title: "The Stranger", year: "2022", format: "Film", imdb: "tt11897478", rating: "6.6",
      reason: "A restrained undercover investigation and slow-burning psychological crime thriller.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/81621414" }]
    },
    {
      rank: 10, title: "The Irishman", year: "2019", format: "Film", imdb: "tt1302006", rating: "7.8",
      reason: "Scorsese's crime epic, closest to The Departed and the serious-crime side of the ratings history.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/80175798" }]
    }
  ],
  series: [
    {
      rank: 1, title: "Severance", year: "2022–", format: "Series", imdb: "tt11280740", rating: "8.6",
      reason: "A high-concept mystery with the meticulous construction of Dark and Black Mirror.", watch: []
    },
    {
      rank: 2, title: "Succession", year: "2018–2023", format: "4 seasons", imdb: "tt7660850", rating: "8.8",
      reason: "Dense prestige drama, vicious character work, and exceptionally dark comedy.", watch: []
    },
    {
      rank: 3, title: "The Americans", year: "2013–2018", format: "6 seasons", imdb: "tt2149175", rating: "8.4",
      reason: "Patient crime and espionage storytelling with personal and historical stakes.", watch: []
    },
    {
      rank: 4, title: "Mare of Easttown", year: "2021", format: "Miniseries", imdb: "tt10155688", rating: "8.4",
      reason: "A grounded murder investigation fused with unusually strong damaged-character drama.", watch: []
    },
    {
      rank: 5, title: "Shōgun", year: "2024–", format: "Series", imdb: "tt2788316", rating: "8.6",
      reason: "Political strategy, history, war, and patient large-scale dramatic payoff.", watch: []
    },
    {
      rank: 6, title: "Ripley", year: "2024", format: "Miniseries", imdb: "tt11016042", rating: "8.1",
      reason: "Precise psychological crime drama with striking black-and-white photography.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/81678765" }]
    },
    {
      rank: 7, title: "Unbelievable", year: "2019", format: "Miniseries", imdb: "tt7909970", rating: "8.3",
      reason: "A rigorous true-crime investigation built around character rather than spectacle.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/80153467" }]
    },
    {
      rank: 8, title: "The Spy", year: "2019", format: "Miniseries", imdb: "tt5952634", rating: "7.9",
      reason: "Historical espionage with sustained tension and a strong central performance.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/80178151" }]
    },
    {
      rank: 9, title: "Delhi Crime", year: "2019–", format: "3 seasons", imdb: "tt9398466", rating: "8.4",
      reason: "Dark, unsentimental procedural storytelling based on major criminal investigations.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/81076756" }]
    },
    {
      rank: 10, title: "Ozark", year: "2017–2022", format: "4 seasons", imdb: "tt5071412", rating: "8.4",
      reason: "The closest match to the Breaking Bad, Narcos, and The Wire side of the ratings history.",
      watch: [{ label: "Netflix", url: "https://www.netflix.com/se/title/80117552" }]
    }
  ],
  favorites: [
    { rank: 1, title: "The Shawshank Redemption", year: "1994", format: "Film", imdb: "tt0111161", reason: "Drama" },
    { rank: 2, title: "The Dark Knight", year: "2008", format: "Film", imdb: "tt0468569", reason: "Crime · Thriller" },
    { rank: 3, title: "Pulp Fiction", year: "1994", format: "Film", imdb: "tt0110912", reason: "Crime · Drama" },
    { rank: 4, title: "Fight Club", year: "1999", format: "Film", imdb: "tt0137523", reason: "Drama · Crime · Thriller" },
    { rank: 5, title: "Inception", year: "2010", format: "Film", imdb: "tt1375666", reason: "Sci-Fi · Thriller · Adventure" },
    { rank: 6, title: "Interstellar", year: "2014", format: "Film", imdb: "tt0816692", reason: "Sci-Fi · Adventure · Drama" },
    { rank: 7, title: "Seven", year: "1995", format: "Film", imdb: "tt0114369", reason: "Mystery · Crime · Thriller" },
    { rank: 8, title: "The Departed", year: "2006", format: "Film", imdb: "tt0407887", reason: "Crime · Drama · Thriller" },
    { rank: 9, title: "Gladiator", year: "2000", format: "Film", imdb: "tt0172495", reason: "Action · Adventure · Drama" },
    { rank: 10, title: "The Intouchables", year: "2011", format: "Film", imdb: "tt1675434", reason: "Comedy · Drama" },
    { rank: 11, title: "Breaking Bad", year: "2008–2013", format: "Series", imdb: "tt0903747", reason: "Crime · Drama · Thriller" },
    { rank: 12, title: "The Wire", year: "2002–2008", format: "Series", imdb: "tt0306414", reason: "Crime · Drama · Thriller" },
    { rank: 13, title: "Chernobyl", year: "2019", format: "Miniseries", imdb: "tt7366338", reason: "Drama · History · Thriller" },
    { rank: 14, title: "Band of Brothers", year: "2001", format: "Miniseries", imdb: "tt0185906", reason: "History · Drama · War" },
    { rank: 15, title: "True Detective", year: "2014–", format: "Series", imdb: "tt2356777", reason: "Crime · Drama · Mystery" },
    { rank: 16, title: "Dark", year: "2017–2020", format: "Series", imdb: "tt5753856", reason: "Mystery · Crime · Sci-Fi" },
    { rank: 17, title: "Sherlock", year: "2010–2017", format: "Series", imdb: "tt1475582", reason: "Crime · Mystery · Drama" },
    { rank: 18, title: "The Bear", year: "2022–", format: "Series", imdb: "tt14452776", reason: "Drama · Comedy" },
    { rank: 19, title: "The Office", year: "2005–2013", format: "Series", imdb: "tt0386676", reason: "Comedy" },
    { rank: 20, title: "Narcos", year: "2015–2017", format: "Series", imdb: "tt2707408", reason: "Crime · Drama · Biography" }
  ]
};

const storageKey = "watch-next-state-v1";
const state = {
  view: "films",
  filter: "all",
  search: "",
  watched: loadWatched()
};

const list = document.querySelector("#watchlist");
const template = document.querySelector("#card-template");
const search = document.querySelector("#search");
const emptyState = document.querySelector("#empty-state");
const progressLabel = document.querySelector("#progress-label");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const listKicker = document.querySelector("#list-kicker");
const listTitle = document.querySelector("#list-title");
const installButton = document.querySelector("#install-button");
const statusFilters = document.querySelector("#status-filters");

function loadWatched() {
  try {
    return new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
  } catch {
    return new Set();
  }
}

function saveWatched() {
  localStorage.setItem(storageKey, JSON.stringify([...state.watched]));
}

function itemKey(item) {
  return `${state.view}:${item.imdb}`;
}

function render() {
  const items = catalog[state.view];
  const visible = items.filter((item) => {
    if (state.view === "favorites") {
      return `${item.title} ${item.year} ${item.reason}`.toLowerCase().includes(state.search);
    }
    const watched = state.watched.has(itemKey(item));
    const statusMatch = state.filter === "all" || (state.filter === "watched" ? watched : !watched);
    const textMatch = `${item.title} ${item.year} ${item.reason}`.toLowerCase().includes(state.search);
    return statusMatch && textMatch;
  });

  list.replaceChildren();
  for (const item of visible) list.append(createCard(item));
  emptyState.hidden = visible.length > 0;

  if (state.view === "favorites") {
    progressLabel.textContent = `${items.length} personal favorites`;
    progressPercent.textContent = "10/10";
    progressBar.style.width = "100%";
  } else {
    const watchedCount = items.filter((item) => state.watched.has(itemKey(item))).length;
    const percent = Math.round((watchedCount / items.length) * 100);
    progressLabel.textContent = `${watchedCount} of ${items.length} watched`;
    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
  }
  statusFilters.hidden = state.view === "favorites";
  listKicker.textContent = state.view === "films" ? "Films" : state.view === "series" ? "Series" : "The 10/10 shelf";
  listTitle.textContent = state.view === "films" ? "Your next feature" : state.view === "series" ? "Your next obsession" : "What great looks like";
}

function createCard(item) {
  const card = template.content.firstElementChild.cloneNode(true);
  const checkbox = card.querySelector(".check__input");
  if (state.view === "favorites") {
    const mark = document.createElement("div");
    mark.className = "favorite-mark";
    mark.setAttribute("aria-label", "Personal rating: 10 out of 10");
    mark.textContent = "10";
    card.querySelector(".check").replaceWith(mark);
    card.querySelector(".card__rank").textContent = "Personal 10/10";
    card.querySelector(".card__format").textContent = item.format;
    card.querySelector(".card__title").textContent = `${item.title} (${item.year})`;
    card.querySelector(".card__reason").textContent = item.reason;
    card.querySelector(".card__links").append(createLink("View on IMDb", `https://www.imdb.com/title/${item.imdb}/`));
    return card;
  }
  const key = itemKey(item);
  checkbox.checked = state.watched.has(key);
  checkbox.setAttribute("aria-label", `Mark ${item.title} as watched`);
  checkbox.addEventListener("change", () => {
    checkbox.checked ? state.watched.add(key) : state.watched.delete(key);
    saveWatched();
    render();
  });

  card.querySelector(".card__rank").textContent = `No. ${item.rank}`;
  card.querySelector(".card__format").textContent = item.format;
  card.querySelector(".card__title").textContent = `${item.title} (${item.year})`;
  card.querySelector(".card__reason").textContent = item.reason;

  const links = card.querySelector(".card__links");
  links.append(createLink(`IMDb ${item.rating}`, `https://www.imdb.com/title/${item.imdb}/`));
  for (const option of item.watch) links.append(createLink(option.label, option.url));
  if (!item.watch.length) {
    const availability = document.createElement("span");
    availability.className = "sr-only";
    availability.textContent = "Streaming availability not considered";
    links.append(availability);
  }
  return card;
}

function createLink(label, url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    state.view = tab.dataset.view;
    document.querySelectorAll(".tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    render();
    window.scrollTo({ top: document.querySelector("main").offsetTop - 10, behavior: "smooth" });
  });
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    state.filter = filter.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("is-active", item === filter));
    render();
  });
});

search.addEventListener("input", () => {
  state.search = search.value.trim().toLowerCase();
  render();
});

let installPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = undefined;
  installButton.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

render();
