"use client";

import React from "react";
import { COMPANY_INFO } from "../data/products";

export default function WhyNavkar() {
  const pillars = [
    {
      title: "100% Pre-Dispatch Live Testing",
      desc: "Every magnetic drill, inverter welder, and power tool undergoes motor amp draw testing and mechanical inspection at our Raipur test bench prior to handover.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      badge: "Zero DOA Guarantee"
    },
    {
      title: "Official GST Tax Invoices (ITC Ready)",
      desc: "Verified GSTIN registered supplier. All commercial purchases include complete tax documentation enabling full 18% Input Tax Credit claim for your business.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      badge: "GSTIN 22AAKFN4829K1ZX"
    },
    {
      title: "Station Road Central Logistics Hub",
      desc: "Centrally positioned on Station Road, Raipur for rapid site pickups and same-day freight dispatch across Bhilai, Durg, Bilaspur, Korba, and Central India.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      badge: "Same-Day CG Transit"
    },
    {
      title: "Genuine OEM Spares & Wearables In-Stock",
      desc: "Complete inventory of OEM replacement armatures, carbon brushes, IGBT transistors, chucks, hoses, and contact tips ensuring zero project downtime.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      badge: "Zero Downtime"
    },
    {
      title: "Contractor Wholesale & Volume Pricing",
      desc: "Special institutional and project-scale pricing brackets for fabrication plants, infrastructure contractors, and retail tool dealers throughout Chhattisgarh.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      badge: "Direct Tier 1 Rates"
    },
    {
      title: "Technical Engineering Consultation",
      desc: "Our machinery specialists advise on proper amp sizing, cutter selection, duty cycles, and compressed air CFM requirements tailored to your production work.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      badge: "Free Consultation"
    }
  ];

  return (
    <section id="whynavkar" className="why-section">
      <div className="container">
        <div>
          <div className="section-tag">Industrial Partner Trust</div>
          <h2 className="section-title">Why Leading Contractors Choose Navkar</h2>
          <p className="section-subtitle">
            We don't just ship boxes — we provide pre-tested, heavy-duty industrial solutions backed by 15+ years of tooling expertise and physical presence on Station Road.
          </p>
        </div>

        <div className="features-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="feature-box">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div className="feature-icon-wrapper">{pillar.icon}</div>
                <span className="badge badge-amber">{pillar.badge}</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--text-white)", marginBottom: "0.6rem" }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
