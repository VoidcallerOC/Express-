import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import Home, { AboutPage, MenuPage, OrderPage, VisitPage } from "./pages/Home";
import NotFound from "./pages/NotFound";

type ShellProps = { children: React.ReactNode };

const navigation = [
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order online" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

function Shell({ children }: ShellProps) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="preview-strip">
        <span>Preview build</span>
        <span className="preview-dot" aria-hidden="true" />
        <span>Menu, hours, brand assets, and ordering destination awaiting owner confirmation</span>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="wordmark" onClick={() => setOpen(false)} aria-label="Express Pizza and Scoops home">
            <span className="wordmark-express">Express</span>
            <span className="wordmark-sub">Pizza <i>&</i> Scoops</span>
          </Link>
          <nav className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={location === item.href ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/order" className="header-order" onClick={() => setOpen(false)}>
            Order online <ArrowUpRight size={16} strokeWidth={2.4} />
          </Link>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
            <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
            {open ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "mobile-link active" : "mobile-link"} onClick={() => setOpen(false)}>
              {item.label}<ArrowUpRight size={17} />
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-top container">
          <div>
            <p className="eyebrow eyebrow-light">The neighborhood front door</p>
            <p className="footer-title">Good food should be easy to find.</p>
          </div>
          <Link href="/order" className="footer-cta">Order online <ArrowUpRight size={17} /></Link>
        </div>
        <div className="footer-grid container">
          <div className="footer-brand">
            <div className="footer-wordmark">Express <span>Pizza & Scoops</span></div>
            <p>A provisional front door for a local restaurant in Newington, Connecticut.</p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            {navigation.map((item) => <Link key={item.href} href={item.href} className="footer-link">{item.label}</Link>)}
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <a className="footer-link" href="tel:+18606658128">(860) 665-8128</a>
            <a className="footer-link" href="https://www.google.com/maps/search/?api=1&query=82+Pane+Rd+Newington+CT+06111" target="_blank" rel="noreferrer">82 Pane Rd<br />Newington, CT 06111</a>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© 2026 Express Pizza & Scoops</span>
          <span className="truth-note">Information marked for confirmation is not production-ready.</span>
          <a href="https://forge-ct.com" target="_blank" rel="noreferrer">Website by Forge-CT <ArrowUpRight size={13} /></a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Shell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/visit" component={VisitPage} />
        <Route component={NotFound} />
      </Switch>
    </Shell>
  );
}

export default App;
