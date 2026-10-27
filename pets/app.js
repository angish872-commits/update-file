"use strict";

(function () {
  const sections = ["home", "coming-soon", "request"];
  const navLinks = document.querySelectorAll("[data-nav]");
  const views = document.querySelectorAll(".view");
  const form = document.getElementById("request-form");
  const submit = document.getElementById("request-submit");
  const disclosure = document.getElementById("request-disclosure");
  const resultBox = document.getElementById("request-result");
  const preview = document.getElementById("request-preview");
  const resultTitle = document.getElementById("result-title");
  const resultExplanation = document.getElementById("result-explanation");
  const copyButton = document.getElementById("copy-request");
  const configuredEmail = String(window.PET_SITE_CONFIG?.requestEmail || "").trim();
  const emailIsReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail);

  function currentRoute() {
    const route = decodeURIComponent(location.hash.slice(1) || "home");
    return sections.includes(route) ? route : "home";
  }

  function showRoute() {
    const active = currentRoute();
    views.forEach((view) => { view.hidden = view.id !== active; });
    navLinks.forEach((link) => {
      if (link.dataset.nav === active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    const titles = {
      home: "Globle Pets | Welcome",
      "coming-soon": "Coming Soon | Globle Pets",
      request: "Make a Request | Globle Pets"
    };
    document.title = titles[active];
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function clean(value) {
    return String(value || "").trim().replace(/\r/g, "").slice(0, 1200);
  }

  function buildRequest(values) {
    const lines = [
      "Hello Globle Pets,",
      "",
      "I have an idea or request for your pet project.",
      "",
      "Interested in: " + clean(values.get("interest")),
      "Pet: " + clean(values.get("pet")),
      "",
      "Idea / request:",
      clean(values.get("message"))
    ];
    const name = clean(values.get("name"));
    const email = clean(values.get("email"));
    if (name) lines.push("", "From: " + name);
    if (email) lines.push("Reply email: " + email);
    lines.push("", "Prepared on the Globle Pets concept website.");
    return lines.join("\n");
  }

  // The starter intentionally does not send to a server or store personal information.
  if (emailIsReady) {
    submit.innerHTML = 'Open email to send <span aria-hidden="true">↗</span>';
    disclosure.textContent = "This form opens your own email app with a prepared message. You must choose Send in your email app; this website does not store requests.";
  } else {
    disclosure.textContent = "Requests are not being received automatically yet. This form lets you prepare and copy an idea; copying is not sending.";
    submit.innerHTML = 'Prepare my request <span aria-hidden="true">↗</span>';
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const prepared = buildRequest(values);
    preview.value = prepared;
    resultBox.hidden = false;
    copyButton.textContent = "Copy request text";

    if (emailIsReady) {
      resultTitle.textContent = "Your email draft is ready.";
      resultExplanation.textContent = "Your email app should open. Please press Send there to actually submit your request; this site has not sent or saved it.";
      const subject = encodeURIComponent("Globle Pets — New idea or request");
      const body = encodeURIComponent(prepared);
      window.location.href = "mailto:" + configuredEmail + "?subject=" + subject + "&body=" + body;
    } else {
      resultTitle.textContent = "Your request is ready to copy.";
      resultExplanation.textContent = "Copy your message for later. There is no active receiving inbox or backend connected to this form yet, so your request has not been submitted.";
    }
    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  copyButton.addEventListener("click", async () => {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(preview.value);
        copied = true;
      }
    } catch (_) {
      // File previews and permission-restricted browsers may not expose clipboard.
    }
    if (!copied) {
      preview.focus();
      preview.select();
      try { copied = document.execCommand("copy"); } catch (_) { copied = false; }
    }
    copyButton.textContent = copied ? "Copied! (Not sent)" : "Select the text above to copy";
  });

  document.getElementById("year").textContent = String(new Date().getFullYear());
  window.addEventListener("hashchange", showRoute);
  showRoute();
})();
