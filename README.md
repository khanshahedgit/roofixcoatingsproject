# Roofix Coatings: Premium Roof Restoration

Build a premium, modern, conversion-focused website for an established Australian roof painting and restoration company.

# COMPANY

**Business Name:** Roofix Coatings
**Tagline:** Roof painting & restoration specialist
**Brand Message:** Restoring and protecting Aussie roofs.

**Phone:** +61 493 741 674
**Email:** [roofcoatingss@gmail.com](mailto:roofcoatingss@gmail.com)

Target audience: Australian homeowners looking for professional roof painting, roof restoration, roof cleaning/preparation and roof protection.

---

# TECH STACK

Use ONLY:

* React
* Vite
* Tailwind CSS
* Framer Motion

Use lightweight reusable React components.

Do not add unnecessary libraries or complex architecture.

Implement smooth scrolling and responsive design.

The website must be production-quality, fast and easy to edit.

---

# DESIGN STYLE

The website must look like a **premium established Australian roofing/home-improvement company**, NOT an AI-generated template.

Visual direction:

**Premium • Australian • Architectural • Trustworthy • Clean • Established • High-end**

Use a refined palette based around:

* Warm white / off-white
* Charcoal
* Deep slate
* Soft neutral grey
* Subtle earthy/warm accent

Avoid an overly dark website.

Avoid:

* Neon
* Excessive gradients
* SaaS-style layouts
* Excessive glassmorphism
* Giant text everywhere
* Excessive rounded cards
* Cartoon illustrations
* Generic AI-looking sections
* Excessive animation

Use strong typography, large photography, clean spacing, subtle borders and elegant shadows.

The website should feel like a professionally designed **$5,000–$10,000 Australian trade-business website**.

---

# HEADER

Create a sticky premium navigation.

Logo:

**Roofix Coatings**

Small descriptor:

**Roof Painting & Restoration**

Navigation:

Home
About
Services
Before & After
Recent Projects
Why Roofix
Contact

Right-side CTA:

**Get a Free Quote**

On scroll, make the header slightly more compact with a subtle background/shadow.

Mobile navigation should use a clean animated hamburger menu.

---

# HERO

Create a visually strong full-width hero.

Use a large roofing/home exterior image placeholder.

Hero eyebrow:

**ROOF PAINTING & RESTORATION SPECIALIST**

Main heading:

**Restoring & Protecting Aussie Roofs.**

Supporting text:

Professional roof painting and restoration services designed to refresh, protect and extend the life of Australian roofs.

Primary CTA:

**Get a Free Quote**

Secondary CTA:

**View Our Work**

Show phone:

**+61 493 741 674**

Use subtle Framer Motion entrance animation.

Keep the hero premium and clean, not overloaded.

---

# INTRO / ABOUT

Create a refined section after the hero.

Eyebrow:

**ROOFIX COATINGS**

Headline:

**A Better Roof Starts With The Right Finish.**

Short copy:

Roofix Coatings focuses on restoring tired roofs, improving their appearance and helping protect them from the Australian elements.

Add 3 small trust points:

**Professional Roof Restoration**
**Quality Finishes**
**Built For Australian Conditions**

Use a large image beside the text.

Use subtle scroll-reveal animation.

---

# SERVICES

Heading:

**Roofing Services**

Subheading:

Professional solutions to restore, refresh and protect your roof.

Create 4 premium service cards:

### 01 — Roof Painting

Transform the appearance of your roof with a durable professional finish.

### 02 — Roof Restoration

Restore weathered and ageing roofs while improving their overall appearance and condition.

### 03 — Roof Cleaning & Preparation

Thorough preparation to help ensure coatings adhere properly and provide a quality finish.

### 04 — Roof Protection

Help protect your roof from harsh Australian weather and extend its usable life.

Each card should include:

* Minimal line/icon
* Number
* Title
* Short description
* Small arrow

Use subtle hover animation.

Do not make the cards excessively rounded.

---

# FEATURE / WHY ROOFIX

Create a premium split-layout section.

Left:
Large roof restoration image placeholder.

Right:

Eyebrow:

**WHY ROOFIX COATINGS**

Headline:

**Quality Work. Proper Preparation. A Finish That Lasts.**

Copy:

Roof restoration is about more than simply applying a new colour. Proper preparation, careful application and attention to detail all contribute to a professional result.

Add bullet points:

* Careful preparation
* Professional application
* Attention to detail
* Quality-focused workmanship
* Suitable for Australian homes and conditions

CTA:

**Talk To Roofix**

---

# BEFORE & AFTER

IMPORTANT: Create a fully functional interactive **Before & After Roof Transformation slider**.

This should be one of the main visual sections of the website.

Eyebrow:

**THE ROOFIX DIFFERENCE**

Headline:

**See The Transformation.**

Supporting text:

From weathered and tired to clean, refreshed and protected — see what a professional roof restoration can do.

## IMAGE COMPARISON

Create one large 16:9 comparison area.

Use two images:

`<BEFORE_IMAGE />`

`<AFTER_IMAGE />`

The BEFORE image is underneath.

The AFTER image is clipped/revealed above it according to slider position.

## SLIDER

Create a vertical divider/handle in the center.

The user must be able to:

* Drag left/right with mouse
* Drag left/right with touch
* Click anywhere on the image to move the slider
* Use the handle easily on mobile

At the center of the divider create a premium circular handle containing:

**← →**

The handle should clearly communicate that it can be dragged.

Add:

**BEFORE** label on the left.

**AFTER** label on the right.

Labels should have subtle translucent backgrounds.

Use pointer events for mouse/touch/pen.

Slider value must be clamped between 0% and 100%.

Create a reusable component:

`BeforeAfterSlider.jsx`

Keep it lightweight and dependency-free.

Add an accessible aria-label.

The slider itself should feel immediate and smooth.

Use Framer Motion only for the section entrance animation, not to slow down slider interaction.

Make the two image placeholders extremely easy to replace.

---

# RECENT PROJECTS

Create a premium section:

Eyebrow:

**OUR RECENT WORK**

Headline:

**Recent Projects**

Subheading:

See the difference a professional roof restoration can make.

IMPORTANT:

I have **3 project videos** that I will add later.

Create exactly 3 large video/project cards.

DO NOT add actual videos.

Create clean placeholders:

`<VIDEO_PLACEHOLDER_01 />`

`<VIDEO_PLACEHOLDER_02 />`

`<VIDEO_PLACEHOLDER_03 />`

Each card should support:

* 16:9 video area
* Thumbnail placeholder
* Center play button
* Project title
* Location
* Category label

Use placeholder content:

**Project One**
**Australian Residential Project**

**Project Two**
**Australian Residential Project**

**Project Three**
**Australian Residential Project**

Make the video areas extremely easy to replace with actual `<video>` elements later.

Desktop:
3-column grid.

Mobile:
single-column stack.

Use subtle hover movement only.

---

# PROCESS

Create a premium process section.

Eyebrow:

**OUR PROCESS**

Headline:

**A Straightforward Process. A Better Result.**

Four steps:

**01 — Inspection**
Assess the roof and understand what it needs.

**02 — Preparation**
Prepare the surface properly before coating.

**03 — Restoration**
Carry out the restoration and coating work with care.

**04 — Final Finish**
Complete the project with a clean professional finish.

Desktop:
Horizontal timeline.

Mobile:
Vertical timeline.

Use subtle scroll animation.

---

# WHY CHOOSE ROOFIX

Create a deep charcoal/slate section, but do NOT make it pure black.

Eyebrow:

**WHY HOMEOWNERS CHOOSE ROOFIX**

Headline:

**Professional From Preparation To Final Finish.**

Create 4 feature blocks:

### Professional Finish

Attention to detail from preparation through final coating.

### Australian Conditions

Roof solutions designed with Australian homes and weather in mind.

### Reliable Workmanship

A professional approach with quality at every stage.

### Roof Transformation

Refresh the appearance and improve the protection of your roof.

Use elegant typography and subtle divider lines.

---

# FINAL CTA

Create a strong conversion section.

Headline:

**Ready To Give Your Roof A New Life?**

Supporting text:

Talk to Roofix Coatings about your roof painting or restoration project.

Primary button:

**Get Your Free Quote**

Secondary:

**Call +61 493 741 674**

Keep it visually impressive but simple.

---

# CONTACT

Create a premium contact section.

Heading:

**Let's Talk About Your Roof**

Contact information:

**+61 493 741 674**

**[roofcoatingss@gmail.com](mailto:roofcoatingss@gmail.com)**

**Roofix Coatings**

Create enquiry form:

Name
Phone
Email
Suburb
Tell us about your roof

Button:

**Request A Free Quote**

Small text:

We'll get back to you as soon as possible.

Frontend UI only. No complicated backend required.

---

# FOOTER

Create a minimal premium footer.

Logo:

**Roofix Coatings**

Tagline:

**Restoring and protecting Aussie roofs.**

Navigation links.

Contact:

+61 493 741 674
[roofcoatingss@gmail.com](mailto:roofcoatingss@gmail.com)

Bottom:

**© 2026 Roofix Coatings. All rights reserved.**

---

# ANIMATIONS

Use Framer Motion carefully.

Include:

* Hero entrance animation
* Staggered text animation
* Scroll reveal
* Image reveal
* Service hover interactions
* Project card hover interactions
* CTA micro-interactions
* Mobile menu animation

Animations should be subtle, premium and fast.

Avoid excessive animations.

Respect `prefers-reduced-motion`.

---

# SMOOTH SCROLL

Use smooth scrolling for:

Home
About
Services
Before & After
Recent Projects
Why Roofix
Contact

Use section IDs:

`home`
`about`
`services`
`before-after`
`projects`
`why-us`
`contact`

---

# RESPONSIVE

Make the entire website excellent on:

* Desktop
* Laptop
* Tablet
* Mobile

Pay special attention to:

* Mobile typography
* CTA buttons
* Before/After slider usability
* Video cards
* Navigation
* Section spacing

No horizontal overflow.

---

# CONTENT / TRUST RULE

DO NOT invent any company facts.

Do NOT create fake:

* Reviews
* Google ratings
* Customer testimonials
* Years of experience
* Number of completed projects
* Awards
* Certifications
* Licences
* ABN
* Specific service areas
* Guarantees
* Customer names

Only use information provided in this prompt.

Where company-specific information, images or videos are missing, use clean placeholders.

---

# IMAGE DIRECTION

Use tasteful premium imagery where image placeholders are needed.

Prefer:

* Australian residential roofs
* Roof restoration
* Roof painting
* Before/after roof transformations
* Professional roofing workmanship
* High-end Australian homes

Avoid cheesy generic stock photography.

Keep image components easy to replace.

---

# CODE QUALITY

Keep the implementation lightweight.

Create reusable components such as:

`Header.jsx`
`Hero.jsx`
`About.jsx`
`Services.jsx`
`BeforeAfterSlider.jsx`
`RecentProjects.jsx`
`Process.jsx`
`WhyRoofix.jsx`
`CTA.jsx`
`Contact.jsx`
`Footer.jsx`

Do not create unnecessary files or dependencies.

Keep the project easy for another developer to edit.

---

# FINAL REQUIREMENT

Before finishing, review the entire website visually and make it feel cohesive.

The final website should communicate:

**Trust + Craftsmanship + Premium Quality + Australian Roofing Expertise**

It should look like a real established roofing company website rather than a generic AI landing page.

Prioritize **design quality, spacing, typography, photography, conversion and usability** over adding unnecessary features.

Do not overbuild the website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://roofixcoatingsproject.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4b74fa73-b774-4f91-9125-c04979f805b0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
