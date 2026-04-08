<template>
  <div>
    <HeroSection />

    <ProductGrid
      :products="featuredProducts"
      :searchTerm="searchTerm"
      :selectedSort="selectedSort"
      :showSeeAllButton="true"
      :showManageButtons="false"
      @update:searchTerm="searchTerm = $event"
      @update:selectedSort="selectedSort = $event"
      @resetFilters="resetFilters"
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
import { products } from "@/state/productsState";

const searchTerm = ref("");
const selectedSort = ref("default");

const featuredProducts = computed(() => products.value.slice(0, 4));

function resetFilters() {
  searchTerm.value = "";
  selectedSort.value = "default";
}
</script>
