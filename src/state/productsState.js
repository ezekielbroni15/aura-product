import { ref } from "vue";

const products = ref([
  {
    id: 1,
    name: "Modern Chair",
    description: "A clean and comfortable chair for modern interiors.",
    price: 120,
    quantity: 8,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Minimal Lamp",
    description: "A stylish lamp designed to fit simple modern spaces.",
    price: 80,
    quantity: 15,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Wooden Table",
    description: "A durable wooden table with a premium natural finish.",
    price: 250,
    quantity: 4,
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Soft Sofa",
    description: "A soft and elegant sofa for living room comfort.",
    price: 320,
    quantity: 6,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Office Desk",
    description: "A spacious office desk ideal for work and study.",
    price: 210,
    quantity: 10,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
]);

function addProduct(product) {
  products.value.push(product);
}

function deleteProduct(id) {
  products.value = products.value.filter((product) => product.id !== id);
}

export { products, addProduct, deleteProduct };