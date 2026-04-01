<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" class="card-image" />
    </div>

    <div class="card-body">
      <p class="category">{{ category }}</p>

      <h3 class="title">{{ title }}</h3>

      <div class="rating">
        <span class="stars">★★★★★</span>
        <span class="rating-text">(4.8)</span>
      </div>

      <div class="card-footer">
        <p class="price">${{ price }}</p>
        <button class="add-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  price: Number,
  image: String,
  category: String,
});
</script>

<style scoped>
.card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.12);
}

.image-wrapper {
  position: relative;
}

.card-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 999px;
}

.card-body {
  padding: 18px;
}

.category {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.title {
  margin: 0 0 10px;
  font-size: 18px;
  color: var(--color-dark);
  line-height: 1.3;
}

.rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
}

.stars {
  color: var(--color-warning);
  font-size: 14px;
  letter-spacing: 1px;
}

.rating-text {
  font-size: 13px;
  color: var(--color-text);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.price {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-dark);
}

.add-btn {
  padding: 10px 16px;
  background-color: var(--color-dark);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.add-btn:hover {
  opacity: 0.9;
}
</style>
