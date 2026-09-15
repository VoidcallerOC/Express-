import { ArrowDownRight, ArrowUpRight, Check, Clock3, ExternalLink, MapPin, Phone, Utensils } from "lucide-react";
import { Link } from "wouter";

const orderUrl = "https://www.orderbestpizza.com/";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=82+Pane+Rd+Newington+CT+06111";

const categories = [
  { name: "Pizza", note: "Classic and specialty pies" },
  { name: "Wings", note: "Buffalo and favorites" },
  { name: "Grinders", note: "Hot, cold, and parmigiana" },
  { name: "Dinners", note: "Comfort food for the table" },
  { name: "Family deals", note: "Built for sharing" },
  { name: "Desserts", note: "Sweet finish, including ice cream*" },
];

const menuGroups = [
  { title: "Start here", items: ["Family Deals", "Pickup Specials", "Lunch Specials"] },
  { title: "The main event", items: ["Pizza", "Specialty Pizza", "Buffalo Wings", "Chicken Tenders", "Calzones", "Stromboli"] },
  { title: "More to the table", items: ["Salads", "Breads", "Dinners", "Specialty Dinners", "Fried Dinners"] },
  { title: "Handhelds", items: ["Grinders", "Parmigiana Grinders", "Deluxe Sandwiches", "Wraps", "Pita Pockets", "Paninis"] },
  { title: "Round it out", items: ["Appetizers", "Quesadillas", "Kids Menu", "Desserts", "Beverages"] },
];

function ConfirmedDataNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "truth-notice compact" : "truth-notice"} role="note">
      <span className="truth-pip" aria-hidden="true" />
      <div>
        <strong>Client truth lock in progress</strong>
        <p>{compact ? "Menu details and hours will be published after owner confirmation." : "This concept uses public research only. Hours, menu details, brand assets, and the preferred ordering destination still require owner confirmation before launch."}</p>
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, body, light = false }: { kicker: string; title: string; body?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
    <p className="eyebrow">{kicker}</p>
    <h2>{title}</h2>
    {body && <p className="section-body">{body}</p>}
  </div>;
}

function AbstractFoodVisual({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? "food-visual food-visual-small" : "food-visual"} aria-label="Approved food photography placeholder">
      <div className="food-glow" />
      <div className="plate plate-back"><span className="plate-mark">PHOTO</span></div>
      <div className="plate plate-front"><span className="pizza-shape"><i /><i /><i /><i /><i /></span></div>
      <div className="scoop scoop-one" /><div className="scoop scoop-two" /><div className="scoop scoop-three" />
      <div className="visual-caption"><span>Photography slot</span><strong>Approved food imagery to come</strong></div>
    </div>
  );
}

function ActionLink({ href, children, variant = "dark", external = false }: { href: string; children: React.ReactNode; variant?: "dark" | "light" | "outline"; external?: boolean }) {
  const content = <>{children} <ArrowUpRight size={17} strokeWidth={2.2} /></>;
  if (external) return <a className={`action-link ${variant}`} href={href} target="_blank" rel="noreferrer">{content}</a>;
  return <Link className={`action-link ${variant}`} href={href}>{content}</Link>;
}

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light hero-kicker"><span className="eyebrow-rule" /> Newington, Connecticut</p>
          <h1>Pizza for the table.<br /><em>Scoops for the road.</em></h1>
          <p className="hero-lede">A warm, quick neighborhood stop for the things that make a meal feel like a meal.</p>
          <div className="hero-actions">
            <ActionLink href="/order" variant="light">Order online</ActionLink>
            <ActionLink href="/menu" variant="outline">See the menu</ActionLink>
          </div>
          <p className="hero-trust"><Check size={15} /> 82 Pane Rd · (860) 665-8128</p>
        </div>
        <div className="hero-visual-wrap"><AbstractFoodVisual /></div>
      </div>
      <div className="hero-bottom container"><span>Scroll to explore</span><ArrowDownRight size={18} /></div>
    </section>

    <section className="section cream-section intro-section">
      <div className="container intro-grid">
        <SectionHeading kicker="Made for the moment" title="The good kind of hungry starts here." body="Express Pizza & Scoops is a local Newington address with a broad menu built around the foods people actually want to share, carry out, and come back for." />
        <div className="intro-side"><ConfirmedDataNotice /><p className="micro-copy">The final site will replace this research-stage language with the owner-approved story, menu, hours, imagery, and ordering path.</p></div>
      </div>
    </section>

    <section className="section categories-section">
      <div className="container">
        <div className="split-heading"><SectionHeading kicker="Find your favorite" title="Something for every kind of craving." /><Link href="/menu" className="text-link">Browse all categories <ArrowUpRight size={16} /></Link></div>
        <div className="category-grid">
          {categories.map((category, index) => <Link className="category-card" href="/menu" key={category.name}><span className="category-number">0{index + 1}</span><h3>{category.name}{category.name === "Desserts" && <sup>*</sup>}</h3><p>{category.note}</p><ArrowUpRight className="category-arrow" size={19} /></Link>)}
        </div>
        <p className="footnote">* Public menu research indicates ice cream/scoops, pending owner confirmation.</p>
      </div>
    </section>

    <section className="section dark-section story-section">
      <div className="container story-grid">
        <div className="story-visual"><AbstractFoodVisual small /></div>
        <div className="story-copy"><p className="eyebrow eyebrow-light">A front door, not a checkout</p><h2>Come for the menu.<br /><em>Stay for the feeling.</em></h2><p>When the details are confirmed, this is where Express can tell its real story: the food, the people, the neighborhood, and the little reasons regulars return.</p><ActionLink href="/about" variant="light">About Express</ActionLink></div>
      </div>
    </section>

    <section className="section visit-section">
      <div className="container visit-grid">
        <div><SectionHeading kicker="Come by" title="Easy to find. Easy to call." body="Use the details below to plan a visit or start an order. Weekly hours will be published once the owner confirms the current schedule." /><div className="visit-actions"><ActionLink href={mapsUrl} variant="dark" external>Get directions</ActionLink><a className="action-link outline-dark" href="tel:+18606658128">Call (860) 665-8128 <Phone size={16} /></a></div></div>
        <div className="visit-card"><div className="visit-card-top"><MapPin size={20} /><span>Newington, CT</span></div><p className="address">82 Pane Rd<br />Newington, CT 06111</p><div className="visit-detail"><Clock3 size={17} /><div><strong>Hours</strong><span>To be confirmed by owner</span></div></div><div className="visit-detail"><Utensils size={17} /><div><strong>Ordering</strong><span>Pickup and delivery options under review</span></div></div></div>
      </div>
    </section>

    <section className="section cta-section"><div className="container cta-inner"><p className="eyebrow">When you know what you want</p><h2>Skip the searching.<br /><em>Start with Express.</em></h2><ActionLink href="/order" variant="dark">Order online</ActionLink></div></section>
  </>;
}

export function MenuPage() {
  return <div className="page-wrap"><section className="page-hero cream-section"><div className="container narrow"><p className="eyebrow">Menu orientation</p><h1>A little bit of<br /><em>everything good.</em></h1><p className="page-lede">A structured preview of the public menu research. The live menu and prices will be published from an owner-approved source.</p><ConfirmedDataNotice compact /></div></section><section className="section menu-section"><div className="container menu-layout"><div className="menu-intro"><p className="eyebrow">What we found</p><h2>Built for browsing,<br /><em>ready for confirmation.</em></h2><p>Public ordering sources show a generous menu across pizza, wings, grinders, dinners, family deals, desserts, and more. This layout is designed to become the fast, native menu layer once the current menu is locked.</p><ActionLink href="/order" variant="dark">See the full order menu</ActionLink></div><div className="menu-groups">{menuGroups.map((group) => <div className="menu-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}><span>{item}</span><span className="menu-rule" /><span className="menu-status">verified category</span></li>)}</ul></div>)}<p className="menu-disclaimer">No prices are displayed here because public platforms show channel-specific differences. Confirmed pricing belongs in the final menu source.</p></div></div></section></div>;
}

export function OrderPage() {
  return <div className="page-wrap"><section className="page-hero dark-page-hero"><div className="container narrow"><p className="eyebrow eyebrow-light">Keep the platforms that work</p><h1>Order your way.<br /><em>Express is waiting.</em></h1><p className="page-lede">The current public direct-order destination is powered by Slice. It opens the menu, pickup, and delivery flow in the existing ordering system.</p><div className="order-card"><div><span className="order-card-label">Current public destination</span><h2>Express Pizza & Scoops</h2><p>External ordering link · client confirmation pending</p></div><ActionLink href={orderUrl} variant="light" external>Open ordering</ActionLink></div><p className="small-note"><ExternalLink size={14} /> This concept does not process payments or create a second checkout.</p></div></section><section className="section cream-section order-explainer"><div className="container three-up"><div><span className="step-number">01</span><h3>Choose your menu</h3><p>Browse the current public ordering menu and available categories.</p></div><div><span className="step-number">02</span><h3>Choose pickup or delivery</h3><p>Availability and timing are handled by the ordering platform.</p></div><div><span className="step-number">03</span><h3>Come back hungry</h3><p>The owned site stays focused on discovery, trust, and an easy next step.</p></div></div></section></div>;
}

export function AboutPage() {
  return <div className="page-wrap"><section className="page-hero tomato-page-hero"><div className="container narrow"><p className="eyebrow eyebrow-light">The story, done properly</p><h1>A real local place<br /><em>deserves a real voice.</em></h1><p className="page-lede">The future About page will use the owner-approved story of Express Pizza & Scoops. Until then, we are leaving room for the truth instead of filling it with generic restaurant copy.</p></div></section><section className="section about-section"><div className="container about-grid"><div><p className="eyebrow">What belongs here</p><h2>Short, specific,<br /><em>and actually theirs.</em></h2></div><div className="about-list"><div><span>01</span><p>The current business identity and what “Pizza & Scoops” means to the team.</p></div><div><span>02</span><p>A few honest details about the food, the people, or the neighborhood.</p></div><div><span>03</span><p>Approved photography that makes the place feel present before the first visit.</p></div></div></div></section></div>;
}

export function VisitPage() {
  return <div className="page-wrap"><section className="page-hero butter-page-hero"><div className="container narrow"><p className="eyebrow">Visit Express</p><h1>Put the address<br /><em>on your route.</em></h1><p className="page-lede">82 Pane Rd, Newington, CT 06111. Save the number, check the current hours, and use the map for directions.</p><div className="visit-page-actions"><ActionLink href={mapsUrl} variant="dark" external>Get directions</ActionLink><a className="action-link outline-dark" href="tel:+18606658128">Call (860) 665-8128 <Phone size={16} /></a></div></div></section><section className="section visit-details-section"><div className="container visit-details-grid"><div className="map-placeholder"><div className="map-grid" /><MapPin size={36} /><span>82 Pane Rd<br />Newington, CT 06111</span><a href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a></div><div className="visit-detail-copy"><p className="eyebrow">Before you go</p><h2>The useful details,<br /><em>without the guesswork.</em></h2><div className="detail-row"><Clock3 size={20} /><div><strong>Hours</strong><p>Current weekly hours require owner confirmation before launch.</p></div></div><div className="detail-row"><Phone size={20} /><div><strong>Phone</strong><p><a href="tel:+18606658128">(860) 665-8128</a></p></div></div><div className="detail-row"><Utensils size={20} /><div><strong>Order ahead</strong><p>Use the current public ordering destination while the final site is being confirmed.</p></div></div><ActionLink href={orderUrl} variant="dark" external>Open ordering</ActionLink></div></div></section></div>;
}
