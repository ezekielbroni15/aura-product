<template>
  <section class="hero">
    <div class="hero-text">
      <p class="hero-label">NEW ARRIVAL COLLECTION</p>

      <h1>Elevate Your Everyday Essentials.</h1>

      <p class="hero-description">
        Discover our meticulously curated collection of premium products
        designed to blend seamlessly into your modern lifestyle.
      </p>

      <div class="hero-buttons">
        <BaseButton variant="primary">Explore Products</BaseButton>
        <BaseButton variant="secondary">Watch Video</BaseButton>
      </div>
    </div>

    <div class="hero-image">
      <img
        src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80"
        alt="Modern workspace"
      />
    </div>
  </section>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 40px 60px 80px;
  background-color: var(--color-bg);
}

.hero-text {
  flex: 1;
  max-width: 500px;
}

.hero-label {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 56px;
  line-height: 1.05;
  font-weight: 800;
  color: var(--color-dark);
  margin: 0 0 24px;
}

.hero-description {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 32px;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.hero-image img {
  width: 100%;
  max-width: 450px;
  border-radius: var(--radius-sm);
  object-fit: cover;
}

/* Tablet */
@media (max-width: 992px) {
  .hero {
    padding: 40px 32px 60px;
    gap: 30px;
  }

  .hero h1 {
    font-size: 44px;
  }

  .hero-text {
    max-width: 100%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 20px 50px;
  }

  .hero h1 {
    font-size: 34px;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-image {
    width: 100%;
    justify-content: center;
  }

  .hero-image img {
    max-width: 100%;
  }

  .hero-buttons {
    width: 100%;
  }
}
</style>
