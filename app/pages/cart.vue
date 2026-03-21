<script setup lang="ts">
const { items, removeItem, totalPrice } = useCart();
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <h1 class="text-2xl font-semibold mb-6">Cart</h1>

    <div v-if="items.length === 0" class="text-center py-16 space-y-4">
      <p class="text-muted">Your cart is empty.</p>
      <UButton to="/" label="Continue Shopping" variant="outline" color="neutral" />
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="(item, index) in items"
        :key="`${item.product.id}-${item.size}`"
        class="flex gap-4 items-center"
      >
        <NuxtLink :to="`/products/${item.product.id}`" class="shrink-0">
          <img
            :src="item.product.image"
            :alt="item.product.name"
            class="w-20 h-20 object-cover rounded"
          >
        </NuxtLink>

        <div class="flex-1 min-w-0">
          <NuxtLink :to="`/products/${item.product.id}`" class="font-medium hover:underline">
            {{ item.product.name }}
          </NuxtLink>
          <p class="text-sm text-muted">Size: {{ item.size }}</p>
          <p class="text-sm text-muted">Qty: {{ item.quantity }}</p>
        </div>

        <p class="font-medium whitespace-nowrap">
          {{ formatPrice(item.product.price * item.quantity) }}
        </p>

        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="ghost"
          size="sm"
          aria-label="Remove"
          @click="removeItem(index)"
        />
      </div>

      <USeparator />

      <div class="flex justify-between items-center">
        <p class="text-lg font-semibold">Total</p>
        <p class="text-lg font-semibold">
          {{ formatPrice(totalPrice) }}
        </p>
      </div>
    </div>
  </div>
</template>
