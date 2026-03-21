<script setup lang="ts">
const props = defineProps<{
  currentProductId: number
}>()

const recommended = computed(() =>
  products.filter(p => p.id !== props.currentProductId).slice(0, 4)
)
</script>

<template>
  <UPageSection title="Recommended for You" description="Based on your interests">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in recommended"
        :key="product.id"
        :product="product"
      />
    </div>
  </UPageSection>
</template>
