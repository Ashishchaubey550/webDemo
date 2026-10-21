"use client";

import React from "react";
import { COMPANY_INFO } from "../data/products";

export default function Hero({ onSelectProduct = () => {} }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-media" />
      <div className="hero-gradient-overlay" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Industrial Proposition */}
          <div>
            <div className="section-tag">
              Official Industrial Machinery Stockist • Raipur (C.G.)
            </div>

            <h1 className="hero-headline">
              Heavy Industrial <span className="highlight">Machinery</span> &amp; Precision Tools.
            </h1>

            <p className="hero-desc">
              Direct authorized supply of magnetic core drills, inverter welding systems, high-torque grinders, commercial pressure washers, and workshop heavy machines. Tested, certified, and ready for immediate dispatch from Station Road, Raipur.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#products" className="btn btn-primary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Explore Machinery Catalog
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Navkar%20Tools%20Team,%20I%20would%20like%20to%20get%20a%20quotation%20for%20industrial%20tools`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                Instant WhatsApp Quote
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="pulse-beacon" />
                <span style={{ fontSize: "0.85rem", color: "var(--text-white)", fontWeight: 600 }}>
                  Showroom Testing Before Dispatch
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span style={{ fontSize: "0.85rem", color: "var(--text-white)", fontWeight: 600 }}>
                  100% Genuine OEM Warranty
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span style={{ fontSize: "0.85rem", color: "var(--text-white)", fontWeight: 600 }}>
                  GST Tax Invoices Eligible for ITC
                </span>
              </div>
            </div>

            {/* Key Metric Ticker */}
            <div className="hero-stats-row">
              <div className="stat-item">
                <div className="stat-value">
                  15<span>+</span>
                </div>
                <div className="stat-label">Years Industrial Trust in Central India</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">
                  2,500<span>+</span>
                </div>
                <div className="stat-label">Heavy Machines Supplied</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">
                  45<span>+</span>
                </div>
                <div className="stat-label">Authorized Industrial Brands</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">
                  100<span>%</span>
                </div>
                <div className="stat-label">Genuine Spares &amp; Local Service</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Spotlight Feature Card */}
          <div>
            <div className="hero-card">
              <div className="hero-card-header">
                <div>
                  <span className="badge badge-amber">★ Featured Industrial Machine</span>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--text-white)", marginTop: "0.4rem" }}>
                    DCA AJC30 Magnetic Core Drill
                  </h3>
                </div>
                <span className="badge badge-emerald">In Stock (Raipur)</span>
              </div>

              <div className="hero-card-media">
                <img
                  src="/assets/images/dca-magnetic-drill.jpg"
                  alt="DCA AJC30 Magnetic Core Drill"
                  loading="eager"
                />
              </div>

              <div className="hero-card-specs">
                <div className="hero-spec-pill">
                  <div className="hero-spec-label">Core Drill Capacity</div>
                  <div className="hero-spec-val">30 mm</div>
                </div>
                <div className="hero-spec-pill">
                  <div className="hero-spec-label">Magnetic Clamping</div>
                  <div className="hero-spec-val">11,500 N Force</div>
                </div>
                <div className="hero-spec-pill">
                  <div className="hero-spec-label">Motor Output</div>
                  <div className="hero-spec-val">900W Pure Copper</div>
                </div>
                <div className="hero-spec-pill">
                  <div className="hero-spec-label">Net Weight</div>
                  <div className="hero-spec-val">11.5 kg Portable</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Navkar%20Tools,%20I%20am%20interested%20in%20DCA%20AJC30%20Magnetic%20Drill%20quotation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ flex: 1 }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  Quote on WhatsApp
                </a>

                <a
                  href="#products"
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  View All Specs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
