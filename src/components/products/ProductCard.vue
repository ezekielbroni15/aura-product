<template>
  <div class="card">
    <RouterLink :to="`/products/${id}`" class="card-link">
      <div class="image-wrapper">
        <img :src="image || fallbackImage" :alt="name" class="card-image" />
      </div>
    </RouterLink>

    <div class="card-body">
      <div class="card-top-row">
        <p class="product-id">Product ID: {{ id }}</p>

        <div v-if="showManageIcons" class="card-icons">
          <button
            class="icon-btn"
            type="button"
            aria-label="Edit Product"
            @click="$emit('editProduct', id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20h9" />
              <path
                d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
              />
            </svg>
          </button>

          <button
            class="icon-btn"
            type="button"
            aria-label="Delete Product"
            @click="$emit('deleteProduct', id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path
                d="M19 6l-1 14H6L5 6m3 0V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"
              />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      <RouterLink :to="`/products/${id}`" class="card-link">
        <h3 class="title">{{ name }}</h3>

        <p class="description">{{ description }}</p>

        <div class="card-footer">
          <p class="price">${{ price }}</p>
          <p class="quantity">Qty: {{ quantity }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
  showManageIcons: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["editProduct", "deleteProduct"]);

const fallbackImage =
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80";
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

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
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

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.product-id {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.2px;
}

.card-icons {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  color: #6b7280;
  display: grid;
  place-items: center;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.icon-btn:hover {
  background-color: var(--color-muted-bg);
  color: var(--color-dark);
  transform: scale(1.03);
}

.icon-svg {
  width: 17px;
  height: 17px;
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

@media (max-width: 768px) {
  .card-body {
    padding: 16px;
  }

  .card-top-row {
    margin-bottom: 10px;
  }

  .icon-btn {
    width: 28px;
    height: 28px;
  }

  .icon-svg {
    width: 16px;
    height: 16px;
  }
}
</style>
