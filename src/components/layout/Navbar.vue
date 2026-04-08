<template>
  <header class="navbar">
    <div class="logo">Aura.</div>

    <nav class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/add-product">Add Product</RouterLink>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>

    <BaseButton variant="primary">Shop Now</BaseButton>
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

.nav-links a:hover {
  color: var(--color-dark);
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
    padding: 20px 20px;
  }

  .nav-links {
    width: 100%;
    justify-content: flex-start;
    gap: 14px 18px;
  }
}
</style>
