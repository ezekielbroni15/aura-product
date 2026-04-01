<template>
  <section class="product-section">
    <ProductFilter
      :searchTerm="searchTerm"
      :selectedCategory="selectedCategory"
      :selectedSort="selectedSort"
      @update:searchTerm="$emit('update:searchTerm', $event)"
      @update:selectedCategory="$emit('update:selectedCategory', $event)"
      @update:selectedSort="$emit('update:selectedSort', $event)"
      @resetFilters="$emit('resetFilters')"
    />

    <div v-if="filteredProducts.length > 0" class="grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :title="product.title"
        :category="product.category"
        :price="product.price"
        :image="product.image"
      />
    </div>

    <div v-else class="empty-state">
      <h3>No products found</h3>
      <p>Try changing your search, category, or sort option.</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import ProductCard from "./ProductCard.vue";
import ProductFilter from "./ProductFilter.vue";
import products from "@/data/products";

defineEmits([
  "update:searchTerm",
  "update:selectedCategory",
  "update:selectedSort",
  "resetFilters",
]);

const props = defineProps({
  searchTerm: {
    type: String,
    default: "",
  },
  selectedCategory: {
    type: String,
    default: "All",
  },
  selectedSort: {
    type: String,
    default: "default",
  },
});

const filteredProducts = computed(() => {
  let result = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(props.searchTerm.toLowerCase());

    const matchesCategory =
      props.selectedCategory === "All" ||
      product.category === props.selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (props.selectedSort === "priceLowHigh") {
    result.sort((a, b) => a.price - b.price);
  } else if (props.selectedSort === "priceHighLow") {
    result.sort((a, b) => b.price - a.price);
  } else if (props.selectedSort === "nameAZ") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (props.selectedSort === "nameZA") {
    result.sort((a, b) => b.title.localeCompare(a.title));
  }

  return result;
});
</script>

<style scoped>
.product-section {
  padding: 60px;
  background-color: var(--color-white);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-muted-bg);
}

.empty-state h3 {
  margin: 0 0 10px;
  font-size: 24px;
  color: var(--color-dark);
}

.empty-state p {
  margin: 0;
  font-size: 14px;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .product-section {
    padding: 40px 32px;
  }

  .grid {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .product-section {
    padding: 32px 20px;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .empty-state {
    padding: 40px 16px;
  }

  .empty-state h3 {
    font-size: 20px;
  }
}
</style>
