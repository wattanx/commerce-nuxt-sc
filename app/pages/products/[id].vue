<script setup lang="ts">
const route = useRoute();
const productId = Number(route.params.id);
const product = products.find((p) => p.id === productId);

if (!product) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}

const { loggedIn } = useUserSession();

const selectedSize = ref("");
const sizes = ["XS", "S", "M", "L", "XL"];

const { addItem } = useCart();
</script>

<template>
  <div>
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
        <!-- Image -->
        <div>
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full max-h-[50vh] object-contain"
          >
        </div>

        <!-- Details -->
        <div class="space-y-4">
          <div>
            <UBadge :label="product.category" variant="subtle" class="mb-2" />
            <h1 class="text-2xl font-semibold">
              {{ product.name }}
            </h1>
          </div>

          <p class="text-xl">
            {{ formatPrice(product.price) }}
          </p>

          <USeparator />

          <!-- Size selector -->
          <div class="space-y-3">
            <p class="text-sm font-medium uppercase tracking-wider">Size</p>
            <div class="flex gap-2">
              <UButton
                v-for="size in sizes"
                :key="size"
                :label="size"
                :variant="selectedSize === size ? 'solid' : 'outline'"
                color="neutral"
                size="md"
                @click="selectedSize = size"
              />
            </div>
          </div>

          <USeparator />

          <!-- Add to cart -->
          <UButton
            label="ADD TO CART"
            icon="i-lucide-shopping-bag"
            size="xl"
            block
            :disabled="!selectedSize"
            @click="addItem(product, selectedSize, 1)"
          />

          <USeparator />

          <!-- Description -->
          <div class="space-y-2">
            <p class="text-sm font-medium uppercase tracking-wider">Description</p>
            <p class="text-sm text-muted leading-relaxed">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <RecommendedProducts v-if="loggedIn" :current-product-id="product.id" />
  </div>
</template>
