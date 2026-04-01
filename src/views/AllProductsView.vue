<template>
  <section class="all-products-page">
    <div class="page-header">
      <p class="page-label">OUR COLLECTION</p>
      <h1>All Products</h1>
      <p class="page-text">Browse all available products in one place.</p>
    </div>

    <ProductGrid
      :products="products"
      :searchTerm="searchTerm"
      :selectedCategory="selectedCategory"
      :selectedSort="selectedSort"
      @update:searchTerm="searchTerm = $event"
      @update:selectedCategory="selectedCategory = $event"
      @update:selectedSort="selectedSort = $event"
      @resetFilters="resetFilters"
      :showSeeAllButton="false"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductGrid from "@/components/products/ProductGrid.vue";
import products from "@/data/products";

const searchTerm = ref("");
const selectedCategory = ref("All");
const selectedSort = ref("default");

function resetFilters() {
  searchTerm.value = "";
  selectedCategory.value = "All";
  selectedSort.value = "default";
}
</script>

<style scoped>
.all-products-page {
  background-color: var(--color-white);
}

.page-header {
  padding: 50px 60px 20px;
  text-align: center;
}

.page-label {
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-primary);
  text-transform: uppercase;
}

.page-header h1 {
  margin-bottom: 14px;
  font-size: 42px;
  color: var(--color-dark);
}

.page-text {
  font-size: 15px;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .page-header {
    padding: 40px 32px 20px;
  }

  .page-header h1 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 32px 20px 16px;
  }

  .page-header h1 {
    font-size: 30px;
  }

  .page-text {
    font-size: 14px;
  }
}
</style>
