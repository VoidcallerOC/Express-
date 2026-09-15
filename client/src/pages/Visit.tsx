import { ArrowUpRight, Clock3, MapPin, Phone, Utensils } from "lucide-react";
import { HOURS, SITE } from "@/lib/site";

export default function VisitPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Visit Express</p>
          <h1>
            Put the address <em className="g">on your route.</em>
          </h1>
          <p className="lead">
            {SITE.fullAddress}. Save the number, check the hours, and use the map from the parking lot.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              Get directions <ArrowUpRight size={16} />
            </a>
            <a className="btn btn--ghost" href={SITE.phoneHref}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
      <section className="section alt-band">
        <div className="wrap split">
          <div className="map-block">
            <MapPin size={36} color="var(--color-primary)" />
            <p className="address mt-4">
              {SITE.address}
              <br />
              {SITE.cityLine}
            </p>
            <a className="btn btn--ghost mt-6" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps <ArrowUpRight size={15} />
            </a>
          </div>
          <div>
            <p className="eyebrow">Before you go</p>
            <h2 className="h-sec">
              The useful details, <em>without the guesswork.</em>
            </h2>
            <div className="about-list">
              <div>
                <span>
                  <Clock3 size={18} />
                </span>
                <p>Pickup and delivery hours from current ordering platforms, listed below.</p>
              </div>
              <div>
                <span>
                  <Phone size={18} />
                </span>
                <p>
                  <a href={SITE.phoneHref}>{SITE.phone}</a> — the number on the door.
                </p>
              </div>
              <div>
                <span>
                  <Utensils size={18} />
                </span>
                <p>Order ahead for pickup or delivery, or walk in when the lights are on.</p>
              </div>
            </div>
            <div className="hours-grid mt-8">
              <div className="hours-col">
                <b>Pickup</b>
                {HOURS.pickup.map(([day, time]) => (
                  <p key={`p-${day}`}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </p>
                ))}
              </div>
              <div className="hours-col">
                <b>Delivery</b>
                {HOURS.delivery.map(([day, time]) => (
                  <p key={`d-${day}`}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </p>
                ))}
              </div>
            </div>
            <p className="note">
              Hours are published from public ordering sources and should be confirmed by the owner before
              this page is treated as canonical.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
