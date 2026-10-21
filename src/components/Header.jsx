"use client";

import React, { useState, useEffect } from "react";
import { COMPANY_INFO } from "../data/products";
import BrandLogo from "./BrandLogo";

export default function Header({ cartCount = 0, onOpenDrawer = () => {} }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement & Quick Contact Bar */}
      <aside className="topbar" aria-label="Showroom Status and Helpline">
        <div className="container topbar-content">
          <div className="topbar-group">
            <div className="topbar-item">
              <span className="pulse-beacon" />
              <strong style={{ color: "var(--text-white)", marginLeft: "4px" }}>
                Raipur Showroom Open Today
              </strong>
              <span style={{ color: "var(--text-muted)", marginLeft: "4px" }}>
                • Station Road, Raipur (10 AM - 8:30 PM)
              </span>
            </div>
            <div className="topbar-item" style={{ display: "none", md: "inline-flex" }}>
              <span className="badge badge-amber" style={{ fontSize: "0.68rem" }}>
                GSTIN: 22AAKFN4829K1ZX
              </span>
            </div>
          </div>

          <div className="topbar-group">
            <a
              href={`tel:+${COMPANY_INFO.phone1Raw}`}
              className="topbar-item"
              style={{ color: "var(--text-white)", fontWeight: 600 }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {COMPANY_INFO.phone1}
            </a>
            <span style={{ color: "var(--steel-border-light)" }}>|</span>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Navkar%20Tools,%20I%20need%20a%20quotation%20for%20industrial%20tools`}
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-item"
              style={{ color: "var(--status-green)", fontWeight: 600 }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              WhatsApp RFQ
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className={`site-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Logo & Brand Identity */}
          <a href="#home" aria-label="Navkar Tools & Machineries Homepage" style={{ textDecoration: "none" }}>
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links" aria-label="Primary Navigation">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#products" className="nav-link">
              Machinery Catalog
            </a>
            <a href="#whynavkar" className="nav-link">
              Why Navkar
            </a>
            <a href="#showroom" className="nav-link">
              Showroom &amp; Depot
            </a>
            <a href="#contact" className="nav-link">
              Contact &amp; RFQ
            </a>
          </nav>

          {/* Actions & RFQ Basket Trigger */}
          <div className="nav-actions">
            <button
              onClick={onOpenDrawer}
              className="rfq-basket-trigger"
              aria-label={`Open RFQ basket with ${cartCount} items`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>RFQ List</span>
              <span className="basket-count">{cartCount}</span>
            </button>

            <a
              href="#products"
              className="btn btn-primary btn-sm"
              style={{ display: "none", sm: "inline-flex" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Get Quotation
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-secondary btn-sm"
              style={{ display: "inline-flex", padding: "0.5rem" }}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              borderTop: "1px solid var(--steel-border)",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: "var(--text-white)", padding: "0.5rem", fontWeight: 600 }}
            >
              Home
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: "var(--text-white)", padding: "0.5rem", fontWeight: 600 }}
            >
              Machinery &amp; Tools Catalog
            </a>
            <a
              href="#whynavkar"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: "var(--text-white)", padding: "0.5rem", fontWeight: 600 }}
            >
              Why Choose Navkar
            </a>
            <a
              href="#showroom"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: "var(--text-white)", padding: "0.5rem", fontWeight: 600 }}
            >
              Showroom &amp; Warehousing
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: "var(--text-white)", padding: "0.5rem", fontWeight: 600 }}
            >
              Contact &amp; Map Directions
            </a>
            <div style={{ display: "flex", gap: "0.5rem", paddingTop: "0.75rem" }}>
              <a
                href={`tel:+${COMPANY_INFO.phone1Raw}`}
                className="btn btn-call btn-sm"
                style={{ flex: 1 }}
              >
                Call Raipur Desk
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDrawer();
                }}
                className="btn btn-primary btn-sm"
                style={{ flex: 1 }}
              >
                View RFQ List ({cartCount})
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
