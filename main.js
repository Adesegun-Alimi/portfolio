// 1. Smooth scroll for navigation (if using anchor links)
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 2. Close mobile menu on link click
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
    }
  });
});

// 3. Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.className = 'scroll-to-top';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.display = 'none';
scrollBtn.style.background = 'green';
scrollBtn.style.color = 'white';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.width = '40px';
scrollBtn.style.height = '40px';
scrollBtn.style.fontSize = '24px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.zIndex = '9999';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Animated typing effect for "Hello"
const helloEl = document.querySelector('.home-content h3');
if (helloEl) {
  const text = helloEl.textContent;
  helloEl.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      helloEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
}



// 6. Reveal animations on scroll
const revealEls = document.querySelectorAll('.home, .about, .contact-form');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealEls.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.8s, transform 0.8s';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);