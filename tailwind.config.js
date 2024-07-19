/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Definir un contenedor personalizado
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
      },
    },
  },
  plugins: [],
}