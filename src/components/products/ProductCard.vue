<template>
  <RouterLink :to="`/products/${id}`" class="card-link">
    <div class="card">
      <div class="image-wrapper">
        <img :src="image" :alt="name" class="card-image" />
      </div>

      <div class="card-body">
        <p class="product-id">Product ID: {{ id }}</p>

        <h3 class="title">{{ name }}</h3>

        <p class="description">{{ description }}</p>

        <div class="card-footer">
          <p class="price">${{ price }}</p>
          <p class="quantity">Qty: {{ quantity }}</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  id: Number,
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
});
</script>

<style scoped>
.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

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

.card-body {
  padding: 18px;
}

.product-id {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-primary);
}

.title {
  margin: 0 0 10px;
  font-size: 18px;
  color: var(--color-dark);
  line-height: 1.3;
}

.description {
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.6;
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
  font-size: 20px;
  font-weight: 700;
  color: var(--color-dark);
}

.quantity {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
}
</style>
