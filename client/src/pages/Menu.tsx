import { ArrowUpRight } from "lucide-react";
import { MENU_GROUPS, SITE } from "@/lib/site";

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Menu orientation</p>
          <h1>
            A little bit of <em className="g">everything good.</em>
          </h1>
          <p className="lead">
            A structured look at the public menu. Live items and prices publish from an owner-approved
            source — this page is the map, not a second checkout.
          </p>
        </div>
      </section>
      <section className="section alt-band">
        <div className="wrap menu-layout">
          <div>
            <p className="eyebrow">What we found</p>
            <h2 className="h-sec">
              Built for browsing, <em>ready to lock.</em>
            </h2>
            <p className="lead">
              Pizza, wings, grinders, dinners, family deals, desserts, and scoops. Order through the current
              public destination until the owned menu is confirmed.
            </p>
            <a className="btn btn--primary mt-8" href={SITE.orderUrl} target="_blank" rel="noreferrer">
              Open the order menu <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="menu-groups">
            {MENU_GROUPS.map((group, index) => (
              <div className="menu-group" key={group.title}>
                <div className="menu-group-heading">
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                      <span className="menu-rule" />
                      <span className="menu-status">category</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="note">
              Categories come from public ordering sources. They are not a final price list. Owner
              confirmation is required before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
