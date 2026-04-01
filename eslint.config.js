import pluginVue from 'eslint-plugin-vue'

export default [
  ...pluginVue.configs['flat/vue3-recommended'],
  {
    rules: {
      'vue/no-v-model-argument': 'off', // Vue 3 supports named v-model arguments
    },
  },
]
