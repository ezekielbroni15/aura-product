<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.base-input {
  flex: 1;
  min-width: 240px;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 14px;
  background-color: var(--color-white);
  color: var(--color-dark);
  outline: none;
}

.base-input:focus {
  border-color: var(--color-primary);
}

@media (max-width: 768px) {
  .base-input {
    width: 100%;
    min-width: 100%;
  }
}
</style>
