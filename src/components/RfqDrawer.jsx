"use client";

import React from "react";
import { generateCartWhatsAppMessage, COMPANY_INFO } from "../data/products";

export default function RfqDrawer({
  isOpen = false,
  onClose = () => {},
  cartItems = [],
  onUpdateQuantity = () => {},
  onRemoveItem = () => {},
  onClearCart = () => {},
}) {
  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label="RFQ Quotation Basket">
        {/* Header */}
        <div className="drawer-header">
          <div>
            <span className="badge badge-amber" style={{ fontSize: "0.7rem" }}>
              Commercial RFQ Basket
            </span>
            <h3 style={{ fontSize: "1.2rem", color: "var(--text-white)", marginTop: "0.25rem" }}>
              Selected Machinery ({cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)} Units)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            style={{ position: "static" }}
            aria-label="Close RFQ drawer"
          >
            ✕
          </button>
        </div>

        {/* Content List */}
        <div className="drawer-items-list">
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "3rem 1rem",
                color: "var(--text-muted)",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ margin: "0 auto 1rem", opacity: 0.5 }}
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <h4 style={{ color: "var(--text-white)", marginBottom: "0.5rem" }}>
                RFQ Basket is Empty
              </h4>
              <p style={{ fontSize: "0.85rem", maxWidth: "260px", margin: "0 auto 1.5rem" }}>
                Add power tools, welders, and heavy machinery to generate a combined official quotation.
              </p>
              <a
                href="#products"
                onClick={onClose}
                className="btn btn-secondary btn-sm"
              >
                Browse Product Catalog
              </a>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="drawer-item-card">
                <div className="drawer-item-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="drawer-item-info">
                  <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--primary)" }}>
                    {item.brand}
                  </span>
                  <div className="drawer-item-title">{item.name}</div>

                  <div className="drawer-qty-control">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))
                      }
                      style={{ background: "transparent", color: "var(--text-white)", padding: "0 4px", fontSize: "0.9rem" }}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, minWidth: "18px", textAlign: "center" }}>
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, (item.quantity || 1) + 1)
                      }
                      style={{ background: "transparent", color: "var(--text-white)", padding: "0 4px", fontSize: "0.9rem" }}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  style={{
                    background: "transparent",
                    color: "var(--text-muted)",
                    padding: "0.5rem",
                    transition: "color 0.2s",
                  }}
                  title="Remove item"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Actions */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", fontSize: "0.85rem" }}>
              <span style={{ color: "var(--text-muted)" }}>Total Machinery Selected:</span>
              <span style={{ color: "var(--text-white)", fontWeight: 700 }}>
                {cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)} Units
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <a
                href={generateCartWhatsAppMessage(cartItems)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                Send Formal RFQ to WhatsApp
              </a>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <a
                  href={`tel:+${COMPANY_INFO.phone1Raw}`}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  Call Raipur Showroom
                </a>
                <button
                  onClick={onClearCart}
                  className="btn btn-secondary btn-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  Clear All
                </button>
              </div>
            </div>

            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.35rem",
              }}
            >
              <span className="pulse-beacon" style={{ width: "6px", height: "6px" }} />
              Direct connection to Navkar commercial sales desk
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
