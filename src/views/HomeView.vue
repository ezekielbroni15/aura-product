<template>
  <div>
    <HeroSection />

    <ProductGrid
      :products="featuredProducts"
      :searchTerm="searchTerm"
      :selectedCategory="selectedCategory"
      :selectedSort="selectedSort"
      @update:searchTerm="searchTerm = $event"
      @update:selectedCategory="selectedCategory = $event"
      @update:selectedSort="selectedSort = $event"
      @resetFilters="resetFilters"
      :showSeeAllButton="true"
    />

    <FeaturesSection />
    <TestimonialsSection />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import ProductGrid from "@/components/products/ProductGrid.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";
import TestimonialsSection from "@/components/sections/TestimonialsSection.vue";
import products from "@/data/products";

const searchTerm = ref("");
const selectedCategory = ref("All");
const selectedSort = ref("default");

const featuredProducts = computed(() => products.slice(0, 4));

function resetFilters() {
  searchTerm.value = "";
  selectedCategory.value = "All";
  selectedSort.value = "default";
}
</script>
