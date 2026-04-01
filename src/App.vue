<template>
  <div>
    <Navbar />
    <HeroSection />

    <ProductGrid
      :searchTerm="searchTerm"
      :selectedCategory="selectedCategory"
      :selectedSort="selectedSort"
      @update:searchTerm="searchTerm = $event"
      @update:selectedCategory="selectedCategory = $event"
      @update:selectedSort="selectedSort = $event"
      @resetFilters="resetFilters"
    />

    <FeaturesSection />
    <TestimonialsSection />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import ProductGrid from "./components/products/ProductGrid.vue";
import FeaturesSection from "./components/sections/FeaturesSection.vue";
import TestimonialsSection from "./components/sections/TestimonialsSection.vue";

const searchTerm = ref("");
const selectedCategory = ref("All");
const selectedSort = ref("default");

function resetFilters() {
  searchTerm.value = "";
  selectedCategory.value = "All";
  selectedSort.value = "default";
}
</script>

<style></style>
