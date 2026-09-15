import { Link } from "wouter";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>
          That page is <em className="g">off the menu.</em>
        </h1>
        <p className="lead">The slice you wanted is not here. Head home, or go straight to the order button.</p>
        <div className="hero-actions">
          <Link className="btn btn--primary" href="/">
            Back to Express
          </Link>
          <Link className="btn btn--ghost" href="/menu">
            View the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
