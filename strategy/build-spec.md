# Phase 2 Future Build Specification

## Page requirements

### Home

Build a responsive homepage with an approved Express Pizza & Scoops logo, local headline, concise value proposition, Order Online and View Menu CTAs, Call and Directions actions, verified hours, address, and a small set of approved food/product images. Include a compact popular-items or category section without inventing menu data.

### Menu

Build a readable overview using the client-confirmed category set. Provide category anchors or cards, short descriptions only where verified, and a prominent handoff to the external full menu/order system. Show a dated source note if prices are displayed. Do not reproduce a fake cart, modifiers, or checkout.

### Order Online

Present the client-confirmed ordering destinations with clear labels for pickup, delivery, or marketplace. External links should open predictably, be keyboard accessible, and include an accessible indication that the user is leaving the site when appropriate.

### About

Present the approved story and Pizza + Scoops identity. Do not publish unverified history, ownership claims, years in business, awards, or testimonials.

### Contact / Location

Show address, phone, weekly hours, directions, map or map link, pickup/delivery information, and any parking/access details supplied by the client. Use clickable tel and directions links.

### Catering, conditional

Add only if confirmed. Include packages, notice requirements, service area, inquiry CTA, and a contact method.

## Components

Use a consistent header, mobile action bar, hero, CTA button, hours block, menu category grid, ordering handoff card, location block, review/profile link block, image card, footer, and accessible external-link treatment. Components should remain content-driven and avoid hardcoded unverified facts.

## Navigation and CTAs

Primary navigation: Home, Menu, Order Online, About, Contact. The dominant CTA is Order Online. Secondary CTAs are View Menu, Call, and Get Directions. On mobile, keep Order, Call, and Directions available without excessive scrolling.

## Menu UI

Use section navigation, readable prices only if approved, clear category labels, and lightweight item summaries. Prefer a high-level marketing menu plus external full ordering. Include an unavailable/updated state if the external ordering link cannot be loaded; do not fabricate availability.

## Ordering flow

The site routes to existing third-party ordering infrastructure. It must not process payment, create a fake checkout, or imply control over delivery ETAs. The owner must approve every outbound ordering URL.

## Contact and footer

Repeat canonical NAP, hours, order link, phone, directions, social links, accessibility statement, and copyright/ownership information. Avoid legacy Best Pizza references unless the brand strategy explicitly retains them.

## Mobile behavior

Use responsive layout, sticky but non-obstructive CTAs, fast-loading images, large touch targets, visible focus states, and no hover-only content. Test at narrow mobile widths and with browser text scaling.

## Accessibility

Use semantic landmarks, keyboard navigation, visible focus, logical heading order, sufficient color contrast, descriptive link text, alt text, accessible forms if any, reduced-motion support, and no information conveyed by color alone. External ordering links must be usable with screen readers.

## Performance

Optimize and lazy-load imagery, use responsive image sizes, minimize third-party scripts, avoid autoplay media, reserve image dimensions to prevent layout shift, and measure Core Web Vitals. Keep the marketing layer lightweight because the checkout remains external.

## SEO

Provide unique metadata, canonical URLs, sitemap, robots rules, Restaurant/LocalBusiness JSON-LD after confirmation, Open Graph tags, NAP consistency, descriptive image metadata, and indexable page copy for Newington intent.

## Asset requirements

Client must provide approved logo files, brand direction, current product/storefront/interior photos, social URLs, and image rights. Public legacy assets are research references only.

## Client-dependent information

The build is blocked on current name, phone, hours, menu source, prices, scoops status, ordering URLs, delivery/pickup rules, service area, catering status, domain, analytics, and approval of legacy brand transition.

## Unknowns that must not be invented

Do not invent menu categories, prices, hours, reviews, awards, delivery radius, ingredients, allergens, business history, ownership, photos, logo variants, or official social accounts.
