const production = !process.env.ROLLUP_WATCH;
module.exports = {

  theme: {
    colors: {
      rose: {
        DEFAULT: "#c6a7a4"
      },
      customBlack: {
        DEFAULT: "#040202"
      }
    },
    fontFamily: {
      'monserrat': ['Montserrat', 'cursive']
    }
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [

  ],
  purge: {
    content: [
     "./src/**/*.svelte",

    ],
    enabled: production // disable purge in dev
  },
};