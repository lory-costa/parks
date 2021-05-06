module.exports = {
  purge: ['./server/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'park-image': "url('/images/park-image.jpg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
