<template>
  <select
    class="base-select"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.base-select {
  min-width: 180px;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 14px;
  background-color: var(--color-white);
  color: var(--color-dark);
  outline: none;
  cursor: pointer;
}

.base-select:focus {
  border-color: var(--color-primary);
}

@media (max-width: 768px) {
  .base-select {
    width: 100%;
    min-width: 100%;
  }
}
</style>
