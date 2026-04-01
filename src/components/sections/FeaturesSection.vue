<template>
  <section class="features-section">
    <SectionTitle
      label="WHY CHOOSE US"
      title="Designed for modern living."
      text="We combine style, quality, and convenience to give you a better shopping experience."
    />

    <div class="features-grid">
      <div class="feature-card">
        <div class="icon">✓</div>
        <h3>Premium Quality</h3>
        <p>
          Carefully selected products made with quality materials and modern
          design.
        </p>
      </div>

      <div class="feature-card">
        <div class="icon">⚡</div>
        <h3>Fast Delivery</h3>
        <p>
          Get your favorite products delivered quickly and safely to your
          doorstep.
        </p>
      </div>

      <div class="feature-card">
        <div class="icon">🔒</div>
        <h3>Secure Payment</h3>
        <p>Shop with confidence using safe and trusted payment options.</p>
      </div>

      <div class="feature-card">
        <div class="icon">💬</div>
        <h3>Best Support</h3>
        <p>
          Our team is ready to help you with questions, orders, and product
          guidance.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/ui/SectionTitle.vue";
</script>

<style scoped>
.features-section {
  padding: 80px 60px;
  background-color: var(--color-bg);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.feature-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 28px 22px;
  box-shadow: var(--shadow-soft);
}

.icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 22px;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 20px;
  color: var(--color-dark);
}

.feature-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .features-section {
    padding: 60px 32px;
  }

  .features-grid {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .features-section {
    padding: 50px 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .feature-card {
    padding: 24px 18px;
  }

  .feature-card h3 {
    font-size: 18px;
  }
}
</style>
