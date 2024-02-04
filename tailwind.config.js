/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/scss/**/*.scss"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif'],
        roboto: ['"Roboto", sans-serif']
      },
      colors: {
        'primary-light': '#eaff96',
        'primary-light-1/2': '#e3ff73',
        'primary': '#dcff50',
        'gray': '#999999',
        'green': '#008900',
        "red": '#f24e62',
        'blue': '#76d0fb',
        'dark': '#151515',
        'dark-light': "#343434",
        "purple": '#b567eb'
      }
    },
  },
  plugins: [],
};
