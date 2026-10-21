"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, CATEGORIES, generateWhatsAppMessage } from "../data/products";

export default function ProductCatalog({
  onSelectProduct = () => {},
  onAddToCart = () => {},
  cartItems = []
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCat =
        selectedCategory === "all" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesQuery =
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        (item.keySpecs &&
          item.keySpecs.some(
            (s) =>
              s.label.toLowerCase().includes(q) ||
              s.value.toLowerCase().includes(q)
          ));

      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Check if item is in cart
  const isItemInCart = (id) => cartItems.some((c) => c.id === id);

  return (
    <section id="products" className="catalog-section">
      <div className="container">
        {/* Section Header */}
        <div>
          <div className="section-tag">Direct Supply Catalog • 2026 Fleet</div>
          <h2 className="section-title">
            Commercial Machinery &amp; Industrial Power Tools
          </h2>
          <p className="section-subtitle">
            All equipment is stocked at our Station Road depot in Raipur with GST billing, manufacturer warranties, and ready-to-test showroom setups.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="catalog-controls">
          <div className="search-and-filter-row">
            {/* Search Input */}
            <div className="catalog-search-box">
              <svg
                className="catalog-search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search by machine model, brand (DCA, JAIN, KOBMAX...), or spec..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="catalog-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    color: "var(--text-muted)",
                    padding: "4px",
                  }}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Count & Showroom Dispatch Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="badge badge-amber">
                {filteredProducts.length} Machines Listed
              </span>
              <span className="badge badge-emerald">
                Same-Day Dispatch in CG
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs-scroll" role="tablist">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`category-tab-btn ${
                    selectedCategory === cat.id ? "active" : ""
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                >
                  <span>{cat.name}</span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      opacity: 0.7,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-lg)",
              border: "1px dashed var(--steel-border)",
            }}
          >
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              No machinery found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="btn btn-secondary btn-sm"
            >
              Reset Filters &amp; View All Tools
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => {
              const inCart = isItemInCart(product.id);

              return (
                <article key={product.id} className="product-card">
                  {/* Media Wrapper */}
                  <div
                    className="product-media-wrapper"
                    onClick={() => onSelectProduct(product)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="product-floating-badges">
                      <span className={`badge badge-${product.badgeColor || "amber"}`}>
                        {product.badge}
                      </span>
                      <span className="badge badge-emerald">
                        In Stock
                      </span>
                    </div>

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="product-content">
                    <div className="product-brand">{product.brand}</div>
                    <h3
                      className="product-title"
                      onClick={() => onSelectProduct(product)}
                      style={{ cursor: "pointer" }}
                      title={product.name}
                    >
                      {product.name}
                    </h3>
                    <p className="product-desc">{product.shortDesc}</p>

                    {/* Technical Specification Chips */}
                    {product.keySpecs && (
                      <div className="product-specs-chips">
                        {product.keySpecs.map((spec, sIdx) => (
                          <div key={sIdx} className="spec-chip">
                            <span className="spec-chip-label">{spec.label}</span>
                            <span className="spec-chip-value">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Stock & Delivery Note */}
                    <div className="product-footer-bar">
                      <div className="price-dispatch-note">
                        <span className="price-note-tag">{product.priceNote}</span>
                        <span className="stock-dispatch-tag">
                          <span className="pulse-beacon" />
                          {product.leadTime}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons Cluster */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "1rem" }}>
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="btn btn-secondary btn-sm"
                        title="View complete technical specs"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        Specs Sheet
                      </button>

                      <button
                        onClick={() => onAddToCart(product)}
                        className={`btn btn-sm ${inCart ? "btn-secondary" : "btn-primary"}`}
                        style={{
                          borderColor: inCart ? "var(--status-green)" : undefined,
                          color: inCart ? "var(--status-green)" : undefined,
                        }}
                      >
                        {inCart ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            In RFQ
                          </>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Add to RFQ
                          </>
                        )}
                      </button>
                    </div>

                    {/* 1-Click WhatsApp RFQ */}
                    <a
                      href={generateWhatsAppMessage(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ marginTop: "0.5rem", width: "100%" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                      </svg>
                      Direct WhatsApp RFQ
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
