import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "forest-green": "hsl(var(--forest-green))",
        "dark-green": "hsl(var(--dark-green))",
        "mid-green": "hsl(var(--mid-green))",
        "lime-yellow": "hsl(var(--lime-yellow))",
        "pale-yellow": "hsl(var(--pale-yellow))",
        "soft-blue": "hsl(var(--soft-blue))",
        "soft-pink": "hsl(var(--soft-pink))",
        "soft-purple": "hsl(var(--soft-purple))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "bounce-subtle": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "bar-grow": {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "bottom",
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "bottom",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        "number-count": {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "bar-grow": "bar-grow 0.8s ease-out forwards",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        "number-count": "number-count 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
