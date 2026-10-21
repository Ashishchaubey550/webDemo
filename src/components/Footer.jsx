"use client";

import React from "react";
import { COMPANY_INFO, CATEGORIES } from "../data/products";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <BrandLogo size="md" />
            </div>

            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "340px", marginBottom: "1.25rem" }}>
              Central India's leading industrial machinery and contractor power tools stockist. Supplying precision magnetic core drills, inverter welding machines, heavy grinders, and plant equipment.
            </p>

            <div style={{ fontSize: "0.8rem", color: "var(--primary)", fontFamily: "var(--font-mono)" }}>
              GSTIN: {COMPANY_INFO.gstin}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link">Home Overview</a></li>
              <li><a href="#products" className="footer-link">Machinery Catalog</a></li>
              <li><a href="#whynavkar" className="footer-link">Why Choose Navkar</a></li>
              <li><a href="#showroom" className="footer-link">Showroom &amp; Depot</a></li>
              <li><a href="#contact" className="footer-link">Contact &amp; Map</a></li>
            </ul>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="footer-col-title">Machinery</h4>
            <ul className="footer-links-list">
              <li><a href="#products" className="footer-link">Magnetic Core Drills</a></li>
              <li><a href="#products" className="footer-link">Inverter Arc Welders</a></li>
              <li><a href="#products" className="footer-link">High-RPM Grinders</a></li>
              <li><a href="#products" className="footer-link">Commercial Washers</a></li>
              <li><a href="#products" className="footer-link">Heavy Demolition Breakers</a></li>
              <li><a href="#products" className="footer-link">Gasoline Generators</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Showroom Depot</h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
              {COMPANY_INFO.address}
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-white)", fontWeight: 600, marginBottom: "0.35rem" }}>
              Hotlines:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", fontSize: "0.85rem" }}>
              <a href={`tel:+${COMPANY_INFO.phone1Raw}`} style={{ color: "var(--primary)" }}>
                {COMPANY_INFO.phone1}
              </a>
              <a href={`tel:+${COMPANY_INFO.phone2Raw}`} style={{ color: "var(--text-secondary)" }}>
                {COMPANY_INFO.phone2}
              </a>
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
              Showroom Timings: 10:00 AM – 8:30 PM (Mon - Sat)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 Navkar Tools &amp; Machineries. All Rights Reserved.
          </div>
          <div>
            Authorized Stockist for DCA, ESAB, KOBMAX, MAF PRO, SWASTIK-G, JAIN, DCX, POWERTECH, XTRA-POWER
          </div>
          <div style={{ color: "var(--text-muted)" }}>
            Engineered for Industrial Contractors &amp; Heavy Fabrication
          </div>
        </div>
      </div>
    </footer>
  );
}
