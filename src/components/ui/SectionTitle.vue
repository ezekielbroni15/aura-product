<template>
  <div class="section-header">
    <p class="section-label">{{ label }}</p>
    <h2>{{ title }}</h2>
    <p class="section-text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.section-header {
  max-width: 620px;
  margin: 0 auto 40px;
  text-align: center;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-primary);
  text-transform: uppercase;
}

.section-header h2 {
  margin: 0 0 14px;
  font-size: 38px;
  color: var(--color-dark);
}

.section-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .section-header h2 {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: 28px;
  }

  .section-header h2 {
    font-size: 26px;
  }

  .section-text {
    font-size: 14px;
  }
}
</style>
