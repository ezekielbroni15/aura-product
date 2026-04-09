<template>
  <section v-if="loading" class="not-found">
    <h2>Loading product...</h2>
  </section>

  <section v-else-if="product" class="details-page">
    <div class="details-wrapper">
      <div class="details-image">
        <img :src="product.image || fallbackImage" :alt="product.name" />
      </div>

      <div class="details-content">
        <p class="product-id">Product ID: {{ product.id }}</p>
        <h1>{{ product.name }}</h1>
        <p class="price">${{ product.price }}</p>
        <p class="quantity">Available Quantity: {{ product.quantity }}</p>

        <p class="description">
          {{ product.description }}
        </p>

        <div class="actions">
          <RouterLink to="/products" class="back-link">
            <BaseButton variant="secondary">Back to Products</BaseButton>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section v-else class="not-found">
    <h2>Product not found</h2>
    <p>The product you are looking for does not exist.</p>
    <RouterLink to="/products">
      <BaseButton variant="secondary">Go to Products</BaseButton>
    </RouterLink>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";
import { getProductById } from "@/services/productService";

const route = useRoute();

const fallbackImage =
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80";

const product = ref(null);
const loading = ref(false);

async function fetchProduct() {
  loading.value = true;

  try {
    const productId = Number(route.params.id);
    const data = await getProductById(productId);
    product.value = data;
  } catch (err) {
    product.value = null;
    console.error(err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchProduct();
});
</script>

<style scoped>
.details-page {
  padding: 60px;
  background-color: var(--color-white);
}

.details-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.details-image img {
  width: 100%;
  border-radius: var(--radius-lg);
  object-fit: cover;
  box-shadow: var(--shadow-card);
}

.details-content {
  max-width: 520px;
}

.product-id {
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
}

.details-content h1 {
  margin-bottom: 16px;
  font-size: 42px;
  color: var(--color-dark);
}

.price {
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 700;
  color: var(--color-dark);
}

.quantity {
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
}

.description {
  margin-bottom: 28px;
  font-size: 15px;
  line-height: 1.8;
  color: var(--color-text);
}

.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.back-link {
  text-decoration: none;
}

.not-found {
  padding: 80px 20px;
  text-align: center;
  background-color: var(--color-white);
}

.not-found h2 {
  margin-bottom: 12px;
  color: var(--color-dark);
}

.not-found p {
  margin-bottom: 20px;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .details-page {
    padding: 40px 32px;
  }

  .details-wrapper {
    gap: 30px;
  }

  .details-content h1 {
    font-size: 34px;
  }
}

@media (max-width: 768px) {
  .details-page {
    padding: 32px 20px;
  }

  .details-wrapper {
    grid-template-columns: 1fr;
  }

  .details-content h1 {
    font-size: 28px;
  }

  .price {
    font-size: 24px;
  }

  .actions {
    flex-direction: column;
  }
}
</style>
