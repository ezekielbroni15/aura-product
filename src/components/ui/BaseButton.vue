<template>
  <button :class="['base-button', variant]" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },
});
</script>

<style scoped>
.base-button {
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.base-button:hover {
  opacity: 0.9;
}

.primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.secondary {
  background-color: var(--color-white);
  color: var(--color-dark);
  border: 1px solid var(--color-border);
}

.dark {
  background-color: var(--color-dark);
  color: var(--color-white);
}

@media (max-width: 768px) {
  .base-button {
    width: 100%;
  }
}
</style>
