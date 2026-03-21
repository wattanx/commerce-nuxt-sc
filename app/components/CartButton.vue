<script setup lang="ts">
const { totalItems } = useCart();
</script>

<template>
  <NuxtLink to="/cart" class="relative inline-flex items-center" aria-label="Cart">
    <UButton icon="i-lucide-shopping-cart" color="neutral" variant="ghost" as="span" />
    <span
      v-if="totalItems > 0"
      class="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[8px] font-bold text-black bg-primary rounded-full"
    >
      {{ totalItems }}
    </span>
  </NuxtLink>
</template>
