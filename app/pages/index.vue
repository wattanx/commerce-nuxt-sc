<template>
  <div>
    <UPageSection :ui="{ container: 'py-4 lg:py-4' }">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </UPageSection>
  </div>
</template>
