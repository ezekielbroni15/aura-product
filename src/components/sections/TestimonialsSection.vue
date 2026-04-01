<template>
  <section class="testimonials-section">
    <SectionTitle
      label="TESTIMONIALS"
      title="What our customers are saying."
      text="Hear from people who love the quality, style, and experience of shopping with us."
    />

    <div class="testimonials-grid">
      <div class="testimonial-card">
        <p class="stars">★★★★★</p>
        <p class="message">
          I love how modern and premium everything feels. The product quality
          exceeded my expectations.
        </p>
        <div class="user-info">
          <div class="avatar">A</div>
          <div>
            <h4>Amanda Lee</h4>
            <p>Interior Designer</p>
          </div>
        </div>
      </div>

      <div class="testimonial-card">
        <p class="stars">★★★★★</p>
        <p class="message">
          The interface is clean, the products are beautiful, and delivery was
          faster than I expected.
        </p>
        <div class="user-info">
          <div class="avatar">J</div>
          <div>
            <h4>Jason Miller</h4>
            <p>Product Manager</p>
          </div>
        </div>
      </div>

      <div class="testimonial-card">
        <p class="stars">★★★★★</p>
        <p class="message">
          This is exactly the type of modern shopping experience I look for.
          Everything feels well designed.
        </p>
        <div class="user-info">
          <div class="avatar">S</div>
          <div>
            <h4>Sophia Brown</h4>
            <p>Creative Director</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/ui/SectionTitle.vue";
</script>

<style scoped>
.testimonials-section {
  padding: 80px 60px;
  background-color: var(--color-white);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.testimonial-card {
  background-color: var(--color-muted-bg);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

.stars {
  margin: 0 0 16px;
  color: var(--color-warning);
  font-size: 18px;
  letter-spacing: 2px;
}

.message {
  margin: 0 0 24px;
  font-size: 15px;
  line-height: 1.8;
  color: #374151;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 18px;
}

.user-info h4 {
  margin: 0 0 4px;
  font-size: 16px;
  color: var(--color-dark);
}

.user-info p {
  margin: 0;
  font-size: 14px;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .testimonials-section {
    padding: 60px 32px;
  }

  .testimonials-grid {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 50px 20px;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .testimonial-card {
    padding: 24px 18px;
  }

  .message {
    font-size: 14px;
  }
}
</style>
