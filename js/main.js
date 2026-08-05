const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

let current = "";
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}); // ==================== Counter ====================
const counters = document.querySelectorAll(".counter");

function animateCounters() {
  counters.forEach((counter) => {
    let count = 0;
    const target = +counter.dataset.target;

    const duration = 1000;
    const stepTime = duration / target;

    const interval = setInterval(() => {
      count++;
      counter.innerText = count;

      if (count >= target) {
        counter.innerText = target;
        clearInterval(interval);
      }
    }, stepTime);
  });
}

// ==================== Skills ====================
const skills = document.querySelectorAll(".progres");

function animateSkills() {
  skills.forEach((skill) => {
    let count = 0;
    const target = +skill.dataset.target;
    const span = skill.querySelector("span");

    skill.style.width = "0%";
    span.innerText = "0%";

    const duration = 1000;
    const stepTime = duration / target;

    const interval = setInterval(() => {
      count++;

      skill.style.width = `${count}%`;
      span.innerText = `${count}%`;

      if (count >= target) {
        skill.style.width = `${target}%`;
        span.innerText = `${target}%`;
        clearInterval(interval);
      }
    }, stepTime);
  });
}

// ==================== Observer ====================
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target.id === "about") {
        animateSkills();
      }

      if (entry.target.id === "stats") {
    
        animateCounters();
      }

   
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
  },
);

// مراقبة السكاشن
observer.observe(document.querySelector("#about"));
observer.observe(document.querySelector("#stats")); //
