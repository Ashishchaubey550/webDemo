"use client";

import React from "react";
import { COMPANY_INFO } from "../data/products";

export default function BrandMarquee() {
  const brands = [
    { name: "DCA", tag: "Power Tools & Magnetic Drills" },
    { name: "ESAB", tag: "Heavy Welding & Plasma" },
    { name: "KOBMAX", tag: "High-RPM Angle Grinders" },
    { name: "MAF PRO", tag: "Demolition & Extractor Tools" },
    { name: "SWASTIK-G", tag: "Forestry & Chainsaws" },
    { name: "JAIN", tag: "IGBT Inverter Arc Welders" },
    { name: "DCX", tag: "Trolley Pressure Washers" },
    { name: "PowerTech", tag: "Commercial Generators" },
    { name: "XTRA-POWER", tag: "Flexible GC Abrasive Wheels" },
    { name: "TITAN", tag: "Industrial Screw Compressors" }
  ];

  return (
    <div className="brand-strip" aria-label="Authorized Industrial Brands">
      <div className="brand-strip-inner">
        {/* Double array for seamless infinite loop */}
        {[...brands, ...brands, ...brands].map((b, idx) => (
          <div key={idx} className="brand-pill">
            <span style={{ color: "var(--primary)", fontSize: "0.85rem" }}>✦</span>
            <span style={{ color: "var(--text-white)", fontWeight: 800 }}>{b.name}</span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              [{b.tag}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
