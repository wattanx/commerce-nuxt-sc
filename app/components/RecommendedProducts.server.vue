<script setup lang="ts">
import type { Product } from "~/utils/products";

const props = defineProps<{
  currentProductId: number;
}>();

const event = useRequestEvent();
const recommended = await $fetch<Product[]>("/api/recommendations", {
  params: { currentProductId: props.currentProductId },
  headers: event?.headers ?? {},
});
</script>

<template>
  <div v-if="recommended.length > 0" class="max-w-6xl mx-auto px-4 py-6">
    <h2 class="text-lg font-semibold mb-4">
      Recommended for You
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <ProductCard v-for="product in recommended" :key="product.id" :product="product" />
    </div>
  </div>
</template>
