<script setup lang="ts">
const props = defineProps<{
  currentProductId: number;
}>();

const recommended = computed(() =>
  products.filter((p) => p.id !== props.currentProductId).slice(0, 4),
);
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-6">
    <h2 class="text-lg font-semibold mb-4">Recommended for You</h2>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <ProductCard v-for="product in recommended" :key="product.id" :product="product" />
    </div>
  </div>
</template>
