tsParticles.load("tsparticles", {
  background: {
    color: "transparent",
  },
  particles: {
    number: {
      value: 60,
      density: { enable: true, area: 800 },
    },
    color: {
      value: "#4a4a4a",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.35,
    },
    size: {
      value: { min: 1, max: 4 },
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out",
    },
    links: {
      enable: true,
      distance: 140,
      color: "#555",
      opacity: 0.25,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: { enable: false },
    },
    modes: {
      repulse: { distance: 120 },
    },
  },
  detectRetina: true,
});
