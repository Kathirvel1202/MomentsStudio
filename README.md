# Moments Studio

A static wedding photography and videography studio website built with HTML, CSS and vanilla JavaScript. No framework, build step or backend is required to browse the pages.

## Pages

- `index.html` — six homepage sections and keyboard/touch accessible Home section menu
- `portfolio.html` — six content sections, category filters and keyboard accessible image lightbox
- `pricing.html` — example packages with clearly marked demo pricing
- `services.html`, `about.html`, `contact.html`, `faq.html`
- `privacy.html`, `terms.html` — policy templates; review and replace before launch

Removed authentication URLs (`login.html` and `register.html`) redirect to the homepage for old bookmarks; no sign-in or registration forms are included.

## Run

Open `index.html` directly in a browser. All page navigation and current image assets are local. Google Fonts may load when internet access is available; system serif and sans-serif fallbacks are included.

## Before publishing

- The `images/` folder contains locally downloaded Pexels wedding photographs in JPEG format. Photo links and IDs are listed below for reference. Review the current [Pexels license](https://www.pexels.com/license/) before publishing. A real local video is not included; there is no fake play control.
- The homepage quote and names are demonstration testimonial content. Replace with an approved genuine review or remove it.
- Package amounts are examples only, not verified studio prices. Confirm or remove them.
- Studio name, email, phone and location are sample details. Replace them.
- Booking enquiries validate locally but are not transmitted. Connect a form endpoint or backend before accepting enquiries.
- Authentication and password recovery are not connected. No password is saved; integrate a secure provider before allowing accounts.
- The direction control changes layout only. Page copy stays in English; it does not provide Arabic translation.
- Privacy and terms pages are starter copy, not reviewed legal documents.

Theme preference (light, dark or system) and direction preference are stored in `localStorage`. Colored sage, rose and gold sections receive dark-theme palettes so headings, paragraphs and translucent cards remain readable. When storage is unavailable, the website continues with system theme and LTR defaults.


## Local Pexels photo sources
- `images/home2-hero.jpg` — Pexels photo ID 32325264
- `images/home2-story-01.jpg` — Pexels photo ID 31002342
- `images/home2-story-02.jpg` — Pexels photo ID 28210860
- `images/home2-approach.jpg` — Pexels photo ID 36098389
- `images/home2-client-story.jpg` — Pexels photo ID 32878569

Each displayed photo has its own local file; the filenames correspond to the photos linked here.

- `images/about-philosophy-01.jpg` — Pexels photo ID 15622986
- `images/about-values-01.jpg` — Pexels photo ID 31002035
- `images/contact-wedding-01.jpg` — Pexels photo ID 27273675
- `images/faq-wedding-01.jpg` — Pexels photo ID 35508972
- `images/home-feature-01.jpg` — Pexels photo ID 37850754
- `images/home-feature-02.jpg` — Pexels photo ID 12634423
- `images/home-approach.jpg` — Pexels photo ID 16846853
- `images/home-client-story.jpg` — Pexels photo ID 31832634
- `images/portfolio-hero.jpg` — Pexels photo ID 7669989
- `images/portfolio-gallery-01.jpg` — Pexels photo ID 35872885
- `images/portfolio-gallery-02.jpg` — Pexels photo ID 32379184
- `images/portfolio-gallery-03.jpg` — Pexels photo ID 18867033
- `images/portfolio-gallery-04.jpg` — Pexels photo ID 27825199
- `images/portfolio-gallery-05.jpg` — Pexels photo ID 33363341
- `images/portfolio-gallery-06.jpg` — Pexels photo ID 38721881
- `images/portfolio-film-01.jpg` — Pexels photo ID 12200848
- `images/portfolio-film-02.jpg` — Pexels photo ID 17856348
- `images/portfolio-film-03.jpg` — Pexels photo ID 32164062
- `images/portfolio-cta.jpg` — Pexels photo ID 36725416
- `images/pricing-hero.jpg` — Pexels photo ID 30043112
- `images/services-intro.jpg` — Pexels photo ID 27500772
- `images/service-prewedding.jpg` — Pexels photo ID 30822475
- `images/service-candid.jpg` — Pexels photo ID 25311222
- `images/service-film.jpg` — Pexels photo ID 34025278
- `images/service-drone.jpg` — Pexels photo ID 37238552
- `images/service-album.jpg` — Pexels photo ID 23440269
- `images/home-hero.jpg` — Pexels photo ID 17548719
- `images/auth-wedding.jpg` — Pexels photo ID 31049062
- `images/service-color-finishing.jpg` — Pexels photo ID 16313512 (Kawê Rodrigues; https://www.pexels.com/photo/woman-editing-photos-working-on-laptop-16313512/)
- `images/service-short-form.jpg` — Pexels photo ID 15964966 (Danik Prihodko; https://www.pexels.com/photo/wedding-guests-holding-sparklers-and-standing-around-the-newlyweds-dancing-15964966/)

- `images/portfolio-gallery-07.jpg` — Pexels photo ID 30184675 (https://www.pexels.com/photo/traditional-indian-wedding-ceremony-with-bride-and-groom-30184675/)
- `images/portfolio-gallery-08.jpg` — Pexels photo ID 31002333 (https://www.pexels.com/photo/traditional-indian-wedding-ceremony-moment-31002333/)
- `images/portfolio-gallery-09.jpg` — Pexels photo ID 30215313 (https://www.pexels.com/photo/joyful-indian-wedding-ceremony-with-bride-and-groom-30215313/)
- `images/portfolio-wedding-01.jpg` — Pexels photo ID 32327732 (https://www.pexels.com/photo/traditional-indian-wedding-ceremony-ritual-32327732/)
- `images/portfolio-wedding-02.jpg` — Pexels photo ID 32947298 (https://www.pexels.com/photo/traditional-indian-wedding-ceremony-rituals-32947298/)
- `images/portfolio-wedding-03.jpg` — Pexels photo ID 29226148 (https://www.pexels.com/photo/joyful-indian-wedding-ceremony-moment-captured-29226148/)
- `images/portfolio-wedding-04.jpg` — Pexels photo ID 35872894 (https://www.pexels.com/photo/traditional-indian-wedding-ceremony-ritual-35872894/)
- `images/portfolio-wedding-05.jpg` — Pexels photo ID 32151000 (https://www.pexels.com/photo/joyful-indian-wedding-ceremony-with-happy-couple-32151000/)
- `images/portfolio-wedding-06.jpg` — Pexels photo ID 12718388 (https://www.pexels.com/photo/close-up-of-indian-bride-and-groom-during-a-traditional-wedding-ceremony-12718388/)
- `images/portfolio-portrait-01.jpg` — Pexels photo ID 20088963 (https://www.pexels.com/photo/portrait-of-bride-in-traditional-clothing-20088963/)
- `images/portfolio-portrait-02.jpg` — Pexels photo ID 12167262 (https://www.pexels.com/photo/portrait-of-a-bride-wearing-traditional-clothes-12167262/)
- `images/portfolio-portrait-03.jpg` — Pexels photo ID 36947949 (https://www.pexels.com/photo/traditional-indian-bridal-portrait-in-profile-36947949/)
- `images/portfolio-portrait-04.jpg` — Pexels photo ID 20365079 (https://www.pexels.com/photo/portrait-of-bride-in-traditional-clothing-20365079/)
- `images/portfolio-portrait-05.jpg` — Pexels photo ID 32077590 (https://www.pexels.com/photo/beautiful-indian-bridal-portrait-in-traditional-attire-32077590/)
- `images/portfolio-portrait-06.jpg` — Pexels photo ID 9901792 (https://www.pexels.com/photo/photograph-of-a-bride-wearing-traditional-clothes-9901792/)
- `images/portfolio-celebration-01.jpg` — Pexels photo ID 29569636 (https://www.pexels.com/photo/lively-wedding-celebration-with-dancing-guests-29569636/)
- `images/portfolio-celebration-02.jpg` — Pexels photo ID 13434438 (https://www.pexels.com/photo/bride-groom-and-wedding-guests-dancing-at-the-wedding-reception-13434438/)
- `images/portfolio-celebration-03.jpg` — Pexels photo ID 37204367 (https://www.pexels.com/photo/joyful-indian-wedding-celebration-gathering-37204367/)
- `images/portfolio-celebration-04.jpg` — Pexels photo ID 28141934 (https://www.pexels.com/photo/pure-joy-at-a-celebration-28141934/)
- `images/portfolio-celebration-05.jpg` — Pexels photo ID 31906103 (https://www.pexels.com/photo/joyful-indian-wedding-celebration-in-delhi-31906103/)
- `images/portfolio-celebration-06.jpg` — Pexels photo ID 35267194 (https://www.pexels.com/photo/vibrant-indian-wedding-celebration-with-guests-35267194/)
