<template>
  <section v-if="product" class="edit-product-page">
    <div class="page-header">
      <SectionTitle
        label="PRODUCT MANAGEMENT"
        title="Edit Product"
        text="Update the selected product details below."
      />
    </div>

    <div class="form-wrapper">
      <form class="product-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Product Name</label>
          <BaseInput
            id="name"
            v-model="form.name"
            placeholder="Enter product name"
          />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            v-model="form.description"
            class="base-textarea"
            placeholder="Enter product description"
          ></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="price">Price</label>
            <BaseInput
              id="price"
              v-model="form.price"
              type="number"
              placeholder="Enter price"
            />
          </div>

          <div class="form-group">
            <label for="quantity">Quantity</label>
            <BaseInput
              id="quantity"
              v-model="form.quantity"
              type="number"
              placeholder="Enter quantity"
            />
          </div>
        </div>

        <div class="form-actions">
          <BaseButton variant="primary" type="submit">
            Update Product
          </BaseButton>

          <RouterLink to="/products" class="back-link">
            <BaseButton variant="secondary" type="button"> Cancel </BaseButton>
          </RouterLink>
        </div>
      </form>
    </div>
  </section>

  <section v-else class="not-found">
    <h2>Product not found</h2>
    <p>The product you want to edit does not exist.</p>
    <RouterLink to="/products">
      <BaseButton variant="secondary">Go to Products</BaseButton>
    </RouterLink>
  </section>
</template>

<script setup>
import { computed, reactive, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { products, updateProduct } from "@/state/productsState";

const route = useRoute();
const router = useRouter();

const product = computed(() => {
  const productId = Number(route.params.id);
  return products.value.find((item) => item.id === productId);
});

const form = reactive({
  id: null,
  name: "",
  description: "",
  price: "",
  quantity: "",
  image: "",
});

watchEffect(() => {
  if (product.value) {
    form.id = product.value.id;
    form.name = product.value.name;
    form.description = product.value.description;
    form.price = product.value.price;
    form.quantity = product.value.quantity;
    form.image = product.value.image;
  }
});

function handleSubmit() {
  updateProduct({
    id: form.id,
    name: form.name,
    description: form.description,
    price: Number(form.price),
    quantity: Number(form.quantity),
    image: form.image,
  });

  router.push("/products");
}
</script>

<style scoped>
.edit-product-page {
  background-color: var(--color-white);
  padding: 50px 60px 80px;
}

.page-header {
  margin-bottom: 30px;
}

.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.product-form {
  background-color: var(--color-muted-bg);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-soft);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-dark);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.base-textarea {
  width: 100%;
  min-height: 120px;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-family: inherit;
  background-color: var(--color-white);
  color: var(--color-dark);
  outline: none;
  resize: vertical;
  box-sizing: border-box;
}

.base-textarea:focus {
  border-color: var(--color-primary);
}

.form-actions {
  margin-top: 12px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.back-link {
  text-decoration: none;
}

.not-found {
  padding: 80px 20px;
  text-align: center;
  background-color: var(--color-white);
}

.not-found h2 {
  margin-bottom: 12px;
  color: var(--color-dark);
}

.not-found p {
  margin-bottom: 20px;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .edit-product-page {
    padding: 40px 32px 60px;
  }
}

@media (max-width: 768px) {
  .edit-product-page {
    padding: 32px 20px 50px;
  }

  .product-form {
    padding: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
