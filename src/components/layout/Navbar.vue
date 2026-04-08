<template>
  <header class="navbar">
    <RouterLink to="/" class="logo">Aura.</RouterLink>

    <nav class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/add-product">Add Product</RouterLink>
    </nav>

    <RouterLink to="/products" class="nav-action">
      <BaseButton variant="primary">View Products</BaseButton>
    </RouterLink>
  </header>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: var(--color-bg);
  gap: 20px;
  flex-wrap: wrap;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-dark);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 14px;
  font-weight: 500;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--color-dark);
}

.nav-action {
  text-decoration: none;
}

@media (max-width: 992px) {
  .navbar {
    padding: 20px 32px;
  }

  .nav-links {
    gap: 18px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .nav-links {
    width: 100%;
    justify-content: flex-start;
    gap: 14px 18px;
  }

  .nav-action {
    width: 100%;
  }
}
</style>
