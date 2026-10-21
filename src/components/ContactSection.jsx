"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "../data/products";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    firm: "",
    requirement: "",
    city: "Raipur",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*Commercial RFQ from Website:*
*Client Name:* ${formData.name}
*Firm / Company:* ${formData.firm || "Individual Contractor"}
*Phone:* ${formData.phone}
*City:* ${formData.city}
*Machinery Requirement:* ${formData.requirement}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div>
          <div className="section-tag">Direct Commercial Desk</div>
          <h2 className="section-title">Get Quotation &amp; Visit Showroom</h2>
          <p className="section-subtitle">
            Need urgent machinery pricing, bulk rates, or tender specs? Contact our sales engineering desk directly or submit an RFQ below.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Details List */}
          <div className="contact-card-list">
            <div className="contact-tile">
              <div className="contact-tile-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 style={{ color: "var(--text-white)", fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                  Showroom &amp; Warehousing Depot
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {COMPANY_INFO.address}
                </p>
                <div style={{ marginTop: "0.5rem" }}>
                  <a
                    href={COMPANY_INFO.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                  >
                    Open Google Maps Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-tile">
              <div className="contact-tile-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4 style={{ color: "var(--text-white)", fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                  Direct Telephone Lines
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.35rem" }}>
                  <a href={`tel:+${COMPANY_INFO.phone1Raw}`} style={{ color: "var(--text-white)", fontWeight: 600 }}>
                    {COMPANY_INFO.phone1} (Primary Desk)
                  </a>
                  <a href={`tel:+${COMPANY_INFO.phone2Raw}`} style={{ color: "var(--text-secondary)" }}>
                    {COMPANY_INFO.phone2} (Accounts &amp; Logistics)
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-tile">
              <div className="contact-tile-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <h4 style={{ color: "var(--text-white)", fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                  Official Email &amp; GST Verification
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {COMPANY_INFO.email}
                </p>
                <div style={{ fontSize: "0.8rem", color: "var(--primary)", marginTop: "0.25rem", fontFamily: "var(--font-mono)" }}>
                  GSTIN: {COMPANY_INFO.gstin}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive RFQ Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "0.5rem" }}>
              Quick Official Quotation Request
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Fill in your requirement to receive instant WhatsApp quotation with GST invoice breakdown and dispatch timeline.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="e.g. 98260 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Company / Firm Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Sharma Fabricators"
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">City / Delivery Location</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Raipur / Bhilai / Bilaspur"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Tools / Machines Needed *</label>
                <textarea
                  rows="3"
                  required
                  className="form-textarea"
                  placeholder="e.g. 1 DCA AJC30 Magnetic Drill, 2 KOBMAX 850W Grinders, and cutting discs"
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-whatsapp btn-lg" style={{ width: "100%" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                Submit RFQ via WhatsApp Directly
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
