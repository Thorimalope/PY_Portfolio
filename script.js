// small utilities: scroll reveal, theme toggle, year
document.addEventListener("DOMContentLoaded", () => {
  // Update copyright year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Scroll reveal using IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // reveal once
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Tech icon micro animation: small tilt on hover (CSS covers most)
  document.querySelectorAll(".tech-card img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "rotate(-8deg) translateY(-4px)";
      img.style.transition = "transform .28s cubic-bezier(.2,.9,.3,1)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "";
    });
  });

  // Theme toggle: simple light/dark swap (persist in localStorage)
  const themeBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const current = localStorage.getItem("site-theme") || "light";
  if (current === "dark") body.classList.add("dark");
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem(
      "site-theme",
      body.classList.contains("dark") ? "dark" : "light"
    );
    themeBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // Optional: make header links smooth highlight
  const links = document.querySelectorAll(".nav a");
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      // close mobile nav if you add one later
      links.forEach((l) => l.classList.remove("active"));
      a.classList.add("active");
    });
  });
});
