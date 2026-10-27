# Globle Supply Chain — Corporate Website Preview

This is a **separate** multi-venture company landing website. It does not replace the already deployed [Globle Pets](https://pets.globlesupplychain.com/) pet-project website. It is for the company **Globle Supply Chain** (domain: `globlesupplychain.com`), not `globelsupply.com`.

## Sections
- Overview: general Globle Supply Chain introduction with professional photography and a feature for Globle Pets.
- Our projects: pet project is live as a concept website; potential trade/sourcing and future ventures clearly marked as ideas, not currently offered products/services.
- Ideas & Requests: front-end request builder with copy-to-clipboard. **No submission endpoint, email forwarding, chat bot or database is connected.** Never imply a request has actually been received.

## Public claims / privacy
- An early-stage website only; the father has not finalized the business plan.
- No sales, pricing, testimonials, physical headquarters, trading activity or guaranteed service is asserted.
- All non-pet business categories are only speculative and must be approved before launch.
- No analytics, cookies or request collection.
- Unsplash real-photo imagery is *illustrative*, not photos of company property, staff or products.

## Photo sources
Real photographs from Unsplash, permitted for commercial website use under https://unsplash.com/license. They are not AI generated. Image hosting is remote via images.unsplash.com and requires an internet connection. Replace with appropriately licensed images if desired.

## Development
Static HTML/CSS/vanilla JS, accessible hash navigation, responsive design. Open index.html to preview locally. Cloudflare Pages: build command `exit 0`, output directory `.`.

## Deployment & IMPORTANT activation notice
Preview on Cloudflare Pages, *not* currently set as the live root domain. Do **not** change `globlesupplychain.com` (A) or `www.globlesupplychain.com` (CNAME) without the domain owner's review and an explicit final publish decision. Existing email (MX/TXT/DKIM), Namecheap and Pets subdomain records should be preserved.

To launch on the root domain later:
1. Verify the company's legal branding and intended website messaging with the owner.
2. Review the new website on its Cloudflare Pages preview URL.
3. Set up Cloudflare Pages custom domains for apex and www, with correct routing after confirming current DNS is safe to replace. Do not delete unrelated DNS records.
4. Remove the <meta name="robots" content="noindex,nofollow"> staging directive, optionally add a sitemap and robots.txt, and validate search engine crawling only when ready.
5. Integrate a real bot or backend for requests before claiming the form sends data.
