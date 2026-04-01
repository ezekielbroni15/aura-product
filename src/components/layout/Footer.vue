<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-brand">
        <h2>Aura.</h2>
        <p>
          Bringing modern design, premium quality, and everyday comfort together
          in one place.
        </p>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>

        <div class="footer-column">
          <h3>Categories</h3>
          <a href="#">Furniture</a>
          <a href="#">Lighting</a>
          <a href="#">Living Room</a>
          <a href="#">Office</a>
        </div>

        <div class="footer-column">
          <h3>Contact</h3>
          <a href="#">support@aura.com</a>
          <a href="#">+1 234 567 890</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Aura. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 70px 60px 30px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.footer-brand {
  max-width: 320px;
}

.footer-brand h2 {
  margin: 0 0 14px;
  font-size: 32px;
}

.footer-brand p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 15px;
}

.footer-links {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}

.footer-column {
  min-width: 140px;
}

.footer-column h3 {
  margin: 0 0 16px;
  font-size: 18px;
  color: var(--color-white);
}

.footer-column a {
  display: block;
  margin-bottom: 12px;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
}

.footer-column a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: #94a3b8;
  font-size: 14px;
}

@media (max-width: 992px) {
  .footer {
    padding: 60px 32px 24px;
  }

  .footer-links {
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 50px 20px 24px;
  }

  .footer-top {
    flex-direction: column;
    gap: 30px;
  }

  .footer-links {
    flex-direction: column;
    gap: 24px;
  }

  .footer-brand,
  .footer-column {
    max-width: 100%;
  }

  .footer-brand h2 {
    font-size: 28px;
  }
}
</style>
