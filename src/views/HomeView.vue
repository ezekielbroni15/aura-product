<template>
  <div>
    <HeroSection />

    <div v-if="loading" class="status-message">
      Loading featured products...
    </div>
    <div v-else-if="error" class="status-message error">{{ error }}</div>

    <ProductGrid
      v-else
      :products="featuredProducts"
      :searchTerm="searchTerm"
      :selectedSort="selectedSort"
      :showSeeAllButton="true"
      :showManageIcons="false"
      @update:searchTerm="searchTerm = $event"
      @update:selectedSort="selectedSort = $event"
      @resetFilters="resetFilters"
    />

    <FeaturesSection />
    <TestimonialsSection />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import ProductGrid from "@/components/products/ProductGrid.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";
import TestimonialsSection from "@/components/sections/TestimonialsSection.vue";
import { getAllProducts } from "@/services/productService";

const searchTerm = ref("");
const selectedSort = ref("default");
const products = ref([]);
const loading = ref(false);
const error = ref("");

const featuredProducts = computed(() => products.value.slice(0, 4));

function resetFilters() {
  searchTerm.value = "";
  selectedSort.value = "default";
}

async function fetchProducts() {
  loading.value = true;
  error.value = "";

  try {
    const data = await getAllProducts();
    products.value = data;
  } catch (err) {
    error.value = "Failed to load featured products.";
    console.error(err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.status-message {
  padding: 20px 60px;
  color: var(--color-text);
}

.status-message.error {
  color: #dc2626;
}

@media (max-width: 992px) {
  .status-message {
    padding: 20px 32px;
  }
}

@media (max-width: 768px) {
  .status-message {
    padding: 20px;
  }
}
</style>
