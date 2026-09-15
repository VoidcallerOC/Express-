export const SITE = {
  name: "Express Pizza & Scoops",
  short: "Express",
  tag: "Pizza & Scoops",
  city: "Newington, Connecticut",
  address: "82 Pane Rd",
  cityLine: "Newington, CT 06111",
  fullAddress: "82 Pane Rd, Newington, CT 06111",
  phone: "(860) 665-8128",
  phoneHref: "tel:+18606658128",
  orderUrl: "https://www.orderbestpizza.com/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=82+Pane+Rd+Newington+CT+06111",
  forgeUrl: "https://www.forge-ct.com/",
} as const;

export const NAV = [
  { href: "/menu" as const, label: "Menu" },
  { href: "/order" as const, label: "Order" },
  { href: "/about" as const, label: "About" },
  { href: "/visit" as const, label: "Visit" },
];

export const MARQUEE = [
  "Pizza",
  "Wings",
  "Grinders",
  "Calzones",
  "Stromboli",
  "Dinners",
  "Scoops",
  "Family deals",
  "Salads",
  "Wraps",
  "Kids menu",
  "Desserts",
];

export const PILLARS = [
  {
    num: "01",
    title: "Pizza worth sharing",
    body: "Classic and specialty pies, built for the middle of the table — and the ride home.",
  },
  {
    num: "02",
    title: "More than a slice",
    body: "Wings, grinders, dinners, and the comfort-food stop people already know by heart.",
  },
  {
    num: "03",
    title: "Save room for scoops",
    body: "Ice cream is part of the Express name. A pizza night that ends cold and sweet.",
  },
];

export const FLOOR = [
  { tag: "Pies", title: "Pizza", body: "Cheese, specialty, gluten-free, and build-your-own." },
  { tag: "Hot", title: "Wings & tenders", body: "Buffalo wings and chicken tenders for the table." },
  { tag: "Handhelds", title: "Grinders", body: "Hot, cold, and parmigiana — the Newington classic." },
  { tag: "Folded", title: "Calzones & stromboli", body: "When a slice is not quite enough." },
  { tag: "Plates", title: "Dinners", body: "Specialty, fried, and chef plates beyond pizza." },
  { tag: "Cold", title: "Scoops", body: "Ice cream and desserts after the pie." },
];

export const MENU_GROUPS = [
  { title: "Start here", items: ["Family Deals", "Pickup Specials", "Lunch Specials"] },
  {
    title: "The main event",
    items: ["Pizza", "Specialty Pizza", "Buffalo Wings", "Chicken Tenders", "Calzones", "Stromboli"],
  },
  {
    title: "More to the table",
    items: ["Salads", "Breads", "Dinners", "Specialty Dinners", "Fried Dinners"],
  },
  {
    title: "Handhelds",
    items: ["Grinders", "Parmigiana Grinders", "Deluxe Sandwiches", "Wraps", "Pita Pockets", "Paninis"],
  },
  {
    title: "Round it out",
    items: ["Appetizers", "Quesadillas", "Kids Menu", "Desserts", "Beverages", "Scoops"],
  },
];

export const HOURS = {
  pickup: [
    ["Monday", "10:45 AM – 10:00 PM"],
    ["Tuesday", "10:45 AM – 10:00 PM"],
    ["Wednesday", "10:45 AM – 10:00 PM"],
    ["Thursday", "10:45 AM – 11:00 PM"],
    ["Friday", "10:30 AM – 11:00 PM"],
    ["Saturday", "10:45 AM – 11:00 PM"],
    ["Sunday", "10:45 AM – 9:00 PM"],
  ],
  delivery: [
    ["Monday", "10:45 AM – 9:45 PM"],
    ["Tuesday", "10:45 AM – 9:45 PM"],
    ["Wednesday", "10:45 AM – 9:45 PM"],
    ["Thursday", "10:45 AM – 9:45 PM"],
    ["Friday", "10:30 AM – 10:45 PM"],
    ["Saturday", "10:45 AM – 10:45 PM"],
    ["Sunday", "10:45 AM – 8:45 PM"],
  ],
} as const;

const PICKUP_RANGE: Record<number, [number, number]> = {
  0: [10 * 60 + 45, 21 * 60],
  1: [10 * 60 + 45, 22 * 60],
  2: [10 * 60 + 45, 22 * 60],
  3: [10 * 60 + 45, 22 * 60],
  4: [10 * 60 + 45, 23 * 60],
  5: [10 * 60 + 30, 23 * 60],
  6: [10 * 60 + 45, 23 * 60],
};

export function isOpenAt(date: Date): boolean {
  const range = PICKUP_RANGE[date.getDay()];
  if (!range) return false;
  const minutes = date.getHours() * 60 + date.getMinutes();
  return minutes >= range[0] && minutes < range[1];
}

export function todayPickupLabel(date: Date): string {
  return HOURS.pickup[date.getDay() === 0 ? 6 : date.getDay() - 1][1];
}

export const IMAGES = {
  hero: "/images/hero-pizza.jpg",
  heroPortrait: "/images/hero-pizza-portrait.jpg",
  interior: "/images/interior.jpg",
  scoops: "/images/scoops.jpg",
  wings: "/images/wings.jpg",
} as const;
