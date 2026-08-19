// ─────────────────────────────────────────────────────────────
// SITE CONTENT — everything text/data-driven lives here.
// Pulled from the real Instagram bio + photos (momentsrestocafe).
// Menu item names are drawn from real dish photos/captions; prices
// were not visible on Instagram, so they're left blank — fill in
// real prices in the `price` fields below.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "Moments",
  fullName: "Moments Resto Café & Lounge",
  tagline: "Where time pauses and memories stay",
  eyebrow: "Resto Café & Lounge",
  description:
    "Coffee, breakfast and lunch by day on Floors 1 and 2 — then a rooftop lounge by night, with grills, Afro-fusion plates and cocktails.",
  address: "Floors 1 & 2, Mobil Service Station, along Summit Road, Asaba, Nigeria",
  phone: "0812 405 7223",
  email: "",
  instagram: "https://www.instagram.com/momentsrestocafe",
  hours: [
    { day: "Café · Mon – Sun", time: "7:45am – 11pm" },
    { day: "Rooftop · Wed – Sun", time: "4pm – late" },
  ],
};

export const navLinks = [
  { href: "/#story", label: "Story" },
  { href: "/menu", label: "Menu" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Reserve" },
];

export const menuHighlights = [
  {
    name: "Chilli Crispy Chicken",
    desc: "Crispy fried chicken tossed in a chilli glaze, sesame and coriander, served with fries.",
    price: "",
  },
  {
    name: "The Biggie Burger",
    desc: "Loaded burger with cheddar, house sauce, fries and slaw on the side.",
    price: "",
  },
  {
    name: "Moments Special Fried Rice",
    desc: "The house fried rice — a Savories menu signature.",
    price: "",
  },
  {
    name: "Grilled Suya Skewers",
    desc: "Charred skewers with jollof-style rice, salsa and fresh lime.",
    price: "",
  },
];

export const fullMenu = [
  {
    category: "Restocafé & Breakfast",
    items: [
      { name: "Coffee", desc: "From the café side — ask about today's brew.", price: "" },
      { name: "Breakfast plate", desc: "Café breakfast, served from 7:45am.", price: "" },
    ],
  },
  {
    category: "Grill",
    items: [
      { name: "Chicken Alfredo Pasta", desc: "Creamy garlic pasta topped with grilled chicken breast.", price: "" },
      { name: "Grilled Chicken Wings & Fries", desc: "Sesame-glazed wings with a side of fries and ketchup.", price: "" },
      { name: "Grilled Chicken Drumsticks", desc: "Served with coleslaw, plantain chips and pepper sauce.", price: "" },
      { name: "T-Bone Steak", desc: "Grilled steak with mixed vegetables, fries and house sauces.", price: "" },
      { name: "BBQ Ribs Platter", desc: "Ribs with lime, mixed salad, plantain chips and dips.", price: "" },
    ],
  },
  {
    category: "Afro Fusion",
    items: [
      { name: "Suya Skewer & Rice", desc: "Grilled skewers over jollof-style rice with salsa.", price: "" },
      { name: "Grilled Chicken & Fried Plantain", desc: "Grilled chicken with fried plantain and fresh vegetables.", price: "" },
      { name: "Moments Special Fried Rice", desc: "The house special, Savories menu.", price: "" },
    ],
  },
  {
    category: "Savories",
    items: [
      { name: "Chilli Crispy Chicken", desc: "Crispy chicken in chilli glaze with fries.", price: "" },
      { name: "The Biggie Burger", desc: "Loaded burger, cheddar, house sauce, fries and slaw.", price: "" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Johnnie Walker Cocktails", desc: "Signature whisky cocktails, served over ice.", price: "" },
      { name: "House Cocktails", desc: "Rotating list — ask your server what's pouring.", price: "" },
    ],
  },
];

export const testimonials = [
  { quote: "Placeholder guest review — swap in a real quote from Instagram or Google.", author: "Guest, Google review" },
  { quote: "Placeholder guest review — swap in a real quote from Instagram or Google.", author: "Guest, Instagram" },
  { quote: "Placeholder guest review — swap in a real quote from Instagram or Google.", author: "Guest, Google review" },
];

export const galleryImages = [
  { src: "/images/gallery-pasta.jpg", alt: "Chicken Alfredo pasta" },
  { src: "/images/gallery-wings.jpg", alt: "Grilled chicken wings and fries" },
  { src: "/images/gallery-ribs.jpg", alt: "BBQ ribs platter" },
  { src: "/images/gallery-suya-rice.jpg", alt: "Suya skewer and rice" },
  { src: "/images/gallery-steak.jpg", alt: "T-bone steak platter" },
  { src: "/images/gallery-drumsticks.jpg", alt: "Grilled chicken drumsticks" },
  { src: "/images/gallery-grilled-plantain.jpg", alt: "Grilled chicken and fried plantain" },
  { src: "/images/gallery-fried-rice.jpg", alt: "Moments special fried rice" },
  { src: "/images/gallery-chilli-chicken.jpg", alt: "Chilli crispy chicken" },
  { src: "/images/gallery-biggie-burger.jpg", alt: "The Biggie Burger" },
  { src: "/images/gallery-cocktails-1.jpg", alt: "Johnnie Walker cocktails" },
  { src: "/images/gallery-cocktails-2.jpg", alt: "House cocktails" },
];
