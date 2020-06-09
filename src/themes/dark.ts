export default {
  hero: {
    background: {
      image: "https://res.cloudinary.com/xielabs/image/upload/v1591689176/flight-dark.jpg",
    }
  },
  color: {
    link: "#3B70A2",
    text: "wheat",
    background: "#222",
  },
  card: {
    background: "radial-gradient(118.99% 670.46% at -7.06% -9.5%, #191919 0%, #0a0a0a 100%)",
    boxShadow: "20px 20px 60px rgba(0, 0, 0, 0.8), -20px -20px 60px rgba(255, 255, 255, 0.05)",
    carousel: {
      opacity: 0.8,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0.05), 10px 10px 30px rgba(0, 0, 0, 0.8)"
    },
    button: {
      text: "white",
      background:  "#0f0f0f",
      boxShadow: {
        primary: "-4px -4px 10px rgba(255, 255, 255, 0.1), 4px 4px 10px rgba(0, 0, 0, 0.5)",
        secondary: "-4px -4px 10px rgba(255, 255, 255, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.8)"
      },
      hoverIntensity: 0.25
    }
  },
  screen: {
    width: {
      mobile: 375,
      tablet: 600,
      desktop: 980
    },
    padding: {
      mobile: 20,
      tablet: 20,
      desktop: 48
    }
  }
}