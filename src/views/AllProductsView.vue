<template>
  <section class="all-products-page">
    <div class="page-header">
      <SectionTitle
        label="OUR COLLECTION"
        title="All Products"
        text="Browse all available products in one place."
      />
    </div>

    <div v-if="loading" class="status-message">Loading products...</div>
    <div v-else-if="error" class="status-message error">{{ error }}</div>
    <ProductGrid
      v-else
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ProductGrid from "@/components/products/ProductGrid.vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import {
  getAllProducts,
  deleteProduct as deleteProductApi,
} from "@/services/productService";

const router = useRouter();
const searchTerm = ref("");
const selectedSort = ref("default");
const products = ref([]);
const loading = ref(false);
const error = ref("");

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
    error.value = "Failed to load products.";
    console.error(err);
  } finally {
    loading.value = false;
  }
}

async function handleDeleteProduct(id) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this product?",
  );

  if (!confirmed) return;

  try {
    await deleteProductApi(id);
    products.value = products.value.filter((product) => product.id !== id);
  } catch (err) {
    window.alert("Failed to delete product.");
    console.error(err);
  }
}

function handleEditProduct(id) {
  router.push(`/products/${id}/edit`);
}

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.all-products-page {
  background-color: var(--color-white);
}

.page-header {
  padding: 50px 60px 10px;
}

.status-message {
  padding: 20px 60px;
  color: var(--color-text);
}

.status-message.error {
  color: #dc2626;
}

@media (max-width: 992px) {
  .page-header {
    padding: 40px 32px 10px;
  }

  .status-message {
    padding: 20px 32px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 32px 20px 8px;
  }

  .status-message {
    padding: 20px;
  }
}
</style>
