module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      
      fontFamily: {
        'body': 'Public Sans',
      },
      colors :{
        primary:{
          blue:'hsl(233, 26%, 24%)',
          green:'hsl(136, 65%, 51%)',
          cyan : 'hsl(192, 70%, 51%)'

        },
        neutral:{
          100: 'hsl(233, 8%, 62%)',
          200:'hsl(220, 16%, 96%)',
          300:'hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)'
        },
        sandbox : 'rgba(0, 0, 0, 0.6)'
      },
      height: {
        'screen-85': '85vh',
      }
    },
  },
  plugins: [],
}
