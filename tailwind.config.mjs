/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
              colors: {
                'space-dark': '#0a0a0f',
                'space-darker': '#050508',
                'space-light': '#1a1a2e',
                'space-accent': '#ffffff',
                'space-purple': '#ffffff',
                'space-blue': '#ffffff',
                'space-cyan': '#ffffff',
                'text-primary': '#f8fafc',
                'text-secondary': '#cbd5e1',
                'text-accent': '#94a3b8',
                'light-bg': '#ffffff',
                'light-bg-secondary': '#f1f5f9',
                'light-text': '#0f172a',
                'light-text-secondary': '#475569',
                'light-text-accent': '#64748b',
                'indigo-black': '#000000',
                'indigo-white': '#ffffff',
              },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      }
    },
  },
  plugins: [],
}

