# ScholarVantage Global website

A static, mobile-first website for **ScholarVantage Global**: plain HTML, CSS and vanilla JavaScript. There's no build step, framework or backend.

```
index.html  about.html  services.html
css/style.css        all styles; brand colours and fonts are CSS variables at the top
js/main.js           mobile menu, scroll effects, booking form → WhatsApp
images/              logo, favicons, Open Graph image, photos
sitemap.xml  robots.txt
```

## Preview locally

Open `index.html` in a browser, or run a small local server (recommended, so links behave as they will online):

```bash
python -m http.server 8080
```

Then visit http://localhost:8080.

## Deploy for free

You can host it on any of these. Upload the whole folder as it is.

- **Netlify:** go to https://app.netlify.com/drop and drag the folder in. Then, under *Site settings → Change site name*, set it to `scholarvantage-global` to get `scholarvantage-global.netlify.app`.
- **Vercel:** run `npx vercel` in this folder, or import the GitHub repo at vercel.com. Choose "Other" as the framework and leave the build command empty.
- **GitHub Pages:** push this folder to a repo, then go to *Settings → Pages → Deploy from branch → main / root*.

**After deploying, update the site address.** The pages currently assume `https://scholarvantage-global.netlify.app`. If your address is different, find and replace that text in `index.html`, `about.html`, `services.html`, `sitemap.xml` and `robots.txt`. It's used for SEO tags only, so the site works either way.

When the client buys a domain, connect it in the host's dashboard and replace the address the same way.

## Editing content

- **Text:** edit the HTML files directly. Line 1 to 15 of `css/style.css` is a design "stamp" comment from the Hallmark design skill used for the redesign; leave it in place. The header, footer, booking form and floating WhatsApp button appear on all three pages, so update contact details in each file.
- **Phone / WhatsApp number:** search for `2348107744894` (links) and `+234 810 774 4894` (display text) in the HTML files, and change `WA_NUMBER` at the top of `js/main.js`.
- **Email:** search for `scholarvantageglobal@gmail.com` (HTML files and `js/main.js`).
- **Colours and fonts:** edit the variables in `:root` at the top of `css/style.css`.
- **Services in the booking form:** each `<option value="...">` in the "Service of interest" list matches a section id on the Services page (`memberships`, `research`, `awards`, `innovation`, `immigration`). Links like `services.html?service=awards#contact` pre-select that service.

## Swapping images

Every photo sits in a frame marked `data-slot="…"`, with a `data-alt` attribute that says what the client's own picture should show. To replace one, save the new photo in `images/` with the **same file name** (or change the `src`), then update the `alt` text and the `width`/`height` to match the new image. Keep photos around 1200 to 1920px wide and under about 300 KB; https://squoosh.app compresses them well.

| File | Used on | Best replaced with |
|---|---|---|
| `photo-reading-room.jpg` (+ `-1100` version) | Home, full-screen hero | A wide, calm academic or research setting |
| `founder.jpg` | Home stage 4 and About | The founder's approved portrait |

The hero photo is from Wikimedia Commons under a CC BY 4.0 licence, which **requires the credit line** in the footer ("Photograph: …"). If you replace it with your own photo, remove that credit.

## Logo files

- `logo-original.jpg`: the logo as supplied by the client
- `logo-icon.svg` / `logo-icon-light.svg`: SVG redraw of the swoosh-and-squares icon, for light and navy backgrounds. The header wordmark is live text in Montserrat, so it stays sharp at every size.
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-512.png`: browser and phone icons
- `og-image.jpg`: the preview image shown when the site is shared on social media or WhatsApp

If the client has the original vector logo (AI, EPS, SVG or PDF), use it in place of the redraw for the sharpest result.

## How the booking form works

There's no server. When a visitor submits the form, it checks the required fields and then opens WhatsApp (`wa.me/2348107744894`) with a formatted summary of their request. They press **send** in WhatsApp to deliver it. A confirmation message appears on the page with fallback links to WhatsApp and email. Nothing is stored on the website.

## Content still needed from client

Each item is marked in the HTML with `<!-- PLACEHOLDER: … -->`. Items that show on the page appear as grey text in a dashed outline (`<span class="fill" …>`). Replace the whole span with the real content.

- [ ] **Founder photo:** `images/founder.jpg` is the portrait sent with the logo. Confirm it's the approved photo of John Oluwadarasimi Ojo (about.html).
- [ ] **Founder bio:** the current text is a neutral placeholder (about.html).
- [ ] **Vision statement:** the current sentence is a placeholder (about.html).
- [ ] **Testimonials:** 3 slots on the home page say "Client testimonial coming soon". Use real clients only, with their permission.
- [ ] **Instagram link:** "John Dara" is unconfirmed. The footer icon currently links to `#` on all three pages.
- [ ] **Service timelines:** typical durations for each service (services.html, one comment per service plus the FAQ answer).
- [ ] **Partners and affiliations:** any partner, membership or affiliation details the client wants shown. There's no section for these yet. Don't use official logos of IEEE, IET, BCS, USCIS or UK government bodies.
- [ ] **Site address:** replace `scholarvantage-global.netlify.app` once the final address is known (see "Deploy for free").
- [ ] **Hero photo:** optionally replace the reading-room photo with the client's own (see "Swapping images").

## Compliance notes

The copy describes the work as **profile development, evidence organisation and strategic guidance**. It never promises visa approval, publication, awards or memberships. The legal disclaimer appears in every page footer and on the Services page. Keep it that way when editing.

## Design notes (Impeccable redesign)

The website frontend has been redesigned to institutional executive standards under the **Elite Fellowship Registry & Honours Ledger** system (`Cinzel` Roman display + `Manrope` high-clarity technical sans; Midnight Lapis, Alabaster Vellum, and Antique Bullion Gold).

- Core design tokens are defined in [tokens.css](file:///C:/Users/dell/Documents/proj/20/ScholarVantage/css/tokens.css).
- Global reset and typography rules live in [base.css](file:///C:/Users/dell/Documents/proj/20/ScholarVantage/css/base.css).
- Component layouts, responsive grids, and interactive states are authored in [style.css](file:///C:/Users/dell/Documents/proj/20/ScholarVantage/css/style.css).
- Design system documentation is maintained in [DESIGN.md](file:///C:/Users/dell/Documents/proj/20/ScholarVantage/DESIGN.md) and its sidecar [.impeccable/design.json](file:///C:/Users/dell/Documents/proj/20/ScholarVantage/.impeccable/design.json).
- Product truth and positioning records are tracked in [PRODUCT.md](file:///C:/Users/dell/Documents/proj/20/ScholarVantage/PRODUCT.md).
