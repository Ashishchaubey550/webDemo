"use client";

import React from "react";
import { COMPANY_INFO } from "../data/products";

export default function FloatingActions({ cartCount = 0, onOpenDrawer = () => {} }) {
  return (
    <aside className="floating-action-cluster" aria-label="Quick Communication Tools">
      {/* RFQ Basket Floating Button */}
      {cartCount > 0 && (
        <button
          onClick={onOpenDrawer}
          className="floating-btn btn-primary"
          aria-label={`Open RFQ basket with ${cartCount} items`}
          title="Open RFQ Quotation List"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span>RFQ Basket ({cartCount})</span>
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:+${COMPANY_INFO.phone1Raw}`}
        className="floating-btn btn-call"
        aria-label="Call Navkar Tools Showroom"
        title="Direct Showroom Call"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Call: {COMPANY_INFO.phone1}</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Navkar%20Tools,%20I%20am%20looking%20for%20industrial%20machinery%20pricing`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn btn-whatsapp"
        aria-label="Chat with Industrial Sales on WhatsApp"
        title="Instant WhatsApp Support"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
        </svg>
        <span>WhatsApp RFQ</span>
      </a>
    </aside>
  );
}
