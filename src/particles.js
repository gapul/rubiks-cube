const PARTICLE_COUNT = 80;
const MAX_DISTANCE = 140;
const VELOCITY_RANGE = 0.25;

let animationId = null;

export function initParticles() {
  const canvas = document.getElementById("background-particles");
  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const particles = [];
  const pointer = { x: null, y: null };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * VELOCITY_RANGE,
      vy: (Math.random() - 0.5) * VELOCITY_RANGE,
      radius: Math.random() * 1.6 + 0.4,
    };
  }

  function init() {
    resize();
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -50 || p.x > canvas.width + 50) {
        particles[index] = createParticle();
        p.x = Math.random() * canvas.width;
      }
      if (p.y < -50 || p.y > canvas.height + 50) {
        particles[index] = createParticle();
        p.y = Math.random() * canvas.height;
      }

      ctx.beginPath();
      ctx.fillStyle = "rgba(200, 210, 255, 0.55)";
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DISTANCE) {
          const alpha = 1 - dist / MAX_DISTANCE;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(160, 180, 255, ${alpha * 0.25})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    if (pointer.x !== null && pointer.y !== null) {
      particles.forEach((p) => {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DISTANCE) {
          const alpha = 1 - dist / MAX_DISTANCE;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(200, 220, 255, ${alpha * 0.35})`;
          ctx.lineWidth = 1.2;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      });
    }

    animationId = requestAnimationFrame(update);
  }

  window.addEventListener("resize", () => {
    resize();
  });

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  window.addEventListener("pointerleave", () => {
    pointer.x = null;
    pointer.y = null;
  });

  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }

  init();
  update();
}
