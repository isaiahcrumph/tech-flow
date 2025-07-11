// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // This section is crucial for theming (e.g., with shadcn/ui).
      // It maps CSS variables to Tailwind's color palette.
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // You can add your other custom colors here
        // primary: 'hsl(var(--primary))',
        // secondary: 'hsl(var(--secondary))',
      },
    },
  },
  plugins: [],
}