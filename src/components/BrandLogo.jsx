"use client";

import React from "react";

/**
 * Navkar Tools & Machineries - World-Class Industrial Vector Brandmark
 * High-Torque Precision "N" Monogram with Carbide Bevel Geometry
 */
export default function BrandLogo({
  variant = "full", // "full" | "emblem" | "horizontal"
  size = "md",      // "sm" | "md" | "lg"
  className = "",
}) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  const emblemSize = isSmall ? 36 : isLarge ? 54 : 44;

  const EmblemSVG = (
    <div
      style={{
        width: emblemSize,
        height: emblemSize,
        background: "linear-gradient(135deg, #182032 0%, #0B0F19 100%)",
        border: "1.5px solid rgba(245, 158, 11, 0.45)",
        borderRadius: isSmall ? "8px" : "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px -3px rgba(245, 158, 11, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
        position: "relative",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {/* Subtle Metallic Corner Highlights */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.18) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <svg
        width={emblemSize * 0.72}
        height={emblemSize * 0.72}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ntmGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="ntmSteelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="ntmDarkFaceted" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <filter id="ntmGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#F59E0B" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Precision Hex-Machined Shield */}
        <polygon
          points="32,4 56,17.8 56,46.2 32,60 8,46.2 8,17.8"
          fill="#0B0F19"
          stroke="url(#ntmGoldGrad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Inner Technical Inset Contour */}
        <polygon
          points="32,9 51,19.9 51,44.1 32,55 13,44.1 13,19.9"
          fill="#111726"
          stroke="#1E293B"
          strokeWidth="1.2"
        />

        {/* Sculpted Bold Industrial "N" Monogram with Carbide Chisel Cuts */}
        {/* Left Vertical Pillar */}
        <path
          d="M19 44V20L25 16.5V44H19Z"
          fill="url(#ntmSteelGrad)"
        />
        
        {/* Powerful High-Torque Diagonal Cutter Blade */}
        <path
          d="M25 16.5L41 40.5V47.5L25 23.5V16.5Z"
          fill="url(#ntmGoldGrad)"
          filter="url(#ntmGlow)"
        />

        {/* Right Vertical Pillar */}
        <path
          d="M39 20V44H45V16.5L39 20Z"
          fill="url(#ntmDarkFaceted)"
        />

        {/* Front Facet Chamfer on Right Pillar */}
        <polygon
          points="39,20 45,16.5 45,44 39,44"
          fill="url(#ntmSteelGrad)"
        />

        {/* Center Precision Core Diamond/Carbide Tip */}
        <circle cx="32" cy="32" r="2.2" fill="#FFFFFF" />

        {/* Micro Engineering Calibration Marks */}
        <line x1="32" y1="5" x2="32" y2="8" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="32" y1="56" x2="32" y2="59" stroke="#F59E0B" strokeWidth="1.5" />
      </svg>
    </div>
  );

  if (variant === "emblem") {
    return EmblemSVG;
  }

  return (
    <div
      className={`brand-logo-lockup ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: isSmall ? "0.65rem" : "0.85rem",
        textDecoration: "none",
      }}
    >
      {EmblemSVG}

      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: isSmall ? "1.1rem" : isLarge ? "1.55rem" : "1.32rem",
            fontWeight: 800,
            letterSpacing: "0.02em",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "baseline",
            gap: "0.3rem",
          }}
        >
          <span>NAVKAR</span>
          <span
            style={{
              background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TOOLS
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginTop: "0.2rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: isSmall ? "0.62rem" : "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            &amp; MACHINERIES
          </span>
          <span
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: "var(--primary)",
              opacity: 0.8,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: isSmall ? "0.6rem" : "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--primary)",
              textTransform: "uppercase",
            }}
          >
            RAIPUR
          </span>
        </div>
      </div>
    </div>
  );
}
