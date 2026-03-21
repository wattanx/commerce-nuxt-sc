<script setup lang="ts">
import type { Product } from '~/utils/products'

defineProps<{
  product: Product
}>()
</script>

<template>
  <UCard variant="outline">
    <template #header>
      <NuxtLink :to="`/products/${product.id}`" class="block">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full aspect-square object-cover"
        />
      </NuxtLink>
    </template>
    <div class="space-y-1">
      <UBadge :label="product.category" variant="subtle" size="xs" />
      <h3 class="font-semibold text-sm">
        <NuxtLink :to="`/products/${product.id}`" class="hover:underline">
          {{ product.name }}
        </NuxtLink>
      </h3>
      <p class="text-sm font-bold">
        {{ formatPrice(product.price) }}
      </p>
    </div>
  </UCard>
</template>
