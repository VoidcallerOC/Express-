import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { isOpenAt, MARQUEE, NAV, SITE, todayPickupLabel } from "@/lib/site";

export function useReveal(dep?: string) {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const nodes = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    nodes.forEach((node) => io.observe(node));
    const fallback = window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add("in"));
    }, 900);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [dep]);
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const [pathname] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useReveal(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Link href="/" className="brand" aria-label={`${SITE.name} home`}>
          <img src="/mark.svg" alt="" width={40} height={40} />
          <span>
            <span className="brand-name">
              Expr<b>e</b>ss
            </span>
            <span className="brand-tag">{SITE.tag}</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn--primary" href={SITE.orderUrl} target="_blank" rel="noreferrer">
            Order online <ArrowUpRight size={16} strokeWidth={2.4} />
          </a>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <div
        id="mobile-navigation"
        className="nav-drawer"
        hidden={!open}
        onClick={() => setOpen(false)}
      >
        <nav className="nav-drawer-panel" aria-label="Mobile" onClick={(e) => e.stopPropagation()}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <a className="btn btn--primary mt-4 w-full" href={SITE.orderUrl} target="_blank" rel="noreferrer">
            Order online <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="wrap footer-top">
          <div>
            <p className="eyebrow">Express Pizza & Scoops</p>
            <p className="footer-title">Good food should be easy to find.</p>
          </div>
          <a className="btn btn--primary" href={SITE.orderUrl} target="_blank" rel="noreferrer">
            Order online <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="wrap footer-grid">
          <div>
            <div className="brand-name">
              Expr<b>e</b>ss
            </div>
            <p className="brand-tag">{SITE.tag}</p>
            <p className="mt-4 max-w-xs text-muted">A neighborhood stop in Newington, Connecticut.</p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <a className="footer-link" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            <a className="footer-link" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              {SITE.address}
              <br />
              {SITE.cityLine}
            </a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>Hours from current ordering platforms, pending owner lock.</span>
          <a href={SITE.forgeUrl} target="_blank" rel="noreferrer">
            Website by Forge-CT <ArrowUpRight size={13} className="inline" />
          </a>
        </div>
      </footer>

      <nav className="dock" aria-label="Quick actions">
        <a href={SITE.phoneHref}>Call</a>
        <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
          Map
        </a>
        <a className="dock-order" href={SITE.orderUrl} target="_blank" rel="noreferrer">
          Order
        </a>
      </nav>
    </div>
  );
}

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function OpenBadge() {
  const [open, setOpen] = useState(() => isOpenAt(new Date()));
  const [label, setLabel] = useState(() => {
    const now = new Date();
    const until = todayPickupLabel(now).split("–")[1]?.trim();
    return isOpenAt(now) ? `Open · pickup until ${until}` : "Currently closed · see hours";
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const until = todayPickupLabel(now).split("–")[1]?.trim();
      const isOpen = isOpenAt(now);
      setOpen(isOpen);
      setLabel(isOpen ? `Open · pickup until ${until}` : "Currently closed · see hours");
    };
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={`hero-badge ${open ? "" : "is-closed"}`}>
      <span className="dot" />
      {label}
    </span>
  );
}
