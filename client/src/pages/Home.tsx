import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Marquee, OpenBadge } from "@/components/SiteChrome";
import { FLOOR, HOURS, IMAGES, PILLARS, SITE } from "@/lib/site";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Newington",
      addressRegion: "CT",
      postalCode: "06111",
    },
    telephone: SITE.phone,
    servesCuisine: ["Pizza", "Ice Cream", "American"],
    url: "https://www.expresspizzascoops.com/",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img className="hero-photo" src={IMAGES.hero} alt="" width={1800} height={1012} />
          <div className="hero-shade" />
        </div>
        <div className="wrap hero-copy">
          <OpenBadge />
          <h1 className="wordmark">
            <span className="top">Newington, CT</span>
            <span className="name">
              Expr<span className="accent">e</span>ss
            </span>
          </h1>
          <p className="hero-tag">
            Pizza <span className="sep">◆</span> Scoops <span className="sep">◆</span> Neighborhood stop
          </p>
          <p className="hero-lead">
            Fresh pies, local favorites, and a cold scoop after. The page you check from the parking lot —
            hours, the floor, and a way in the door.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href={SITE.orderUrl} target="_blank" rel="noreferrer">
              Order online <ArrowUpRight size={16} />
            </a>
            <Link className="btn btn--ghost" href="/menu">
              View the menu
            </Link>
            <a className="btn btn--ghost" href={SITE.phoneHref}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
        <div className="scroll-cue">
          The floor
          <span className="bar" />
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            What we serve
          </p>
          <h2 className="h-sec" data-reveal data-reveal-delay="1">
            The good stuff, <em>close to home.</em>
          </h2>
          <p className="lead" data-reveal data-reveal-delay="2">
            A broad neighborhood menu for the quick stop, the family table, and the sweet finish after.
          </p>
          <div className="pillars">
            {PILLARS.map((pillar, index) => (
              <article className="pillar" data-reveal data-reveal-delay={String(index + 1)} key={pillar.num}>
                <span className="num">{pillar.num}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-band">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">On the floor</p>
              <h2 className="h-sec">
                Bring an appetite. <em>We’ll handle the rest.</em>
              </h2>
            </div>
            <Link className="btn btn--ghost" href="/menu">
              See all categories <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="floor">
            {FLOOR.map((item) => (
              <article className="cat" key={item.title}>
                <span className="tag">{item.tag}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="photo-frame">
            <img src={IMAGES.wings} alt="Buffalo wings and pizza from Express" width={1400} height={1050} />
            <span className="photo-cap">Wings · a table favorite</span>
          </div>
          <div>
            <p className="eyebrow">The Express stop</p>
            <h2 className="h-sec">
              Pizza night. <em>Then scoops.</em>
            </h2>
            <p className="lead">
              This is the Newington shop people already call when they want a pie, a grinder, and something
              cold. The owned page holds the hours, the floor, and the order button — platforms still run
              checkout.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--primary" href="/about">
                About Express
              </Link>
              <Link className="btn btn--ghost" href="/visit">
                Hours & door
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-band">
        <div className="wrap">
          <p className="eyebrow">Visit</p>
          <h2 className="h-sec">
            Put Express <em>on your route.</em>
          </h2>
          <p className="lead">82 Pane Rd, Newington. Save the number, check the hours, come by hungry.</p>
          <div className="visit-card">
            <div>
              <p className="eyebrow">Newington, CT</p>
              <p className="address">
                {SITE.address}
                <br />
                {SITE.cityLine}
              </p>
              <div className="hero-actions">
                <a className="btn btn--primary" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                  Get directions <ArrowUpRight size={16} />
                </a>
                <a className="btn btn--ghost" href={SITE.phoneHref}>
                  {SITE.phone}
                </a>
              </div>
            </div>
            <div className="hours-grid">
              <div className="hours-col">
                <b>Pickup</b>
                {HOURS.pickup.map(([day, time]) => (
                  <p key={`p-${day}`}>
                    <span>{day.slice(0, 3)}</span>
                    <span>{time}</span>
                  </p>
                ))}
              </div>
              <div className="hours-col">
                <b>Delivery</b>
                {HOURS.delivery.map(([day, time]) => (
                  <p key={`d-${day}`}>
                    <span>{day.slice(0, 3)}</span>
                    <span>{time}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Scoops</p>
            <h2 className="h-sec">
              The name is <em>not a joke.</em>
            </h2>
            <p className="lead">
              Ice cream sits next to the pizza on purpose. Flavors and serving sizes lock with the owner —
              the idea is already in the door.
            </p>
            <Link className="btn btn--primary" href="/menu">
              See desserts & scoops
            </Link>
          </div>
          <div className="photo-frame">
            <img src={IMAGES.scoops} alt="Ice cream scoops at Express" width={1400} height={1050} />
            <span className="photo-cap">Scoops · after the pie</span>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="wrap">
          <p className="eyebrow">Whenever the craving hits</p>
          <h2 className="h-sec">
            Make it an <em>Express stop.</em>
          </h2>
          <div className="hero-actions">
            <a className="btn btn--primary" href={SITE.orderUrl} target="_blank" rel="noreferrer">
              Order online <ArrowUpRight size={16} />
            </a>
            <Link className="btn btn--ghost" href="/visit">
              Visit the shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
