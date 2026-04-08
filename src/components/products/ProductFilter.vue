<template>
  <div class="filter-section">
    <div class="filter-header">
      <h2>Featured Products</h2>
      <p>Explore our available product collection.</p>
    </div>

    <div class="filter-controls">
      <BaseInput v-model="localSearch" placeholder="Search products..." />

      <BaseSelect v-model="localSort" :options="sortOptions" />

      <BaseButton variant="dark" @click="$emit('resetFilters')">
        Reset Filters
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";

const props = defineProps({
  searchTerm: String,
  selectedSort: String,
});

const emit = defineEmits([
  "update:searchTerm",
  "update:selectedSort",
  "resetFilters",
]);

const localSearch = computed({
  get: () => props.searchTerm,
  set: (value) => emit("update:searchTerm", value),
});

const localSort = computed({
  get: () => props.selectedSort,
  set: (value) => emit("update:selectedSort", value),
});

const sortOptions = [
  { label: "Sort By", value: "default" },
  { label: "Price: Low to High", value: "priceLowHigh" },
  { label: "Price: High to Low", value: "priceHighLow" },
  { label: "Name: A to Z", value: "nameAZ" },
  { label: "Name: Z to A", value: "nameZA" },
];
</script>

<style scoped>
.filter-section {
  margin-bottom: 32px;
}

.filter-header {
  margin-bottom: 28px;
}

.filter-header h2 {
  margin: 0 0 10px;
  font-size: 34px;
  color: var(--color-dark);
}

.filter-header p {
  margin: 0;
  color: var(--color-text);
  font-size: 15px;
}

.filter-controls {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 992px) {
  .filter-header h2 {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .filter-section {
    margin-bottom: 24px;
  }

  .filter-header {
    margin-bottom: 20px;
  }

  .filter-header h2 {
    font-size: 26px;
  }

  .filter-header p {
    font-size: 14px;
  }

  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
