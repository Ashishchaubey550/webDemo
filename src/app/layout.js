import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://navkartools.com"),
  title: "Navkar Tools & Machineries | Heavy Industrial Equipment & Contractor Tools",
  description:
    "Navkar Tools & Machineries - Raipur's premier industrial stockist. Authorized distributor for DCA magnetic core drills, JAIN inverter welders, KOBMAX grinders, DCX commercial car washers, SWASTIK chainsaws, MAF PRO tools, and PowerTech generators. Station Road, Raipur, Chhattisgarh.",
  keywords: [
    "Navkar Tools & Machineries",
    "Industrial Tools Raipur",
    "DCA Magnetic Drill Raipur",
    "JAIN Inverter Welding Machine",
    "KOBMAX Angle Grinder 850W",
    "DCX PW-550 Car Washer",
    "SWASTIK Chainsaw Raipur",
    "PowerTech Generator Chhattisgarh",
    "Heavy Industrial Machinery Raipur",
    "Station Road Raipur Tools Shop",
  ],
  authors: [{ name: "Navkar Tools & Machineries" }],
  openGraph: {
    title: "Navkar Tools & Machineries | Industrial Precision & Heavy Equipment",
    description:
      "Premier distributor of industrial power tools, inverter welding machines, magnetic drills, and commercial equipment in Raipur, Chhattisgarh.",
    url: "https://navkartools.com",
    siteName: "Navkar Tools & Machineries",
    images: [
      {
        url: "/assets/images/hero-industrial.jpg",
        width: 1200,
        height: 630,
        alt: "Navkar Tools Showroom & Industrial Equipment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="Raipur" />
      </head>
      <body>{children}</body>
    </html>
  );
}
