<template>
  <section class="all-products-page">
    <div class="page-header">
      <SectionTitle
        label="OUR COLLECTION"
        title="All Products"
        text="Browse all available products in one place."
      />
    </div>

    <ProductGrid
      :products="products"
      :searchTerm="searchTerm"
      :selectedSort="selectedSort"
      @update:searchTerm="searchTerm = $event"
      @update:selectedSort="selectedSort = $event"
      @resetFilters="resetFilters"
      :showSeeAllButton="false"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductGrid from "@/components/products/ProductGrid.vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { products } from "@/state/productsState";

const searchTerm = ref("");
const selectedSort = ref("default");

function resetFilters() {
  searchTerm.value = "";
  selectedSort.value = "default";
}
</script>

<style scoped>
.all-products-page {
  background-color: var(--color-white);
}

.page-header {
  padding: 50px 60px 10px;
}

@media (max-width: 992px) {
  .page-header {
    padding: 40px 32px 10px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 32px 20px 8px;
  }
}
</style>
