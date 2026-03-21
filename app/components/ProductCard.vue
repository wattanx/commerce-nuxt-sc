<script setup lang="ts">
import type { Product } from "~/utils/products";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <NuxtLink :to="`/products/${product.id}`" class="group block">
    <div class="overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full aspect-3/4 object-cover transition-transform duration-300 group-hover:scale-105"
      >
    </div>
    <div class="mt-3 space-y-1">
      <UBadge :label="product.category" variant="subtle" size="xs" />
      <h3 class="text-sm font-medium group-hover:underline">
        {{ product.name }}
      </h3>
      <p class="text-sm">
        {{ formatPrice(product.price) }}
      </p>
    </div>
  </NuxtLink>
</template>
