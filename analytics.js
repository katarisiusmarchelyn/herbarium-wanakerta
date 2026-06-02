/*
  Free analytics setup:
  1. Fill ga4MeasurementId with your GA4 Measurement ID, for example "G-ABC1234567".
  2. Fill metaPixelId with your Meta Pixel ID, for example "123456789012345".
  3. Leave a value blank to keep that platform disabled.
  This file does not send the reader's typed name from the label feature.
*/
window.HERBARIUM_ANALYTICS_CONFIG = {
  ga4MeasurementId: "G-48JN6S6LZF",
  metaPixelId: "",
  debug: false,
};

(function () {
  const config = window.HERBARIUM_ANALYTICS_CONFIG || {};
  const ga4Id = (config.ga4MeasurementId || "").trim();
  const metaId = (config.metaPixelId || "").trim();
  const debug = Boolean(config.debug);
  const eventLog = [];

  window.__herbariumAnalyticsEvents = eventLog;

  function isValidGa4Id(id) {
    return /^G-[A-Z0-9]+$/i.test(id);
  }

  function isValidMetaId(id) {
    return /^\d{5,}$/.test(id);
  }

  function cleanValue(value) {
    if (value === undefined || value === null) return undefined;
    const text = String(value).replace(/\s+/g, " ").trim();
    return text.slice(0, 100);
  }

  function cleanParams(params = {}) {
    const cleaned = {};
    Object.entries(params).forEach(([key, value]) => {
      const safeKey = key.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 40);
      const safeValue = cleanValue(value);
      if (safeKey && safeValue !== undefined && safeValue !== "") cleaned[safeKey] = safeValue;
    });
    return cleaned;
  }

  function loadScript(src) {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    document.head.append(script);
  }

  if (isValidGa4Id(ga4Id)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", ga4Id, {
      page_title: document.title,
      page_location: window.location.href,
    });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`);
  }

  if (isValidMetaId(metaId)) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", metaId);
    window.fbq("track", "PageView");
  }

  function track(eventName, params = {}) {
    const safeName = eventName.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 40);
    const safeParams = cleanParams({
      page_variant: document.documentElement.lang === "en" ? "global_en" : "local_id",
      page_path: window.location.pathname,
      ...params,
    });

    eventLog.push({ event: safeName, params: safeParams, at: new Date().toISOString() });
    if (eventLog.length > 80) eventLog.shift();

    if (debug) {
      console.info("[Herbarium analytics]", safeName, safeParams);
    }

    if (typeof window.gtag === "function" && isValidGa4Id(ga4Id)) {
      window.gtag("event", safeName, safeParams);
    }

    if (typeof window.fbq === "function" && isValidMetaId(metaId)) {
      window.fbq("trackCustom", safeName, safeParams);
    }
  }

  window.trackHerbariumEvent = track;

  function getReadableText(element) {
    return (
      element.getAttribute("aria-label") ||
      element.dataset.audioLabel ||
      element.textContent ||
      element.getAttribute("href") ||
      element.dataset.place ||
      element.dataset.globalPlace ||
      ""
    );
  }

  function classifyInteraction(element) {
    if (element.matches("[data-audio-toggle]")) {
      const willPause = element.getAttribute("aria-pressed") === "true";
      return ["background_music_toggle", { action: willPause ? "pause" : "play" }];
    }
    if (element.matches("[data-place], [data-global-place]")) {
      return ["map_pin_click", { place: element.dataset.place || element.dataset.globalPlace }];
    }
    if (element.matches("[data-filter], [data-herb-filter], [data-term-filter], [data-people-filter], [data-plant-filter]")) {
      return [
        "filter_click",
        {
          filter:
            element.dataset.filter ||
            element.dataset.herbFilter ||
            element.dataset.termFilter ||
            element.dataset.peopleFilter ||
            element.dataset.plantFilter,
          label: getReadableText(element),
        },
      ];
    }
    if (element.matches("[data-route], [data-global-route]")) {
      return ["route_choice", { route: element.dataset.route || element.dataset.globalRoute }];
    }
    if (element.matches("[data-plant]")) {
      return ["fictional_plant_click", { plant: element.dataset.plant }];
    }
    if (element.matches("[data-clue]")) {
      return ["case_clue_click", { clue: element.dataset.clue }];
    }
    if (element.matches("[data-next-label], [data-next-global-label]")) {
      return ["label_randomized", { label: getReadableText(element) }];
    }
    if (element instanceof HTMLAnchorElement) {
      const href = element.getAttribute("href") || "";
      const label = getReadableText(element);
      if (href.includes("lynk.id")) return ["buy_link_click", { label, destination: "lynk_id" }];
      if (href.includes("amazon.") || href.toLowerCase().includes("kindle")) return ["buy_link_click", { label, destination: "kindle" }];
      if (href.includes("play.google.com")) return ["buy_link_click", { label, destination: "google_play_books" }];
      if (href === "en/" || href === "../") return ["language_switch_click", { label, destination: href }];
      if (href.startsWith("#")) return ["section_nav_click", { label, destination: href }];
      if (href.startsWith("http")) return ["outbound_link_click", { label, destination: href }];
    }
    if (element instanceof HTMLButtonElement) {
      return ["button_click", { label: getReadableText(element) }];
    }
    return null;
  }

  function setupInteractionTracking() {
    const recentSearches = new Map();

    document.addEventListener("click", (event) => {
      const target = event.target.closest("a, button");
      if (!target) return;
      const interaction = classifyInteraction(target);
      if (interaction) track(interaction[0], interaction[1]);
    }, true);

    document.addEventListener("submit", (event) => {
      if (event.target.matches("[data-name-form]")) {
        track("name_label_generated", { feature: "reader_label" });
      }
    });

    const searchInputs = document.querySelectorAll(
      "#character-search, #herb-search, #glossary-search, #people-search, #plant-search",
    );
    searchInputs.forEach((input) => {
      input.addEventListener("change", () => {
        const term = input.value.trim();
        if (term.length >= 2) {
          const key = `${input.id}:${term.toLowerCase()}`;
          const now = Date.now();
          if (recentSearches.has(key) && now - recentSearches.get(key) < 3000) return;
          recentSearches.set(key, now);

          track("onsite_search", {
            search_box: input.id,
            search_term: term,
          });
        }
      });
    });

    const bgAudio = document.querySelector("[data-bg-audio]");
    if (bgAudio) {
      let playTracked = false;
      bgAudio.addEventListener("play", () => {
        if (!playTracked) {
          track("background_music_play", { source: "background_audio" });
          playTracked = true;
        }
      });
      bgAudio.addEventListener("pause", () => {
        track("background_music_pause", { source: "background_audio" });
      });
      setTimeout(() => {
        const shell = document.querySelector("[data-audio-shell]");
        if (shell?.classList.contains("needs-action")) {
          track("background_music_autoplay_blocked", { source: "browser_policy" });
        }
      }, 1800);
    }

    track("companion_page_ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupInteractionTracking);
  } else {
    setupInteractionTracking();
  }
})();
