import { Link } from "wouter";
import { IMAGES, SITE } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">The story, done properly</p>
          <h1>
            A real local place <em className="g">deserves a real voice.</em>
          </h1>
          <p className="lead">
            Express Pizza & Scoops is a Newington stop for pies, wings, grinders, and ice cream. The
            longer story — why the name, who is behind the counter — belongs to the owner, not a template.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="photo-frame">
            <img src={IMAGES.interior} alt="Inside Express Pizza & Scoops" width={1400} height={1050} />
            <span className="photo-cap">Inside the stop</span>
          </div>
          <div>
            <p className="eyebrow">What belongs here</p>
            <h2 className="h-sec">
              Short, specific, <em>and actually theirs.</em>
            </h2>
            <div className="about-list">
              <div>
                <span>01</span>
                <p>The current business identity, and what “Pizza & Scoops” means to the team.</p>
              </div>
              <div>
                <span>02</span>
                <p>A few honest details about the food, the people, or the neighborhood around Pane Road.</p>
              </div>
              <div>
                <span>03</span>
                <p>Approved photography that makes the place feel present before the first visit.</p>
              </div>
            </div>
            <div className="hero-actions">
              <Link className="btn btn--primary" href="/visit">
                Plan a visit
              </Link>
              <a className="btn btn--ghost" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
