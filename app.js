"use strict";
(() => {
  const routeIds = new Set(["home", "ventures", "ideas"]);
  const views = [...document.querySelectorAll(".view")];
  const nav = [...document.querySelectorAll("[data-view]")];
  const form = document.getElementById("idea-form");
  const prepared = document.getElementById("prepared");
  const preview = document.getElementById("prepared-text");
  const copy = document.getElementById("copy-text");
  let activeRoute = "home";

  function renderRoute() {
    const hash = location.hash.substring(1);
    if (hash === "main") return; // Preserve the accessible skip-to-content link.
    activeRoute = routeIds.has(hash) ? hash : "home";
    views.forEach(view => { view.hidden = view.id !== activeRoute; });
    nav.forEach(link => {
      if (link.dataset.view === activeRoute) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    const pageTitles = {
      home: "Globle Supply Chain — Building What's Next",
      ventures: "Our Projects — Globle Supply Chain",
      ideas: "Ideas & Requests — Globle Supply Chain"
    };
    document.title = pageTitles[activeRoute];
    window.scrollTo({top:0,behavior:"instant"});
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const topic = String(values.get("topic") || "").trim().slice(0,120);
    const idea = String(values.get("idea") || "").trim().slice(0,1500);
    const name = String(values.get("firstName") || "").trim().slice(0,60);
    preview.value = [
      "Globle Supply Chain — Business idea/request",
      "",
      "Category: " + topic,
      "Idea or request:",
      idea,
      name ? "\nName: " + name : "",
      "",
      "Prepared on the Globle Supply Chain concept website.",
      "This has not yet been sent."
    ].filter(Boolean).join("\n");
    prepared.hidden = false;
    copy.textContent = "Copy request text";
    prepared.scrollIntoView({behavior:"smooth",block:"nearest"});
  });

  copy.addEventListener("click", async () => {
    let success = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(preview.value);
        success = true;
      }
    } catch(_) {}
    if (!success) {
      preview.focus();
      preview.select();
      try { success = document.execCommand("copy"); } catch(_) {}
    }
    copy.textContent = success ? "Copied — not submitted" : "Select the text above to copy";
  });

  addEventListener("hashchange", renderRoute);
  renderRoute();
})();
