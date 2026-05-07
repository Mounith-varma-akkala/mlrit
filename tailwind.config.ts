import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
    extend: {
      fontFamily: {
        sans: [
          "-apple-system", "BlinkMacSystemFont",
          "SF Pro Text", "SF Pro Display",
          "Inter var", "Inter",
          "Segoe UI", "Roboto", "system-ui", "sans-serif",
        ],
        display: [
          "-apple-system", "BlinkMacSystemFont",
          "SF Pro Display", "Inter var", "Inter", "system-ui", "sans-serif",
        ],
      },
      colors: {
        // Brand
        brand: {
          green:   "#358F24",
          "green-2": "#2A7A1C",
          orange:  "#D66221",
          "orange-2": "#B0501A",
        },
        // shadcn tokens, mapped to CSS variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft:  "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.12)",
        lift:  "0 1px 2px rgba(0,0,0,0.05), 0 24px 48px -20px rgba(0,0,0,0.22)",
        glow:  "0 8px 28px -10px rgba(53,143,36,0.55)",
        glowO: "0 8px 28px -10px rgba(214,98,33,0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        pulseRing: {
          "0%":   { boxShadow: "0 0 0 0 rgba(53,143,36,0.5)" },
          "70%":  { boxShadow: "0 0 0 8px rgba(53,143,36,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(53,143,36,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.22,.61,.36,1) both",
        pulseRing: "pulseRing 2s cubic-bezier(.22,.61,.36,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
