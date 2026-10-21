"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BrandMarquee from "../components/BrandMarquee";
import ProductCatalog from "../components/ProductCatalog";
import WhyNavkar from "../components/WhyNavkar";
import ShowroomTour from "../components/ShowroomTour";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ProductDetailModal from "../components/ProductDetailModal";
import RfqDrawer from "../components/RfqDrawer";
import FloatingActions from "../components/FloatingActions";

export default function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("navkar_rfq_cart");
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch (err) {
      console.warn("Could not load cart from localStorage", err);
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("navkar_rfq_cart", JSON.stringify(cartItems));
    } catch (err) {
      console.warn("Could not save cart to localStorage", err);
    }
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItemCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <main>
      {/* Header Navigation */}
      <Header
        cartCount={totalItemCount}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Hero Section */}
      <Hero onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Brand Partners Marquee */}
      <BrandMarquee />

      {/* Product Catalog with All 10 Products + Core Machinery */}
      <ProductCatalog
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      />

      {/* Why Choose Navkar Section */}
      <WhyNavkar />

      {/* Showroom & Depot Section */}
      <ShowroomTour />

      {/* Contact & RFQ Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isInCart={
          selectedProduct
            ? cartItems.some((i) => i.id === selectedProduct.id)
            : false
        }
      />

      {/* RFQ Cart Slide-over Drawer */}
      <RfqDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      {/* Floating Action Cluster (WhatsApp, Call, RFQ) */}
      <FloatingActions
        cartCount={totalItemCount}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />
    </main>
  );
}
