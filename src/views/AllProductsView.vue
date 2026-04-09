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
      :showSeeAllButton="false"
      :showManageIcons="true"
      @update:searchTerm="searchTerm = $event"
      @update:selectedSort="selectedSort = $event"
      @resetFilters="resetFilters"
      @deleteProduct="handleDeleteProduct"
      @editProduct="handleEditProduct"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ProductGrid from "@/components/products/ProductGrid.vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { products, deleteProduct } from "@/state/productsState";

const router = useRouter();
const searchTerm = ref("");
const selectedSort = ref("default");

function resetFilters() {
  searchTerm.value = "";
  selectedSort.value = "default";
}

function handleDeleteProduct(id) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this product?",
  );

  if (confirmed) {
    deleteProduct(id);
  }
}

function handleEditProduct(id) {
  router.push(`/products/${id}/edit`);
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
