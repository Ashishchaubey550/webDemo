"use client";

import React from "react";
import { COMPANY_INFO } from "../data/products";

export default function ShowroomTour() {
  return (
    <section id="showroom" className="showroom-section">
      <div className="container">
        <div>
          <div className="section-tag">Raipur Physical Depot &amp; Testing Facility</div>
          <h2 className="section-title">Visit Our Station Road Showroom</h2>
          <p className="section-subtitle">
            Experience our heavy industrial machinery in person. Test drills, welders, and compressors with our technicians before making purchase decisions.
          </p>
        </div>

        <div className="showroom-grid">
          {/* Main Visual Media Stack */}
          <div className="showroom-media-stack">
            <div className="showroom-main-img">
              <img
                src="/assets/images/showroom.jpg"
                alt="Navkar Tools Showroom and Warehouse Depot"
                style={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </div>

            <div className="showroom-floating-card">
              <span className="badge badge-emerald">
                <span className="pulse-beacon" />
                Showroom Open
              </span>
              <div style={{ fontWeight: 700, color: "var(--text-white)", marginTop: "0.5rem", fontSize: "0.95rem" }}>
                Walk-ins &amp; Testing Welcome
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                10:00 AM – 8:30 PM (Mon - Sat)
              </div>
            </div>
          </div>

          {/* Right Column Details */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="feature-box" style={{ background: "var(--bg-surface-elevated)" }}>
                <h4 style={{ color: "var(--text-white)", fontSize: "1.1rem", marginBottom: "0.35rem" }}>
                  📍 Prime Strategic Location
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Located on Station Road, Near Surja Devi Shukla Market, Raipur — centrally accessible for fast contractor pickups and direct transport loading.
                </p>
              </div>

              <div className="feature-box" style={{ background: "var(--bg-surface-elevated)" }}>
                <h4 style={{ color: "var(--text-white)", fontSize: "1.1rem", marginBottom: "0.35rem" }}>
                  ⚡ Live Machine Demo Bench
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Equipped with 3-phase and single-phase power points for live electrode welding, core drilling into heavy MS plate, and high-pressure washer demonstrations.
                </p>
              </div>

              <div className="feature-box" style={{ background: "var(--bg-surface-elevated)" }}>
                <h4 style={{ color: "var(--text-white)", fontSize: "1.1rem", marginBottom: "0.35rem" }}>
                  📦 Ready Bulk Warehouse Stock
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Holding buffer inventory of angle grinders, demolition breakers, chainsaws, and generator sets for immediate fulfillment of urgent project contracts.
                </p>
              </div>

              <div className="showroom-action-btns">
                <a
                  href={`tel:+${COMPANY_INFO.phone1Raw}`}
                  className="btn btn-call"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Schedule Showroom Demo
                </a>

                <a
                  href={COMPANY_INFO.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Google Maps Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
