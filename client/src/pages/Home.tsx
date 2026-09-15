import { ArrowDownRight, ArrowUpRight, Clock3, ExternalLink, MapPin, Phone, Utensils } from "lucide-react";
import { Link } from "wouter";

const orderUrl = "https://www.orderbestpizza.com/";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=82+Pane+Rd+Newington+CT+06111";

const hours = {
  delivery: [
    ["Monday", "10:45 AM – 9:45 PM"],
    ["Tuesday", "10:45 AM – 9:45 PM"],
    ["Wednesday", "10:45 AM – 9:45 PM"],
    ["Thursday", "10:45 AM – 9:45 PM"],
    ["Friday", "10:30 AM – 10:45 PM"],
    ["Saturday", "10:45 AM – 10:45 PM"],
    ["Sunday", "10:45 AM – 8:45 PM"],
  ],
  pickup: [
    ["Monday", "10:45 AM – 10:00 PM"],
    ["Tuesday", "10:45 AM – 10:00 PM"],
    ["Wednesday", "10:45 AM – 10:00 PM"],
    ["Thursday", "10:45 AM – 11:00 PM"],
    ["Friday", "10:30 AM – 11:00 PM"],
    ["Saturday", "10:45 AM – 11:00 PM"],
    ["Sunday", "10:45 AM – 9:00 PM"],
  ],
} as const;

const menuGroups = [
  { title: "Start here", items: ["Family Deals", "Pickup Specials", "Lunch Specials"] },
  { title: "The main event", items: ["Pizza", "Specialty Pizza", "Buffalo Wings", "Chicken Tenders", "Calzones", "Stromboli"] },
  { title: "More to the table", items: ["Salads", "Breads", "Dinners", "Specialty Dinners", "Fried Dinners"] },
  { title: "Handhelds", items: ["Grinders", "Parmigiana Grinders", "Deluxe Sandwiches", "Wraps", "Pita Pockets", "Paninis"] },
  { title: "Round it out", items: ["Appetizers", "Quesadillas", "Kids Menu", "Desserts", "Beverages"] },
];

function ActionLink({ href, children, variant = "dark", external = false }: { href: string; children: React.ReactNode; variant?: "dark" | "light" | "outline"; external?: boolean }) {
  const content = <>{children} <ArrowUpRight size={17} strokeWidth={2.2} /></>;
  if (external) return <a className={`action-link ${variant}`} href={href} target="_blank" rel="noreferrer">{content}</a>;
  return <Link className={`action-link ${variant}`} href={href}>{content}</Link>;
}

function SectionHeading({ kicker, title, body, light = false }: { kicker: string; title: React.ReactNode; body?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
    <p className="eyebrow">{kicker}</p>
    <h2>{title}</h2>
    {body && <p className="section-body">{body}</p>}
  </div>;
}

function PhotoSlot({ label, image, className = "" }: { label: string; image: string; className?: string }) {
  return <div className={`photo-slot ${className}`} role="img" aria-label={`${label} photography`}><img src={image} alt="" /><span className="photo-slot-index">01 / EXPRESS FAVORITE</span><span className="photo-slot-label">{label}</span></div>;
}

function OwnerNote({ compact = false }: { compact?: boolean }) {
  return <div className={`owner-note ${compact ? "compact" : ""}`} role="note">
    <span className="owner-note-mark" aria-hidden="true">i</span>
    <div><strong>Preview state</strong><p>{compact ? "Menu details will publish after owner confirmation." : "The structure is ready. Current menu, brand assets, and ordering destination still require owner confirmation before launch."}</p></div>
  </div>;
}

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-texture" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-rule" /> Newington, Connecticut</p>
          <h1>Great pizza.<br /><em>Cold scoops.</em><br />Always a good stop.</h1>
          <p className="hero-lede">Fresh pizza, local favorites, and sweet treats — all in one neighborhood stop.</p>
          <div className="hero-actions"><ActionLink href="/order" variant="light">Order online</ActionLink><ActionLink href="/menu" variant="outline">View the menu</ActionLink></div>
          <div className="hero-facts"><span>82 Pane Rd</span><span className="fact-rule" /><a href="tel:+18606658128">(860) 665-8128</a></div>
        </div>
        <div className="hero-media"><PhotoSlot label="Pizza / hero image" image="/images/hero-pizza.jpg" className="photo-slot-hero" /><div className="hero-stamp">PIZZA<br /><span>&</span><br />SCOOPS</div></div>
      </div>
      <div className="hero-bottom container"><span>Made for the neighborhood</span><ArrowDownRight size={18} /></div>
    </section>

    <section className="section serve-section">
      <div className="container serve-grid">
        <SectionHeading kicker="What we serve" title={<>The good stuff,<br /><em>close to home.</em></>} body="A broad neighborhood menu for the quick stop, the family table, and the sweet finish after." />
        <div className="serve-list"><div><span>01</span><h3>Pizza worth sharing</h3><p>Classic and specialty pies, made for the middle of the table.</p></div><div><span>02</span><h3>More than a slice</h3><p>Wings, grinders, dinners, and the comfort-food favorites people come back for.</p></div><div><span>03</span><h3>Save room for scoops</h3><p>Ice cream and desserts are part of the Express stop — current selection pending confirmation.</p></div></div>
      </div>
    </section>

    <section className="section menu-preview-section">
      <div className="container">
        <div className="section-topline"><SectionHeading kicker="Menu highlights" title={<>Bring an appetite.<br /><em>We’ll handle the rest.</em></>} /><Link href="/menu" className="text-link">See all categories <ArrowUpRight size={16} /></Link></div>
        <div className="menu-feature-grid"><PhotoSlot label="Scoops" image="/images/scoops.jpg" className="photo-slot-feature" /><div className="menu-feature-copy"><span className="feature-number">02</span><h3>Everything you need for the table.</h3><p>Public menu research points to a generous mix of pizza, wings, grinders, dinners, family deals, desserts, and more. The final menu will come from an owner-approved source of truth.</p><ActionLink href="/menu" variant="dark">Explore the menu</ActionLink></div></div>
        <OwnerNote />
      </div>
    </section>

    <section className="section story-section">
      <div className="container story-grid"><div className="story-copy"><p className="eyebrow eyebrow-light">The Express experience</p><h2>A real place<br /><em>for real cravings.</em></h2><p>The finished story belongs to the people behind the counter and the neighborhood around them. This is the space for that voice — specific, warm, and unmistakably theirs.</p><ActionLink href="/about" variant="light">About Express</ActionLink></div><PhotoSlot label="Inside Express" image="/images/interior.jpg" className="photo-slot-story" /></div>
    </section>

    <section className="section visit-section"><div className="container visit-grid"><div><SectionHeading kicker="Visit" title={<>Put Express<br /><em>on your route.</em></>} body="A real neighborhood address in Newington, Connecticut. Save the number, check the hours, and come by hungry." /><div className="visit-actions"><ActionLink href={mapsUrl} variant="dark" external>Get directions</ActionLink><a className="action-link outline-dark" href="tel:+18606658128">Call the shop <Phone size={16} /></a></div></div><div className="visit-panel"><div className="visit-panel-kicker"><MapPin size={18} /> Newington, CT</div><p className="address">82 Pane Rd<br />Newington, CT 06111</p><div className="visit-detail"><Clock3 size={17} /><div><strong>Hours</strong><span>Delivery 10:45 AM – 9:45 PM weekdays</span><span>Pickup until 10:00 PM weekdays</span></div></div><div className="visit-detail"><Utensils size={17} /><div><strong>Ordering</strong><span>Pickup and delivery available</span></div></div></div></div></section>

    <section className="cta-section"><div className="container cta-inner"><p className="eyebrow">Whenever the craving hits</p><h2>Make it an<br /><em>Express stop.</em></h2><ActionLink href="/order" variant="dark">Order online</ActionLink></div></section>
  </>;
}

export function MenuPage() {
  return <div className="page-wrap"><section className="page-hero dark-page-hero"><div className="container narrow"><p className="eyebrow eyebrow-light">Menu orientation</p><h1>A little bit of<br /><em>everything good.</em></h1><p className="page-lede">A structured preview of the public menu research. The live menu and prices will be published from an owner-approved source.</p><OwnerNote compact /></div></section><section className="section menu-section"><div className="container menu-layout"><div className="menu-intro"><p className="eyebrow">What we found</p><h2>Built for browsing,<br /><em>ready for confirmation.</em></h2><p>Public ordering sources show a generous menu across pizza, wings, grinders, dinners, family deals, desserts, and more. This layout is designed to become the fast, native menu layer once the current menu is locked.</p><ActionLink href="/order" variant="dark">See the current order menu</ActionLink></div><div className="menu-groups">{menuGroups.map((group, index) => <div className="menu-group" key={group.title}><div className="menu-group-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div><ul>{group.items.map((item) => <li key={item}><span>{item}</span><span className="menu-rule" /><span className="menu-status">category</span></li>)}</ul></div>)}<p className="menu-disclaimer">Categories are based on public research and are not a final menu or price list. Owner confirmation is required before launch.</p></div></div></section></div>;
}

export function OrderPage() {
  return <div className="page-wrap"><section className="page-hero dark-page-hero"><div className="container narrow"><p className="eyebrow eyebrow-light">A clear next step</p><h1>Order your way.<br /><em>Express is waiting.</em></h1><p className="page-lede">The current public direct-order destination is the candidate link below. It opens the existing ordering flow without creating a second checkout.</p><div className="order-card"><div><span className="order-card-label">Current public candidate</span><h2>Express Pizza &amp; Scoops</h2><p>External ordering link · owner confirmation pending</p></div><ActionLink href={orderUrl} variant="light" external>Open ordering</ActionLink></div><p className="small-note"><ExternalLink size={14} /> No payments are processed on this site.</p></div></section><section className="section cream-section order-explainer"><div className="container three-up"><div><span className="step-number">01</span><h3>Choose your menu</h3><p>Browse the current public ordering menu and available categories.</p></div><div><span className="step-number">02</span><h3>Choose pickup or delivery</h3><p>Availability and timing are handled by the ordering platform.</p></div><div><span className="step-number">03</span><h3>Come back hungry</h3><p>The owned site stays focused on discovery, trust, and an easy next step.</p></div></div></section></div>;
}

export function AboutPage() {
  return <div className="page-wrap"><section className="page-hero tomato-page-hero"><div className="container narrow"><p className="eyebrow">The story, done properly</p><h1>A real local place<br /><em>deserves a real voice.</em></h1><p className="page-lede">The future About page will use the owner-approved story of Express Pizza &amp; Scoops. Until then, this space stays honest instead of filling up with generic restaurant copy.</p></div></section><section className="section about-section"><div className="container about-grid"><div><p className="eyebrow">What belongs here</p><h2>Short, specific,<br /><em>and actually theirs.</em></h2></div><div className="about-list"><div><span>01</span><p>The current business identity and what “Pizza &amp; Scoops” means to the team.</p></div><div><span>02</span><p>A few honest details about the food, the people, or the neighborhood.</p></div><div><span>03</span><p>Approved photography that makes the place feel present before the first visit.</p></div></div></div></section></div>;
}

export function VisitPage() {
  return <div className="page-wrap"><section className="page-hero butter-page-hero"><div className="container narrow"><p className="eyebrow">Visit Express</p><h1>Put the address<br /><em>on your route.</em></h1><p className="page-lede">82 Pane Rd, Newington, CT 06111. Save the number, check the hours, and use the map for directions.</p><div className="visit-page-actions"><ActionLink href={mapsUrl} variant="dark" external>Get directions</ActionLink><a className="action-link outline-dark" href="tel:+18606658128">Call (860) 665-8128 <Phone size={16} /></a></div></div></section><section className="section visit-details-section"><div className="container visit-details-grid"><div className="map-placeholder"><div className="map-grid" /><MapPin size={36} /><span>82 Pane Rd<br />Newington, CT 06111</span><a href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a></div><div className="visit-detail-copy"><p className="eyebrow">Before you go</p><h2>The useful details,<br /><em>without the guesswork.</em></h2><div className="detail-row hours-detail"><Clock3 size={20} /><div><strong>Hours</strong><div className="hours-grid"><div><b>Delivery</b>{hours.delivery.map(([day, time]) => <p key={`delivery-${day}`}><span>{day}</span><span>{time}</span></p>)}</div><div><b>Pickup</b>{hours.pickup.map(([day, time]) => <p key={`pickup-${day}`}><span>{day}</span><span>{time}</span></p>)}</div></div></div></div><div className="detail-row"><Phone size={20} /><div><strong>Phone</strong><p><a href="tel:+18606658128">(860) 665-8128</a></p></div></div><div className="detail-row"><Utensils size={20} /><div><strong>Order ahead</strong><p>Use the current public ordering destination for pickup and delivery.</p></div></div><ActionLink href={orderUrl} variant="dark" external>Open ordering</ActionLink></div></div></section></div>;
}
