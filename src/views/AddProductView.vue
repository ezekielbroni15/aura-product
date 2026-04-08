<template>
  <section class="add-product-page">
    <div class="page-header">
      <SectionTitle
        label="PRODUCT MANAGEMENT"
        title="Add Product"
        text="Enter the product details below to add a new product."
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
            Save Product
          </BaseButton>
        </div>
      </form>

      <div v-if="submittedProduct" class="preview-card">
        <h3>Submitted Product Preview</h3>
        <p><strong>Name:</strong> {{ submittedProduct.name }}</p>
        <p><strong>Description:</strong> {{ submittedProduct.description }}</p>
        <p><strong>Price:</strong> ${{ submittedProduct.price }}</p>
        <p><strong>Quantity:</strong> {{ submittedProduct.quantity }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { products, addProduct } from "@/state/productsState";

const form = reactive({
  name: "",
  description: "",
  price: "",
  quantity: "",
});

const submittedProduct = ref(null);

function handleSubmit() {
  const newProduct = {
    id: products.value.length + 1,
    name: form.name,
    description: form.description,
    price: Number(form.price),
    quantity: Number(form.quantity),
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80",
  };

  addProduct(newProduct);
  submittedProduct.value = newProduct;

  form.name = "";
  form.description = "";
  form.price = "";
  form.quantity = "";
}
</script>

<style scoped>
.add-product-page {
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
}

.preview-card {
  margin-top: 24px;
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.preview-card h3 {
  margin: 0 0 14px;
  color: var(--color-dark);
}

.preview-card p {
  margin: 0 0 10px;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .add-product-page {
    padding: 40px 32px 60px;
  }
}

@media (max-width: 768px) {
  .add-product-page {
    padding: 32px 20px 50px;
  }

  .product-form {
    padding: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
