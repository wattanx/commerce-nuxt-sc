<template>
  <GuideOverlay type="static" label="Static Rendering">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </GuideOverlay>
</template>
