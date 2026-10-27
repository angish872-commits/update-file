# Globle Supply Chain — Five-Project Website

**Parent website:** https://globlesupplychain.com
**Also:** https://www.globlesupplychain.com
**Cloudflare Pages:** https://globle-company-site.pages.dev

The parent company's website introduces **five project pages**. These are initiatives under the Globle Supply Chain umbrella, **not claims of five separately incorporated companies**. Some are projects in development, others are only ideas. No unverified sales, inventory, customers, availability, headquarters or prices are claimed.

## Five projects

1. **MoveFuel** — fitness and technology (in development). Detail route: `#project-movefuel`. External site: https://movefule.tech
2. **Globle Pets** — pet concept website live. Detail route: `#project-pets`. External site: https://pets.globlesupplychain.com
3. **Website Development** — planned service concept. Detail route: `#project-websites`. No standalone public website yet.
4. **AI Solutions** — planned software concept. Detail route: `#project-ai`. No standalone public website yet.
5. **Trade & Supply Chain** — possible future activity. Detail route: `#project-supply`. No standalone public website yet.

## Site structure

- `#home`: general umbrella introduction and five clickable project cards.
- `#ventures`: all five project cards.
- `#project-*`: one dedicated page for each of the five projects.
- `#ideas`: ideas/request form.

**Important:** The request form currently drafts a copyable message in the visitor's browser. Nothing is transmitted, emailed, saved, or submitted. An actual company-approved backend/bot with privacy, security, spam prevention and data retention controls must be connected before promising submissions.

## Deployment

GitHub repository: `angish872-commits/update-file`.
Cloudflare Pages project: `globle-company-site`, linked to the main branch.
Static build: build command `exit 0`, output directory `.`.

On October 27, 2026, Pages custom domains `globlesupplychain.com` and `www.globlesupplychain.com` were registered and the existing website DNS records updated to CNAME `globle-company-site.pages.dev`. Existing `MX`, `TXT`, `SRV`, email-related records, and `pets.globlesupplychain.com` were preserved. Domain validation/HTTPS certificate issuance can remain pending briefly after DNS changes; verify before announcing to visitors.

The old apex website A record was `162.255.119.18`; the old `www` CNAME was `parkingpage.namecheap.com`. If intentionally rolling back, restore those exact two DNS records and detach the appropriate Pages custom domains after confirming with the owner. Do not edit other DNS records.

## Maintenance and accuracy

- Update project status labels when real businesses launch. Do not present exploratory services as available.
- All photographic assets use real stock imagery from Unsplash CDN under the [Unsplash License](https://unsplash.com/license) and do not represent the company's actual personnel or assets.
- `index.html` contains content, cards, links and detailed project pages.
- `styles.css` is responsive styling; `app.js` provides navigation and client-side draft/copy; `_headers` controls content security.
- The project is publicly indexable, so confirm that the parent company agrees to public branding and content before promotional campaigns.
