"use client";

import React, { useEffect } from "react";
import { generateWhatsAppMessage, COMPANY_INFO } from "../data/products";

export default function ProductDetailModal({
  product = null,
  onClose = () => {},
  onAddToCart = () => {},
  isInCart = false,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-content-grid">
          {/* Left Column: Media & Quick Badges */}
          <div>
            <div className="modal-media-pane">
              <img src={product.image} alt={product.name} />
            </div>

            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className={`badge badge-${product.badgeColor || "amber"}`}>
                {product.badge}
              </span>
              <span className="badge badge-emerald">
                100% Genuine OEM
              </span>
              <span className="badge badge-sky">
                Raipur Stock
              </span>
            </div>

            {/* Quick CTAs */}
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <a
                href={generateWhatsAppMessage(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                Request Quotation on WhatsApp
              </a>

              <button
                onClick={() => onAddToCart(product)}
                className={`btn ${isInCart ? "btn-secondary" : "btn-primary"}`}
              >
                {isInCart ? "Item in RFQ List" : "Add to RFQ Basket"}
              </button>

              <a
                href={`tel:+${COMPANY_INFO.phone1Raw}`}
                className="btn btn-secondary btn-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Talk to Sales Engineer: {COMPANY_INFO.phone1}
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Technical Specs */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: "0.8rem", textTransform: "uppercase" }}>
              {product.brand} Industrial Machinery
            </div>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text-white)", margin: "0.35rem 0 0.75rem" }}>
              {product.name}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              {product.shortDesc}
            </p>

            {/* Technical Specifications Table */}
            <div style={{ marginTop: "1.5rem" }}>
              <h4 style={{ fontSize: "1rem", color: "var(--text-white)", marginBottom: "0.5rem", borderBottom: "1px solid var(--steel-border)", paddingBottom: "0.35rem" }}>
                Technical Specifications
              </h4>
              {product.fullSpecs ? (
                <table className="modal-specs-table">
                  <tbody>
                    {Object.entries(product.fullSpecs).map(([key, val], idx) => (
                      <tr key={idx}>
                        <td>{key}</td>
                        <td>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </div>

            {/* Engineering Features */}
            {product.features && (
              <div style={{ marginTop: "1.25rem" }}>
                <h4 style={{ fontSize: "1rem", color: "var(--text-white)", marginBottom: "0.5rem" }}>
                  Engineering Highlights
                </h4>
                <ul style={{ paddingLeft: "1.25rem", color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {product.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            {product.applications && (
              <div style={{ marginTop: "1.25rem", background: "var(--bg-surface-elevated)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--steel-border)" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--primary)", textTransform: "uppercase" }}>
                  Recommended Applications:
                </span>
                <p style={{ fontSize: "0.85rem", color: "var(--text-primary)", marginTop: "0.25rem" }}>
                  {product.applications}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
