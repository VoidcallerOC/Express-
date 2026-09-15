import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function OrderPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">A clear next step</p>
          <h1>
            Order your way. <em className="g">Express is waiting.</em>
          </h1>
          <p className="lead">
            Checkout stays on the current public ordering destination. This site does not take payment — it
            gets you there without a second hunt.
          </p>
          <div className="order-card">
            <div>
              <p className="eyebrow">Current public candidate</p>
              <h2>{SITE.name}</h2>
              <p className="lead">External ordering · pickup and delivery</p>
            </div>
            <a className="btn btn--primary" href={SITE.orderUrl} target="_blank" rel="noreferrer">
              Open ordering <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section alt-band">
        <div className="wrap three-up">
          <div>
            <p className="eyebrow">01</p>
            <h3>Choose the menu</h3>
            <p>Browse the current public ordering menu and available categories.</p>
          </div>
          <div>
            <p className="eyebrow">02</p>
            <h3>Pickup or delivery</h3>
            <p>Availability and timing are handled by the ordering platform.</p>
          </div>
          <div>
            <p className="eyebrow">03</p>
            <h3>Come back hungry</h3>
            <p>This page stays the owned home: hours, the floor, and an easy next step.</p>
          </div>
        </div>
      </section>
    </>
  );
}
